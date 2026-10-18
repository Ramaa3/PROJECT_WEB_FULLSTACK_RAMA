
$(document).ready(function () {
    const data = window.NucleoData;

    function tampilkanLaporan() {
        const tbody = $("#reportTableBody");
        tbody.empty();

        data.reports.forEach(function (report) {
            const row = $("<tr>").addClass("border-b border-slate-200");

            [report.id, report.title, report.category, report.status]
                .forEach(function (value) {
                    $("<td>")
                        .addClass("p-3")
                        .text(value)
                        .appendTo(row);
                });

            const deleteButton = $("<button>")
                .attr("type", "button")
                .addClass("rounded bg-red-600 px-3 py-1 text-white")
                .text("Hapus")
                .on("click", function () {
                    data.reports = data.reports.filter(function (item) {
                        return item.id !== report.id;
                    });

                    tampilkanLaporan();
                });

            $("<td>")
                .addClass("p-3")
                .append(deleteButton)
                .appendTo(row);

            tbody.append(row);
        });
    }

    $("#toggleReportForm").on("click", function () {
        $("#reportForm").stop(true, true).slideToggle(200);
    });

    $("#reportForm").on("submit", function (event) {
        event.preventDefault();

        const title = $("#reportTitle").val().trim();
        const category = $("#reportCategory").val();

        if (!title) {
            $("#reportMessage")
                .text("Judul laporan wajib diisi.")
                .addClass("text-red-600");
            return;
        }

        const newReport = {
            id: "LAP-" + String(Date.now()).slice(-6),
            title: title,
            category: category,
            status: "Baru"
        };

        data.reports.push(newReport);

        tampilkanLaporan();
        this.reset();

        $("#reportMessage")
            .removeClass("text-red-600")
            .addClass("text-green-700")
            .text("Laporan berhasil ditambahkan.");

        $("#reportForm").slideUp(200);
    });

    tampilkanLaporan();
});
