// Tipo del Maker/Taker
export var MakerTaker;
(function (MakerTaker) {
    MakerTaker[MakerTaker["Unknown"] = 0] = "Unknown";
    MakerTaker[MakerTaker["Maker"] = 1] = "Maker";
    MakerTaker[MakerTaker["Taker"] = 2] = "Taker";
})(MakerTaker || (MakerTaker = {}));
