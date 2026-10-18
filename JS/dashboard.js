
$(document).ready(function () {
    const data = window.NucleoData;

    function tampilkanStatistik() {
        $("#dashboardFacilityCount").text(data.facilities.length);
        $("#dashboardMonitoringCount").text(data.monitoring.length);
        $("#dashboardReportCount").text(data.reports.length);
    }

    tampilkanStatistik();
});
