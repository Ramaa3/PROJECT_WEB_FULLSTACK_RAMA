
$(document).ready(function () {
    const $tbody = $("#monitoringTableBody");
    const data = window.NucleoData.monitoring;
    const $filter = $("#monitoringFilter");

    function renderMonitoring(jenis) {
        $tbody.empty();

        const filteredData = data.filter(function (item) {
            return jenis === "Semua" || item.type === jenis;
        });

        if (filteredData.length === 0) {
            const $row = $("<tr>");

            $("<td>")
                .attr("colspan", 6)
                .addClass("px-5 py-4 text-center")
                .text("Data tidak ditemukan.")
                .appendTo($row);

            $tbody.append($row);
            return;
        }

        filteredData.forEach(function (item, index) {
            const $row = $("<tr>")
                .addClass("transition hover:bg-slate-50");

            const values = [
                index + 1,
                item.id,
                item.type,
                item.parameter,
                item.value,
                item.activity
            ];

            values.forEach(function (value) {
                $("<td>")
                    .addClass("px-5 py-4")
                    .text(value)
                    .appendTo($row);
            });

            $tbody.append($row);
        });
    }

    $filter.on("change", function () {
        renderMonitoring($(this).val());
    });

    renderMonitoring("Semua");
});
