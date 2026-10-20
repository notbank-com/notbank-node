export type VerificationLevel = "basic" | "trader" | "trader_plus" | "institutional";
export type VerificationProcessResult = "approved" | "rejected";
export interface VerificationStatusV2 {
    /** UUID of the current pending verification process. `null` if there is none. */
    id: string | null;
    /** `true` if the user cannot act on the verification right now. */
    locked: boolean;
    /** Level the user can verify next. `null` if the user is at the highest level. */
    next_level: VerificationLevel | null;
    /** Result of the previous process of the same level. */
    last_previous_status: VerificationProcessResult | null;
    /** Rejection code. Never `null` when `last_previous_status` is `rejected`. */
    last_previous_reason: string | null;
    is_business: boolean;
    verification_tier: number;
}
