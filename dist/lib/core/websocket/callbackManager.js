var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CallbackManager_subscriptionCallbacks, _CallbackManager_callbacks, _CallbackManager_sequenceNumber;
export class CallbackManager {
    constructor() {
        _CallbackManager_subscriptionCallbacks.set(this, void 0);
        _CallbackManager_callbacks.set(this, void 0);
        _CallbackManager_sequenceNumber.set(this, void 0);
        __classPrivateFieldSet(this, _CallbackManager_subscriptionCallbacks, {}, "f");
        __classPrivateFieldSet(this, _CallbackManager_callbacks, {}, "f");
        __classPrivateFieldSet(this, _CallbackManager_sequenceNumber, 2, "f");
    }
    putCallback(callback) {
        var sequenceNumber = __classPrivateFieldGet(this, _CallbackManager_sequenceNumber, "f");
        __classPrivateFieldGet(this, _CallbackManager_callbacks, "f")[sequenceNumber] = callback;
        __classPrivateFieldSet(this, _CallbackManager_sequenceNumber, __classPrivateFieldGet(this, _CallbackManager_sequenceNumber, "f") + 2, "f");
        return sequenceNumber;
    }
    popCallback(sequenceNumber) {
        let callback = __classPrivateFieldGet(this, _CallbackManager_callbacks, "f")[sequenceNumber];
        delete __classPrivateFieldGet(this, _CallbackManager_callbacks, "f")[sequenceNumber];
        return callback != null ? callback : (o) => null;
    }
    addSubscriptionCallback(callbackId, callback) {
        __classPrivateFieldGet(this, _CallbackManager_subscriptionCallbacks, "f")[callbackId] = callback;
    }
    getSubscriptionCallback(callbackIdentifier) {
        let handler = __classPrivateFieldGet(this, _CallbackManager_subscriptionCallbacks, "f")[callbackIdentifier];
        return handler || null;
    }
    removeSubscriptionCallback(callbackIds) {
        callbackIds.map((callbackId) => delete __classPrivateFieldGet(this, _CallbackManager_subscriptionCallbacks, "f")[callbackId]);
    }
}
_CallbackManager_subscriptionCallbacks = new WeakMap(), _CallbackManager_callbacks = new WeakMap(), _CallbackManager_sequenceNumber = new WeakMap();
