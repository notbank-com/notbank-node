import { ReportFlavor } from "../enums/reportFlavor.js";
import { ReportFrequency } from "../enums/reportFrequency.js";
import { ReportRequestStatus } from "../enums/reportRequestStatus.js";
export interface UserReportTicket {
    RequestingUser: number;
    OMSId: number;
    reportFlavor: ReportFlavor;
    createTime: string;
    initialRunTime: string;
    intervalStartTime: string;
    intervalEndTime: string;
    RequestStatus: ReportRequestStatus;
    ReportFrequency: ReportFrequency;
    intervalDuration: number;
    RequestId: string;
    lastInstanceId: string | null;
    accountIds: number[];
}
