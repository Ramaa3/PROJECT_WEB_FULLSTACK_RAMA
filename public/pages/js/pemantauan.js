// Menampilkan dan memfilter data simulasi udara, air, dan tanah.
$(function () {
  const $tbody = $("#monitoringTableBody");
  const rows = window.NucleoData.monitoring;
  function render(type) {
    $tbody.empty();
    const filtered = rows.filter(function (item) {
      return type === "Semua" || item.type === type;
    });
    if (!filtered.length) {
      const $row = $("<tr>");
      $("<td>").attr("colspan", 6).addClass("px-5 py-4 text-center").text("Data tidak ditemukan.").appendTo($row);
      $tbody.append($row);
      return;
    }
    filtered.forEach(function (item, index) {
      const $row = $("<tr>").addClass("transition hover:bg-slate-50");
      [index + 1, item.id, item.type, item.parameter, item.value, item.activity].forEach(function (value) {
        $("<td>").addClass("px-5 py-4").text(value).appendTo($row);
      });
      $tbody.append($row);
    });
  }
  $("#monitoringFilter").on("change", function () { render($(this).val()); });
  render("Semua");
});
