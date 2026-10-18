
$(document).ready(function () {
    const facilities = window.NucleoData.facilities;

    function tampilkanFasilitas() {
        const container = $("#facilityCards");
        container.empty();

        facilities.forEach(function (facility) {
            const card = $("<div>")
                .addClass("rounded-xl bg-white p-6 shadow-sm");

            $("<h3>")
                .addClass("mb-2 text-xl font-bold text-[#0f172a]")
                .text(facility.name)
                .appendTo(card);

            $("<p>")
                .addClass("mb-2 text-sm text-slate-500")
                .text("ID: " + facility.id)
                .appendTo(card);

            $("<p>")
                .addClass("mb-2")
                .text("Status: " + facility.status)
                .appendTo(card);

            $("<p>")
                .text("Kapasitas: " + facility.capacity)
                .appendTo(card);

            container.append(card);
        });
    }

    tampilkanFasilitas();
});
