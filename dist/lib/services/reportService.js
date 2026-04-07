import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
import { completeParams } from "../utils/completeParams.js";
export class ReportService {
    constructor(connection) {
        this.OMS_ID = 1;
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#generatetradeactivityreport
     */
    generateTradeActivityReport(request) {
        const params = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GENERATE_TRADE_ACTIVITY_REPORT, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#generatetransactionactivityreport
     */
    generateTransactionActivityReport(request) {
        const params = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GENERATE_TRANSACTION_ACTIVITY_REPORT, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#generateproductdeltaactivityreport
     */
    generateProductDeltaActivityReport(request) {
        const params = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GENERATE_PRODUCT_DELTA_ACTIVITY_REPORT, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#generatepnlactivityreport
     */
    generatePnLActivityReport(request) {
        const params = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.GENERATE_PNL_ACTIVITY_REPORT, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#scheduletradeactivityreport
     */
    scheduleTradeActivityReport(request) {
        const params = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.SCHEDULE_TRADE_ACTIVITY_REPORT, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#scheduletransactionactivityreport
     */
    scheduleTransactionActivityReport(request) {
        const params = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.SCHEDULE_TRANSACTION_ACTIVITY_REPORT, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#scheduleproductdeltaactivityreport
     */
    scheduleProductDeltaActivityReport(request) {
        const params = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.SCHEDULE_PRODUCT_DELTA_ACTIVITY_REPORT, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#scheduleprofitandlossactivityreport
     */
    scheduleProfitAndLossActivityReport(request) {
        const params = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(Endpoint.SCHEDULE_PROFIT_AND_LOSS_ACTIVITY_REPORT, RequestType.POST, params);
    }
    /**
     * https://apidoc.notbank.exchange/#canceluserreport
     */
    cancelUserReport(request) {
        return this.connection.apRequest(Endpoint.CANCEL_USER_REPORT, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getuserreportwriterresultrecords
     */
    getUserReportWriterResultRecords(request) {
        return this.connection.apRequest(Endpoint.GET_USER_REPORT_WRITER_RESULT_RECORDS, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getuserreporttickets
     */
    getUserReportTickets(request) {
        return this.connection.apRequest(Endpoint.GET_USER_REPORT_TICKETS, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#removeuserreportticket
     */
    removeUserReportTicket(request) {
        return this.connection.apRequest(Endpoint.REMOVE_USER_REPORT_TICKET, RequestType.POST, request.UserReportTicketId);
    }
    /**
     * https://apidoc.notbank.exchange/#getuserreportticketsbystatus
     */
    getUserReportTicketsByStatus(request) {
        return this.connection.apRequest(Endpoint.GET_USER_REPORT_TICKETS_BY_STATUS, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#downloaddocument
     */
    downloadDocument(request) {
        return this.connection.apRequest(Endpoint.DOWNLOAD_DOCUMENT, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#downloaddocumentslice
     */
    downloadDocumentSlice(request) {
        return this.connection.apRequest(Endpoint.DOWNLOAD_DOCUMENT_SLICE, RequestType.POST, request);
    }
}
