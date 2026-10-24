
$(document).ready(function () {
    const $tbody = $("#facilityTableBody");
    const data = window.NucleoData.facilities;

    const statusClasses = {
        "Beroperasi": "bg-green-100 text-green-800",
        "Pemeliharaan": "bg-amber-100 text-amber-800",
        "Tidak Aktif": "bg-slate-100 text-slate-700"
    };

    $tbody.empty();

    data.forEach(function (item, index) {
        const $row = $("<tr>")
            .addClass("transition hover:bg-slate-50");

        const values = [
            index + 1,
            item.id,
            item.name,
            item.location,
            item.capacity
        ];

        values.forEach(function (value) {
            $("<td>")
                .addClass("px-5 py-4")
                .text(value)
                .appendTo($row);
        });

        const $status = $("<span>")
            .addClass(
                "whitespace-nowrap rounded-full px-3 py-1 text-sm font-semibold"
            )
            .addClass(
                statusClasses[item.status] ||
                "bg-slate-100 text-slate-700"
            )
            .text(item.status);

        $("<td>")
            .addClass("px-5 py-4")
            .append($status)
            .appendTo($row);

        $tbody.append($row);
    });
});
