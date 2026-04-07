import { ReportWriterResultStatus } from "../enums/reportWriterResultStatus.js";
export interface UserReportWriterResultRecords {
    RequestingUser: number;
    urtTicketId: string;
    descriptorId: string;
    resultStatus: ReportWriterResultStatus;
    reportExecutionStartTime: string;
    reportExecutionCompleteTime: string;
    reportOutputFilePathname: string;
    reportDescriptiveHeader: string;
}
