export class Reauther {
    constructor() {
        this.authenticateFn = null;
    }
    updateAuthentication(authenticateFn) {
        this.authenticateFn = authenticateFn;
    }
    removeAuthentication() {
        this.authenticateFn = null;
    }
    makeAuthentication(connection) {
        if (this.authenticateFn === null) {
            return;
        }
        this.authenticateFn(connection);
    }
}
