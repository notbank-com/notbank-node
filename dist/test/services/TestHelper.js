import { readFileSync } from 'fs';
export class TestHelper {
    static loadCredentials() {
        return JSON.parse(readFileSync('keys.json', 'utf-8'));
    }
    static getCredentials() {
        if (!this.credentials) {
            this.credentials = TestHelper.loadCredentials();
        }
        return this.credentials;
    }
}
