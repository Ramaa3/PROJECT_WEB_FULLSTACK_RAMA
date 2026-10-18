
$(document).ready(function () {
    const monitoring = window.NucleoData.monitoring;

    function tampilkanPemantauan(jenis = "Semua") {
        const tbody = $("#monitoringTableBody");
        tbody.empty();

        const hasilFilter = monitoring.filter(function (item) {
            return jenis === "Semua" || item.type === jenis;
        });

        if (hasilFilter.length === 0) {
            $("<tr>")
                .append(
                    $("<td>")
                        .attr("colspan", 4)
                        .addClass("p-4 text-center")
                        .text("Data tidak ditemukan.")
                )
                .appendTo(tbody);

            return;
        }

        hasilFilter.forEach(function (item) {
            const row = $("<tr>").addClass("border-b border-slate-200");

            [item.id, item.type, item.value, item.status].forEach(function (value) {
                $("<td>")
                    .addClass("p-4")
                    .text(value)
                    .appendTo(row);
            });

            tbody.append(row);
        });
    }

    $("#monitoringFilter").on("change", function () {
        tampilkanPemantauan($(this).val());
    });

    tampilkanPemantauan();
});
