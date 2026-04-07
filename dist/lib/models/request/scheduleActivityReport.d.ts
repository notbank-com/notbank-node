import { ReportFrequency } from "../enums/reportFrequency.js";
export interface ScheduleActivityReportRequest {
    accountIdList: number[];
    beginTime: string;
    frequency?: ReportFrequency | number | string;
}
