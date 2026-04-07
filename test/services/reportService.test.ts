import assert from "assert";
import "mocha";

import { HttpServiceFactory } from "../../lib/services/httpServiceFactory";
import { CancelUserReportRequest } from "../../lib/models/request/cancelUserReport";
import { GetUserReportWriterResultRecordsRequest } from "../../lib/models/request/getUserReportWriterResultRecords";
import { GetUserReportTicketsRequest } from "../../lib/models/request/getUserReportTickets";
import { GetUserReportTicketsByStatusRequest } from "../../lib/models/request/getUserReportTicketsByStatus";
import { DownloadDocumentRequest } from "../../lib/models/request/downloadDocument";
import { DownloadDocumentSliceRequest } from "../../lib/models/request/downloadDocumentSlice";
import { ReportRequestStatus } from "../../lib/models/enums/reportRequestStatus";
import { NotbankClient } from "../../lib/services/notbankClient";
import { TestHelper } from "./TestHelper";

describe("http report service", () => {
  const client = NotbankClient.Factory.createRestClient();

  before(async () => {
    await client.authenticateUser(TestHelper.getCredentials());
  });

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
    it("successfully generates trade activity report", async () => {
      const response = await reportService.generateTradeActivityReport(
        validGenerateRequest as any
      );
      assert.ok(response.RequestId, "Should return RequestId");
    });

    it("throws error on invalid request", async () => {
      try {
        await reportService.generateTradeActivityReport(
          invalidGenerateRequest as any
        );
        assert.fail("Should have thrown error");
      } catch (error: any) {
        assert.match(
          error.message,
          /accountIdList must be an array of numbers/
        );
      }
    });

    it("should throw error for invalid startTime in generateTradeActivityReport", async () => {
      try {
        await reportService.generateTradeActivityReport(
          invalidGenerateRequestStartTime
        );
        assert.fail("Expected error for invalid startTime");
      } catch (error: any) {
        assert.match(
          error.message,
          /startTime and endTime must be strings/,
          "Expected validation error"
        );
      }
    });
  });

  describe("generateTransactionActivityReport", () => {
    it("successfully generates transaction activity report", async () => {
      const response = await reportService.generateTransactionActivityReport(
        validGenerateRequest as any
      );
      assert.ok(response.RequestId);
    });
  });

  describe("generateProductDeltaActivityReport", () => {
    it("successfully generates product delta report", async () => {
      const response = await reportService.generateProductDeltaActivityReport(
        validGenerateRequest as any
      );
      assert.ok(response.RequestId);
    });
  });

  describe("generatePnLActivityReport", () => {
    it("successfully generates PnL report", async () => {
      const response = await reportService.generatePnLActivityReport(
        validGenerateRequest as any
      );
      assert.ok(response.RequestId);
    });
  });

  // --- Schedule reports ---
  describe("scheduleTradeActivityReport", () => {
    it("successfully schedules trade report", async () => {
      const response = await reportService.scheduleTradeActivityReport(
        validScheduleRequest as any
      );
      assert.ok(response.RequestId);
    });

    it("throws error on invalid request", async () => {
      try {
        await reportService.scheduleTradeActivityReport(
          invalidScheduleRequest as any
        );
        assert.fail("Should have thrown error");
      } catch (error: any) {
        assert.match(
          error.message,
          /accountIdList must be an array of numbers/
        );
      }
    });

    it("should throw error for invalid frequency in scheduleTradeActivityReport", async () => {
      try {
        await reportService.scheduleTradeActivityReport(
          invalidScheduleRequestFrequency
        );
        assert.fail("Expected error for invalid frequency");
      } catch (error: any) {
        assert.match(
          error.message,
          /frequency must be a string or number/,
          "Expected validation error"
        );
      }
    });
  });

  describe("scheduleTransactionActivityReport", () => {
    it("successfully schedules transaction report", async () => {
      const response = await reportService.scheduleTransactionActivityReport(
        validScheduleRequest as any
      );
      assert.ok(response.RequestId);
    });
  });

  describe("scheduleProductDeltaActivityReport", () => {
    it("successfully schedules product delta report", async () => {
      const response = await reportService.scheduleProductDeltaActivityReport(
        validScheduleRequest as any
      );
      assert.ok(response.RequestId);
    });
  });

  describe("scheduleProfitAndLossActivityReport", () => {
    it("successfully schedules PnL report", async () => {
      const response = await reportService.scheduleProfitAndLossActivityReport(
        validScheduleRequest as any
      );
      assert.ok(response.RequestId);
    });
  });

  describe("cancelUserReport", () => {
    it("throws error when UserReportId is missing", async () => {
      try {
        await reportService.cancelUserReport({} as CancelUserReportRequest);
        assert.fail("Should throw an error");
      } catch (error: any) {
        assert.match(
          error.message,
          /UserReportId is required and must be a string/
        );
      }
    });
  });

  describe("getUserReportWriterResultRecords", () => {
    it("throws error when UserId is missing", async () => {
      try {
        await reportService.getUserReportWriterResultRecords({} as any);
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(error.message, /UserId is required and must be a number/);
      }
    });

    it("throws error for invalid Depth", async () => {
      const req: GetUserReportWriterResultRecordsRequest = {
        UserId: 64,
        Depth: -1
      };

      try {
        await reportService.getUserReportWriterResultRecords(req);
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(error.message, /Depth must be a non-negative number/);
      }
    });

    it("throws error for invalid StartIndex", async () => {
      const req: GetUserReportWriterResultRecordsRequest = {
        UserId: 64,
        StartIndex: -1
      };

      try {
        await reportService.getUserReportWriterResultRecords(req);
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(error.message, /StartIndex must be a non-negative number/);
      }
    });

    it("successfully gets report writer result records", async () => {
      const response = await reportService.getUserReportWriterResultRecords({
        UserId: 64
      });

      assert.ok(Array.isArray(response));
    });
  });

  describe("getUserReportTickets", () => {
    it("throws error when UserId is missing", async () => {
      try {
        await reportService.getUserReportTickets(
          {} as GetUserReportTicketsRequest
        );
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(error.message, /UserId is required and must be a number/);
      }
    });

    it("successfully retrieves user report tickets", async () => {
      const response = await reportService.getUserReportTickets({ UserId: 64 });
      assert.ok(Array.isArray(response));
    });
  });

  describe("removeUserReportTicket", () => {
    it("throws error when ticket ID is missing", async () => {
      try {
        await reportService.removeUserReportTicket({ UserReportTicketId: "" });
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(error.message, /userReportTicketId must be a string/);
      }
    });
  });

  describe("getUserReportTicketsByStatus", () => {
    it("throws error for empty array", async () => {
      try {
        await reportService.getUserReportTicketsByStatus([]);
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(error.message, /Request must be a non-empty array/);
      }
    });

    it("throws error for invalid RequestStatus", async () => {
      try {
        await reportService.getUserReportTicketsByStatus([
          { RequestStatus: "InvalidStatus" } as any
        ]);
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(error.message, /valid RequestStatus values/);
      }
    });

    it("works with valid RequestStatus", async () => {
      const req: GetUserReportTicketsByStatusRequest[] = [
        { RequestStatus: ReportRequestStatus.Completed }
      ];

      const res = await reportService.getUserReportTicketsByStatus(req);
      assert.ok(Array.isArray(res), "Response must be an array");
    });
  });

  describe("downloadDocument", () => {
    it("throws error when DescriptorId is missing", async () => {
      try {
        await reportService.downloadDocument({} as DownloadDocumentRequest);
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(
          error.message,
          /DescriptorId is required and must be a string/
        );
      }
    });
  });

  describe("downloadDocumentSlice", () => {
    it("throws error when DescriptorId is missing", async () => {
      try {
        await reportService.downloadDocumentSlice(
          {} as DownloadDocumentSliceRequest
        );
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(
          error.message,
          /DescriptorId is required and must be a string/
        );
      }
    });

    it("throws error for invalid sliceNum", async () => {
      try {
        await reportService.downloadDocumentSlice({
          DescriptorId: "valid-guid",
          sliceNum: -1
        });
        assert.fail("Should throw error");
      } catch (error: any) {
        assert.match(error.message, /sliceNum must be a non-negative number/);
      }
    });
  });
});
