// Menampilkan data fasilitas ke dalam tabel.
$(function () {
  const $tbody = $("#facilityTableBody");
  const statusClasses = {
    "Beroperasi": "bg-green-100 text-green-800",
    "Pemeliharaan": "bg-amber-100 text-amber-800",
    "Tidak Aktif": "bg-slate-100 text-slate-700"
  };
  window.NucleoData.facilities.forEach(function (item, index) {
    const $row = $("<tr>").addClass("transition hover:bg-slate-50");
    [index + 1, item.id, item.name, item.location, item.capacity].forEach(function (value) {
      $("<td>").addClass("px-5 py-4").text(value).appendTo($row);
    });
    const $badge = $("<span>").addClass("whitespace-nowrap rounded-full px-3 py-1 text-sm font-semibold")
      .addClass(statusClasses[item.status] || "bg-slate-100 text-slate-700").text(item.status);
    $("<td>").addClass("px-5 py-4").append($badge).appendTo($row);
    $tbody.append($row);
  });
});
