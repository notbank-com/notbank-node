import { InstrumentLimits } from "./instrumentVerificationLevelConfig.js";
export interface InstrumentVerificationLevelConfig {
    Level: number;
    LevelName: string | null;
    OMSId: number;
    Instruments: InstrumentLimits[];
}
