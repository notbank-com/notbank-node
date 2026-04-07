export interface InstitutionalVerification {
  status: "pending" | "rejected" | "approved"
  form: {
    country: string,
    city: string,
    province: string,
    address: string,
    name: string,
    identity: string,
    field: string,
  }
}
