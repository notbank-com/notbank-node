export var MessageType;
(function (MessageType) {
    MessageType[MessageType["REQUEST"] = 0] = "REQUEST";
    MessageType[MessageType["REPLY"] = 1] = "REPLY";
    MessageType[MessageType["SUBSCRIBE_TO_EVENT"] = 2] = "SUBSCRIBE_TO_EVENT";
    MessageType[MessageType["EVENT"] = 3] = "EVENT";
    MessageType[MessageType["UNSUBSCRIBE_FROM_EVENT"] = 4] = "UNSUBSCRIBE_FROM_EVENT";
    MessageType[MessageType["ERROR"] = 5] = "ERROR";
})(MessageType || (MessageType = {}));
