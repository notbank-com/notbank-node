export type Credentials = {
    UserId: number;
    AccountId: number;
    ApiPublicKey: string;
    ApiSecretKey: string;
};
export declare class TestHelper {
    private static credentials;
    private static loadCredentials;
    static getCredentials(): Credentials;
}
