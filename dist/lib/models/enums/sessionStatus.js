export var SessionStatus;
(function (SessionStatus) {
    SessionStatus["UNKNOWN"] = "Unknown";
    SessionStatus["RUNNING"] = "Running";
    SessionStatus["PAUSED"] = "Paused";
    SessionStatus["STOPPED"] = "Stopped";
    SessionStatus["STARTING"] = "Starting";
    SessionStatus["RUNNING_POST_ONLY"] = "RunningPostOnly";
})(SessionStatus || (SessionStatus = {}));
