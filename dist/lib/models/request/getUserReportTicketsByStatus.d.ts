import { ReportRequestStatus } from "../enums/reportRequestStatus.js";
export interface GetUserReportTicketsByStatusRequest {
    RequestStatus: ReportRequestStatus;
}
