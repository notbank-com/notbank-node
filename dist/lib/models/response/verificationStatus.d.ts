export interface VerificationStatus {
    type: "basic" | "trader" | "trader_plus" | "institutional";
    id: string;
    status: "pending" | "in_review" | "approved" | "rejected";
    has_errors: boolean;
    errors: string[];
    is_business: boolean;
    verification_tier: number;
}
