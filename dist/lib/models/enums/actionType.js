/**
 * Acción de la actualización en Level 2:
 * 0 = New
 * 1 = Update
 * 2 = Deletion
 */
export var ActionType;
(function (ActionType) {
    ActionType[ActionType["NEW"] = 0] = "NEW";
    ActionType[ActionType["UPDATE"] = 1] = "UPDATE";
    ActionType[ActionType["DELETION"] = 2] = "DELETION";
})(ActionType || (ActionType = {}));
