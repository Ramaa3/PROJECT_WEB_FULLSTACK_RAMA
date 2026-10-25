// Riwayat, ringkasan, validasi form, dan efek jQuery.
$(function () {
  const data = window.NucleoData;
  const $tbody = $("#reportHistoryBody");
  const $form = $("#reportForm");
  const $message = $("#formMessage");
  const $toggle = $("#toggleReportForm");

  function renderReports() {
    $tbody.empty();
    data.reports.forEach(function (report) {
      const $row = $("<tr>").addClass("border-b border-slate-200");
      [report.id, report.category, report.date].forEach(function (value) {
        $("<td>").addClass("p-4").text(value).appendTo($row);
      });
      const reviewed = report.status === "Ditinjau";
      const $badge = $("<span>").addClass("rounded-full px-3 py-1 text-sm")
        .addClass(reviewed ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800")
        .text(report.status);
      $("<td>").addClass("p-4").append($badge).appendTo($row);
      $tbody.append($row);
    });
    $("#reportTotalCount").text(data.reports.length);
    $("#reportReviewedCount").text(data.reports.filter(r => r.status === "Ditinjau").length);
    $("#reportPendingCount").text(data.reports.filter(r => r.status !== "Ditinjau").length);
  }

  $toggle.on("click", function () {
    $form.stop(true, true).slideToggle(200);
    const expanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", String(!expanded));
    $(this).text(expanded ? "Tampilkan Form" : "Sembunyikan Form");
  });

  $form.on("submit", function (event) {
    event.preventDefault();
    const id = $("#reportId").val().trim();
    const category = $("#category").val();
    const date = $("#reportDate").val();
    const status = $("#reportStatus").val();
    const description = $("#description").val().trim();

    if (!id || !category || !date || !status || !description) {
      $message.removeClass("hidden bg-green-50 text-green-800")
        .addClass("bg-red-50 p-4 text-red-800").text("Semua kolom wajib diisi.");
      return;
    }
    if (data.reports.some(r => r.id === id)) {
      $message.removeClass("hidden bg-green-50 text-green-800")
        .addClass("bg-red-50 p-4 text-red-800").text("ID laporan sudah digunakan.");
      return;
    }
    const parts = date.split("-");
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const formattedDate = Number(parts[2]) + " " + months[Number(parts[1]) - 1] + " " + parts[0];
    data.reports.push({ id, category, date: formattedDate, status, description });
    renderReports();
    this.reset();
    $message.removeClass("hidden bg-red-50 text-red-800")
      .addClass("bg-green-50 p-4 text-green-800")
      .text("Laporan simulasi berhasil ditambahkan. Data belum disimpan permanen.");
    $form.stop(true, true).slideUp(200);
    $toggle.attr("aria-expanded", "false").text("Tampilkan Form");
  });

  renderReports();
});
