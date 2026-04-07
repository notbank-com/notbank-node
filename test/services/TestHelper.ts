import { readFileSync } from 'fs';
export type Credentials = { UserId: number, AccountId: number; ApiPublicKey: string, ApiSecretKey: string }
export class TestHelper {
  private static credentials: Credentials

  private static loadCredentials(): Credentials {
    return JSON.parse(readFileSync('keys.json', 'utf-8'));
  }

  public static getCredentials() {
    if (!this.credentials) {
      this.credentials = TestHelper.loadCredentials()
    }
    return this.credentials
  }
}