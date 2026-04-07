var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Resubscriber_instances, _Resubscriber_hasCallbackId;
import { SubscriptionIdentifier } from "./SubscriptionIdentifier.js";
export class Resubscriber {
    constructor() {
        _Resubscriber_instances.add(this);
        this.currentSubscriptions = [];
    }
    saveSubscription(data) {
        this.currentSubscriptions.push(data);
    }
    removeSubscription(callbackIds) {
        for (let i = 0; i < callbackIds.length; i++) {
            for (let j = 0; j < this.currentSubscriptions.length; j++) {
                var isFromSubscription = __classPrivateFieldGet(this, _Resubscriber_instances, "m", _Resubscriber_hasCallbackId).call(this, this.currentSubscriptions[j], callbackIds[i]);
                if (isFromSubscription) {
                    this.currentSubscriptions.splice(j, 1);
                    return;
                }
            }
        }
    }
    makeSubscriptions(connection) {
        this.currentSubscriptions.forEach(data => connection.subscribe(data.endpoint, data.firstIdentifier, data.secondIdentifier, data.message, data.subscriptionHandlers));
    }
}
_Resubscriber_instances = new WeakSet(), _Resubscriber_hasCallbackId = function _Resubscriber_hasCallbackId(data, callbackId) {
    var subscriptionCallbackId = SubscriptionIdentifier.get(data.endpoint, data.firstIdentifier, data.secondIdentifier);
    return subscriptionCallbackId === callbackId;
};
