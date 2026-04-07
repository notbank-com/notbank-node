import { ServiceConnection } from "../core/serviceClient.js";
import { CancelUserReportRequest } from "../models/request/cancelUserReport.js";
import { DownloadDocumentRequest } from "../models/request/downloadDocument.js";
import { DownloadDocumentSliceRequest } from "../models/request/downloadDocumentSlice.js";
import { GenerateActivityReportRequest } from "../models/request/generateTradeActivityReport.js";
import { GetUserReportTicketsRequest } from "../models/request/getUserReportTickets.js";
import { GetUserReportTicketsByStatusRequest } from "../models/request/getUserReportTicketsByStatus.js";
import { GetUserReportWriterResultRecordsRequest } from "../models/request/getUserReportWriterResultRecords.js";
import { RemoveUserReportTicket } from "../models/request/removeUserReportTicket.js";
import { ScheduleActivityReportRequest } from "../models/request/scheduleActivityReport.js";
import { Document } from "../models/response/downloadDocument.js";
import { DocumentSlice } from "../models/response/downloadDocumentSlice.js";
import { ActivityReport } from "../models/response/generateTradeActivityReport.js";
import { UserReportTicket } from "../models/response/getUserReportTicket.js";
import { UserReportWriterResultRecords } from "../models/response/getUserReportWriterResultRecords.js";
import { ScheduleActivityReport } from "../models/response/scheduleActivityReport.js";
export declare class ReportService {
    connection: ServiceConnection;
    private readonly OMS_ID;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#generatetradeactivityreport
     */
    generateTradeActivityReport(request: GenerateActivityReportRequest): Promise<ActivityReport>;
    /**
     * https://apidoc.notbank.exchange/#generatetransactionactivityreport
     */
    generateTransactionActivityReport(request: GenerateActivityReportRequest): Promise<ActivityReport>;
    /**
     * https://apidoc.notbank.exchange/#generateproductdeltaactivityreport
     */
    generateProductDeltaActivityReport(request: GenerateActivityReportRequest): Promise<ActivityReport>;
    /**
     * https://apidoc.notbank.exchange/#generatepnlactivityreport
     */
    generatePnLActivityReport(request: GenerateActivityReportRequest): Promise<ActivityReport>;
    /**
     * https://apidoc.notbank.exchange/#scheduletradeactivityreport
     */
    scheduleTradeActivityReport(request: ScheduleActivityReportRequest): Promise<ScheduleActivityReport>;
    /**
     * https://apidoc.notbank.exchange/#scheduletransactionactivityreport
     */
    scheduleTransactionActivityReport(request: ScheduleActivityReportRequest): Promise<ScheduleActivityReport>;
    /**
     * https://apidoc.notbank.exchange/#scheduleproductdeltaactivityreport
     */
    scheduleProductDeltaActivityReport(request: ScheduleActivityReportRequest): Promise<ScheduleActivityReport>;
    /**
     * https://apidoc.notbank.exchange/#scheduleprofitandlossactivityreport
     */
    scheduleProfitAndLossActivityReport(request: ScheduleActivityReportRequest): Promise<ScheduleActivityReport>;
    /**
     * https://apidoc.notbank.exchange/#canceluserreport
     */
    cancelUserReport(request: CancelUserReportRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#getuserreportwriterresultrecords
     */
    getUserReportWriterResultRecords(request: GetUserReportWriterResultRecordsRequest): Promise<UserReportWriterResultRecords[]>;
    /**
     * https://apidoc.notbank.exchange/#getuserreporttickets
     */
    getUserReportTickets(request: GetUserReportTicketsRequest): Promise<UserReportTicket[]>;
    /**
     * https://apidoc.notbank.exchange/#removeuserreportticket
     */
    removeUserReportTicket(request: RemoveUserReportTicket): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#getuserreportticketsbystatus
     */
    getUserReportTicketsByStatus(request: GetUserReportTicketsByStatusRequest[]): Promise<UserReportTicket[]>;
    /**
     * https://apidoc.notbank.exchange/#downloaddocument
     */
    downloadDocument(request: DownloadDocumentRequest): Promise<Document>;
    /**
     * https://apidoc.notbank.exchange/#downloaddocumentslice
     */
    downloadDocumentSlice(request: DownloadDocumentSliceRequest): Promise<DocumentSlice>;
}
