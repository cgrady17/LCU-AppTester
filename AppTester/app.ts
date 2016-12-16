class AppTester {
    constructor() {
        this.initEvents();
    }

    private initEvents(): void {
        let reportBtn = document.getElementById("apptester-report-btn");

        reportBtn.addEventListener("click",
            () => {
                IssueReporter.startReport();
            });
    }
}

class IssueReporter {
    static startReport() {
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
    }
}

let appTester = new AppTester();