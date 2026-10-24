
$(document).ready(function () {
    const data = window.NucleoData;
    const $tbody = $("#reportHistoryBody");
    const $form = $("#reportForm");
    const $message = $("#formMessage");
    const $toggle = $("#toggleReportForm");

    function showMessage(message, success) {
        $message
            .removeClass(
                "hidden bg-green-50 text-green-800 bg-red-50 text-red-800"
            )
            .addClass(
                success
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
            )
            .text(message);
    }

    function renderReports() {
        $tbody.empty();

        data.reports.forEach(function (report) {
            const $row = $("<tr>")
                .addClass("border-b border-slate-200");

            [report.id, report.category, report.date].forEach(
                function (value) {
                    $("<td>")
                        .addClass("p-4")
                        .text(value)
                        .appendTo($row);
                }
            );

            const reviewed = report.status === "Ditinjau";

            const $badge = $("<span>")
                .addClass("rounded-full px-3 py-1 text-sm")
                .addClass(
                    reviewed
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                )
                .text(report.status);

            $("<td>")
                .addClass("p-4")
                .append($badge)
                .appendTo($row);

            $tbody.append($row);
        });

        $("#reportTotalCount").text(data.reports.length);

        $("#reportReviewedCount").text(
            data.reports.filter(function (report) {
                return report.status === "Ditinjau";
            }).length
        );

        $("#reportPendingCount").text(
            data.reports.filter(function (report) {
                return report.status !== "Ditinjau";
            }).length
        );
    }

    $toggle.on("click", function () {
        const expanded =
            $(this).attr("aria-expanded") === "true";

        if (expanded) {
            $form.stop(true, true).slideUp(200);
        } else {
            $form.stop(true, true).slideDown(200);
        }

        $(this).attr("aria-expanded", String(!expanded));

        $(this).text(
            expanded ? "Tampilkan Form" : "Sembunyikan Form"
        );
    });

    $form.on("submit", function (event) {
        event.preventDefault();

        const id = $("#reportId").val().trim();
        const category = $("#category").val();
        const date = $("#reportDate").val();
        const status = $("#reportStatus").val();
        const description = $("#description").val().trim();

        if (!id || !category || !date || !status || !description) {
            showMessage("Semua kolom wajib diisi.", false);
            return;
        }

        const duplicate = data.reports.some(function (report) {
            return report.id.toLowerCase() === id.toLowerCase();
        });

        if (duplicate) {
            showMessage("ID laporan sudah digunakan.", false);
            return;
        }

        const parts = date.split("-");
        const months = [
            "Januari", "Februari", "Maret", "April",
            "Mei", "Juni", "Juli", "Agustus",
            "September", "Oktober", "November", "Desember"
        ];

        const formattedDate =
            Number(parts[2]) + " " +
            months[Number(parts[1]) - 1] + " " +
            parts[0];

        data.reports.push({
            id: id,
            category: category,
            date: formattedDate,
            status: status,
            description: description
        });

        renderReports();
        this.reset();

        showMessage(
            "Laporan simulasi berhasil ditambahkan. Data belum tersimpan permanen.",
            true
        );

        $form.stop(true, true).slideUp(200);
        $toggle.attr("aria-expanded", "false");
        $toggle.text("Tampilkan Form");
    });

    renderReports();
});
