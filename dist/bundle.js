var NotbankSdk = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __asyncGenerator = (__this, __arguments, generator) => {
    var resume = (k, v, yes, no) => {
      try {
        var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
        Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
      } catch (e) {
        no(e);
      }
    }, method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no)), it = {};
    return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k) => it[k] = (x) => obj[k](x);
    } else {
      obj = obj.call(value);
      method = (k) => it[k] = (v) => {
        if (isAwait) {
          isAwait = false;
          if (k === "throw") throw v;
          return v;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve) => {
            var x = obj[k](v);
            if (!(x instanceof Object)) __typeError("Object expected");
            resolve(x);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
      throw x;
    }, "return" in obj && method("return"), it;
  };
  var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

  // node_modules/universal-websocket-client/browser.js
  var require_browser = __commonJS({
    "node_modules/universal-websocket-client/browser.js"(exports, module) {
      "use strict";
      module.exports = WebSocket;
    }
  });

  // lib/index.ts
  var index_exports = {};
  __export(index_exports, {
    NotbankClient: () => NotbankClient,
    models: () => models_exports
  });

  // lib/models/index.ts
  var models_exports = {};
  __export(models_exports, {
    ARProvince: () => ARProvince,
    AccountType: () => AccountType,
    ActionType: () => ActionType,
    ArgentinaBankAccountKind: () => ArgentinaBankAccountKind,
    BRState: () => BRState,
    BrazilBankAccountKind: () => BrazilBankAccountKind,
    CLComune: () => CLComune,
    ChangeReason: () => ChangeReason,
    ChileBankAccountKind: () => ChileBankAccountKind,
    ColombiaBankAccountKind: () => ColombiaBankAccountKind,
    DepositFeeMessages: () => DepositFeeMessages,
    DepositStatus: () => DepositStatus,
    Direction: () => Direction,
    DocumentAdressType: () => DocumentAdressType,
    FeeCalcType: () => FeeCalcType,
    FeeProductType: () => FeeProductType,
    FeeType: () => FeeType,
    Gender: () => Gender,
    InstitutionalMember: () => InstitutionalMember,
    InstrumentStateArgument: () => InstrumentStateArgument,
    InstrumentType: () => InstrumentType,
    IntTransactionSubType: () => IntTransactionSubType,
    IntTransactionType: () => IntTransactionType,
    MakerTaker: () => MakerTaker,
    NotbankError: () => NotbankError,
    OrderFlag: () => OrderFlag,
    OrderSide: () => OrderSide,
    OrderState: () => OrderState,
    OrderTypeInt: () => OrderTypeInt,
    OrderTypeStr: () => OrderTypeStr,
    PegPriceType: () => PegPriceType,
    PeruBankAccountKind: () => PeruBankAccountKind,
    PixType: () => PixType,
    ProductType: () => ProductType,
    Profession: () => Profession,
    ReferenceType: () => ReferenceType,
    ReportFlavor: () => ReportFlavor,
    ReportFrequency: () => ReportFrequency,
    ReportRequestStatus: () => ReportRequestStatus,
    ReportWriterResultStatus: () => ReportWriterResultStatus,
    RiskType: () => RiskType,
    SessionStatus: () => SessionStatus,
    SideType: () => SideType,
    SubscriptionResponse: () => SubscriptionResponse,
    SupportedCountry: () => SupportedCountry,
    TimeInForce: () => TimeInForce,
    TradeDirection: () => TradeDirection,
    TradeSide: () => TradeSide,
    TransactionReferenceTypes: () => TransactionReferenceTypes,
    TransactionTypes: () => TransactionTypes,
    UnsubscribeLevel2ErrorCode: () => UnsubscribeLevel2ErrorCode,
    UnsubscribeTradesError: () => UnsubscribeTradesError,
    UnsubscriptionResponse: () => UnsubscriptionResponse,
    WithdrawErrorCode: () => WithdrawErrorCode,
    WithdrawFeeMessages: () => WithdrawFeeMessages,
    WithdrawTemplateType: () => WithdrawTemplateType,
    YieldProduct: () => YieldProduct,
    orderbookFromRaw: () => orderbookFromRaw
  });

  // lib/models/enums/accountType.ts
  var AccountType = /* @__PURE__ */ ((AccountType2) => {
    AccountType2["ASSET"] = "Asset";
    AccountType2["LIABILITY"] = "Liability";
    return AccountType2;
  })(AccountType || {});

  // lib/models/enums/actionType.ts
  var ActionType = /* @__PURE__ */ ((ActionType2) => {
    ActionType2[ActionType2["NEW"] = 0] = "NEW";
    ActionType2[ActionType2["UPDATE"] = 1] = "UPDATE";
    ActionType2[ActionType2["DELETION"] = 2] = "DELETION";
    return ActionType2;
  })(ActionType || {});

  // lib/models/enums/bankAccounts.ts
  var ArgentinaBankAccountKind = /* @__PURE__ */ ((ArgentinaBankAccountKind2) => {
    ArgentinaBankAccountKind2["CORRIENTE"] = "corriente";
    ArgentinaBankAccountKind2["VISTA"] = "vista";
    ArgentinaBankAccountKind2["AHORRO"] = "ahorro";
    ArgentinaBankAccountKind2["ELECTRONIC_CHECKBOOK"] = "electronic_checkbook";
    ArgentinaBankAccountKind2["AR_CBU"] = "ar_cbu";
    ArgentinaBankAccountKind2["AR_CVU"] = "ar_cvu";
    ArgentinaBankAccountKind2["AR_ALIAS"] = "ar_alias";
    return ArgentinaBankAccountKind2;
  })(ArgentinaBankAccountKind || {});
  var BrazilBankAccountKind = /* @__PURE__ */ ((BrazilBankAccountKind2) => {
    BrazilBankAccountKind2["BR_CORRIENTE_FISICA"] = "br_corriente_fisica";
    BrazilBankAccountKind2["BR_SIMPLE_FISICA"] = "br_simple_fisica";
    BrazilBankAccountKind2["BR_CORRIENTE_JURIDICA"] = "br_corriente_juridica";
    BrazilBankAccountKind2["BR_POUPANCA_FISICA"] = "br_poupanca_fisica";
    BrazilBankAccountKind2["BR_POUPANCA_JURIDICA"] = "br_poupanca_juridica";
    BrazilBankAccountKind2["BR_CAIXA_FACIL"] = "br_caixa_facil";
    BrazilBankAccountKind2["BR_PIX"] = "br_pix";
    return BrazilBankAccountKind2;
  })(BrazilBankAccountKind || {});
  var ChileBankAccountKind = /* @__PURE__ */ ((ChileBankAccountKind2) => {
    ChileBankAccountKind2["CORRIENTE"] = "corriente";
    ChileBankAccountKind2["VISTA"] = "vista";
    ChileBankAccountKind2["AHORRO"] = "ahorro";
    ChileBankAccountKind2["ELECTRONIC_CHECKBOOK"] = "electronic_checkbook";
    return ChileBankAccountKind2;
  })(ChileBankAccountKind || {});
  var PeruBankAccountKind = /* @__PURE__ */ ((PeruBankAccountKind2) => {
    PeruBankAccountKind2["CORRIENTE"] = "corriente";
    PeruBankAccountKind2["AHORRO"] = "ahorro";
    return PeruBankAccountKind2;
  })(PeruBankAccountKind || {});
  var ColombiaBankAccountKind = /* @__PURE__ */ ((ColombiaBankAccountKind2) => {
    ColombiaBankAccountKind2["CORRIENTE"] = "corriente";
    ColombiaBankAccountKind2["AHORRO"] = "ahorro";
    return ColombiaBankAccountKind2;
  })(ColombiaBankAccountKind || {});

  // lib/models/enums/changeReason.ts
  var ChangeReason = /* @__PURE__ */ ((ChangeReason2) => {
    ChangeReason2["UNKNOWN"] = "Unknown";
    ChangeReason2["NEWINPUTACCEPTED"] = "NewInputAccepted";
    ChangeReason2["NEWINPUTREJECTED"] = "NewInputRejected";
    ChangeReason2["OTHERREJECTED"] = "OtherRejected";
    ChangeReason2["EXPIRED"] = "Expired";
    ChangeReason2["TRADE"] = "Trade";
    ChangeReason2["SYSTEMCANCELED_NOMOREDMARKET"] = "SystemCanceled_NoMoreMarket";
    ChangeReason2["SYSTEMCANCELED_BELOWMINIMUM"] = "SystemCanceled_BelowMinimum";
    ChangeReason2["SYSTEMCANCELED_PRICECOLLAR"] = "SystemCanceled_PriceCollar";
    ChangeReason2["SYSTEMCANCELED_MARGINFAILED"] = "SystemCanceled_MarginFailed";
    ChangeReason2["USERMODIFIED"] = "UserModified";
    return ChangeReason2;
  })(ChangeReason || {});

  // lib/models/enums/countries.ts
  var SupportedCountry = /* @__PURE__ */ ((SupportedCountry2) => {
    SupportedCountry2["AR"] = "AR";
    SupportedCountry2["BR"] = "BR";
    SupportedCountry2["CL"] = "CL";
    SupportedCountry2["PE"] = "PE";
    SupportedCountry2["CO"] = "CO";
    return SupportedCountry2;
  })(SupportedCountry || {});

  // lib/models/enums/depositFeeMessages.ts
  var DepositFeeMessages = /* @__PURE__ */ ((DepositFeeMessages2) => {
    DepositFeeMessages2["Success"] = "Fee calculated successfully";
    DepositFeeMessages2["InvalidRequest"] = "Invalid Request";
    DepositFeeMessages2["AccountOrProductNotFound"] = "Account or Product not found";
    return DepositFeeMessages2;
  })(DepositFeeMessages || {});

  // lib/models/enums/depositStatus.ts
  var DepositStatus = /* @__PURE__ */ ((DepositStatus2) => {
    DepositStatus2["New"] = "New";
    DepositStatus2["Pending"] = "Pending";
    DepositStatus2["FullyProcessed"] = "FullyProcessed";
    DepositStatus2["Error"] = "Error";
    return DepositStatus2;
  })(DepositStatus || {});

  // lib/models/enums/direction.ts
  var Direction = /* @__PURE__ */ ((Direction2) => {
    Direction2[Direction2["NoChange"] = 0] = "NoChange";
    Direction2[Direction2["Uptick"] = 1] = "Uptick";
    Direction2[Direction2["DownTick"] = 2] = "DownTick";
    return Direction2;
  })(Direction || {});

  // lib/models/enums/documentAdressType.ts
  var DocumentAdressType = /* @__PURE__ */ ((DocumentAdressType2) => {
    DocumentAdressType2[DocumentAdressType2["SERVICE"] = 3] = "SERVICE";
    DocumentAdressType2[DocumentAdressType2["PROOF_ADDRESS"] = 30] = "PROOF_ADDRESS";
    DocumentAdressType2[DocumentAdressType2["CREDIT_CARD_BILL"] = 35] = "CREDIT_CARD_BILL";
    DocumentAdressType2[DocumentAdressType2["SALARY_STATEMENTS"] = 36] = "SALARY_STATEMENTS";
    DocumentAdressType2[DocumentAdressType2["NEIGHBOURS_CERTIFICATE"] = 37] = "NEIGHBOURS_CERTIFICATE";
    DocumentAdressType2[DocumentAdressType2["NOTARY_ADDRESS_CERTIFICATE"] = 38] = "NOTARY_ADDRESS_CERTIFICATE";
    DocumentAdressType2[DocumentAdressType2["PRODUCT_BILL_WITH_PAYMENT_CERTIFICATE"] = 39] = "PRODUCT_BILL_WITH_PAYMENT_CERTIFICATE";
    DocumentAdressType2[DocumentAdressType2["SERVICE_WITH_BIRTH"] = 41] = "SERVICE_WITH_BIRTH";
    DocumentAdressType2[DocumentAdressType2["SERVICE_WITH_MARRIAGE"] = 40] = "SERVICE_WITH_MARRIAGE";
    DocumentAdressType2[DocumentAdressType2["DRIVER_LICENSE_WITH_ADDRESS"] = 42] = "DRIVER_LICENSE_WITH_ADDRESS";
    return DocumentAdressType2;
  })(DocumentAdressType || {});

  // lib/models/enums/feeProductType.ts
  var FeeProductType = /* @__PURE__ */ ((FeeProductType2) => {
    FeeProductType2["BASE_PRODUCT"] = "BaseProduct";
    FeeProductType2["SINGLE_PRODUCT"] = "SingleProduct";
    return FeeProductType2;
  })(FeeProductType || {});

  // lib/models/enums/gender.ts
  var Gender = /* @__PURE__ */ ((Gender2) => {
    Gender2[Gender2["WOMAN"] = 0] = "WOMAN";
    Gender2[Gender2["MAN"] = 1] = "MAN";
    return Gender2;
  })(Gender || {});

  // lib/models/enums/instrumentStateArgument.ts
  var InstrumentStateArgument = /* @__PURE__ */ ((InstrumentStateArgument2) => {
    InstrumentStateArgument2["BOTH"] = "BOTH";
    InstrumentStateArgument2["INACTIVE"] = "INACTIVE";
    return InstrumentStateArgument2;
  })(InstrumentStateArgument || {});

  // lib/models/enums/instrumentType.ts
  var InstrumentType = /* @__PURE__ */ ((InstrumentType2) => {
    InstrumentType2["UNKNOWN"] = "Unknown";
    InstrumentType2["STANDARD"] = "Standard";
    return InstrumentType2;
  })(InstrumentType || {});

  // lib/models/enums/makerTaker.ts
  var MakerTaker = /* @__PURE__ */ ((MakerTaker2) => {
    MakerTaker2[MakerTaker2["Unknown"] = 0] = "Unknown";
    MakerTaker2[MakerTaker2["Maker"] = 1] = "Maker";
    MakerTaker2[MakerTaker2["Taker"] = 2] = "Taker";
    return MakerTaker2;
  })(MakerTaker || {});

  // lib/models/enums/orderFlag.ts
  var OrderFlag = /* @__PURE__ */ ((OrderFlag2) => {
    OrderFlag2["NoAccountRiskCheck"] = "NoAccountRiskCheck";
    OrderFlag2["AddedToBook"] = "AddedToBook";
    OrderFlag2["RemovedFromBook"] = "RemovedFromBook";
    OrderFlag2["PostOnly"] = "PostOnly";
    OrderFlag2["Liquidation"] = "Liquidation";
    OrderFlag2["ReverseMarginPosition"] = "ReverseMarginPosition";
    return OrderFlag2;
  })(OrderFlag || {});

  // lib/models/enums/orderSide.ts
  var OrderSide = /* @__PURE__ */ ((OrderSide2) => {
    OrderSide2[OrderSide2["Buy"] = 0] = "Buy";
    OrderSide2[OrderSide2["Sell"] = 1] = "Sell";
    return OrderSide2;
  })(OrderSide || {});

  // lib/models/enums/orderState.ts
  var OrderState = /* @__PURE__ */ ((OrderState2) => {
    OrderState2["Unknown"] = "Unknown";
    OrderState2["Working"] = "Working";
    OrderState2["Rejected"] = "Rejected";
    OrderState2["Canceled"] = "Canceled";
    OrderState2["Expired"] = "Expired";
    OrderState2["FullyExecuted"] = "Fully Executed";
    return OrderState2;
  })(OrderState || {});

  // lib/models/enums/orderType.ts
  var OrderTypeInt = /* @__PURE__ */ ((OrderTypeInt2) => {
    OrderTypeInt2[OrderTypeInt2["Unknown"] = 0] = "Unknown";
    OrderTypeInt2[OrderTypeInt2["Market"] = 1] = "Market";
    OrderTypeInt2[OrderTypeInt2["Limit"] = 2] = "Limit";
    OrderTypeInt2[OrderTypeInt2["StopMarket"] = 3] = "StopMarket";
    OrderTypeInt2[OrderTypeInt2["StopLimit"] = 4] = "StopLimit";
    OrderTypeInt2[OrderTypeInt2["TrailingStopMarket"] = 5] = "TrailingStopMarket";
    OrderTypeInt2[OrderTypeInt2["TrailingStopLimit"] = 6] = "TrailingStopLimit";
    OrderTypeInt2[OrderTypeInt2["BlockTrade"] = 7] = "BlockTrade";
    return OrderTypeInt2;
  })(OrderTypeInt || {});
  var OrderTypeStr = /* @__PURE__ */ ((OrderTypeStr2) => {
    OrderTypeStr2["Unknown"] = "Unknown";
    OrderTypeStr2["Market"] = "Market";
    OrderTypeStr2["Limit"] = "Limit";
    OrderTypeStr2["StopMarket"] = "StopMarket";
    OrderTypeStr2["StopLimit"] = "StopLimit";
    OrderTypeStr2["TrailingStopMarket"] = "TrailingStopMarket";
    OrderTypeStr2["TrailingStopLimit"] = "TrailingStopLimit";
    OrderTypeStr2["BlockTrade"] = "BlockTrade";
    return OrderTypeStr2;
  })(OrderTypeStr || {});

  // lib/models/enums/pegPriceType.ts
  var PegPriceType = /* @__PURE__ */ ((PegPriceType2) => {
    PegPriceType2[PegPriceType2["Last"] = 1] = "Last";
    PegPriceType2[PegPriceType2["Bid"] = 2] = "Bid";
    PegPriceType2[PegPriceType2["Ask"] = 3] = "Ask";
    PegPriceType2[PegPriceType2["Midpoint"] = 4] = "Midpoint";
    return PegPriceType2;
  })(PegPriceType || {});

  // lib/models/enums/pixType.ts
  var PixType = /* @__PURE__ */ ((PixType2) => {
    PixType2["CPF"] = "CPF";
    PixType2["CNPJ"] = "CNPJ";
    PixType2["EMAIL"] = "Email";
    PixType2["PHONE"] = "Phone";
    PixType2["OTRO"] = "Otro";
    return PixType2;
  })(PixType || {});

  // lib/models/enums/productType.ts
  var ProductType = /* @__PURE__ */ ((ProductType2) => {
    ProductType2["UNKNOWN"] = "Unknown";
    ProductType2["NATIONAL_CURRENCY"] = "NationalCurrency";
    ProductType2["CRYPTO_CURRENCY"] = "CryptoCurrency";
    ProductType2["CONTRACT"] = "Contract";
    return ProductType2;
  })(ProductType || {});

  // lib/models/enums/referenceType.ts
  var ReferenceType = /* @__PURE__ */ ((ReferenceType2) => {
    ReferenceType2["Withdraw"] = "Withdraw";
    return ReferenceType2;
  })(ReferenceType || {});

  // lib/models/enums/reportFlavor.ts
  var ReportFlavor = /* @__PURE__ */ ((ReportFlavor2) => {
    ReportFlavor2["TradeActivity"] = "TradeActivity";
    ReportFlavor2["TransactionActivity"] = "TransactionActivity";
    ReportFlavor2["ProductDelta"] = "ProductDelta";
    ReportFlavor2["ProfitAndLoss"] = "ProfitAndLoss";
    ReportFlavor2["Transaction"] = "Transaction";
    ReportFlavor2["Treasury"] = "Treasury";
    return ReportFlavor2;
  })(ReportFlavor || {});

  // lib/models/enums/reportFrequency.ts
  var ReportFrequency = /* @__PURE__ */ ((ReportFrequency2) => {
    ReportFrequency2["OnDemand"] = "OnDemand";
    ReportFrequency2["Hourly"] = "Hourly";
    ReportFrequency2["Daily"] = "Daily";
    ReportFrequency2["Weekly"] = "Weekly";
    ReportFrequency2["Monthly"] = "Monthly";
    ReportFrequency2["Annually"] = "Annually";
    return ReportFrequency2;
  })(ReportFrequency || {});

  // lib/models/enums/reportRequestStatus.ts
  var ReportRequestStatus = /* @__PURE__ */ ((ReportRequestStatus2) => {
    ReportRequestStatus2["Submitted"] = "Submitted";
    ReportRequestStatus2["Validating"] = "Validating";
    ReportRequestStatus2["Scheduled"] = "Scheduled";
    ReportRequestStatus2["InProgress"] = "InProgress";
    ReportRequestStatus2["Completed"] = "Completed";
    ReportRequestStatus2["Aborting"] = "Aborting";
    ReportRequestStatus2["Aborted"] = "Aborted";
    ReportRequestStatus2["UserCancelled"] = "UserCancelled";
    ReportRequestStatus2["SysRetired"] = "SysRetired";
    ReportRequestStatus2["Pending"] = "Pending";
    ReportRequestStatus2["UserCancelPending"] = "UserCancelPending";
    return ReportRequestStatus2;
  })(ReportRequestStatus || {});

  // lib/models/enums/reportWriterResultStatus.ts
  var ReportWriterResultStatus = /* @__PURE__ */ ((ReportWriterResultStatus2) => {
    ReportWriterResultStatus2["NotStarted"] = "NotStarted";
    ReportWriterResultStatus2["NotComplete"] = "NotComplete";
    ReportWriterResultStatus2["ErrorComplete"] = "ErrorComplete";
    ReportWriterResultStatus2["SuccessComplete"] = "SuccessComplete";
    ReportWriterResultStatus2["Cancelled"] = "Cancelled";
    return ReportWriterResultStatus2;
  })(ReportWriterResultStatus || {});

  // lib/models/enums/riskType.ts
  var RiskType = /* @__PURE__ */ ((RiskType2) => {
    RiskType2["UNKNOWN"] = "Unknown";
    RiskType2["NORMAL"] = "Normal";
    RiskType2["NO_RISK_CHECK"] = "NoRiskCheck";
    RiskType2["NO_TRADING"] = "NoTrading";
    RiskType2["CREDIT"] = "Credit";
    return RiskType2;
  })(RiskType || {});

  // lib/models/enums/sessionStatus.ts
  var SessionStatus = /* @__PURE__ */ ((SessionStatus2) => {
    SessionStatus2["UNKNOWN"] = "Unknown";
    SessionStatus2["RUNNING"] = "Running";
    SessionStatus2["PAUSED"] = "Paused";
    SessionStatus2["STOPPED"] = "Stopped";
    SessionStatus2["STARTING"] = "Starting";
    SessionStatus2["RUNNING_POST_ONLY"] = "RunningPostOnly";
    return SessionStatus2;
  })(SessionStatus || {});

  // lib/models/enums/sideType.ts
  var SideType = /* @__PURE__ */ ((SideType2) => {
    SideType2["BUY"] = "Buy";
    SideType2["SELL"] = "Sell";
    return SideType2;
  })(SideType || {});

  // lib/models/enums/timeInForce.ts
  var TimeInForce = /* @__PURE__ */ ((TimeInForce2) => {
    TimeInForce2[TimeInForce2["Unknown"] = 0] = "Unknown";
    TimeInForce2[TimeInForce2["GTC"] = 1] = "GTC";
    TimeInForce2[TimeInForce2["OPG"] = 2] = "OPG";
    TimeInForce2[TimeInForce2["IOC"] = 3] = "IOC";
    TimeInForce2[TimeInForce2["FOK"] = 4] = "FOK";
    TimeInForce2[TimeInForce2["GTX"] = 5] = "GTX";
    TimeInForce2[TimeInForce2["GTD"] = 6] = "GTD";
    return TimeInForce2;
  })(TimeInForce || {});

  // lib/models/enums/tradeDirection.ts
  var TradeDirection = /* @__PURE__ */ ((TradeDirection2) => {
    TradeDirection2[TradeDirection2["NoChange"] = 0] = "NoChange";
    TradeDirection2[TradeDirection2["Uptick"] = 1] = "Uptick";
    TradeDirection2[TradeDirection2["DownTick"] = 2] = "DownTick";
    return TradeDirection2;
  })(TradeDirection || {});

  // lib/models/enums/tradeSide.ts
  var TradeSide = /* @__PURE__ */ ((TradeSide2) => {
    TradeSide2[TradeSide2["Buy"] = 0] = "Buy";
    TradeSide2[TradeSide2["Sell"] = 1] = "Sell";
    TradeSide2[TradeSide2["Short"] = 2] = "Short";
    TradeSide2[TradeSide2["Unknown"] = 3] = "Unknown";
    return TradeSide2;
  })(TradeSide || {});

  // lib/models/enums/transactionReferenceTypes.ts
  var TransactionReferenceTypes = /* @__PURE__ */ ((TransactionReferenceTypes2) => {
    TransactionReferenceTypes2["Trade"] = "Trade";
    TransactionReferenceTypes2["Deposit"] = "Deposit";
    TransactionReferenceTypes2["Withdraw"] = "Withdraw";
    TransactionReferenceTypes2["Transfer"] = "Transfer";
    TransactionReferenceTypes2["OrderHold"] = "OrderHold";
    TransactionReferenceTypes2["WithdrawHold"] = "WithdrawHold";
    TransactionReferenceTypes2["DepositHold"] = "DepositHold";
    TransactionReferenceTypes2["MarginHold"] = "MarginHold";
    TransactionReferenceTypes2["ManualHold"] = "ManualHold";
    TransactionReferenceTypes2["ManualEntry"] = "ManualEntry";
    TransactionReferenceTypes2["MarginAcquisition"] = "MarginAcquisition";
    TransactionReferenceTypes2["MarginRelinquish"] = "MarginRelinquish";
    TransactionReferenceTypes2["MarginInterestNetting"] = "MarginInterestNetting";
    TransactionReferenceTypes2["MarginOperatorTransferToMarginAccount"] = "MarginOperatorTransferToMarginAccount";
    TransactionReferenceTypes2["MarginOperatorTransferToAssetAccount"] = "MarginOperatorTransferToAssetAccount";
    TransactionReferenceTypes2["MarginUserTransfer"] = "MarginUserTransfer";
    TransactionReferenceTypes2["MarginPositionReverseTrade"] = "MarginPositionReverseTrade";
    TransactionReferenceTypes2["AffiliateRebate"] = "AffiliateRebate";
    TransactionReferenceTypes2["DistributionEntry"] = "DistributionEntry";
    TransactionReferenceTypes2["TransferHold"] = "TransferHold";
    TransactionReferenceTypes2["AirDrop"] = "AirDrop";
    return TransactionReferenceTypes2;
  })(TransactionReferenceTypes || {});

  // lib/models/enums/transactionTypes.ts
  var TransactionTypes = /* @__PURE__ */ ((TransactionTypes2) => {
    TransactionTypes2["Fee"] = "Fee";
    TransactionTypes2["Trade"] = "Trade";
    TransactionTypes2["Other"] = "Other";
    TransactionTypes2["Reverse"] = "Reverse";
    TransactionTypes2["Hold"] = "Hold";
    TransactionTypes2["Rebate"] = "Rebate";
    TransactionTypes2["MarginAcquisition"] = "MarginAcquisition";
    TransactionTypes2["MarginRelinquishByTrade"] = "MarginRelinquishByTrade";
    TransactionTypes2["MarginInterestTransfer"] = "MarginInterestTransfer";
    TransactionTypes2["MarginOperatorTransferToMarginAccount"] = "MarginOperatorTransferToMarginAccount";
    TransactionTypes2["MarginOperatorTransferToAssetAccount"] = "MarginOperatorTransferToAssetAccount";
    TransactionTypes2["MarginUserTransfer"] = "MarginUserTransfer";
    TransactionTypes2["MarginRelinquishByTransfer"] = "MarginRelinquishByTransfer";
    TransactionTypes2["MarginRelinquishByReverseTrade"] = "MarginRelinquishByReverseTrade";
    TransactionTypes2["Distribution"] = "Distribution";
    TransactionTypes2["Payment"] = "Payment";
    TransactionTypes2["OperatorLend"] = "OperatorLend";
    TransactionTypes2["OperatorReceived"] = "OperatorReceived";
    TransactionTypes2["Rebalance"] = "Rebalance";
    TransactionTypes2["Commission"] = "Commission";
    TransactionTypes2["AirDrop"] = "AirDrop";
    return TransactionTypes2;
  })(TransactionTypes || {});

  // lib/models/enums/unsubscribeLevel2ErrorCode.ts
  var UnsubscribeLevel2ErrorCode = /* @__PURE__ */ ((UnsubscribeLevel2ErrorCode2) => {
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["SUCCESS"] = 0] = "SUCCESS";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["NOT_AUTHORIZED"] = 20] = "NOT_AUTHORIZED";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["INVALID_REQUEST"] = 100] = "INVALID_REQUEST";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["OPERATION_FAILED"] = 101] = "OPERATION_FAILED";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["SERVER_ERROR"] = 102] = "SERVER_ERROR";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["RESOURCE_NOT_FOUND"] = 104] = "RESOURCE_NOT_FOUND";
    return UnsubscribeLevel2ErrorCode2;
  })(UnsubscribeLevel2ErrorCode || {});

  // lib/models/enums/unsubscribeTradesError.ts
  var UnsubscribeTradesError = /* @__PURE__ */ ((UnsubscribeTradesError2) => {
    UnsubscribeTradesError2[UnsubscribeTradesError2["NotAuthorized"] = 20] = "NotAuthorized";
    UnsubscribeTradesError2[UnsubscribeTradesError2["InvalidRequest"] = 100] = "InvalidRequest";
    UnsubscribeTradesError2[UnsubscribeTradesError2["OperationFailed"] = 101] = "OperationFailed";
    UnsubscribeTradesError2[UnsubscribeTradesError2["ServerError"] = 102] = "ServerError";
    UnsubscribeTradesError2[UnsubscribeTradesError2["ResourceNotFound"] = 104] = "ResourceNotFound";
    return UnsubscribeTradesError2;
  })(UnsubscribeTradesError || {});

  // lib/models/enums/withdrawErrorCode.ts
  var WithdrawErrorCode = /* @__PURE__ */ ((WithdrawErrorCode2) => {
    WithdrawErrorCode2[WithdrawErrorCode2["NoError"] = 0] = "NoError";
    WithdrawErrorCode2[WithdrawErrorCode2["NotAuthorized"] = 20] = "NotAuthorized";
    WithdrawErrorCode2[WithdrawErrorCode2["InvalidRequest"] = 100] = "InvalidRequest";
    WithdrawErrorCode2[WithdrawErrorCode2["OperationFailed"] = 101] = "OperationFailed";
    WithdrawErrorCode2[WithdrawErrorCode2["ServerError"] = 102] = "ServerError";
    WithdrawErrorCode2[WithdrawErrorCode2["ResourceNotFound"] = 104] = "ResourceNotFound";
    return WithdrawErrorCode2;
  })(WithdrawErrorCode || {});

  // lib/models/enums/withdrawFeeMessages.ts
  var WithdrawFeeMessages = /* @__PURE__ */ ((WithdrawFeeMessages2) => {
    WithdrawFeeMessages2["Success"] = "Fee calculated successfully";
    WithdrawFeeMessages2["InvalidRequest"] = "Invalid Request";
    WithdrawFeeMessages2["AccountOrProductNotFound"] = "Account or Product not found";
    return WithdrawFeeMessages2;
  })(WithdrawFeeMessages || {});

  // lib/models/enums/withdrawTemplateType.ts
  var WithdrawTemplateType = /* @__PURE__ */ ((WithdrawTemplateType2) => {
    WithdrawTemplateType2["ToExternalBitcoinAddress"] = "ToExternalBitcoinAddress";
    WithdrawTemplateType2["ToInternalAccount"] = "ToInternalAccount";
    WithdrawTemplateType2["ToBankAccount"] = "ToBankAccount";
    return WithdrawTemplateType2;
  })(WithdrawTemplateType || {});

  // lib/models/enums/yieldProduct.ts
  var YieldProduct = /* @__PURE__ */ ((YieldProduct2) => {
    YieldProduct2[YieldProduct2["STABLE"] = 0] = "STABLE";
    YieldProduct2[YieldProduct2["VARIABLE"] = 1] = "VARIABLE";
    return YieldProduct2;
  })(YieldProduct || {});

  // lib/models/enums/arProvince.ts
  var ARProvince = /* @__PURE__ */ ((ARProvince2) => {
    ARProvince2[ARProvince2["BUENOS_AIRES"] = 1] = "BUENOS_AIRES";
    ARProvince2[ARProvince2["CATAMARCA"] = 10] = "CATAMARCA";
    ARProvince2[ARProvince2["CHACO"] = 14] = "CHACO";
    ARProvince2[ARProvince2["CHUBUT"] = 20] = "CHUBUT";
    ARProvince2[ARProvince2["CIUDAD_AUTONOMA_DE_BUENOS_AIRES"] = 43] = "CIUDAD_AUTONOMA_DE_BUENOS_AIRES";
    ARProvince2[ARProvince2["CORDOBA"] = 3] = "CORDOBA";
    ARProvince2[ARProvince2["CORRIENTES"] = 15] = "CORRIENTES";
    ARProvince2[ARProvince2["ENTRE_RIOS"] = 5] = "ENTRE_RIOS";
    ARProvince2[ARProvince2["FORMOSA"] = 13] = "FORMOSA";
    ARProvince2[ARProvince2["JUJUY"] = 11] = "JUJUY";
    ARProvince2[ARProvince2["LA_PAMPA"] = 18] = "LA_PAMPA";
    ARProvince2[ARProvince2["LA_RIOJA"] = 9] = "LA_RIOJA";
    ARProvince2[ARProvince2["MENDOZA"] = 4] = "MENDOZA";
    ARProvince2[ARProvince2["MISIONES"] = 16] = "MISIONES";
    ARProvince2[ARProvince2["NEUQUEN"] = 19] = "NEUQUEN";
    ARProvince2[ARProvince2["RIO_NEGRO"] = 21] = "RIO_NEGRO";
    ARProvince2[ARProvince2["SALTA"] = 12] = "SALTA";
    ARProvince2[ARProvince2["SAN_JUAN"] = 7] = "SAN_JUAN";
    ARProvince2[ARProvince2["SAN_LUIS"] = 8] = "SAN_LUIS";
    ARProvince2[ARProvince2["SANTA_CRUZ"] = 22] = "SANTA_CRUZ";
    ARProvince2[ARProvince2["SANTA_FE"] = 2] = "SANTA_FE";
    ARProvince2[ARProvince2["SANTIAGO_DEL_ESTERO"] = 6] = "SANTIAGO_DEL_ESTERO";
    ARProvince2[ARProvince2["TIERRA_DEL_FUEGO_Y_ANTARTIDA_E_ISLAS_DEL_ATLANTICO_SUR"] = 23] = "TIERRA_DEL_FUEGO_Y_ANTARTIDA_E_ISLAS_DEL_ATLANTICO_SUR";
    ARProvince2[ARProvince2["TUCUMAN"] = 17] = "TUCUMAN";
    return ARProvince2;
  })(ARProvince || {});

  // lib/models/enums/clComune.ts
  var CLComune = /* @__PURE__ */ ((CLComune2) => {
    CLComune2["ARICA"] = "Arica";
    CLComune2["CAMARONES"] = "Camarones";
    CLComune2["GENERAL_LAGOS"] = "General Lagos";
    CLComune2["PUTRE"] = "Putre";
    CLComune2["ALTO_HOSPICIO"] = "Alto Hospicio";
    CLComune2["CAMI\xD1A"] = "Cami\xF1a";
    CLComune2["COLCHANE"] = "Colchane";
    CLComune2["HUARA"] = "Huara";
    CLComune2["IQUIQUE"] = "Iquique";
    CLComune2["PICA"] = "Pica";
    CLComune2["POZOALMONTE"] = "Pozo Almonte";
    CLComune2["ANTOFAGASTA"] = "Antofagasta";
    CLComune2["CALAMA"] = "Calama";
    CLComune2["MARIA_ELENA"] = "Mar\xEDa Elena";
    CLComune2["MEJILLONES"] = "Mejillones";
    CLComune2["OLLAG\xDCE"] = "Ollag\xFCe";
    CLComune2["SAN_PEDRO_DE_ATACAMA"] = "San Pedro de Atacama";
    CLComune2["SIERRA_GORDA"] = "Sierra Gorda";
    CLComune2["TALTAL"] = "Taltal";
    CLComune2["TOCOPILLA"] = "Tocopilla";
    CLComune2["ALTO_DEL_CARMEN"] = "Alto del Carmen";
    CLComune2["CALDERA"] = "Caldera";
    CLComune2["CHA\xD1ARAL"] = "Cha\xF1aral";
    CLComune2["COPIAPO"] = "Copiap\xF3";
    CLComune2["DIEGO_DE_ALMAGRO"] = "Diego de Almagro";
    CLComune2["FREIRINA"] = "Freirina";
    CLComune2["HUASCO"] = "Huasco";
    CLComune2["TIERRA_AMARILLA"] = "Tierra Amarilla";
    CLComune2["VALLENAR"] = "Vallenar";
    CLComune2["ANDACOLLO"] = "Andacollo";
    CLComune2["CANELA"] = "Canela";
    CLComune2["COMBARBALA"] = "Combarbal\xE1";
    CLComune2["COQUIMBO"] = "Coquimbo";
    CLComune2["ILLAPEL"] = "Illapel";
    CLComune2["LA_HIGUERA"] = "La Higuera";
    CLComune2["LA_SERENA"] = "La Serena";
    CLComune2["LOS_VILOS"] = "Los Vilos";
    CLComune2["MONTE_PATRIA"] = "Monte Patria";
    CLComune2["OVALLE"] = "Ovalle";
    CLComune2["PAIGUANO"] = "Paiguano";
    CLComune2["PUNITAQUI"] = "Punitaqui";
    CLComune2["RIO_HURTADO"] = "R\xEDo Hurtado";
    CLComune2["SALAMANCA"] = "Salamanca";
    CLComune2["VICU\xD1A"] = "Vicu\xF1a";
    CLComune2["ALGARROBO"] = "Algarrobo";
    CLComune2["CABILDO"] = "Cabildo";
    CLComune2["CALERA"] = "Calera";
    CLComune2["CALLE_LARGA"] = "Calle Larga";
    CLComune2["CARTAGENA"] = "Cartagena";
    CLComune2["CASABLANCA"] = "Casablanca";
    CLComune2["CATEMU"] = "Catemu";
    CLComune2["CONCON"] = "Conc\xF3n";
    CLComune2["EL_QUISCO"] = "El Quisco";
    CLComune2["EL_TABO"] = "El Tabo";
    CLComune2["HIJUELAS"] = "Hijuelas";
    CLComune2["ISLA_DE_PASCUA"] = "Isla de Pascua";
    CLComune2["JUAN_FERNANDEZ"] = "Juan Fern\xE1ndez";
    CLComune2["LA_CRUZ"] = "La Cruz";
    CLComune2["LA_LIGUA"] = "La Ligua";
    CLComune2["LIMACHE"] = "Limache";
    CLComune2["LLAILLAY"] = "Llaillay";
    CLComune2["LOS_ANDES"] = "Los Andes";
    CLComune2["NOGALES"] = "Nogales";
    CLComune2["OLMUE"] = "Olmu\xE9";
    CLComune2["PANQUEHUE"] = "Panquehue";
    CLComune2["PAPUDO"] = "Papudo";
    CLComune2["PETORCA"] = "Petorca";
    CLComune2["PUCHUNCAVI"] = "Puchuncav\xED";
    CLComune2["PUTAENDO"] = "Putaendo";
    CLComune2["QUILLOTA"] = "Quillota";
    CLComune2["QUILPUE"] = "Quilpu\xE9";
    CLComune2["QUINTERO"] = "Quintero";
    CLComune2["RINCONADA"] = "Rinconada";
    CLComune2["SAN_ANTONIO"] = "San Antonio";
    CLComune2["SAN_ESTEBAN"] = "San Esteban";
    CLComune2["SAN_FELIPE"] = "San Felipe";
    CLComune2["SANTA_MARIA"] = "Santa Mar\xEDa";
    CLComune2["SANTO_DOMINGO"] = "Santo Domingo";
    CLComune2["VALPARAISO"] = "Valpara\xEDso";
    CLComune2["VILLA_ALEMANA"] = "Villa Alemana";
    CLComune2["VI\xD1A_DEL_MAR"] = "Vi\xF1a del Mar";
    CLComune2["ZAPALLAR"] = "Zapallar";
    CLComune2["ALHUE"] = "Alhu\xE9";
    CLComune2["BUIN"] = "Buin";
    CLComune2["CALERA_DE_TANGO"] = "Calera de Tango";
    CLComune2["CERRILLOS"] = "Cerrillos";
    CLComune2["CERRO_NAVIA"] = "Cerro Navia";
    CLComune2["COLINA"] = "Colina";
    CLComune2["CONCHALI"] = "Conchal\xED";
    CLComune2["CURACAVI"] = "Curacav\xED";
    CLComune2["EL_BOSQUE"] = "El Bosque";
    CLComune2["EL_MONTE"] = "El Monte";
    CLComune2["ESTACION_CENTRAL"] = "Estaci\xF3n Central";
    CLComune2["HUECHURABA"] = "Huechuraba";
    CLComune2["INDEPENDENCIA"] = "Independencia";
    CLComune2["ISLA_DE_MAIPO"] = "Isla de Maipo";
    CLComune2["LA_CISTERNA"] = "La Cisterna";
    CLComune2["LA_FLORIDA"] = "La Florida";
    CLComune2["LA_GRANJA"] = "La Granja";
    CLComune2["LA_PINTANA"] = "La Pintana";
    CLComune2["LA_REINA"] = "La Reina";
    CLComune2["LAMPA"] = "Lampa";
    CLComune2["LAS_CONDES"] = "Las Condes";
    CLComune2["LO_BARNECHEA"] = "Lo Barnechea";
    CLComune2["LO_ESPEJO"] = "Lo Espejo";
    CLComune2["LO_PRADO"] = "Lo Prado";
    CLComune2["MACUL"] = "Macul";
    CLComune2["MAIPU"] = "Maip\xFA";
    CLComune2["MARIA_PINTO"] = "Mar\xEDa Pinto";
    CLComune2["MELIPILLA"] = "Melipilla";
    CLComune2["\xD1U\xD1OA"] = "\xD1u\xF1oa";
    CLComune2["PADRE_HURTADO"] = "Padre Hurtado";
    CLComune2["PAINE"] = "Paine";
    CLComune2["PEDRO_AGUIRRE_CERDA"] = "Pedro Aguirre Cerda";
    CLComune2["PE\xD1AFLOR"] = "Pe\xF1aflor";
    CLComune2["PE\xD1ALOLEN"] = "Pe\xF1alol\xE9n";
    CLComune2["PIRQUE"] = "Pirque";
    CLComune2["PROVIDENCIA"] = "Providencia";
    CLComune2["PUDAHUEL"] = "Pudahuel";
    CLComune2["PUENTE_ALTO"] = "Puente Alto";
    CLComune2["QUILICURA"] = "Quilicura";
    CLComune2["QUINTA_NORMAL"] = "Quinta Normal";
    CLComune2["RECOLETA"] = "Recoleta";
    CLComune2["RENCA"] = "Renca";
    CLComune2["SAN_BERNARDO"] = "San Bernardo";
    CLComune2["SAN_JOAQUIN"] = "San Joaqu\xEDn";
    CLComune2["SAN_JOSE_DE_MAIPO"] = "San Jos\xE9 de Maipo";
    CLComune2["SAN_MIGUEL"] = "San Miguel";
    CLComune2["SAN_PEDRO"] = "San Pedro";
    CLComune2["SAN_RAMON"] = "San Ram\xF3n";
    CLComune2["SANTIAGO"] = "Santiago";
    CLComune2["TALAGANTE"] = "Talagante";
    CLComune2["TILTIL"] = "Tiltil";
    CLComune2["VITACURA"] = "Vitacura";
    CLComune2["CHIMBARONGO"] = "Chimbarongo";
    CLComune2["CH\xC9PICA"] = "Ch\xE9pica";
    CLComune2["CODEGUA"] = "Codegua";
    CLComune2["COINCO"] = "Coinco";
    CLComune2["COLTAUCO"] = "Coltauco";
    CLComune2["DO\xD1IHUE"] = "Do\xF1ihue";
    CLComune2["GRANEROS"] = "Graneros";
    CLComune2["LA_ESTRELLA"] = "La Estrella";
    CLComune2["LAS_CABRAS"] = "Las Cabras";
    CLComune2["LITUECHE"] = "Litueche";
    CLComune2["LOLOL"] = "Lolol";
    CLComune2["MACHALI"] = "Machal\xED";
    CLComune2["MALLOA"] = "Malloa";
    CLComune2["MARCHIHUE"] = "Marchihue";
    CLComune2["NANCAGUA"] = "Nancagua";
    CLComune2["NAVIDAD"] = "Navidad";
    CLComune2["OLIVAR"] = "Olivar";
    CLComune2["PALMILLA"] = "Palmilla";
    CLComune2["PAREDONES"] = "Paredones";
    CLComune2["PERALILLO"] = "Peralillo";
    CLComune2["PEUMO"] = "Peumo";
    CLComune2["PICHIDEGUA"] = "Pichidegua";
    CLComune2["PICHILEMU"] = "Pichilemu";
    CLComune2["PLACILLA"] = "Placilla";
    CLComune2["PUMANQUE"] = "Pumanque";
    CLComune2["QUINTA_DE_TILCOCO"] = "Quinta de Tilcoco";
    CLComune2["RANCAGUA"] = "Rancagua";
    CLComune2["RENGO"] = "Rengo";
    CLComune2["REQUINOA"] = "Requ\xEDnoa";
    CLComune2["SAN_FERNANDO"] = "San Fernando";
    CLComune2["SAN_FRANCISCO_DE_MOSTAZAL"] = "San Francisco de Mostazal";
    CLComune2["SAN_VICENTE_DE_TAGUA_TAGUA"] = "San Vicente de Tagua Tagua";
    CLComune2["SANTA_CRUZ"] = "Santa Cruz";
    CLComune2["CAUQUENES"] = "Cauquenes";
    CLComune2["CHANCO"] = "Chanco";
    CLComune2["COLBUN"] = "Colb\xFAn";
    CLComune2["CONSTITUCION"] = "Constituci\xF3n";
    CLComune2["CUREPTO"] = "Curepto";
    CLComune2["CURICO"] = "Curic\xF3";
    CLComune2["EMPEDRADO"] = "Empedrado";
    CLComune2["HUALA\xD1E"] = "Huala\xF1\xE9";
    CLComune2["LICANTEN"] = "Licant\xE9n";
    CLComune2["LINARES"] = "Linares";
    CLComune2["LONGAVI"] = "Longav\xED";
    CLComune2["MAULE"] = "Maule";
    CLComune2["MOLINA"] = "Molina";
    CLComune2["PARRAL"] = "Parral";
    CLComune2["PELARCO"] = "Pelarco";
    CLComune2["PELLUHUE"] = "Pelluhue";
    CLComune2["PENCAHUE"] = "Pencahue";
    CLComune2["RAUCO"] = "Rauco";
    CLComune2["RETIRO"] = "Retiro";
    CLComune2["ROMERAL"] = "Romeral";
    CLComune2["RIO_CLARO"] = "R\xEDo Claro";
    CLComune2["SAGRADA_FAMILIA"] = "Sagrada Familia";
    CLComune2["SAN_CLEMENTE"] = "San Clemente";
    CLComune2["SAN_JAVIER_DE_LONCOMILLA"] = "San Javier de Loncomilla";
    CLComune2["SAN_RAFAEL"] = "San Rafael";
    CLComune2["TALCA"] = "Talca";
    CLComune2["TENO"] = "Teno";
    CLComune2["VICHUQUEN"] = "Vichuqu\xE9n";
    CLComune2["VILLA_ALEGRE"] = "Villa Alegre";
    CLComune2["YERBAS_BUENAS"] = "Yerbas Buenas";
    CLComune2["BULNES"] = "Bulnes";
    CLComune2["CHILLAN_VIEJO"] = "Chill\xE1n Viejo";
    CLComune2["CHILLAN"] = "Chill\xE1n";
    CLComune2["COBQUECURA"] = "Cobquecura";
    CLComune2["COELEMU"] = "Coelemu";
    CLComune2["COIHUECO"] = "Coihueco";
    CLComune2["EL_CARMEN"] = "El Carmen";
    CLComune2["NINHUE"] = "Ninhue";
    CLComune2["\xD1IQUEN"] = "\xD1iqu\xE9n";
    CLComune2["PEMUCO"] = "Pemuco";
    CLComune2["PINTO"] = "Pinto";
    CLComune2["PORTEZUELO"] = "Portezuelo";
    CLComune2["QUILLON"] = "Quill\xF3n";
    CLComune2["QUIRIHUE"] = "Quirihue";
    CLComune2["RANQUIL"] = "R\xE1nquil";
    CLComune2["SAN_CARLOS"] = "San Carlos";
    CLComune2["SAN_FABIAN"] = "San Fabi\xE1n";
    CLComune2["SAN_IGNACIO"] = "San Ignacio";
    CLComune2["SAN_NICOLAS"] = "San Nicol\xE1s";
    CLComune2["TREGUACO"] = "Treguaco";
    CLComune2["YUNGAY"] = "Yungay";
    CLComune2["ALTO_BIOBIO"] = "Alto Biob\xEDo";
    CLComune2["ANTUCO"] = "Antuco";
    CLComune2["ARAUCO"] = "Arauco";
    CLComune2["CABRERO"] = "Cabrero";
    CLComune2["CA\xD1ETE"] = "Ca\xF1ete";
    CLComune2["CHIGUAYANTE"] = "Chiguayante";
    CLComune2["CONCEPCION"] = "Concepci\xF3n";
    CLComune2["CONTULMO"] = "Contulmo";
    CLComune2["CORONEL"] = "Coronel";
    CLComune2["CURANILAHUE"] = "Curanilahue";
    CLComune2["FLORIDA"] = "Florida";
    CLComune2["HUALPEN"] = "Hualp\xE9n";
    CLComune2["HUALQUI"] = "Hualqui";
    CLComune2["LAJA"] = "Laja";
    CLComune2["LEBU"] = "Lebu";
    CLComune2["LOS_ALAMOS"] = "Los \xC1lamos";
    CLComune2["LOS_ANGELES"] = "Los \xC1ngeles";
    CLComune2["LOTA"] = "Lota";
    CLComune2["MULCHEN"] = "Mulch\xE9n";
    CLComune2["NACIMIENTO"] = "Nacimiento";
    CLComune2["NEGRETE"] = "Negrete";
    CLComune2["PENCO"] = "Penco";
    CLComune2["QUILACO"] = "Quilaco";
    CLComune2["QUILLECO"] = "Quilleco";
    CLComune2["SAN_PEDRO_DE_LA_PAZ"] = "San Pedro de la Paz";
    CLComune2["SAN_ROSENDO"] = "San Rosendo";
    CLComune2["SANTA_BARBARA"] = "Santa B\xE1rbara";
    CLComune2["SANTA_JUANA"] = "Santa Juana";
    CLComune2["TALCAHUANO"] = "Talcahuano";
    CLComune2["TIRUA"] = "Tir\xFAa";
    CLComune2["TOME"] = "Tom\xE9";
    CLComune2["TUCAPEL"] = "Tucapel";
    CLComune2["YUMBEL"] = "Yumbel";
    CLComune2["ANGOL"] = "Angol";
    CLComune2["CARAHUE"] = "Carahue";
    CLComune2["CHOLCHOL"] = "Cholchol";
    CLComune2["COLLIPULLI"] = "Collipulli";
    CLComune2["CUNCO"] = "Cunco";
    CLComune2["CURACAUTIN"] = "Curacaut\xEDn";
    CLComune2["CURARREHUE"] = "Curarrehue";
    CLComune2["ERCILLA"] = "Ercilla";
    CLComune2["FREIRE"] = "Freire";
    CLComune2["GALVARINO"] = "Galvarino";
    CLComune2["GORBEA"] = "Gorbea";
    CLComune2["LAUTARO"] = "Lautaro";
    CLComune2["LONCOCHE"] = "Loncoche";
    CLComune2["LONQUIMAY"] = "Lonquimay";
    CLComune2["LOS_SAUCES"] = "Los Sauces";
    CLComune2["LUMACO"] = "Lumaco";
    CLComune2["MELIPEUCO"] = "Melipeuco";
    CLComune2["NUEVA_IMPERIAL"] = "Nueva Imperial";
    CLComune2["PADRE_LAS_CASAS"] = "Padre las Casas";
    CLComune2["PERQUENCO"] = "Perquenco";
    CLComune2["PITRUFQUEN"] = "Pitrufqu\xE9n";
    CLComune2["PUC\xD3N"] = "Puc\xF3n";
    CLComune2["PUREN"] = "Pur\xE9n";
    CLComune2["RENAICO"] = "Renaico";
    CLComune2["SAAVEDRA"] = "Saavedra";
    CLComune2["TEMUCO"] = "Temuco";
    CLComune2["TEODORO_SCHMIDT"] = "Teodoro Schmidt";
    CLComune2["TOLTEN"] = "Tolt\xE9n";
    CLComune2["TRAIGUEN"] = "Traigu\xE9n";
    CLComune2["VICTORIA"] = "Victoria";
    CLComune2["VILCUN"] = "Vilc\xFAn";
    CLComune2["VILLARRICA"] = "Villarrica";
    CLComune2["CORRAL"] = "Corral";
    CLComune2["FUTRONO"] = "Futrono";
    CLComune2["LA_UNION"] = "La Uni\xF3n";
    CLComune2["LAGO_RANCO"] = "Lago Ranco";
    CLComune2["LANCO"] = "Lanco";
    CLComune2["LOS_LAGOS"] = "Los Lagos";
    CLComune2["MARIQUINA"] = "Mariquina";
    CLComune2["MAFIL"] = "M\xE1fil";
    CLComune2["PAILLACO"] = "Paillaco";
    CLComune2["PANGUIPULLI"] = "Panguipulli";
    CLComune2["RIO_BUENO"] = "R\xEDo Bueno";
    CLComune2["VALDIVIA"] = "Valdivia";
    CLComune2["ANCUD"] = "Ancud";
    CLComune2["CALBUCO"] = "Calbuco";
    CLComune2["CASTRO"] = "Castro";
    CLComune2["CHAITEN"] = "Chait\xE9n";
    CLComune2["CHONCHI"] = "Chonchi";
    CLComune2["COCHAMO"] = "Cocham\xF3";
    CLComune2["CURACO_DE_VELEZ"] = "Curaco de V\xE9lez";
    CLComune2["DALCAHUE"] = "Dalcahue";
    CLComune2["FRESIA"] = "Fresia";
    CLComune2["FRUTILLAR"] = "Frutillar";
    CLComune2["FUTALEUFU"] = "Futaleuf\xFA";
    CLComune2["HUALAIHUE"] = "Hualaihu\xE9";
    CLComune2["LLANQUIHUE"] = "Llanquihue";
    CLComune2["LOS_MUERMOS"] = "Los Muermos";
    CLComune2["MAULLIN"] = "Maull\xEDn";
    CLComune2["OSORNO"] = "Osorno";
    CLComune2["PALENA"] = "Palena";
    CLComune2["PUERTO_MONTT"] = "Puerto Montt";
    CLComune2["PUERTO_OCTAY"] = "Puerto Octay";
    CLComune2["PUERTO_VARAS"] = "Puerto Varas";
    CLComune2["PUQUELDON"] = "Puqueld\xF3n";
    CLComune2["PURRANQUE"] = "Purranque";
    CLComune2["PUYEHUE"] = "Puyehue";
    CLComune2["QUEILEN"] = "Queil\xE9n";
    CLComune2["QUELLON"] = "Quell\xF3n";
    CLComune2["QUEMCHI"] = "Quemchi";
    CLComune2["QUINCHAO"] = "Quinchao";
    CLComune2["RIO_NEGRO"] = "R\xEDo Negro";
    CLComune2["SAN_JUAN_DE_LA_COSTA"] = "San Juan de la Costa";
    CLComune2["SAN_PABLO"] = "San Pablo";
    CLComune2["AIS\xC9N"] = "Ais\xE9n";
    CLComune2["CHILE_CHICO"] = "Chile Chico";
    CLComune2["CISNES"] = "Cisnes";
    CLComune2["COCHRANE"] = "Cochrane";
    CLComune2["COIHAIQUE"] = "Coihaique";
    CLComune2["GUAITECAS"] = "Guaitecas";
    CLComune2["LAGO_VERDE"] = "Lago Verde";
    CLComune2["O_HIGGINS"] = "O\u2019Higgins";
    CLComune2["RIO_IBA\xD1EZ"] = "R\xEDo Ib\xE1\xF1ez";
    CLComune2["TORTEL"] = "Tortel";
    CLComune2["ANTARTICA"] = "Ant\xE1rtica";
    CLComune2["CABO_DE_HORNOS_EX_NAVARINO"] = "Cabo de Hornos (Ex Navarino)";
    CLComune2["LAGUNA_BLANCA"] = "Laguna Blanca";
    CLComune2["NATALES"] = "Natales";
    CLComune2["PORVENIR"] = "Porvenir";
    CLComune2["PRIMAVERA"] = "Primavera";
    CLComune2["PUNTA_ARENAS"] = "Punta Arenas";
    CLComune2["RIO_VERDE"] = "R\xEDo Verde";
    CLComune2["SAN_GREGORIO"] = "San Gregorio";
    CLComune2["TIMAUKEL"] = "Timaukel";
    CLComune2["TORRES_DEL_PAIN"] = "Torres del Paine";
    return CLComune2;
  })(CLComune || {});

  // lib/models/enums/brState.ts
  var BRState = /* @__PURE__ */ ((BRState2) => {
    BRState2["RONDONIA"] = "RO";
    BRState2["ACRE"] = "AC";
    BRState2["AMAZONAS"] = "AM";
    BRState2["RORAIMA"] = "RR";
    BRState2["PARA"] = "PA";
    BRState2["AMAPA"] = "AP";
    BRState2["TOCANTINS"] = "TO";
    BRState2["MARANHAO"] = "MA";
    BRState2["PIAUI"] = "PI";
    BRState2["CEARA"] = "CE";
    BRState2["RIO_GRANDE_DO_NORTE"] = "RN";
    BRState2["PARAIBA"] = "PB";
    BRState2["PERNAMBUCO"] = "PE";
    BRState2["ALAGOAS"] = "AL";
    BRState2["SERGIPE"] = "SE";
    BRState2["BAHIA"] = "BA";
    BRState2["MINAS_GERAIS"] = "MG";
    BRState2["ESP\xCDRITO_SANTO"] = "ES";
    BRState2["RIO_DE_JANEIRO"] = "RJ";
    BRState2["SAO_PAULO"] = "SP";
    BRState2["PARANA"] = "PR";
    BRState2["SANTA_CATARINA"] = "SC";
    BRState2["RIO_GRANDE_DO_SUL"] = "RS";
    BRState2["MATO_GROSSO_DO_SUL"] = "MS";
    BRState2["MATO_GROSSO"] = "MT";
    BRState2["GOIAS"] = "GO";
    BRState2["DISTRITO_FEDERAL"] = "DF";
    return BRState2;
  })(BRState || {});

  // lib/models/enums/profession.ts
  var Profession = /* @__PURE__ */ ((Profession2) => {
    Profession2["TRADER"] = "trader";
    Profession2["INVESTOR"] = "investor";
    Profession2["STUDENT"] = "student";
    Profession2["HOUSEWIFE"] = "housewife";
    Profession2["ACCOUNTANT"] = "accountant";
    Profession2["ACTOR_ACTRESS"] = "actor_actress";
    Profession2["AIR_HOSTESS"] = "air_hostess";
    Profession2["ARCHAEOLOGIST"] = "archaeologist";
    Profession2["ARCHITECT"] = "architect";
    Profession2["ASTRONAUT"] = "astronaut";
    Profession2["BAKER"] = "baker";
    Profession2["BIOLOGIST"] = "biologist";
    Profession2["BRICKLAYER"] = "bricklayer";
    Profession2["DRIVER"] = "driver";
    Profession2["BUSINESSMAN"] = "businessman";
    Profession2["BUTCHER"] = "butcher";
    Profession2["CARETAKER_JANITOR_PORTER"] = "caretaker_janitor_porter";
    Profession2["CARPENTER"] = "carpenter";
    Profession2["CASHIER"] = "cashier";
    Profession2["CLEANER"] = "cleaner";
    Profession2["CLOWN"] = "clown";
    Profession2["COBBLER"] = "cobbler";
    Profession2["COOK_CHEF"] = "cook_chef";
    Profession2["CHEMIST"] = "chemist";
    Profession2["DANCER"] = "dancer";
    Profession2["DECORATOR"] = "decorator";
    Profession2["DENTIST"] = "dentist";
    Profession2["DESIGNER"] = "designer";
    Profession2["PHYSICIAN"] = "physician";
    Profession2["DRESSMAKER"] = "dressmaker";
    Profession2["DUSTMAN"] = "dustman";
    Profession2["ECONOMIST"] = "economist";
    Profession2["ELECTRICIAN"] = "electrician";
    Profession2["ENGINEER"] = "engineer";
    Profession2["FARMER"] = "farmer";
    Profession2["FIREMAN"] = "fireman";
    Profession2["FISHERMAN"] = "fisherman";
    Profession2["FLORIST"] = "florist";
    Profession2["FRUITERER"] = "fruiterer";
    Profession2["GARDENER"] = "gardener";
    Profession2["GEOLOGIST"] = "geologist";
    Profession2["HAIRDRESSER"] = "hairdresser";
    Profession2["JEWELLER"] = "jeweller";
    Profession2["JOURNALIST"] = "journalist";
    Profession2["JUDGE"] = "judge";
    Profession2["LAWYER"] = "lawyer";
    Profession2["LIBRARIAN"] = "librarian";
    Profession2["LIFE_GUARD"] = "life_guard";
    Profession2["MAILMAN_POSTMAN"] = "mailman_postman";
    Profession2["MECHANIC"] = "mechanic";
    Profession2["METEOROLOGIST"] = "meteorologist";
    Profession2["CRYPTOCURRENCY_MINER"] = "cryptocurrency_miner";
    Profession2["MINERAL_MINER"] = "mineral_miner";
    Profession2["MODEL"] = "model";
    Profession2["NANNY_NURSEMAID"] = "nanny_nursemaid";
    Profession2["NUN"] = "nun";
    Profession2["NURSE"] = "nurse";
    Profession2["PAINTER"] = "painter";
    Profession2["PASTRY_COOK"] = "pastry_cook";
    Profession2["PHARMACIST"] = "pharmacist";
    Profession2["PHOTOGRAPHER"] = "photographer";
    Profession2["PHYSICIST"] = "physicist";
    Profession2["PLUMBER"] = "plumber";
    Profession2["POLICEMAN_POLICEWOMAN"] = "policeman_policewoman";
    Profession2["POLITICIAN"] = "politician";
    Profession2["PRIEST"] = "priest";
    Profession2["PROFESSOR_TEACHER"] = "professor_teacher";
    Profession2["PROGRAMMER"] = "programmer";
    Profession2["PSYCHIATRIST"] = "psychiatrist";
    Profession2["PSYCHOLOGIST"] = "psychologist";
    Profession2["RECEPTIONIST"] = "receptionist";
    Profession2["RESEARCHER_SCIENTIST"] = "researcher_scientist";
    Profession2["SAILOR"] = "sailor";
    Profession2["SALESMAN"] = "salesman";
    Profession2["SECRETARY"] = "secretary";
    Profession2["SHOP_ASSISTANT"] = "shop_assistant";
    Profession2["SINGER"] = "singer";
    Profession2["SOCIAL_WORKER"] = "social_worker";
    Profession2["SPORTSMAN"] = "sportsman";
    Profession2["SURGEON"] = "surgeon";
    Profession2["TAXI_DRIVER"] = "taxi_driver";
    Profession2["TELEPHONE_OPERATOR"] = "telephone_operator";
    Profession2["TRAVEL_AGENT"] = "travel_agent";
    Profession2["VETERINARIAN"] = "veterinarian";
    Profession2["WAITER_WAITRESS"] = "waiter_waitress";
    Profession2["WRITER"] = "writer";
    Profession2["DELIVERYMAN"] = "deliveryman";
    Profession2["UBER_DRIVER"] = "uber_driver";
    Profession2["PILOT"] = "pilot";
    Profession2["ADMINISTRATIVE"] = "administrative";
    Profession2["PUBLIC_SERVANT"] = "public_servant";
    Profession2["OTHER"] = "other";
    Profession2["CUSTOMER_CARE"] = "customer_care";
    Profession2["MILITARY"] = "military";
    Profession2["MANAGER_OFFICIER"] = "manager_officier";
    return Profession2;
  })(Profession || {});

  // lib/models/enums/intTransactionType.ts
  var IntTransactionType = /* @__PURE__ */ ((IntTransactionType2) => {
    IntTransactionType2[IntTransactionType2["OTHER"] = 0] = "OTHER";
    IntTransactionType2[IntTransactionType2["DEPOSIT"] = 1] = "DEPOSIT";
    IntTransactionType2[IntTransactionType2["WITHDRAW"] = 2] = "WITHDRAW";
    IntTransactionType2[IntTransactionType2["TRANSFER"] = 3] = "TRANSFER";
    IntTransactionType2[IntTransactionType2["TRADE"] = 4] = "TRADE";
    IntTransactionType2[IntTransactionType2["PAYMENT"] = 5] = "PAYMENT";
    IntTransactionType2[IntTransactionType2["RECTIFICATION"] = 6] = "RECTIFICATION";
    IntTransactionType2[IntTransactionType2["FEE"] = 7] = "FEE";
    IntTransactionType2[IntTransactionType2["REVERSE"] = 8] = "REVERSE";
    IntTransactionType2[IntTransactionType2["HOLD"] = 9] = "HOLD";
    IntTransactionType2[IntTransactionType2["MARGIN"] = 10] = "MARGIN";
    IntTransactionType2[IntTransactionType2["AIRDROP"] = 11] = "AIRDROP";
    IntTransactionType2[IntTransactionType2["DISTRIBUTION"] = 12] = "DISTRIBUTION";
    return IntTransactionType2;
  })(IntTransactionType || {});

  // lib/models/enums/intTransactionSubType.ts
  var IntTransactionSubType = /* @__PURE__ */ ((IntTransactionSubType2) => {
    IntTransactionSubType2[IntTransactionSubType2["OTHER"] = 0] = "OTHER";
    IntTransactionSubType2[IntTransactionSubType2["PAYOUT"] = 1] = "PAYOUT";
    IntTransactionSubType2[IntTransactionSubType2["PAYIN"] = 2] = "PAYIN";
    IntTransactionSubType2[IntTransactionSubType2["DEPOSIT"] = 3] = "DEPOSIT";
    IntTransactionSubType2[IntTransactionSubType2["WITHDRAW"] = 4] = "WITHDRAW";
    IntTransactionSubType2[IntTransactionSubType2["BANK_TO_EXCHANGE"] = 5] = "BANK_TO_EXCHANGE";
    IntTransactionSubType2[IntTransactionSubType2["EXCHANGE_TO_BANK"] = 6] = "EXCHANGE_TO_BANK";
    IntTransactionSubType2[IntTransactionSubType2["TRADE"] = 7] = "TRADE";
    IntTransactionSubType2[IntTransactionSubType2["PAYMENT"] = 8] = "PAYMENT";
    IntTransactionSubType2[IntTransactionSubType2["SIMPLE"] = 9] = "SIMPLE";
    IntTransactionSubType2[IntTransactionSubType2["RECTIFICATION"] = 10] = "RECTIFICATION";
    IntTransactionSubType2[IntTransactionSubType2["TRANSFER"] = 11] = "TRANSFER";
    IntTransactionSubType2[IntTransactionSubType2["HOLD"] = 12] = "HOLD";
    IntTransactionSubType2[IntTransactionSubType2["MARGIN"] = 13] = "MARGIN";
    IntTransactionSubType2[IntTransactionSubType2["AIRDROP"] = 14] = "AIRDROP";
    IntTransactionSubType2[IntTransactionSubType2["ORDER"] = 15] = "ORDER";
    IntTransactionSubType2[IntTransactionSubType2["DISTRIBUTION_ENTRY"] = 16] = "DISTRIBUTION_ENTRY";
    return IntTransactionSubType2;
  })(IntTransactionSubType || {});

  // lib/models/response/getAccountFees.ts
  var FeeCalcType = /* @__PURE__ */ ((FeeCalcType2) => {
    FeeCalcType2["Flat"] = "Flat";
    FeeCalcType2["Percentage"] = "Percentage";
    return FeeCalcType2;
  })(FeeCalcType || {});
  var FeeType = /* @__PURE__ */ ((FeeType2) => {
    FeeType2["Flat"] = "Flat";
    FeeType2["MakerFee"] = "MakerFee";
    FeeType2["TakerFee"] = "TakerFee";
    FeeType2["PeggedProductFee"] = "PeggedProductFee";
    FeeType2["AffiliateFee"] = "AffiliateFee";
    return FeeType2;
  })(FeeType || {});

  // lib/models/response/orderBook.ts
  function orderbookFromRaw(raw) {
    return {
      timestamp: raw.timestamp,
      bids: raw.bids.map((level) => {
        return { quantity: level[0], price: level[1] };
      }),
      asks: raw.asks.map((level) => {
        return { quantity: level[0], price: level[1] };
      })
    };
  }

  // lib/models/response/institutionalMember.ts
  var InstitutionalMember = class {
  };

  // lib/models/notbankError.ts
  var _NotbankError = class _NotbankError extends Error {
    constructor(message, code) {
      super("Notbank Error. " + message);
      this.code = code;
    }
  };
  _NotbankError.Factory = class Factory {
    static createFromApResponse(standardResponse) {
      var errMsg = "";
      if (standardResponse.errorcode) {
        errMsg += `(code=${standardResponse.errorcode})`;
      }
      if (standardResponse.errormsg) {
        errMsg += " " + standardResponse.errormsg + ".";
      }
      if (standardResponse.detail) {
        errMsg += " " + standardResponse.detail + ".";
      }
      return new _NotbankError(
        errMsg,
        standardResponse.errorcode || standardResponse.statusCode
      );
    }
    static createFromNbResponse(standardResponse, httpStatus) {
      var errMsg = `(http status=${httpStatus}) `;
      if (standardResponse.status) {
        errMsg += `(status=${standardResponse.status}) `;
      }
      if (standardResponse.code) {
        errMsg += `(code=${standardResponse.code}) `;
      }
      if (standardResponse.message) {
        errMsg += standardResponse.message;
        if (!standardResponse.message.endsWith(".")) {
          errMsg += ".";
        }
      }
      if (standardResponse.detail) {
        errMsg += " " + standardResponse.detail;
        if (!standardResponse.detail.endsWith(".")) {
          errMsg += ".";
        }
      }
      return new _NotbankError(errMsg, -1);
    }
  };
  var NotbankError = _NotbankError;

  // lib/models/subscriptionResponse.ts
  var UnsubscriptionResponse = class {
  };

  // lib/models/unsubscriptionResponse.ts
  var SubscriptionResponse = class {
  };

  // lib/core/hmac.ts
  var import_crypto = __toESM(__require("crypto"), 1);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getNonce() {
    return getRandomInt(1e6).toString();
  }
  function sign(apiPublicKey, apiSecretKey, userId, nonce) {
    var message = nonce + userId + apiPublicKey;
    const hmac256 = import_crypto.default.createHmac("sha256", apiSecretKey);
    hmac256.update(message);
    return hmac256.digest("hex");
  }

  // lib/constants/errorCode.ts
  var ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
    ErrorCode2[ErrorCode2["UNDEFINED"] = -1] = "UNDEFINED";
    ErrorCode2[ErrorCode2["NOT_AN_ERROR"] = 0] = "NOT_AN_ERROR";
    ErrorCode2[ErrorCode2["NOT_AUTHORIZED"] = 20] = "NOT_AUTHORIZED";
    ErrorCode2[ErrorCode2["INVALID_RESPONSE"] = 100] = "INVALID_RESPONSE";
    ErrorCode2[ErrorCode2["OPERATION_FAILED"] = 101] = "OPERATION_FAILED";
    ErrorCode2[ErrorCode2["SERVER_ERROR"] = 102] = "SERVER_ERROR";
    ErrorCode2[ErrorCode2["RESOURCE_NOT_FOUND"] = 104] = "RESOURCE_NOT_FOUND";
    ErrorCode2[ErrorCode2["OPERATION_IN_PROCESS"] = 107] = "OPERATION_IN_PROCESS";
    return ErrorCode2;
  })(ErrorCode || {});
  var errorCode_default = ErrorCode;

  // lib/core/http/apResponseHandler.ts
  var _ApResponseHandler_static, getJsonData_fn;
  var _ApResponseHandler = class _ApResponseHandler {
    static handle(response) {
      return __async(this, null, function* () {
        var _a;
        if (response.status >= 300 || response.status < 200) {
          throw new Error(
            `http error (${response.status}) not a successfull response. ${yield response.data}`
          );
        }
        var jsonResponse = __privateMethod(_a = _ApResponseHandler, _ApResponseHandler_static, getJsonData_fn).call(_a, response);
        if (!jsonResponse) {
          throw new NotbankError("http error. (status=" + response.status + ")", -1);
        }
        var standardResponse = jsonResponse;
        if ((standardResponse == null ? void 0 : standardResponse.result) === false && (standardResponse == null ? void 0 : standardResponse.errorcode) != null && !(standardResponse.errorcode == errorCode_default.OPERATION_IN_PROCESS && standardResponse.errormsg === "Operation In Process")) {
          throw NotbankError.Factory.createFromApResponse(standardResponse);
        }
        return jsonResponse;
      });
    }
  };
  _ApResponseHandler_static = new WeakSet();
  getJsonData_fn = function(response) {
    try {
      return response.data;
    } catch (err) {
      return null;
    }
  };
  __privateAdd(_ApResponseHandler, _ApResponseHandler_static);
  var ApResponseHandler = _ApResponseHandler;

  // node_modules/formdata-node/lib/browser.js
  var globalObject = function() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    return window;
  }();
  var { FormData: FormData2, Blob: Blob2, File } = globalObject;

  // lib/core/http/formDataBuilder.ts
  var FormDataBuilder = class {
    static build(data) {
      const formData = new FormData2();
      data.fields.map(([fieldName, field]) => {
        typeof field === "string" ? formData.append(fieldName, field) : formData.append(fieldName, JSON.stringify(field));
      });
      data.files.map(([fileName, file]) => formData.append(fileName, file));
      Object.keys(data.message).map((key) => {
        formData.append(key, data.message[key]);
      });
      return formData;
    }
  };

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var { iterator, toStringTag } = Symbol;
  var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(toStringTag in val) && !(iterator in val);
  };
  var isEmptyObject = (val) => {
    if (!isObject(val) || isBuffer(val)) {
      return false;
    }
    try {
      return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
    } catch (e) {
      return false;
    }
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      if (isBuffer(obj)) {
        return;
      }
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    if (isBuffer(obj)) {
      return null;
    }
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (() => {
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const { caseless, skipUndefined } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else if (!skipUndefined || !isUndefined(val)) {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[iterator];
    const _iterator = generator.call(obj);
    let result;
    while ((result = _iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (isBuffer(source)) {
          return source;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
    if (setImmediateSupported) {
      return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks) => {
      _global.addEventListener("message", ({ source, data }) => {
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      }, false);
      return (cb) => {
        callbacks.push(cb);
        _global.postMessage(token, "*");
      };
    })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
  })(
    typeof setImmediate === "function",
    isFunction(_global.postMessage)
  );
  var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
  var isIterable = (thing) => thing != null && isFunction(thing[iterator]);
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap,
    isIterable
  };

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status ? response.status : null;
    }
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    const msg = error && error.message ? error.message : "Error";
    const errCode = code == null && error ? error.code : code;
    AxiosError.call(axiosError, msg, errCode, config, request, response);
    if (error && axiosError.cause == null) {
      Object.defineProperty(axiosError, "cause", { value: error, configurable: true });
    }
    axiosError.name = error && error.name || "Error";
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/axios/lib/helpers/null.js
  var null_default = null;

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null) return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (utils_default.isBoolean(value)) {
        return value.toString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    if (utils_default.isFunction(options)) {
      options = {
        serialize: options
      };
    }
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {void}
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // node_modules/axios/lib/platform/browser/index.js
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
    navigator: () => _navigator,
    origin: () => origin
  });
  var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  var _navigator = typeof navigator === "object" && navigator || void 0;
  var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
  var hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  var origin = hasBrowserEnv && window.location.href || "http://localhost";

  // node_modules/axios/lib/platform/index.js
  var platform_default = __spreadValues(__spreadValues({}, utils_exports), browser_default);

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), __spreadValues({
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      if (name === "__proto__") return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
        return data;
      }
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data, this.parseReviver);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform_default.classes.FormData,
      Blob: platform_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value)) return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else if (utils_default.isObject(header) && utils_default.isIterable(header)) {
        let obj = {}, dest, key;
        for (const entry of header) {
          if (!utils_default.isArray(entry)) {
            throw TypeError("Object iterator must return a key-value pair");
          }
          obj[key = entry[0]] = (dest = obj[key]) ? utils_default.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
        }
        setHeaders(obj, valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/axios/lib/helpers/throttle.js
  function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1e3 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now()) => {
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn(...args);
    };
    const throttled = (...args) => {
      const now = Date.now();
      const passed = now - timestamp;
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    const flush = () => lastArgs && invoke(lastArgs);
    return [throttled, flush];
  }
  var throttle_default = throttle;

  // node_modules/axios/lib/helpers/progressEventReducer.js
  var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return throttle_default((e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e,
        lengthComputable: total != null,
        [isDownloadStream ? "download" : "upload"]: true
      };
      listener(data);
    }, freq);
  };
  var progressEventDecorator = (total, throttled) => {
    const lengthComputable = total != null;
    return [(loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }), throttled[1]];
  };
  var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
    url = new URL(url, platform_default.origin);
    return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
  })(
    new URL(platform_default.origin),
    platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
  ) : () => true;

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure, sameSite) {
        if (typeof document === "undefined") return;
        const cookie = [`${name}=${encodeURIComponent(value)}`];
        if (utils_default.isNumber(expires)) {
          cookie.push(`expires=${new Date(expires).toUTCString()}`);
        }
        if (utils_default.isString(path)) {
          cookie.push(`path=${path}`);
        }
        if (utils_default.isString(domain)) {
          cookie.push(`domain=${domain}`);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        if (utils_default.isString(sameSite)) {
          cookie.push(`SameSite=${sameSite}`);
        }
        document.cookie = cookie.join("; ");
      },
      read(name) {
        if (typeof document === "undefined") return null;
        const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
        return match ? decodeURIComponent(match[1]) : null;
      },
      remove(name) {
        this.write(name, "", Date.now() - 864e5, "/");
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !isAbsoluteURL(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/axios/lib/core/mergeConfig.js
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? __spreadValues({}, thing) : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, prop, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, prop, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    utils_default.forEach(Object.keys(__spreadValues(__spreadValues({}, config1), config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  // node_modules/axios/lib/helpers/resolveConfig.js
  var resolveConfig_default = (config) => {
    const newConfig = mergeConfig({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = AxiosHeaders_default.from(headers);
    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
    if (auth) {
      headers.set(
        "Authorization",
        "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
      );
    }
    if (utils_default.isFormData(data)) {
      if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
        headers.setContentType(void 0);
      } else if (utils_default.isFunction(data.getHeaders)) {
        const formHeaders = data.getHeaders();
        const allowedHeaders = ["content-type", "content-length"];
        Object.entries(formHeaders).forEach(([key, val]) => {
          if (allowedHeaders.includes(key.toLowerCase())) {
            headers.set(key, val);
          }
        });
      }
    }
    if (platform_default.hasStandardBrowserEnv) {
      withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
        const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  };

  // node_modules/axios/lib/adapters/xhr.js
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig_default(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;
      function done() {
        flushUpload && flushUpload();
        flushDownload && flushDownload();
        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
        _config.signal && _config.signal.removeEventListener("abort", onCanceled);
      }
      let request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);
      request.timeout = _config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError(event) {
        const msg = event && event.message ? event.message : "Network Error";
        const err = new AxiosError_default(msg, AxiosError_default.ERR_NETWORK, config, request);
        err.event = event || null;
        reject(err);
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = _config.transitional || transitional_default;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = _config.responseType;
      }
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
        request.addEventListener("progress", downloadThrottled);
      }
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
        request.upload.addEventListener("progress", uploadThrottled);
        request.upload.addEventListener("loadend", flushUpload);
      }
      if (_config.cancelToken || _config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(_config.url);
      if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };

  // node_modules/axios/lib/helpers/composeSignals.js
  var composeSignals = (signals, timeout) => {
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
      let controller = new AbortController();
      let aborted;
      const onabort = function(reason) {
        if (!aborted) {
          aborted = true;
          unsubscribe();
          const err = reason instanceof Error ? reason : this.reason;
          controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
        }
      };
      let timer = timeout && setTimeout(() => {
        timer = null;
        onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
      }, timeout);
      const unsubscribe = () => {
        if (signals) {
          timer && clearTimeout(timer);
          timer = null;
          signals.forEach((signal2) => {
            signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
          });
          signals = null;
        }
      };
      signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
      const { signal } = controller;
      signal.unsubscribe = () => utils_default.asap(unsubscribe);
      return signal;
    }
  };
  var composeSignals_default = composeSignals;

  // node_modules/axios/lib/helpers/trackStream.js
  var streamChunk = function* (chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
      yield chunk;
      return;
    }
    let pos = 0;
    let end;
    while (pos < len) {
      end = pos + chunkSize;
      yield chunk.slice(pos, end);
      pos = end;
    }
  };
  var readBytes = function(iterable, chunkSize) {
    return __asyncGenerator(this, null, function* () {
      try {
        for (var iter = __forAwait(readStream(iterable)), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
          const chunk = temp.value;
          yield* __yieldStar(streamChunk(chunk, chunkSize));
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield new __await(temp.call(iter)));
        } finally {
          if (error)
            throw error[0];
        }
      }
    });
  };
  var readStream = function(stream) {
    return __asyncGenerator(this, null, function* () {
      if (stream[Symbol.asyncIterator]) {
        yield* __yieldStar(stream);
        return;
      }
      const reader = stream.getReader();
      try {
        for (; ; ) {
          const { done, value } = yield new __await(reader.read());
          if (done) {
            break;
          }
          yield value;
        }
      } finally {
        yield new __await(reader.cancel());
      }
    });
  };
  var trackStream = (stream, chunkSize, onProgress, onFinish) => {
    const iterator2 = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e) => {
      if (!done) {
        done = true;
        onFinish && onFinish(e);
      }
    };
    return new ReadableStream({
      pull(controller) {
        return __async(this, null, function* () {
          try {
            const { done: done2, value } = yield iterator2.next();
            if (done2) {
              _onFinish();
              controller.close();
              return;
            }
            let len = value.byteLength;
            if (onProgress) {
              let loadedBytes = bytes += len;
              onProgress(loadedBytes);
            }
            controller.enqueue(new Uint8Array(value));
          } catch (err) {
            _onFinish(err);
            throw err;
          }
        });
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator2.return();
      }
    }, {
      highWaterMark: 2
    });
  };

  // node_modules/axios/lib/adapters/fetch.js
  var DEFAULT_CHUNK_SIZE = 64 * 1024;
  var { isFunction: isFunction2 } = utils_default;
  var globalFetchAPI = (({ Request, Response }) => ({
    Request,
    Response
  }))(utils_default.global);
  var {
    ReadableStream: ReadableStream2,
    TextEncoder
  } = utils_default.global;
  var test = (fn, ...args) => {
    try {
      return !!fn(...args);
    } catch (e) {
      return false;
    }
  };
  var factory = (env) => {
    env = utils_default.merge.call({
      skipUndefined: true
    }, globalFetchAPI, env);
    const { fetch: envFetch, Request, Response } = env;
    const isFetchSupported = envFetch ? isFunction2(envFetch) : typeof fetch === "function";
    const isRequestSupported = isFunction2(Request);
    const isResponseSupported = isFunction2(Response);
    if (!isFetchSupported) {
      return false;
    }
    const isReadableStreamSupported = isFetchSupported && isFunction2(ReadableStream2);
    const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : (str) => __async(null, null, function* () {
      return new Uint8Array(yield new Request(str).arrayBuffer());
    }));
    const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
      let duplexAccessed = false;
      const hasContentType = new Request(platform_default.origin, {
        body: new ReadableStream2(),
        method: "POST",
        get duplex() {
          duplexAccessed = true;
          return "half";
        }
      }).headers.has("Content-Type");
      return duplexAccessed && !hasContentType;
    });
    const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
    const resolvers = {
      stream: supportsResponseStream && ((res) => res.body)
    };
    isFetchSupported && (() => {
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
        !resolvers[type] && (resolvers[type] = (res, config) => {
          let method = res && res[type];
          if (method) {
            return method.call(res);
          }
          throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
        });
      });
    })();
    const getBodyLength = (body) => __async(null, null, function* () {
      if (body == null) {
        return 0;
      }
      if (utils_default.isBlob(body)) {
        return body.size;
      }
      if (utils_default.isSpecCompliantForm(body)) {
        const _request = new Request(platform_default.origin, {
          method: "POST",
          body
        });
        return (yield _request.arrayBuffer()).byteLength;
      }
      if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
        return body.byteLength;
      }
      if (utils_default.isURLSearchParams(body)) {
        body = body + "";
      }
      if (utils_default.isString(body)) {
        return (yield encodeText(body)).byteLength;
      }
    });
    const resolveBodyLength = (headers, body) => __async(null, null, function* () {
      const length = utils_default.toFiniteNumber(headers.getContentLength());
      return length == null ? getBodyLength(body) : length;
    });
    return (config) => __async(null, null, function* () {
      let {
        url,
        method,
        data,
        signal,
        cancelToken,
        timeout,
        onDownloadProgress,
        onUploadProgress,
        responseType,
        headers,
        withCredentials = "same-origin",
        fetchOptions
      } = resolveConfig_default(config);
      let _fetch = envFetch || fetch;
      responseType = responseType ? (responseType + "").toLowerCase() : "text";
      let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
      let request = null;
      const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
        composedSignal.unsubscribe();
      });
      let requestContentLength;
      try {
        if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = yield resolveBodyLength(headers, data)) !== 0) {
          let _request = new Request(url, {
            method: "POST",
            body: data,
            duplex: "half"
          });
          let contentTypeHeader;
          if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
            headers.setContentType(contentTypeHeader);
          }
          if (_request.body) {
            const [onProgress, flush] = progressEventDecorator(
              requestContentLength,
              progressEventReducer(asyncDecorator(onUploadProgress))
            );
            data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
          }
        }
        if (!utils_default.isString(withCredentials)) {
          withCredentials = withCredentials ? "include" : "omit";
        }
        const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
        const resolvedOptions = __spreadProps(__spreadValues({}, fetchOptions), {
          signal: composedSignal,
          method: method.toUpperCase(),
          headers: headers.normalize().toJSON(),
          body: data,
          duplex: "half",
          credentials: isCredentialsSupported ? withCredentials : void 0
        });
        request = isRequestSupported && new Request(url, resolvedOptions);
        let response = yield isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions);
        const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
        if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
          const options = {};
          ["status", "statusText", "headers"].forEach((prop) => {
            options[prop] = response[prop];
          });
          const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
          const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
            responseContentLength,
            progressEventReducer(asyncDecorator(onDownloadProgress), true)
          ) || [];
          response = new Response(
            trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
              flush && flush();
              unsubscribe && unsubscribe();
            }),
            options
          );
        }
        responseType = responseType || "text";
        let responseData = yield resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
        !isStreamResponse && unsubscribe && unsubscribe();
        return yield new Promise((resolve, reject) => {
          settle(resolve, reject, {
            data: responseData,
            headers: AxiosHeaders_default.from(response.headers),
            status: response.status,
            statusText: response.statusText,
            config,
            request
          });
        });
      } catch (err) {
        unsubscribe && unsubscribe();
        if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
          throw Object.assign(
            new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request),
            {
              cause: err.cause || err
            }
          );
        }
        throw AxiosError_default.from(err, err && err.code, config, request);
      }
    });
  };
  var seedCache = /* @__PURE__ */ new Map();
  var getFetch = (config) => {
    let env = config && config.env || {};
    const { fetch: fetch2, Request, Response } = env;
    const seeds = [
      Request,
      Response,
      fetch2
    ];
    let len = seeds.length, i = len, seed, target, map = seedCache;
    while (i--) {
      seed = seeds[i];
      target = map.get(seed);
      target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
      map = target;
    }
    return target;
  };
  var adapter = getFetch();

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default,
    fetch: {
      get: getFetch
    }
  };
  utils_default.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  var renderReason = (reason) => `- ${reason}`;
  var isResolvedHandle = (adapter2) => utils_default.isFunction(adapter2) || adapter2 === null || adapter2 === false;
  function getAdapter(adapters, config) {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter2;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter2 = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter2 = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter2 === void 0) {
          throw new AxiosError_default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter2 && (utils_default.isFunction(adapter2) || (adapter2 = adapter2.get(config)))) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter2;
    }
    if (!adapter2) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter2;
  }
  var adapters_default = {
    /**
     * Resolve an adapter from a list of adapter names or functions.
     * @type {Function}
     */
    getAdapter,
    /**
     * Exposes all known adapters
     * @type {Object<string, Function|Object>}
     */
    adapters: knownAdapters
  };

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter2 = adapters_default.getAdapter(config.adapter || defaults_default.adapter, config);
    return adapter2(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/axios/lib/env/data.js
  var VERSION = "1.13.2";

  // node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  validators.spelling = function spelling(correctSpelling) {
    return (value, opt) => {
      console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
      return true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig || {};
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config) {
      return __async(this, null, function* () {
        try {
          return yield this._request(configOrUrl, config);
        } catch (err) {
          if (err instanceof Error) {
            let dummy = {};
            Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
            const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
            try {
              if (!err.stack) {
                err.stack = stack;
              } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
                err.stack += "\n" + stack;
              }
            } catch (e) {
            }
          }
          throw err;
        }
      });
    }
    _request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional: transitional2, paramsSerializer, headers } = config;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      if (config.allowAbsoluteUrls !== void 0) {
      } else if (this.defaults.allowAbsoluteUrls !== void 0) {
        config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
      } else {
        config.allowAbsoluteUrls = true;
      }
      validator_default.assertOptions(config, {
        baseUrl: validators2.spelling("baseURL"),
        withXsrfToken: validators2.spelling("withXSRFToken")
      }, true);
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift(...requestInterceptorChain);
        chain.push(...responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners) return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    toAbortSignal() {
      const controller = new AbortController();
      const abort = (err) => {
        controller.abort(err);
      };
      this.subscribe(abort);
      controller.signal.unsubscribe = () => this.unsubscribe(abort);
      return controller.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter: getAdapter2,
    mergeConfig: mergeConfig2
  } = axios_default;

  // lib/core/http/formDataRequester.ts
  var FormDataRequester = class _FormDataRequester {
    static post(config) {
      const requestData = {
        method: "POST" /* POST */,
        headers: _FormDataRequester.getHeaders(config.extraHeaders)
      };
      return axios_default.post(config.url, config.formData, requestData);
    }
    static getHeaders(extraHeaders) {
      var headers = {
        charset: "UTF-8",
        "Content-Type": "multipart/form-data"
      };
      if (extraHeaders) {
        return __spreadValues(__spreadValues({}, headers), extraHeaders);
      }
      return headers;
    }
  };

  // lib/core/http/Requester.ts
  var _Requester = class _Requester {
    static getFunction(requestType) {
      try {
        return _Requester.requestMethodMapping[requestType];
      } catch (error) {
        throw new Error("invalid request type: " + requestType);
      }
    }
  };
  _Requester.requestMethodMapping = {
    ["POST" /* POST */]: (url, data, config) => axios_default.post(url, data, config),
    ["GET" /* GET */]: (url, data, config) => axios_default.get(url, __spreadValues({ data }, config)),
    ["DELETE" /* DELETE */]: (url, data, config) => axios_default.delete(url, __spreadValues({ data }, config)),
    ["NONE" /* NONE */]: (url, data, config) => {
      throw new Error("invalid request, no request type");
    }
  };
  var Requester = _Requester;

  // lib/core/http/jsonRequester.ts
  var JsonRequester = class _JsonRequester {
    static request(config) {
      const isPostOrDeleteRequest = [
        "POST" /* POST */,
        "DELETE" /* DELETE */
      ].includes(config.requestType);
      var url = isPostOrDeleteRequest ? config.url : _JsonRequester.getUrlWithSearchParams(config.url, config.params);
      var data = isPostOrDeleteRequest ? config.params : null;
      var requestConfig = {
        method: config.requestType,
        headers: _JsonRequester.getHeaders(config.extraHeaders, isPostOrDeleteRequest),
        validateStatus: (status) => true
      };
      return Requester.getFunction(config.requestType)(url, data, requestConfig);
    }
    static getHeaders(extraHeaders, withJsonData = false) {
      var headers = {
        charset: "UTF-8"
      };
      if (withJsonData) {
        headers["Content-type"] = "application/json";
      }
      if (extraHeaders) {
        return __spreadValues(__spreadValues({}, headers), extraHeaders);
      }
      return headers;
    }
    static getUrlWithSearchParams(endpoint, params) {
      return params ? endpoint + "?" + new URLSearchParams(params) : endpoint;
    }
  };

  // lib/core/http/nbResponseHandler.ts
  var NbResponseHandler = class {
    static handle(response, paged) {
      return __async(this, null, function* () {
        var jsonResponse = response.data;
        if (!jsonResponse) {
          throw new NotbankError("http error. (status=" + response.status + ")", -1);
        }
        var nbResponse = jsonResponse;
        if ((nbResponse == null ? void 0 : nbResponse.status) === "success") {
          return paged ? jsonResponse : nbResponse.data;
        }
        throw NotbankError.Factory.createFromNbResponse(nbResponse, response.status);
      });
    }
  };

  // lib/core/http/httpConnection.ts
  var _host, _sessionToken;
  var HttpConnection = class {
    constructor(domain) {
      __privateAdd(this, _host);
      __privateAdd(this, _sessionToken);
      __privateSet(this, _host, "https://" + domain);
    }
    nbRequest(endpoint, requestType, message, paged = false) {
      return __async(this, null, function* () {
        const url = this.getNbUrl(endpoint);
        const headers = this.getHeaders();
        var response = yield JsonRequester.request({ url, requestType, params: message, extraHeaders: headers });
        return yield NbResponseHandler.handle(response, paged);
      });
    }
    nbFormDataRequest(endpoint, fields, files, message) {
      return __async(this, null, function* () {
        const url = this.getNbUrl(endpoint);
        const formData = FormDataBuilder.build({ fields, files, message: message || {} });
        const headers = this.getHeaders();
        const response = yield FormDataRequester.post({ url, formData, extraHeaders: headers });
        return yield NbResponseHandler.handle(response, false);
      });
    }
    apRequest(endpoint, requestType, message, extraHeaders) {
      return __async(this, null, function* () {
        const url = this.getApUrl(endpoint);
        const headers = __spreadValues(__spreadValues({}, extraHeaders), this.getHeaders());
        const response = yield JsonRequester.request({
          url,
          requestType,
          params: message,
          extraHeaders: headers
        });
        return yield ApResponseHandler.handle(response);
      });
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        var response = yield this.apRequest(
          "AuthenticateUser" /* AUTHENTICATE_USER */,
          "GET" /* GET */,
          null,
          params
        );
        __privateSet(this, _sessionToken, response.SessionToken);
      });
    }
    updateSessionToken(aptoken) {
      __privateSet(this, _sessionToken, aptoken);
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
      throw new Error("Method not implemented.");
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callback_ids) {
      throw new Error("Method not implemented.");
    }
    setResponseHandler(responseHandler) {
      throw new Error("Method not implemented.");
    }
    setResponseHandlers(responseHandlers) {
      throw new Error("Method not implemented.");
    }
    getApUrl(endpoint) {
      return __privateGet(this, _host) + "/ap/" + endpoint;
    }
    getNbUrl(endpoint) {
      return __privateGet(this, _host) + "/api/nb/" + endpoint;
    }
    connect() {
      return Promise.resolve();
    }
    close() {
      return Promise.resolve();
    }
    getHeaders() {
      if (__privateGet(this, _sessionToken)) {
        return { aptoken: __privateGet(this, _sessionToken) };
      }
      return {};
    }
  };
  _host = new WeakMap();
  _sessionToken = new WeakMap();

  // lib/utils/completeParams.ts
  function completeParams(params, omsId) {
    return __spreadProps(__spreadValues({}, params), {
      OMSId: omsId
    });
  }

  // lib/services/accountService.ts
  var AccountService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getaccounttransactions
     */
    getAccountTransactions(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetAccountTransactions" /* GET_ACCOUNT_TRANSACTIONS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getaccountpositions
     */
    getAccountPositions(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetAccountPositions" /* GET_ACCOUNT_POSITIONS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getaccountinstrumentstatistics
     */
    getAccountInstrumentStatistics(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetAccountInstrumentStatistics" /* GET_ACCOUNT_INSTRUMENT_STATISTICS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getaccountinfo
     */
    getAccountInfo() {
      return __async(this, arguments, function* (params = {}) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetAccountInfo" /* GET_ACCOUNT_INFO */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
  };

  // lib/services/authService.ts
  var AuthService = class {
    constructor(connection) {
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/?http#webauthenticateuser
     */
    webAuthenticateUser(params) {
      return __async(this, null, function* () {
        return yield this.connection.apRequest(
          "WebAuthenticateUser" /* WEB_AUTHENTICATE_USER */,
          "NONE" /* NONE */,
          params
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/?http#logout
     */
    logOut() {
      return __async(this, null, function* () {
        return yield this.connection.apRequest("LogOut" /* LOGOUT */, "POST" /* POST */);
      });
    }
  };

  // lib/services/feeService.ts
  var FeeService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getdepositfee
     */
    getDepositFee(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetDepositFee" /* GET_DEPOSIT_FEE */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getwithdrawfee
     */
    getWithdrawFee(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetWithdrawFee" /* GET_WITHDRAW_FEE */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getomswithdrawfees
     */
    getOMSWithdrawFees(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetOMSWithdrawFees" /* GET_OMS_WITHDRAW_FEES */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getomsdepositfees
     */
    getOMSDepositFees(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetOMSDepositFees" /* GET_OMS_DEPOSIT_FEES */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getaccountfees
     */
    getAccountFees(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetAccountFees" /* GET_ACCOUNT_FEES */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getorderfee
     */
    getOrderFee(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetOrderFee" /* GET_ORDER_FEE */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
  };

  // lib/services/instrumentService.ts
  var InstrumentService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
      this.instrumentCache = {};
    }
    /**
     * https://apidoc.notbank.exchange/#getinstruments
     */
    getInstruments(params = {}) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetInstruments" /* GET_INSTRUMENTS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getinstrument
     */
    getInstrument(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetInstrument" /* GET_INSTRUMENT */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    getInstrumentBySymbol(params) {
      return __async(this, null, function* () {
        if (!(params.symbol in this.instrumentCache)) {
          var instruments = yield this.getInstruments();
          instruments.map((instrument) => this.instrumentCache[instrument.Symbol] = instrument);
        }
        if (params.symbol in this.instrumentCache) {
          return Promise.resolve(this.instrumentCache[params.symbol]);
        } else {
          throw new NotbankError("no instrument found for symbol " + params.symbol, -1);
        }
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getinstrumentverificationlevelconfig
     */
    getInstrumentVerificationLevelConfigs(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetInstrumentVerificationLevelConfig" /* GET_INSTRUMENT_VERIFICATION_LEVEL_CONFIG */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
  };

  // lib/services/productService.ts
  var ProductService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
      this.productCache = {};
    }
    /**
     * https://apidoc.notbank.exchange/#getproduct
     */
    getProduct(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetProduct" /* GET_PRODUCT */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getproducts
     */
    getProducts() {
      return __async(this, arguments, function* (params = {}) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetProducts" /* GET_PRODUCTS */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    getProductBySymbol(params) {
      return __async(this, null, function* () {
        if (!(params.symbol in this.productCache)) {
          var products = yield this.getProducts();
          products.map((product) => this.productCache[product.Product] = product);
        }
        if (params.symbol in this.productCache) {
          return Promise.resolve(this.productCache[params.symbol]);
        } else {
          throw new NotbankError("no product found for symbol " + params.symbol, -1);
        }
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getverificationlevelconfig
     */
    getVerificationLevelConfig(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield this.connection.apRequest(
          "GetVerificationLevelConfig" /* GET_VERIFICATION_LEVEL_CONFIG */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
  };

  // lib/services/reportService.ts
  var ReportService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#generatetradeactivityreport
     */
    generateTradeActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GenerateTradeActivityReport" /* GENERATE_TRADE_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#generatetransactionactivityreport
     */
    generateTransactionActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GenerateTransactionActivityReport" /* GENERATE_TRANSACTION_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#generateproductdeltaactivityreport
     */
    generateProductDeltaActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GenerateProductDeltaActivityReport" /* GENERATE_PRODUCT_DELTA_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#generatepnlactivityreport
     */
    generatePnLActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GeneratePnLActivityReport" /* GENERATE_PNL_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#scheduletradeactivityreport
     */
    scheduleTradeActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ScheduleTradeActivityReport" /* SCHEDULE_TRADE_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#scheduletransactionactivityreport
     */
    scheduleTransactionActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ScheduleTransactionActivityReport" /* SCHEDULE_TRANSACTION_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#scheduleproductdeltaactivityreport
     */
    scheduleProductDeltaActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ScheduleProductDeltaActivityReport" /* SCHEDULE_PRODUCT_DELTA_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#scheduleprofitandlossactivityreport
     */
    scheduleProfitAndLossActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ScheduleProfitAndLossActivityReport" /* SCHEDULE_PROFIT_AND_LOSS_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#canceluserreport
     */
    cancelUserReport(request) {
      return this.connection.apRequest(
        "CancelUserReport" /* CANCEL_USER_REPORT */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserreportwriterresultrecords
     */
    getUserReportWriterResultRecords(request) {
      return this.connection.apRequest(
        "GetUserReportWriterResultRecords" /* GET_USER_REPORT_WRITER_RESULT_RECORDS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserreporttickets
     */
    getUserReportTickets(request) {
      return this.connection.apRequest(
        "GetUserReportTickets" /* GET_USER_REPORT_TICKETS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#removeuserreportticket
     */
    removeUserReportTicket(request) {
      return this.connection.apRequest(
        "RemoveUserReportTicket" /* REMOVE_USER_REPORT_TICKET */,
        "POST" /* POST */,
        request.UserReportTicketId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserreportticketsbystatus
     */
    getUserReportTicketsByStatus(request) {
      return this.connection.apRequest(
        "GetUserReportTicketsByStatus" /* GET_USER_REPORT_TICKETS_BY_STATUS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#downloaddocument
     */
    downloadDocument(request) {
      return this.connection.apRequest(
        "DownloadDocument" /* DOWNLOAD_DOCUMENT */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#downloaddocumentslice
     */
    downloadDocumentSlice(request) {
      return this.connection.apRequest(
        "DownloadDocumentSlice" /* DOWNLOAD_DOCUMENT_SLICE */,
        "POST" /* POST */,
        request
      );
    }
  };

  // lib/services/systemService.ts
  var SystemService = class {
    constructor(connection) {
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#ping
     */
    ping() {
      return this.connection.apRequest(
        "Ping" /* PING */,
        "POST" /* POST */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#healthcheck
     */
    healthCheck() {
      return this.connection.apRequest(
        "HealthCheck" /* HEALTH_CHECK */,
        "POST" /* POST */
      );
    }
  };

  // lib/utils/completeParamsArray.ts
  function completeParamsArray(paramsArray, omsId) {
    return paramsArray.map((params) => __spreadProps(__spreadValues({}, params), {
      OMSId: omsId
    }));
  }

  // lib/utils/parseIndexTrade.ts
  function parseTradeSummary(jsonTrade) {
    return {
      TradeId: jsonTrade[0],
      InstrumentId: jsonTrade[1],
      Quantity: jsonTrade[2],
      Price: jsonTrade[3],
      Order1: jsonTrade[4],
      Order2: jsonTrade[5],
      Tradetime: jsonTrade[6],
      Direction: jsonTrade[7],
      TakerSide: jsonTrade[8],
      BlockTrade: jsonTrade[9] == 1,
      OrderClientId: jsonTrade[10]
    };
  }

  // lib/services/tradingService.ts
  var TradingService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#sendorderlist
     */
    sendOrderList(params) {
      const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
      return this.connection.apRequest(
        "SendOrderList" /* SEND_ORDER_LIST */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#sendcancellist
     */
    sendCancelList(params) {
      const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
      return this.connection.apRequest(
        "SendCancelList" /* SEND_CANCEL_LIST */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#sendcancelreplacelist
     */
    sendCancelReplaceList(params) {
      const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
      return this.connection.apRequest(
        "SendCancelReplaceList" /* SEND_CANCEL_REPLACE_LIST */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#modifyorder
     */
    modifyOrder(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ModifyOrder" /* MODIFY_ORDER */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#cancelallorders
     */
    cancelAllOrders(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "CancelAllOrders" /* CANCEL_ALL_ORDERS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getorderstatus
     */
    getOrderStatus(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetOrderStatus" /* GET_ORDER_STATUS */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getordershistory
     */
    getOrdersHistory(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetOrdersHistory" /* GET_ORDERS_HISTORY */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#gettradeshistory
     */
    getTradesHistory(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetTradesHistory" /* GET_TRADES_HISTORY */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getorderhistorybyorderid
     */
    getOrderHistoryByOrderId(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetOrderHistoryByOrderId" /* GET_ORDER_HISTORY_BY_ORDER_ID */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#gettickerhistory
     */
    getTickerHistory(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield this.connection.apRequest(
          "GetTickerHistory" /* GET_TICKER_HISTORY */,
          "POST" /* POST */,
          paramsWithOMSId
        );
        return response.map((item) => ({
          EndDateTime: item[0],
          // Fecha/hora de cierre en POSIX
          High: item[1],
          // Precio máximo
          Low: item[2],
          // Precio mínimo
          Open: item[3],
          // Precio de apertura
          Close: item[4],
          // Precio de cierre
          Volume: item[5],
          // Volumen total
          Bid: item[6],
          // Mejor precio de compra
          Ask: item[7],
          // Mejor precio de venta
          InstrumentId: item[8],
          // ID del instrumento
          BeginDateTime: item[9]
          // Fecha/hora de inicio en POSIX
        }));
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getlasttrades
     */
    getLastTrades(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield this.connection.apRequest(
          "GetLastTrades" /* GET_LAST_TRADES */,
          "POST" /* POST */,
          paramsWithOMSId
        );
        return response.map((item) => parseTradeSummary(item));
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getlevel1summary
     */
    getLevel1Summary() {
      return __async(this, arguments, function* (request = {}) {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield this.connection.apRequest(
          "GetLevel1Summary" /* GET_LEVEL1_SUMMARY */,
          "POST" /* POST */,
          paramsWithOMSId
        );
        return response.map((summary) => JSON.parse(summary));
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getlevel1summarymin
     */
    getLevel1SummaryMin(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield this.connection.apRequest(
          "GetLevel1SummaryMin" /* GET_LEVEL1_SUMMARY_MIN */,
          "POST" /* POST */,
          paramsWithOMSId
        );
        return response.map((data) => ({
          InstrumentId: data[0],
          InstrumentSymbol: data[1].toString(),
          LastTradedPx: data[2],
          Rolling24HrPxChange: data[3],
          Rolling24HrPxChangePercent: data[4],
          Rolling24HrVolume: data[5]
        }));
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getopentradereports
     */
    getOpenTradeReports(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetOpenTradeReports" /* GET_OPEN_TRADE_REPORTS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getorders
     */
    getOrders(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetOrders" /* GET_ORDERS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getorderhistory
     */
    getOrderHistory(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetOrderHistory" /* GET_ORDER_HISTORY */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#sendorder
     */
    sendOrder(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(
          "SendOrder" /* SEND_ORDER */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#cancelreplaceorder
     */
    cancelReplaceOrder(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "CancelReplaceOrder" /* CANCEL_REPLACE_ORDER */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#cancelorder
     */
    cancelOrder(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "CancelOrder" /* CANCEL_ORDER */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getopenorders
     */
    getOpenOrders(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetOpenOrders" /* GET_OPEN_ORDERS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getaccounttrades
     */
    getAccountTrades(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetAccountTrades" /* GET_ACCOUNT_TRADES */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#summary
     */
    getSummary() {
      return this.connection.apRequest(
        "Summary" /* SUMMARY */,
        "POST" /* POST */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#ticker
     */
    getTicker() {
      return this.connection.apRequest(
        "Ticker" /* TICKER */,
        "POST" /* POST */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#orderbook
     */
    getOrderBook(request) {
      return __async(this, null, function* () {
        const orderbookRaw = yield this.connection.apRequest(
          "OrderBook" /* ORDER_BOOK */,
          "POST" /* POST */,
          request
        );
        return orderbookFromRaw(orderbookRaw);
      });
    }
    getOrderBookRaw(request) {
      return this.connection.apRequest(
        "OrderBook" /* ORDER_BOOK */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#trades
     */
    getTrades(params) {
      return this.connection.apRequest(
        "Trades" /* TRADES */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getl2snapshot
     */
    getL2Snapshot(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield this.connection.apRequest(
          "GetL2Snapshot" /* GET_L2_SNAPSHOT */,
          "POST" /* POST */,
          paramsWithOMSId
        );
        return response.map((snapshot) => ({
          MDUpdateID: snapshot[0],
          NumberOfUniqueAccounts: snapshot[1],
          ActionDateTime: snapshot[2],
          ActionType: snapshot[3],
          LastTradePrice: snapshot[4],
          NumberOfOrders: snapshot[5],
          Price: snapshot[6],
          ProductPairCode: snapshot[7],
          Quantity: snapshot[8],
          Side: snapshot[9]
        }));
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getlevel1
     */
    getLevel1(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetLevel1" /* GET_LEVEL1 */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getenums
     */
    getEnums() {
      return this.connection.apRequest(
        "GetEnums" /* GET_ENUMS */,
        "POST" /* POST */
      );
    }
  };

  // lib/services/userService.ts
  var UserService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getuseraccounts
     */
    getUserAccounts(request = {}) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetUserAccounts" /* GET_USER_ACCOUNTS */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserdevices
     */
    getUserDevices(request) {
      return this.connection.apRequest(
        "GetUserDevices" /* GET_USER_DEVICES */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserinfo
     */
    getUserInfo(request) {
      return this.connection.apRequest(
        "GetUserInfo" /* GET_USER_INFO */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserpermissions
     */
    getUserPermissions(request) {
      return this.connection.apRequest(
        "GetUserPermissions" /* GET_USER_PERMISSIONS */,
        "POST" /* POST */,
        request
      );
    }
  };

  // lib/services/walletService.ts
  var _WalletService_instances, nbPagedRequest_fn;
  var WalletService = class {
    constructor(connection) {
      __privateAdd(this, _WalletService_instances);
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getbanks
     */
    getBanks(request) {
      return __privateMethod(this, _WalletService_instances, nbPagedRequest_fn).call(this, "banks" /* BANKS */, "GET" /* GET */, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getprovinces
     */
    getProvinces(request) {
      return __privateMethod(this, _WalletService_instances, nbPagedRequest_fn).call(this, "provinces" /* PROVINCES */, "GET" /* GET */, request);
    }
    /**
     * https://apidoc.notbank.exchange/#addclientbankaccount
     */
    AddClientBankAccount(request) {
      return this.connection.nbRequest(
        "bank-accounts" /* BANK_ACCOUNTS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getclientbankaccount
     */
    getClientBankAccount(request) {
      return this.connection.nbRequest(
        "bank-accounts" /* BANK_ACCOUNTS */ + "/" + request.bankAccountId,
        "GET" /* GET */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getclientbankaccounts
     */
    getClientBankAccounts(request) {
      return __privateMethod(this, _WalletService_instances, nbPagedRequest_fn).call(this, "bank-accounts" /* BANK_ACCOUNTS */, "GET" /* GET */, request);
    }
    /**
     * https://apidoc.notbank.exchange/#deleteclientbankaccount
     */
    deleteClientBankAccount(request) {
      return this.connection.nbRequest(
        "bank-accounts" /* BANK_ACCOUNTS */ + "/" + request.bankAccountId,
        "DELETE" /* DELETE */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getnetworkstemplates
     */
    getNetworksTemplates(request) {
      return this.connection.nbRequest(
        "wallet/crypto/withdrawal/templates" /* GET_NETWORKS_TEMPLATES */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getdepositaddresses
     */
    getDepositAddresses(request) {
      return this.connection.nbRequest(
        "wallet/crypto" /* DEPOSIT_ADDRESS */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#createdepositaddress
     */
    createDepositAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto" /* DEPOSIT_ADDRESS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getwhitelistedaddresses
     */
    getWhitelistedAddresses(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#addwhitelistedaddress
     */
    addWhitelistedAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#confirmwhitelistedaddress
     */
    confirmWhitelistedAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */ + "/" + request.whitelistedAddressId + "/verification",
        "POST" /* POST */,
        { sms_code: request.sms_code, account_id: request.account_id }
      );
    }
    resendVerificationCodeWhitelistedAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */ + "/" + request.whitelistedAddressId + "/verification",
        "GET" /* GET */,
        { account_id: request.account_id }
      );
    }
    /**
     * https://apidoc.notbank.exchange/#deletewhitelistedaddress
     */
    deleteWhitelistedAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */ + "/" + request.whitelistedAddressId,
        "DELETE" /* DELETE */,
        {
          account_id: request.account_id,
          otp: request.otp
        }
      );
    }
    /**
     * https://apidoc.notbank.exchange/#updateonestepwithdraw
     */
    updateOneStepWithdraw(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses/one-step/status" /* UPDATE_ONE_STEP_WITHDRAW */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#createcryptowithdraw
     */
    createCryptoWithdraw(request) {
      return this.connection.nbRequest(
        "wallet/crypto/withdrawal" /* CREATE_CRYPTO_WITHDRAW */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#createfiatdeposit
     */
    createFiatDeposit(request) {
      return __async(this, null, function* () {
        const result = yield this.connection.nbRequest(
          "wallet/fiat/deposit" /* FIAT_DEPOSIT */,
          "POST" /* POST */,
          request
        );
        return result == null ? void 0 : result.url;
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getownersfiatwithdraw
     */
    getOwnersFiatWithdraw(request) {
      return this.connection.nbRequest(
        "wallet/fiat/withdrawal/owners" /* GET_OWNERS_FIAT_WITHDRAW */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getownersfiatwithdraw
     */
    createFiatWithdraw(request) {
      return __async(this, null, function* () {
        const result = yield this.connection.nbRequest(
          "wallet/fiat/withdrawal" /* FIAT_WITHDRAW */,
          "POST" /* POST */,
          request
        );
        return result == null ? void 0 : result.withdrawal_id;
      });
    }
    /**
    * https://apidoc.notbank.exchange/#confirmfiatwithdraw
    */
    confirmFiatWithdraw(request) {
      return this.connection.nbRequest(
        "wallet/fiat/withdrawal" /* FIAT_WITHDRAW */ + "/" + request.withdrawal_id,
        "POST" /* POST */,
        { attempt_code: request.attempt_code }
      );
    }
    /**
     * https://apidoc.notbank.exchange/#transferfunds
     */
    transferFunds(request) {
      return this.connection.nbRequest(
        "wallet/transfer-funds" /* TRANSFER_FUNDS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#gettransactions
     */
    getTransactions(request) {
      return __privateMethod(this, _WalletService_instances, nbPagedRequest_fn).call(this, "wallet/transactions" /* GET_TRANSACTIONS */, "GET" /* GET */, request);
    }
  };
  _WalletService_instances = new WeakSet();
  nbPagedRequest_fn = function(endpoint, requestType, message) {
    return this.connection.nbRequest(
      endpoint,
      requestType,
      message,
      true
    );
  };

  // lib/services/quoteService.ts
  var QuoteService = class {
    constructor(connection) {
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getquotes
     */
    getQuotes(request) {
      return this.connection.nbRequest(
        "quotes" /* QUOTES */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#createdirectquote
     */
    createDirectQuote(request) {
      return __async(this, null, function* () {
        return (yield this.connection.nbRequest(
          "quotes/direct" /* QUOTES_DIRECT */,
          "POST" /* POST */,
          request
        )).id;
      });
    }
    /**
     * https://apidoc.notbank.exchange/#createinversequote
     */
    createInverseQuote(request) {
      return __async(this, null, function* () {
        return (yield this.connection.nbRequest(
          "quotes/inverse" /* QUOTES_INVERSE */,
          "POST" /* POST */,
          request
        )).id;
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getquote
     */
    getQuote(request) {
      return this.connection.nbRequest(
        "quotes" /* QUOTES */ + "/" + request.quote_id,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#executequote
     */
    executeQuote(request) {
      return this.connection.nbRequest(
        "quotes" /* QUOTES */ + "/" + request.quote_id,
        "POST" /* POST */,
        request
      );
    }
  };

  // lib/services/verificationService.ts
  var VerificationService = class {
    constructor(connection) {
      this.connection = connection;
    }
    verifyBasic(request) {
      return this.connection.nbRequest(
        "account/verification/basic" /* VERIFICATION_BASIC */,
        "POST" /* POST */,
        request
      );
    }
    verifyTrader(request) {
      let _a = __spreadValues({}, request), { document_address_file } = _a, cleanRequest = __objRest(_a, ["document_address_file"]);
      return this.connection.nbFormDataRequest(
        "account/verification/trader" /* VERIFICATION_TRADER */,
        [],
        [["document_address_file", document_address_file]],
        cleanRequest
      );
    }
    verifyTraderPlus(request) {
      let _a = __spreadValues({}, request), { files, fields } = _a, cleanRequest = __objRest(_a, ["files", "fields"]);
      return this.connection.nbFormDataRequest(
        "account/verification/trader-plus" /* VERIFICATION_TRADER_PLUS */,
        fields,
        files,
        cleanRequest
      );
    }
    getTraderPlusVerificationSchemas(request) {
      return this.connection.nbRequest(
        "account/verification/trader-plus/schemas" /* VERIFICATION_TRADER_PLUS_SCHEMAS */,
        "GET" /* GET */,
        request
      );
    }
    getInstitutionalCompanySchemas(request) {
      return this.connection.nbRequest(
        "account/verification/institutional/company/schemas" /* VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMAS */,
        "GET" /* GET */,
        request
      );
    }
    verifyInstitutionalCompany(request) {
      let _a = __spreadValues({}, request), { files, fields } = _a, cleanRequest = __objRest(_a, ["files", "fields"]);
      return this.connection.nbFormDataRequest(
        "account/verification/institutional/company" /* VERIFICATION_INSTITUTIONAL_COMPANY */,
        fields,
        files || [],
        cleanRequest
      );
    }
    getInstitutionalCompanyVerificationStatus() {
      return this.connection.nbRequest(
        "account/verification/institutional/company" /* VERIFICATION_INSTITUTIONAL_COMPANY */,
        "GET" /* GET */
      );
    }
    getInstitutionalMemberTypes() {
      return this.connection.nbRequest(
        "account/verification/institutional/members/types" /* VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES */,
        "GET" /* GET */
      );
    }
    getInstitutionalMemberSchemas(request) {
      return this.connection.nbRequest(
        "account/verification/institutional/members/schemas" /* VERIFICATION_INSTITUTIONAL_MEMBERS_SCHEMAS */,
        "GET" /* GET */,
        request
      );
    }
    verifyInstitutionalMember(request) {
      let _a = __spreadValues({}, request), { files, fields } = _a, cleanRequest = __objRest(_a, ["files", "fields"]);
      return this.connection.nbFormDataRequest(
        "account/verification/institutional/members" /* VERIFICATION_INSTITUTIONAL_MEMBERS */,
        fields,
        files,
        cleanRequest
      );
    }
    getInstitutionalMemberVerificationStatus() {
      return this.connection.nbRequest(
        "account/verification/institutional/members" /* VERIFICATION_INSTITUTIONAL_MEMBERS */,
        "GET" /* GET */
      );
    }
    getInstitutionalDocumentTypes() {
      return this.connection.nbRequest(
        "account/verification/institutional/documents/types" /* VERIFICATION_INSTITUTIONAL_DOCUMENTS_TYPES */,
        "GET" /* GET */
      );
    }
    verifyInstitutionalDocument(request) {
      let _a = __spreadValues({}, request), { file } = _a, cleanRequest = __objRest(_a, ["file"]);
      return this.connection.nbFormDataRequest(
        "account/verification/institutional/documents" /* VERIFICATION_INSTITUTIONAL_DOCUMENTS */,
        [],
        [["file", file]],
        cleanRequest
      );
    }
    getInstitutionalDocumentVerificationStatus() {
      return this.connection.nbRequest(
        "account/verification/institutional/documents" /* VERIFICATION_INSTITUTIONAL_DOCUMENTS */,
        "GET" /* GET */
      );
    }
    getVerificationStatus(request = {}) {
      return this.connection.nbRequest(
        "account/verification/status" /* VERIFICATION_STATUS */,
        "GET" /* GET */,
        request
      );
    }
  };

  // lib/services/registerService.ts
  var RegisterService = class {
    constructor(connection) {
      this.connection = connection;
    }
    registerUser(request) {
      return this.connection.nbRequest(
        "account/register" /* REGISTER */,
        "POST" /* POST */,
        request
      );
    }
  };

  // lib/services/savingsService.ts
  var SavingsService = class {
    constructor(connection) {
      this.connection = connection;
    }
    depositToYield(request) {
      return this.connection.nbRequest(
        "savings/deposit" /* SAVINGS_DEPOSIT */,
        "POST" /* POST */,
        request
      );
    }
    withdrawFromYield(request) {
      return this.connection.nbRequest(
        "savings/withdraw" /* SAVINGS_WITHDRAW */,
        "POST" /* POST */,
        request
      );
    }
  };

  // lib/services/httpServiceFactory.ts
  var DEFAULT_DOMAIN = "api.notbank.exchange";
  var _httpConnection;
  var HttpServiceFactory = class {
    constructor(domain) {
      __privateAdd(this, _httpConnection);
      const finalDomain = domain || DEFAULT_DOMAIN;
      __privateSet(this, _httpConnection, new HttpConnection(finalDomain));
    }
    authenticateUser(params) {
      var nonce = getNonce();
      var signature = sign(
        params.ApiPublicKey,
        params.ApiSecretKey,
        params.UserId,
        nonce
      );
      return __privateGet(this, _httpConnection).authenticateUser({
        APIKey: params.ApiPublicKey,
        Signature: signature,
        UserId: params.UserId,
        Nonce: nonce
      });
    }
    updateSessionToken(sessionToken) {
      this.getConnection().updateSessionToken(sessionToken);
    }
    getConnection() {
      return __privateGet(this, _httpConnection);
    }
    newAccountService() {
      return new AccountService(__privateGet(this, _httpConnection));
    }
    newAuthService() {
      return new AuthService(__privateGet(this, _httpConnection));
    }
    newFeeService() {
      return new FeeService(__privateGet(this, _httpConnection));
    }
    newInstrumentService() {
      return new InstrumentService(__privateGet(this, _httpConnection));
    }
    newProductService() {
      return new ProductService(__privateGet(this, _httpConnection));
    }
    newReportService() {
      return new ReportService(__privateGet(this, _httpConnection));
    }
    newSystemService() {
      return new SystemService(__privateGet(this, _httpConnection));
    }
    newTradingService() {
      return new TradingService(__privateGet(this, _httpConnection));
    }
    newUserService() {
      return new UserService(__privateGet(this, _httpConnection));
    }
    newWalletService() {
      return new WalletService(__privateGet(this, _httpConnection));
    }
    newQuoteService() {
      return new QuoteService(__privateGet(this, _httpConnection));
    }
    newRegisterService() {
      return new RegisterService(__privateGet(this, _httpConnection));
    }
    newVerificationService() {
      return new VerificationService(__privateGet(this, _httpConnection));
    }
    newSavingsService() {
      return new SavingsService(__privateGet(this, _httpConnection));
    }
  };
  _httpConnection = new WeakMap();

  // lib/core/websocket/pinger.ts
  var Pinger = class {
    constructor(pingIntervalMillis = 1e4, pingTimeoutMillis = 5e3) {
      this.pingIntervalMillis = pingIntervalMillis;
      this.pingTimeoutMillis = pingTimeoutMillis;
    }
    startPing(connection, restarter) {
      this.stop();
      this.interval = setInterval(() => __async(this, null, function* () {
        try {
          yield Promise.race([
            connection.apRequest("Ping" /* PING */, "NONE" /* NONE */),
            new Promise((resolve, reject) => setTimeout(reject, this.pingTimeoutMillis))
          ]);
        } catch (e) {
          yield restarter.reconnect();
          return;
        }
      }), this.pingIntervalMillis);
      if (typeof this.interval.unref === "function") {
        this.interval.unref();
      }
    }
    stop() {
      if (!this.interval) {
        return;
      }
      clearTimeout(this.interval);
    }
  };

  // lib/core/websocket/reauther.ts
  var Reauther = class {
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
  };

  // lib/core/websocket/SubscriptionIdentifier.ts
  var _mapping, _SubscriptionIdentifier_static, getIdPart_fn, getTickerName_fn, getLevel1TickerName_fn, getLevel2TickerName_fn, getSocketTradeName_fn, getAccountEventName_fn, getOrderEventName_fn, getValueFromList_fn, getInstrumentedId_fn, getAccountId_fn, getAccountIdFromAccount_fn;
  var _SubscriptionIdentifier = class _SubscriptionIdentifier {
    static get(eventName, firstIdentifier = null, secondIdentifier = null) {
      var _a, _b;
      return eventName + __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getIdPart_fn).call(_a, firstIdentifier) + __privateMethod(_b = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getIdPart_fn).call(_b, secondIdentifier);
    }
    static getFromMessageFrame(message) {
      var _a, _b, _c;
      return (_c = (_b = (_a = __privateGet(this, _mapping))[message.n]) == null ? void 0 : _b.call(_a, message.n, message.o)) != null ? _c : message.n;
    }
  };
  _mapping = new WeakMap();
  _SubscriptionIdentifier_static = new WeakSet();
  getIdPart_fn = function(firstIdentifier) {
    return firstIdentifier != null ? "_" + firstIdentifier : "";
  };
  getTickerName_fn = function(eventName, payloadStr) {
    var _a;
    const instrumentId = __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getValueFromList_fn).call(_a, payloadStr, 8);
    if (instrumentId == null) {
      return eventName;
    }
    return eventName + "_" + instrumentId;
  };
  getLevel1TickerName_fn = function(eventName, payloadStr) {
    var _a;
    return eventName + "_" + __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getInstrumentedId_fn).call(_a, payloadStr);
  };
  getLevel2TickerName_fn = function(eventName, payloadStr) {
    var _a;
    let instrumentId = __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getValueFromList_fn).call(_a, payloadStr, 7);
    if (instrumentId == null) {
      return eventName;
    }
    return eventName + "_" + instrumentId;
  };
  getSocketTradeName_fn = function(eventName, payloadStr) {
    var _a;
    const instrumentId = __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getValueFromList_fn).call(_a, payloadStr, 1);
    if (instrumentId == null) {
      return eventName;
    }
    return eventName + "_" + instrumentId;
  };
  getAccountEventName_fn = function(eventName, payloadStr) {
    var _a;
    let accountId = __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountId_fn).call(_a, payloadStr);
    if (accountId != null) {
      return eventName + "_" + accountId;
    }
    accountId = __privateMethod(this, _SubscriptionIdentifier_static, getAccountIdFromAccount_fn).call(this, payloadStr);
    if (accountId != null) {
      return eventName + "_" + accountId;
    }
    return eventName;
  };
  getOrderEventName_fn = function(eventName, payloadStr) {
    const data = JSON.parse(payloadStr);
    let identifier = eventName + "_" + data.AccountId;
    if (data.Instrument) {
      identifier = identifier + "_" + data.Instrument;
    }
    return identifier;
  };
  getValueFromList_fn = function(payloadStr, index) {
    const data = JSON.parse(payloadStr);
    if (data.length == 0) {
      return null;
    }
    if (data[0].length <= index) {
      return null;
    }
    return data[0][index];
  };
  getInstrumentedId_fn = function(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.InstrumentId;
  };
  getAccountId_fn = function(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.AccountId;
  };
  getAccountIdFromAccount_fn = function(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.Account;
  };
  __privateAdd(_SubscriptionIdentifier, _SubscriptionIdentifier_static);
  __privateAdd(_SubscriptionIdentifier, _mapping, {
    ["SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getLevel1TickerName_fn),
    ["Level1UpdateEvent" /* UPDATE_LEVEL1 */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getLevel1TickerName_fn),
    ["SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getLevel2TickerName_fn),
    ["Level2UpdateEvent" /* UPDATE_LEVEL2 */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getLevel2TickerName_fn),
    ["SubscribeTicker" /* SUBSCRIBE_TICKER */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getTickerName_fn),
    ["TickerDataUpdateEvent" /* UPDATE_TICKER */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getTickerName_fn),
    ["SubscribeTrades" /* SUBSCRIBE_TRADES */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getSocketTradeName_fn),
    ["SubscribeOrderStateEvents" /* SUBSCRIBE_ORDER_STATE_EVENTS */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getOrderEventName_fn),
    ["TransactionEvent" /* ACCOUNT_EVENT_TRANSACTION */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["WithdrawTicketUpdateEvent" /* ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["AccountPositionEvent" /* ACCOUNT_EVENT_ACCOUNT_POSITION */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["OrderTradeEvent" /* ACCOUNT_EVENT_ORDER_TRADE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["OrderStateEvent" /* ACCOUNT_EVENT_ORDER_STATE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["DepositTicketUpdateEvent" /* ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["AccountInfoUpdateEvent" /* ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["CancelOrderRejectEvent" /* ACCOUNT_EVENT_CANCEL_ORDER_REJECT */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["DepositEvent" /* ACCOUNT_EVENT_DEPOSIT */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn)
  });
  var SubscriptionIdentifier = _SubscriptionIdentifier;

  // lib/core/websocket/resubscriber.ts
  var _Resubscriber_instances, hasCallbackId_fn;
  var Resubscriber = class {
    constructor() {
      __privateAdd(this, _Resubscriber_instances);
      this.currentSubscriptions = [];
    }
    saveSubscription(data) {
      this.currentSubscriptions.push(data);
    }
    removeSubscription(callbackIds) {
      for (let i = 0; i < callbackIds.length; i++) {
        for (let j = 0; j < this.currentSubscriptions.length; j++) {
          var isFromSubscription = __privateMethod(this, _Resubscriber_instances, hasCallbackId_fn).call(this, this.currentSubscriptions[j], callbackIds[i]);
          if (isFromSubscription) {
            this.currentSubscriptions.splice(j, 1);
            return;
          }
        }
      }
    }
    makeSubscriptions(connection) {
      this.currentSubscriptions.forEach((data) => connection.subscribe(
        data.endpoint,
        data.firstIdentifier,
        data.secondIdentifier,
        data.message,
        data.subscriptionHandlers
      ));
    }
  };
  _Resubscriber_instances = new WeakSet();
  hasCallbackId_fn = function(data, callbackId) {
    var subscriptionCallbackId = SubscriptionIdentifier.get(data.endpoint, data.firstIdentifier, data.secondIdentifier);
    return subscriptionCallbackId === callbackId;
  };

  // lib/core/websocket/websocketConnection.ts
  var import_universal_websocket_client = __toESM(require_browser(), 1);

  // lib/core/websocket/callbackManager.ts
  var _subscriptionCallbacks, _callbacks, _sequenceNumber;
  var CallbackManager = class {
    constructor() {
      __privateAdd(this, _subscriptionCallbacks);
      __privateAdd(this, _callbacks);
      __privateAdd(this, _sequenceNumber);
      __privateSet(this, _subscriptionCallbacks, {});
      __privateSet(this, _callbacks, {});
      __privateSet(this, _sequenceNumber, 2);
    }
    putCallback(callback) {
      var sequenceNumber = __privateGet(this, _sequenceNumber);
      __privateGet(this, _callbacks)[sequenceNumber] = callback;
      __privateSet(this, _sequenceNumber, __privateGet(this, _sequenceNumber) + 2);
      return sequenceNumber;
    }
    popCallback(sequenceNumber) {
      let callback = __privateGet(this, _callbacks)[sequenceNumber];
      delete __privateGet(this, _callbacks)[sequenceNumber];
      return callback != null ? callback : (o) => null;
    }
    addSubscriptionCallback(callbackId, callback) {
      __privateGet(this, _subscriptionCallbacks)[callbackId] = callback;
    }
    getSubscriptionCallback(callbackIdentifier) {
      let handler = __privateGet(this, _subscriptionCallbacks)[callbackIdentifier];
      return handler || null;
    }
    removeSubscriptionCallback(callbackIds) {
      callbackIds.map(
        (callbackId) => delete __privateGet(this, _subscriptionCallbacks)[callbackId]
      );
    }
  };
  _subscriptionCallbacks = new WeakMap();
  _callbacks = new WeakMap();
  _sequenceNumber = new WeakMap();

  // lib/core/websocket/websocketConnection.ts
  var emptyFn = (o) => {
  };
  var DEFAULT_DOMAIN2 = "api.notbank.exchange";
  var _WebsocketConnection_instances, getSubscriptionCallbackId_fn, handleMessage_fn, request_fn, handleRequestResponse_fn, requestToCallback_fn;
  var WebsocketConnection = class {
    constructor(configuration) {
      __privateAdd(this, _WebsocketConnection_instances);
      this.domain = (configuration == null ? void 0 : configuration.domain) || DEFAULT_DOMAIN2;
      this.callbackManager = new CallbackManager();
      this.hooks = (configuration == null ? void 0 : configuration.websocketHooks) || {};
      this.peekMessageIn = (configuration == null ? void 0 : configuration.peekMessageIn) || ((_) => {
      });
      this.peekMessageOut = (configuration == null ? void 0 : configuration.peekMessageOut) || ((_) => {
      });
    }
    nbFormDataRequest(endpoint, fields, files, message) {
      throw new Error("websocket client does not support nb form data methods.");
    }
    updateSessionToken(sessionToken) {
      throw new Error("websocket client does not updating session token.");
    }
    nbRequest(endpoint, requestType, message) {
      throw new Error("websocket client does not support nb methods.");
    }
    connect() {
      return __async(this, null, function* () {
        this.websocket = new import_universal_websocket_client.default("wss://" + this.domain + "/wsgateway");
        this.websocket.onopen = (event) => {
          var _a, _b;
          return (_b = (_a = this.hooks).onOpen) == null ? void 0 : _b.call(_a, event);
        };
        this.websocket.onclose = (event) => {
          var _a, _b;
          return (_b = (_a = this.hooks).onClose) == null ? void 0 : _b.call(_a, event);
        };
        this.websocket.onerror = (event) => {
          var _a, _b;
          return (_b = (_a = this.hooks).onError) == null ? void 0 : _b.call(_a, event);
        };
        this.websocket.addEventListener("message", (event) => {
          const messageFrame = JSON.parse(event.data);
          __privateMethod(this, _WebsocketConnection_instances, handleMessage_fn).call(this, messageFrame);
        });
        this.websocket.addEventListener(
          "message",
          (event) => {
            var _a, _b;
            return (_b = (_a = this.hooks).onMessage) == null ? void 0 : _b.call(_a, event);
          }
        );
        return new Promise(
          (resolve, _) => this.websocket.addEventListener("open", (_2) => resolve())
        );
      });
    }
    close() {
      return this.websocket.close();
    }
    get readyState() {
      return this.websocket.readyState;
    }
    apRequest(endpoint, requestType, message) {
      return __privateMethod(this, _WebsocketConnection_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
      return __async(this, null, function* () {
        subscriptionCallbacks.map(
          (handler) => this.callbackManager.addSubscriptionCallback(
            SubscriptionIdentifier.get(
              handler.eventName,
              firstIdentifier,
              secondIdentifier
            ),
            handler.eventHandler
          )
        );
        return __privateMethod(this, _WebsocketConnection_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
      });
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callbackIds) {
      return __async(this, null, function* () {
        this.callbackManager.removeSubscriptionCallback(
          callbackIds.map(
            (callbackId) => SubscriptionIdentifier.get(
              callbackId,
              firstIdentifier,
              secondIdentifier
            )
          )
        );
        return yield __privateMethod(this, _WebsocketConnection_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
      });
    }
    closeConnection() {
      this.websocket.socket.close();
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        yield this.apRequest("AuthenticateUser" /* AUTHENTICATE_USER */, "NONE" /* NONE */, params);
      });
    }
  };
  _WebsocketConnection_instances = new WeakSet();
  getSubscriptionCallbackId_fn = function(message) {
    return SubscriptionIdentifier.getFromMessageFrame(message);
  };
  handleMessage_fn = function(message) {
    this.peekMessageIn(message);
    const callback = this.callbackManager.popCallback(message.i);
    if (callback != null) {
      callback(message);
      if (isErrorMessage(message)) {
        return;
      }
    }
    const callbackId = __privateMethod(this, _WebsocketConnection_instances, getSubscriptionCallbackId_fn).call(this, message);
    const subscriptionCallback = this.callbackManager.getSubscriptionCallback(callbackId);
    if (subscriptionCallback != null) {
      subscriptionCallback(message);
      return;
    }
    var lastSuffixStart = callbackId.lastIndexOf("_");
    if (lastSuffixStart == -1) {
      return;
    }
    const broaderCallbackId = callbackId.substring(0, lastSuffixStart);
    const broaderSubscriptionCallback = this.callbackManager.getSubscriptionCallback(callbackId);
    if (broaderSubscriptionCallback != null) {
      broaderSubscriptionCallback(message);
      return;
    }
  };
  request_fn = function(endpoint, message, messageType = 0 /* REQUEST */) {
    return new Promise((resolve, reject) => {
      __privateMethod(this, _WebsocketConnection_instances, requestToCallback_fn).call(this, endpoint, JSON.stringify(message) || "{}", messageType, __privateMethod(this, _WebsocketConnection_instances, handleRequestResponse_fn).call(this, reject, resolve));
    });
  };
  handleRequestResponse_fn = function(reject, resolve) {
    return (response) => {
      try {
        var payload = JSON.parse(response.o);
      } catch (e) {
        reject(newStandardErrorFromString(response.o));
        return;
      }
      if (response.m === 5 /* ERROR */) {
        reject(NotbankError.Factory.createFromApResponse(payload));
        return;
      }
      var standardResponse = payload;
      if ((standardResponse == null ? void 0 : standardResponse.result) === false && (standardResponse == null ? void 0 : standardResponse.errormsg) != null) {
        reject(NotbankError.Factory.createFromApResponse(payload));
        return;
      }
      resolve(payload);
    };
  };
  requestToCallback_fn = function(endpoint, message, messageType, callback = emptyFn) {
    const sequenceNumber = this.callbackManager.putCallback(callback);
    const frame = {
      m: messageType,
      i: sequenceNumber,
      n: endpoint,
      o: message
    };
    this.peekMessageOut(frame);
    this.websocket.send(JSON.stringify(frame));
  };
  function newStandardErrorFromString(errorStr) {
    return NotbankError.Factory.createFromApResponse({
      result: false,
      errormsg: errorStr,
      errorcode: errorCode_default.UNDEFINED,
      statusCode: -1,
      detail: ""
    });
  }
  function isErrorMessage(message) {
    let isErrorType = message.m === 5 /* ERROR */;
    if (isErrorType) {
      return true;
    }
    try {
      let standardError = message.o;
      return standardError.result == false;
    } catch (e) {
      return false;
    }
  }

  // lib/core/websocket/restarter.ts
  var _Restarter_instances, connect_fn, newConnection_fn;
  var Restarter = class {
    constructor(params) {
      __privateAdd(this, _Restarter_instances);
      this.closeRequested = false;
      this.reconnecting = false;
      this.connectionConfiguration = params.connectionConfiguration;
      this.pinger = new Pinger();
      this.resubscriber = new Resubscriber();
      this.reauther = new Reauther();
      this.connection = null;
    }
    getResubscriber() {
      return this.resubscriber;
    }
    getReauther() {
      return this.reauther;
    }
    getConnection() {
      if (this.reconnecting) {
        throw new NotbankError("unable to make notbank request. websocket reconnecting", -1);
      }
      return this.connection;
    }
    reconnect() {
      return __async(this, null, function* () {
        if (this.reconnecting || this.closeRequested) {
          return;
        }
        this.reconnecting = true;
        this.closeCurrentConnection();
        this.connection = __privateMethod(this, _Restarter_instances, newConnection_fn).call(this);
        yield __privateMethod(this, _Restarter_instances, connect_fn).call(this);
        this.reauther.makeAuthentication(this.connection);
        this.resubscriber.makeSubscriptions(this.connection);
        this.pinger.startPing(this.connection, this);
        this.reconnecting = false;
      });
    }
    closeCurrentConnection() {
      var _a;
      this.pinger.stop();
      var closed = (_a = this.connection) == null ? void 0 : _a.close();
      return closed;
    }
    close() {
      this.closeRequested = true;
      var closed = this.closeCurrentConnection();
      return closed;
    }
  };
  _Restarter_instances = new WeakSet();
  connect_fn = function() {
    return __async(this, null, function* () {
      while (!this.closeRequested) {
        try {
          yield Promise.race([
            this.connection.connect(),
            new Promise((resolve, reject) => setTimeout(reject, 1e4))
          ]);
          return;
        } catch (e) {
        }
      }
    });
  };
  newConnection_fn = function() {
    var _a, _b;
    return new WebsocketConnection({
      domain: this.connectionConfiguration.domain,
      peekMessageIn: this.connectionConfiguration.peekMessageIn,
      peekMessageOut: this.connectionConfiguration.peekMessageOut,
      websocketHooks: {
        onMessage: (_a = this.connectionConfiguration.websocketHooks) == null ? void 0 : _a.onMessage,
        onOpen: (_b = this.connectionConfiguration.websocketHooks) == null ? void 0 : _b.onOpen,
        onError: (event) => {
          var _a2, _b2;
          if (this.reconnecting) {
            return;
          }
          (_b2 = (_a2 = this.connectionConfiguration.websocketHooks) == null ? void 0 : _a2.onError) == null ? void 0 : _b2.call(_a2, event);
        },
        onClose: (event) => {
          var _a2, _b2;
          if (this.reconnecting || !this.closeRequested) {
            return;
          }
          (_b2 = (_a2 = this.connectionConfiguration.websocketHooks) == null ? void 0 : _a2.onClose) == null ? void 0 : _b2.call(_a2, event);
        }
      }
    });
  };

  // lib/core/websocket/restartingWebsocketConnection.ts
  var RestartingWebsocketConnection = class {
    constructor(params) {
      this.restarter = params.restarter;
    }
    nbFormDataRequest(endpoint, fields, files, message) {
      throw new Error("websocket client does not support nb form data methods.");
    }
    updateSessionToken(sessionToken) {
      throw new Error("websocket client does not support updating session token.");
    }
    apRequest(endpoint, requestType, message) {
      if (endpoint === "LogOut" /* LOGOUT */) {
        this.restarter.getReauther().removeAuthentication();
      }
      return this.restarter.getConnection().apRequest(endpoint, requestType, message);
    }
    nbRequest(endpoint, requestType, message, paged) {
      throw new Error("websocket client does not support nb methods.");
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        yield this.restarter.getConnection().authenticateUser(params);
        this.restarter.getReauther().updateAuthentication((connection) => connection.authenticateUser(params));
      });
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionHandlers) {
      return __async(this, null, function* () {
        yield this.restarter.getConnection().subscribe(
          endpoint,
          firstIdentifier,
          secondIdentifier,
          message,
          subscriptionHandlers
        );
        this.restarter.getResubscriber().saveSubscription({
          endpoint,
          firstIdentifier,
          secondIdentifier,
          message,
          subscriptionHandlers
        });
      });
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callback_ids) {
      return __async(this, null, function* () {
        yield this.restarter.getConnection().unsubscribe(
          endpoint,
          firstIdentifier,
          secondIdentifier,
          message,
          callback_ids
        );
        this.restarter.getResubscriber().removeSubscription(callback_ids);
      });
    }
    get readyState() {
      return this.restarter.getConnection().readyState;
    }
    connect() {
      return this.restarter.reconnect();
    }
    close() {
      return this.restarter.close();
    }
  };

  // lib/utils/subscriptionCallbacksHandler.ts
  function newMaybeHandler(eventName, recordHandler) {
    if (recordHandler == null) {
      return null;
    }
    return newHandler(eventName, recordHandler);
  }
  function newHandler(eventName, recordHandler) {
    return {
      eventName,
      eventHandler: (messageFrame) => recordHandler(parseRecord(messageFrame.o))
    };
  }
  function parseRecord(jsonData) {
    return JSON.parse(jsonData);
  }

  // lib/services/subscriptionService.ts
  var SubscriptionService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#subscribelevel1
     */
    subscribeLevel1(request, snapshotHandler, updateHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
        "SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */,
        request.InstrumentId || null,
        null,
        requestWithOMSId,
        [
          newHandler("SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */, snapshotHandler),
          newHandler("Level1UpdateEvent" /* UPDATE_LEVEL1 */, updateHandler)
        ]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribelevel1
     */
    unsubscribeLevel1(request) {
      return __async(this, null, function* () {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        yield this.connection.unsubscribe(
          "UnsubscribeLevel1" /* UNSUBSCRIBE_LEVEL1 */,
          request.InstrumentId || null,
          null,
          requestWithOMSId,
          ["SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */, "UnsubscribeLevel1" /* UNSUBSCRIBE_LEVEL1 */]
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#subscribelevel2
     */
    subscribeLevel2(request, snapshotHandler, updateHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
        "SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */,
        request.InstrumentId,
        null,
        requestWithOMSId,
        [
          newHandler("SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */, snapshotHandler),
          newHandler("Level2UpdateEvent" /* UPDATE_LEVEL2 */, updateHandler)
        ]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribelevel2
     */
    unsubscribeLevel2(request) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.unsubscribe(
        "UnsubscribeLevel2" /* UNSUBSCRIBE_LEVEL2 */,
        request.InstrumentId || null,
        null,
        requestWithOMSId,
        [
          SubscriptionIdentifier.get(
            "SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */,
            request.InstrumentId
          )
        ]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#subscribetrades
     */
    subscribeTrades(request, subcriptionHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
        "SubscribeTrades" /* SUBSCRIBE_TRADES */,
        request.InstrumentId,
        null,
        requestWithOMSId,
        [
          newHandler(
            "SubscribeTrades" /* SUBSCRIBE_TRADES */,
            (mapTrade) => subcriptionHandler(parseTradeSummary(mapTrade))
          )
        ]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribetrades
     */
    unsubscribeTrades(request) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.unsubscribe(
        "UnsubscribeTrades" /* UNSUBSCRIBE_TRADES */,
        request.InstrumentId,
        null,
        requestWithOMSId,
        ["SubscribeTrades" /* SUBSCRIBE_TRADES */]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#subscribeticker
     */
    subscribeTicker(request, snapshotHandler, updateHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
        "SubscribeTicker" /* SUBSCRIBE_TICKER */,
        request.InstrumentId || null,
        null,
        requestWithOMSId,
        [
          newHandler("SubscribeTicker" /* SUBSCRIBE_TICKER */, snapshotHandler),
          newHandler(
            "TickerDataUpdateEvent" /* UPDATE_TICKER */ + "_" + request.InstrumentId,
            updateHandler
          )
        ]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribeticker
     */
    unsubscribeTicker(request) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.unsubscribe(
        "UnsubscribeTicker" /* UNSUBSCRIBE_TICKER */,
        request.InstrumentId || null,
        null,
        requestWithOMSId,
        ["SubscribeTicker" /* SUBSCRIBE_TICKER */]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#subscribeaccountevents
     */
    subscribeAccountEvents(request, eventHandlers) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
        "SubscribeAccountEvents" /* SUBSCRIBE_ACCOUNT_EVENTS */,
        request.AccountId,
        null,
        requestWithOMSId,
        [
          newMaybeHandler(
            "WithdrawTicketUpdateEvent" /* ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE */,
            eventHandlers.withdrawTicketUpdateEventHandler || null
          ),
          newMaybeHandler(
            "OrderTradeEvent" /* ACCOUNT_EVENT_ORDER_TRADE */,
            eventHandlers.orderTradeEventHandler || null
          ),
          newMaybeHandler(
            "OrderStateEvent" /* ACCOUNT_EVENT_ORDER_STATE */,
            eventHandlers.orderStateEventHandler || null
          ),
          newMaybeHandler(
            "DepositTicketUpdateEvent" /* ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE */,
            eventHandlers.depositTicketUpdateEventHandler || null
          ),
          newMaybeHandler(
            "AccountPositionEvent" /* ACCOUNT_EVENT_ACCOUNT_POSITION */,
            eventHandlers.accountPositionEventHandler || null
          ),
          newMaybeHandler(
            "AccountInfoUpdateEvent" /* ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE */,
            eventHandlers.accountInfoUpdateEventHandler || null
          ),
          newMaybeHandler(
            "CancelOrderRejectEvent" /* ACCOUNT_EVENT_CANCEL_ORDER_REJECT */,
            eventHandlers.cancelOrderRejectEventHandler || null
          ),
          newMaybeHandler(
            "DepositEvent" /* ACCOUNT_EVENT_DEPOSIT */,
            eventHandlers.depositEventHandler || null
          ),
          newMaybeHandler(
            "TransactionEvent" /* ACCOUNT_EVENT_TRANSACTION */,
            eventHandlers.transactionEventHandler || null
          )
        ].filter((handler) => handler != null)
      );
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribeaccountevents
     */
    unsubscribeAccountEvents(request) {
      return __async(this, null, function* () {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.unsubscribe(
          "UnsubscribeAccountEvents" /* UNSUBSCRIBE_ACCOUNT_EVENTS */,
          request.AccountId,
          null,
          requestWithOMSId,
          [
            "WithdrawTicketUpdateEvent" /* ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE */,
            "OrderTradeEvent" /* ACCOUNT_EVENT_ORDER_TRADE */,
            "OrderStateEvent" /* ACCOUNT_EVENT_ORDER_STATE */,
            "DepositTicketUpdateEvent" /* ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE */,
            "AccountPositionEvent" /* ACCOUNT_EVENT_ACCOUNT_POSITION */,
            "AccountInfoUpdateEvent" /* ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE */,
            "CancelOrderRejectEvent" /* ACCOUNT_EVENT_CANCEL_ORDER_REJECT */,
            "DepositEvent" /* ACCOUNT_EVENT_DEPOSIT */,
            "TransactionEvent" /* ACCOUNT_EVENT_TRANSACTION */
          ]
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#subscribeorderstateevents
     */
    subscribeOrderStateEvents(request, subscriptionHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
        "SubscribeOrderStateEvents" /* SUBSCRIBE_ORDER_STATE_EVENTS */,
        request.AccountId,
        request.InstrumentId || null,
        requestWithOMSId,
        [
          newHandler(
            "OrderStateEvent" /* ACCOUNT_EVENT_ORDER_STATE */,
            subscriptionHandler
          )
        ]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribeorderstateevents
     */
    unsubscribeOrderStateEvents(request) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.unsubscribe(
        "UnsubscribeOrderStateEvents" /* UNSUBSCRIBE_ORDER_STATE_EVENTS */,
        request.AccountId,
        request.InstrumentId || null,
        requestWithOMSId,
        ["SubscribeOrderStateEvents" /* SUBSCRIBE_ORDER_STATE_EVENTS */]
      );
    }
  };

  // lib/services/websocketServiceFactory.ts
  var WebsocketServiceFactory = class {
    constructor(configuration) {
      var connection = (configuration == null ? void 0 : configuration.withReconnect) ? new RestartingWebsocketConnection({
        restarter: new Restarter({ connectionConfiguration: configuration || {} })
      }) : new WebsocketConnection(configuration);
      this.serviceConnection = connection;
      this.getReadyState = () => connection.readyState;
    }
    connect() {
      return this.serviceConnection.connect();
    }
    close() {
      return this.serviceConnection.close();
    }
    get isConnecting() {
      return this.getReadyState() === WebSocket.CONNECTING;
    }
    get isConnected() {
      return this.getReadyState() === WebSocket.OPEN;
    }
    get isClosing() {
      return this.getReadyState() === WebSocket.CLOSING;
    }
    get isClosed() {
      return this.getReadyState() === WebSocket.CLOSED;
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        var nonce = getNonce();
        var signature = sign(
          params.ApiPublicKey,
          params.ApiSecretKey,
          params.UserId,
          nonce
        );
        yield this.serviceConnection.authenticateUser({
          APIKey: params.ApiPublicKey,
          Signature: signature,
          UserId: params.UserId,
          Nonce: nonce
        });
      });
    }
    updateSessionToken(aptoken) {
      return this.serviceConnection.updateSessionToken(aptoken);
    }
    getConnection() {
      return this.serviceConnection;
    }
    newAccountService() {
      return new AccountService(this.serviceConnection);
    }
    newAuthService() {
      return new AuthService(this.serviceConnection);
    }
    newFeeService() {
      return new FeeService(this.serviceConnection);
    }
    newInstrumentService() {
      return new InstrumentService(this.serviceConnection);
    }
    newProductService() {
      return new ProductService(this.serviceConnection);
    }
    newReportService() {
      return new ReportService(this.serviceConnection);
    }
    newSystemService() {
      return new SystemService(this.serviceConnection);
    }
    getSubscriptionService() {
      return new SubscriptionService(this.serviceConnection);
    }
    newTradingService() {
      return new TradingService(this.serviceConnection);
    }
    newUserService() {
      return new UserService(this.serviceConnection);
    }
    newWalletService() {
      return new WalletService(this.serviceConnection);
    }
    newQuoteService() {
      return new QuoteService(this.serviceConnection);
    }
    newRegisterService() {
      return new RegisterService(this.serviceConnection);
    }
    newVerificationService() {
      return new VerificationService(this.serviceConnection);
    }
    newSavingsService() {
      return new SavingsService(this.serviceConnection);
    }
  };

  // lib/services/notbankClient.ts
  var _NotbankClient = class _NotbankClient {
    constructor(params) {
      this.connection = params.connection;
      this.accountService = params.accountService;
      this.authService = params.authService;
      this.feeService = params.feeService;
      this.instrumentService = params.instrumentService;
      this.productService = params.productService;
      this.reportService = params.reportService;
      this.getSubscriptionService = () => params.getSubscriptionService();
      this.systemService = params.systemService;
      this.tradingService = params.tradingService;
      this.userService = params.userService;
      this.walletService = params.walletService;
      this.quoteService = params.quoteService;
      this.registerService = params.registerService;
      this.verificationService = params.verificationService;
      this.savingsService = params.savingsService;
      this.authenticateUser = params.authenticate;
      this.updateSessionToken = params.updateSessionToken;
      this.connect = params.connect;
      this.close = params.close;
    }
    getAccountService() {
      return this.accountService;
    }
    getAuthService() {
      return this.authService;
    }
    getFeeService() {
      return this.feeService;
    }
    getInstrumentService() {
      return this.instrumentService;
    }
    getProductService() {
      return this.productService;
    }
    getReportService() {
      return this.reportService;
    }
    getSystemService() {
      return this.systemService;
    }
    getTradingService() {
      return this.tradingService;
    }
    getUserService() {
      return this.userService;
    }
    getWalletService() {
      return this.walletService;
    }
    getQuoteService() {
      return this.quoteService;
    }
    getRegisterService() {
      return this.registerService;
    }
    getVerificationService() {
      return this.verificationService;
    }
    getSavingsService() {
      return this.savingsService;
    }
    getConnection() {
      return this.connection;
    }
  };
  _NotbankClient.Factory = class Factory {
    static createRestClient(domain) {
      var factory2 = new HttpServiceFactory(domain);
      return new _NotbankClient({
        connection: factory2.getConnection(),
        accountService: factory2.newAccountService(),
        authService: factory2.newAuthService(),
        feeService: factory2.newFeeService(),
        instrumentService: factory2.newInstrumentService(),
        productService: factory2.newProductService(),
        reportService: factory2.newReportService(),
        getSubscriptionService: () => {
          throw new NotbankError("NotbankError. subcription service only exists for websocket connection", -1);
        },
        systemService: factory2.newSystemService(),
        tradingService: factory2.newTradingService(),
        userService: factory2.newUserService(),
        walletService: factory2.newWalletService(),
        quoteService: factory2.newQuoteService(),
        registerService: factory2.newRegisterService(),
        verificationService: factory2.newVerificationService(),
        savingsService: factory2.newSavingsService(),
        authenticate: (params) => factory2.authenticateUser(params),
        updateSessionToken: (token) => factory2.updateSessionToken(token),
        connect: () => Promise.resolve(null),
        close: () => Promise.resolve(null)
      });
    }
    static createWebsocketClient(configuration) {
      var factory2 = new WebsocketServiceFactory(configuration);
      return new _NotbankClient(
        {
          connection: factory2.getConnection(),
          accountService: factory2.newAccountService(),
          authService: factory2.newAuthService(),
          feeService: factory2.newFeeService(),
          instrumentService: factory2.newInstrumentService(),
          productService: factory2.newProductService(),
          reportService: factory2.newReportService(),
          getSubscriptionService: () => factory2.getSubscriptionService(),
          systemService: factory2.newSystemService(),
          tradingService: factory2.newTradingService(),
          userService: factory2.newUserService(),
          walletService: factory2.newWalletService(),
          quoteService: factory2.newQuoteService(),
          registerService: factory2.newRegisterService(),
          verificationService: factory2.newVerificationService(),
          authenticate: (params) => factory2.authenticateUser(params),
          updateSessionToken: (token) => factory2.updateSessionToken(token),
          savingsService: factory2.newSavingsService(),
          connect: () => factory2.connect(),
          close: () => factory2.close()
        }
      );
    }
  };
  var NotbankClient = _NotbankClient;
  return __toCommonJS(index_exports);
})();
