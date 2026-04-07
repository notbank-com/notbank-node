var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import assert from "assert";
import "mocha";
import { ReportRequestStatus } from "../../lib/models/enums/reportRequestStatus.js";
import { NotbankClient } from "../../lib/services/notbankClient.js";
import { TestHelper } from "./TestHelper.js";
describe("http report service", () => {
    const client = NotbankClient.Factory.createRestClient();
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.authenticateUser(TestHelper.getCredentials());
    }));
    const reportService = client.getReportService();
    const validGenerateRequest = {
        accountIdList: [1, 2, 3],
        startTime: "2023-03-01T16:00:00.000Z",
        endTime: "2025-06-02T16:00:00.000Z"
    };
    const validScheduleRequest = {
        accountIdList: [1, 2],
        beginTime: "2023-03-30T16:00:00.000Z",
        frequency: "Weekly"
    };
    const invalidGenerateRequest = {
        accountIdList: "not-an-array",
        startTime: 123,
        endTime: 456
    };
    const invalidGenerateRequestStartTime = {
        accountIdList: [1, 2],
        startTime: "-12345",
        endTime: "2025-06-02T16:00:00.000Z"
    };
    const invalidScheduleRequest = {
        accountIdList: [1, "invalid-id"],
        beginTime: 123,
        frequency: "OnDemand"
    };
    const invalidScheduleRequestFrequency = {
        accountIdList: [1],
        beginTime: "2023-03-30T16:00:00.000Z",
        frequency: -123
    };
    describe("generateTradeActivityReport", () => {
        it("successfully generates trade activity report", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.generateTradeActivityReport(validGenerateRequest);
            assert.ok(response.RequestId, "Should return RequestId");
        }));
        it("throws error on invalid request", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.generateTradeActivityReport(invalidGenerateRequest);
                assert.fail("Should have thrown error");
            }
            catch (error) {
                assert.match(error.message, /accountIdList must be an array of numbers/);
            }
        }));
        it("should throw error for invalid startTime in generateTradeActivityReport", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.generateTradeActivityReport(invalidGenerateRequestStartTime);
                assert.fail("Expected error for invalid startTime");
            }
            catch (error) {
                assert.match(error.message, /startTime and endTime must be strings/, "Expected validation error");
            }
        }));
    });
    describe("generateTransactionActivityReport", () => {
        it("successfully generates transaction activity report", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.generateTransactionActivityReport(validGenerateRequest);
            assert.ok(response.RequestId);
        }));
    });
    describe("generateProductDeltaActivityReport", () => {
        it("successfully generates product delta report", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.generateProductDeltaActivityReport(validGenerateRequest);
            assert.ok(response.RequestId);
        }));
    });
    describe("generatePnLActivityReport", () => {
        it("successfully generates PnL report", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.generatePnLActivityReport(validGenerateRequest);
            assert.ok(response.RequestId);
        }));
    });
    // --- Schedule reports ---
    describe("scheduleTradeActivityReport", () => {
        it("successfully schedules trade report", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.scheduleTradeActivityReport(validScheduleRequest);
            assert.ok(response.RequestId);
        }));
        it("throws error on invalid request", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.scheduleTradeActivityReport(invalidScheduleRequest);
                assert.fail("Should have thrown error");
            }
            catch (error) {
                assert.match(error.message, /accountIdList must be an array of numbers/);
            }
        }));
        it("should throw error for invalid frequency in scheduleTradeActivityReport", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.scheduleTradeActivityReport(invalidScheduleRequestFrequency);
                assert.fail("Expected error for invalid frequency");
            }
            catch (error) {
                assert.match(error.message, /frequency must be a string or number/, "Expected validation error");
            }
        }));
    });
    describe("scheduleTransactionActivityReport", () => {
        it("successfully schedules transaction report", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.scheduleTransactionActivityReport(validScheduleRequest);
            assert.ok(response.RequestId);
        }));
    });
    describe("scheduleProductDeltaActivityReport", () => {
        it("successfully schedules product delta report", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.scheduleProductDeltaActivityReport(validScheduleRequest);
            assert.ok(response.RequestId);
        }));
    });
    describe("scheduleProfitAndLossActivityReport", () => {
        it("successfully schedules PnL report", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.scheduleProfitAndLossActivityReport(validScheduleRequest);
            assert.ok(response.RequestId);
        }));
    });
    describe("cancelUserReport", () => {
        it("throws error when UserReportId is missing", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.cancelUserReport({});
                assert.fail("Should throw an error");
            }
            catch (error) {
                assert.match(error.message, /UserReportId is required and must be a string/);
            }
        }));
    });
    describe("getUserReportWriterResultRecords", () => {
        it("throws error when UserId is missing", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.getUserReportWriterResultRecords({});
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /UserId is required and must be a number/);
            }
        }));
        it("throws error for invalid Depth", () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                UserId: 64,
                Depth: -1
            };
            try {
                yield reportService.getUserReportWriterResultRecords(req);
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /Depth must be a non-negative number/);
            }
        }));
        it("throws error for invalid StartIndex", () => __awaiter(void 0, void 0, void 0, function* () {
            const req = {
                UserId: 64,
                StartIndex: -1
            };
            try {
                yield reportService.getUserReportWriterResultRecords(req);
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /StartIndex must be a non-negative number/);
            }
        }));
        it("successfully gets report writer result records", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.getUserReportWriterResultRecords({
                UserId: 64
            });
            assert.ok(Array.isArray(response));
        }));
    });
    describe("getUserReportTickets", () => {
        it("throws error when UserId is missing", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.getUserReportTickets({});
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /UserId is required and must be a number/);
            }
        }));
        it("successfully retrieves user report tickets", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield reportService.getUserReportTickets({ UserId: 64 });
            assert.ok(Array.isArray(response));
        }));
    });
    describe("removeUserReportTicket", () => {
        it("throws error when ticket ID is missing", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.removeUserReportTicket({ UserReportTicketId: "" });
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /userReportTicketId must be a string/);
            }
        }));
    });
    describe("getUserReportTicketsByStatus", () => {
        it("throws error for empty array", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.getUserReportTicketsByStatus([]);
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /Request must be a non-empty array/);
            }
        }));
        it("throws error for invalid RequestStatus", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.getUserReportTicketsByStatus([
                    { RequestStatus: "InvalidStatus" }
                ]);
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /valid RequestStatus values/);
            }
        }));
        it("works with valid RequestStatus", () => __awaiter(void 0, void 0, void 0, function* () {
            const req = [
                { RequestStatus: ReportRequestStatus.Completed }
            ];
            const res = yield reportService.getUserReportTicketsByStatus(req);
            assert.ok(Array.isArray(res), "Response must be an array");
        }));
    });
    describe("downloadDocument", () => {
        it("throws error when DescriptorId is missing", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.downloadDocument({});
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /DescriptorId is required and must be a string/);
            }
        }));
    });
    describe("downloadDocumentSlice", () => {
        it("throws error when DescriptorId is missing", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.downloadDocumentSlice({});
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /DescriptorId is required and must be a string/);
            }
        }));
        it("throws error for invalid sliceNum", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield reportService.downloadDocumentSlice({
                    DescriptorId: "valid-guid",
                    sliceNum: -1
                });
                assert.fail("Should throw error");
            }
            catch (error) {
                assert.match(error.message, /sliceNum must be a non-negative number/);
            }
        }));
    });
});
