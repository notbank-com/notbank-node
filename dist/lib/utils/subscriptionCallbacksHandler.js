export function newMaybeHandler(eventName, recordHandler) {
    if (recordHandler == null) {
        return null;
    }
    return newHandler(eventName, recordHandler);
}
export function newHandler(eventName, recordHandler) {
    return {
        eventName: eventName,
        eventHandler: messageFrame => recordHandler(parseRecord(messageFrame.o))
    };
}
export function parseRecord(jsonData) {
    return JSON.parse(jsonData);
}
