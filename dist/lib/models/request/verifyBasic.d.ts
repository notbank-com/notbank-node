import { ARProvince, BRState, CLComune, Gender, Profession } from "../enums/index.js";
export interface VerifyBasicRequest {
    user_id?: string;
    is_business: boolean;
    profession: Profession;
    gender: Gender;
    city: string;
    street: string;
    country: string;
    subject_comply?: boolean;
    province?: ARProvince;
    district?: string;
    number?: string;
    state?: BRState;
    commune?: CLComune;
}
