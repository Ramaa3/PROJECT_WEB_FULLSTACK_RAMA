(() => {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts?_limit=8';
    const list = document.getElementById('communityNotesList');
    const status = document.getElementById('communityNotesStatus');
    const search = document.getElementById('communityNotesSearch');
    const retry = document.getElementById('retryCommunityNotes');

    if (!list || !status || !search || !retry) return;

    let notes = [];
    let isLoading = false;
    let usingFallback = false;
    const fallbackNotes = [
        { id: 1, userId: 1, title: 'Pemantauan kualitas udara', body: 'Data simulasi menunjukkan kualitas udara berada dalam rentang normal.' },
        { id: 2, userId: 2, title: 'Pemeriksaan kualitas air', body: 'Pengukuran pH air simulasi tercatat stabil pada pemeriksaan rutin.' },
        { id: 3, userId: 3, title: 'Kondisi lingkungan fasilitas', body: 'Catatan simulasi: tidak ditemukan perubahan signifikan di sekitar fasilitas.' }
    ];

    function renderNotes() {
        const query = search.value.trim().toLocaleLowerCase('id');
        const filteredNotes = notes.filter((note) =>
            `${note.title} ${note.body}`.toLocaleLowerCase('id').includes(query)
        );

        list.replaceChildren();

        if (filteredNotes.length === 0) {
            status.textContent = query
                ? 'Tidak ada catatan yang cocok dengan pencarian.'
                : 'API berhasil dimuat, tetapi belum ada catatan untuk ditampilkan.';
            return;
        }

        status.textContent = usingFallback
            ? `API tidak tersedia. Menampilkan ${filteredNotes.length} dari ${notes.length} catatan data simulasi.`
            : `Berhasil memuat ${filteredNotes.length} dari ${notes.length} catatan.`;

        filteredNotes.forEach((note) => {
            const item = document.createElement('li');
            item.className = 'rounded-xl border border-slate-200 bg-slate-50 p-5';

            const heading = document.createElement('h3');
            heading.className = 'font-bold capitalize text-[#0f172a]';
            heading.textContent = note.title;

            const body = document.createElement('p');
            body.className = 'mt-2 leading-6 text-slate-600';
            body.textContent = note.body;

            const author = document.createElement('p');
            author.className = 'mt-4 text-xs font-semibold uppercase tracking-wide text-green-700';
            author.textContent = `Catatan #${note.id} · Pengguna #${note.userId}`;

            item.append(heading, body, author);
            list.append(item);
        });
    }

    async function loadNotes() {
        isLoading = true;
        retry.disabled = true;
        retry.textContent = 'Memuat...';
        status.textContent = 'Sedang mengambil catatan dari API...';
        status.className = 'mt-4 rounded-lg bg-blue-50 p-4 text-blue-800';
        list.replaceChildren();

        try {
            const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
            if (!response.ok) throw new Error(`Server merespons dengan status ${response.status}.`);

            const data = await response.json();
            if (!Array.isArray(data)) throw new Error('Format data dari API tidak sesuai.');

            notes = data;
            usingFallback = false;
            status.className = 'mt-4 rounded-lg bg-green-50 p-4 text-green-800';
            renderNotes();
        } catch (error) {
            notes = fallbackNotes;
            usingFallback = true;
            status.className = 'mt-4 rounded-lg bg-amber-50 p-4 text-amber-800';
            renderNotes();
        } finally {
            isLoading = false;
            retry.disabled = false;
            retry.textContent = 'Muat ulang';
        }
    }

    search.addEventListener('input', () => {
        if (!isLoading) renderNotes();
    });
    retry.addEventListener('click', loadNotes);
    loadNotes();
})();
