var AppTester = (function () {
    function AppTester() {
        this.initEvents();
    }
    AppTester.prototype.initEvents = function () {
        var reportBtn = document.getElementById("apptester-report-btn");
        reportBtn.addEventListener("click", function () {
            IssueReporter.startReport();
        });
    };
    return AppTester;
}());
var IssueReporter = (function () {
    function IssueReporter() {
    }
    IssueReporter.startReport = function () {
        $("<div id='report-issue-window'></div>")
            .appendTo("body")
            .kendoWindow({
            actions: [],
            content: "",
            resizable: false,
            draggable: false,
            modal: true,
            title: "Report Issue",
            visible: false
        }).data("kendoWindow").center().open();
    };
    return IssueReporter;
}());
var appTester = new AppTester();
//# sourceMappingURL=app.js.map