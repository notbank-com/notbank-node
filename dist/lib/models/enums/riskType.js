// Enum para los valores posibles de RiskType
export var RiskType;
(function (RiskType) {
    RiskType["UNKNOWN"] = "Unknown";
    RiskType["NORMAL"] = "Normal";
    RiskType["NO_RISK_CHECK"] = "NoRiskCheck";
    RiskType["NO_TRADING"] = "NoTrading";
    RiskType["CREDIT"] = "Credit"; // Riesgo basado en crédito
})(RiskType || (RiskType = {}));
