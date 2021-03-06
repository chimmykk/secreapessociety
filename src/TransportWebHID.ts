var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import Transport from "@ledgerhq/hw-transport";
import hidFraming from "@ledgerhq/devices/lib/hid-framing";
import { identifyUSBProductId, ledgerUSBVendorId } from "@ledgerhq/devices";
import { log } from "@ledgerhq/logs";
import { TransportOpenUserCancelled, DisconnectedDeviceDuringOperation, DisconnectedDevice, TransportError, } from "@ledgerhq/errors";
var ledgerDevices = [
    {
        vendorId: ledgerUSBVendorId
    },
];
var isSupported = function () {
    return Promise.resolve(!!(window.navigator && window.navigator.hid));
};
var getHID = function () {
    // $FlowFixMe
    var hid = navigator.hid;
    if (!hid)
        throw new TransportError("navigator.hid is not supported", "HIDNotSupported");
    return hid;
};
function requestLedgerDevices() {
    return __awaiter(this, void 0, void 0, function () {
        var device;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getHID().requestDevice({
                        filters: ledgerDevices
                    })];
                case 1:
                    device = _a.sent();
                    if (Array.isArray(device))
                        return [2 /*return*/, device];
                    return [2 /*return*/, [device]];
            }
        });
    });
}
function getLedgerDevices() {
    return __awaiter(this, void 0, void 0, function () {
        var devices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getHID().getDevices()];
                case 1:
                    devices = _a.sent();
                    return [2 /*return*/, devices.filter(function (d) { return d.vendorId === ledgerUSBVendorId; })];
            }
        });
    });
}
function getFirstLedgerDevice() {
    return __awaiter(this, void 0, void 0, function () {
        var existingDevices, devices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getLedgerDevices()];
                case 1:
                    existingDevices = _a.sent();
                    if (existingDevices.length > 0)
                        return [2 /*return*/, existingDevices[0]];
                    return [4 /*yield*/, requestLedgerDevices()];
                case 2:
                    devices = _a.sent();
                    return [2 /*return*/, devices[0]];
            }
        });
    });
}
/**
 * WebHID Transport implementation
 * @example
 * import TransportWebHID from "@ledgerhq/hw-transport-webhid";
 * ...
 * TransportWebHID.create().then(transport => ...)
 */
var TransportWebHID = /** @class */ (function (_super) {
    __extends(TransportWebHID, _super);
    function TransportWebHID(device) {
        var _this = _super.call(this) || this;
        _this.channel = Math.floor(Math.random() * 0xffff);
        _this.packetSize = 64;
        _this.inputs = [];
        _this.read = function () {
            if (_this.inputs.length) {
                return Promise.resolve(_this.inputs.shift());
            }
            return new Promise(function (success) {
                _this.inputCallback = success;
            });
        };
        _this.onInputReport = function (e) {
            var buffer = Buffer.from(e.data.buffer);
            if (_this.inputCallback) {
                _this.inputCallback(buffer);
                _this.inputCallback = null;
            }
            else {
                _this.inputs.push(buffer);
            }
        };
        _this._disconnectEmitted = false;
        _this._emitDisconnect = function (e) {
            if (_this._disconnectEmitted)
                return;
            _this._disconnectEmitted = true;
            _this.emit("disconnect", e);
        };
        /**
         * Exchange with the device using APDU protocol.
         * @param apdu
         * @returns a promise of apdu response
         */
        _this.exchange = function (apdu) { return __awaiter(_this, void 0, void 0, function () {
            var b;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exchangeAtomicImpl(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, channel, packetSize, framing, blocks, i, result, acc, buffer;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = this, channel = _a.channel, packetSize = _a.packetSize;
                                        log("apdu", "=> " + apdu.toString("hex"));
                                        framing = hidFraming(channel, packetSize);
                                        blocks = framing.makeBlocks(apdu);
                                        i = 0;
                                        _b.label = 1;
                                    case 1:
                                        if (!(i < blocks.length)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.device.sendReport(0, blocks[i])];
                                    case 2:
                                        _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 4:
                                        if (!!(result = framing.getReducedResult(acc))) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.read()];
                                    case 5:
                                        buffer = _b.sent();
                                        acc = framing.reduceResponse(acc, buffer);
                                        return [3 /*break*/, 4];
                                    case 6:
                                        log("apdu", "<= " + result.toString("hex"));
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })["catch"](function (e) {
                            if (e && e.message && e.message.includes("write")) {
                                _this._emitDisconnect(e);
                                throw new DisconnectedDeviceDuringOperation(e.message);
                            }
                            throw e;
                        })];
                    case 1:
                        b = _a.sent();
                        return [2 /*return*/, b];
                }
            });
        }); };
        _this.device = device;
        _this.deviceModel =
            typeof device.productId === "number"
                ? identifyUSBProductId(device.productId)
                : undefined;
        device.addEventListener("inputreport", _this.onInputReport);
        return _this;
    }
    /**
     * Similar to create() except it will always display the device permission (even if some devices are already accepted).
     */
    TransportWebHID.request = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, device;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, requestLedgerDevices()];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), device = _a[0];
                        return [2 /*return*/, TransportWebHID.open(device)];
                }
            });
        });
    };
    /**
     * Similar to create() except it will never display the device permission (it returns a Promise<?Transport>, null if it fails to find a device).
     */
    TransportWebHID.openConnected = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getLedgerDevices()];
                    case 1:
                        devices = _a.sent();
                        if (devices.length === 0)
                            return [2 /*return*/, null];
                        return [2 /*return*/, TransportWebHID.open(devices[0])];
                }
            });
        });
    };
    /**
     * Create a Ledger transport with a HIDDevice
     */
    TransportWebHID.open = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            var transport, onDisconnect;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, device.open()];
                    case 1:
                        _a.sent();
                        transport = new TransportWebHID(device);
                        onDisconnect = function (e) {
                            if (device === e.device) {
                                getHID().removeEventListener("disconnect", onDisconnect);
                                transport._emitDisconnect(new DisconnectedDevice());
                            }
                        };
                        getHID().addEventListener("disconnect", onDisconnect);
                        return [2 /*return*/, transport];
                }
            });
        });
    };
    /**
     * Release the transport device
     */
    TransportWebHID.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exchangeBusyPromise];
                    case 1:
                        _a.sent();
                        this.device.removeEventListener("inputreport", this.onInputReport);
                        return [4 /*yield*/, this.device.close()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransportWebHID.prototype.setScrambleKey = function () { };
    /**
     * Check if WebUSB transport is supported.
     */
    TransportWebHID.isSupported = isSupported;
    /**
     * List the WebUSB devices that was previously authorized by the user.
     */
    TransportWebHID.list = getLedgerDevices;
    /**
     * Actively listen to WebUSB devices and emit ONE device
     * that was either accepted before, if not it will trigger the native permission UI.
     *
     * Important: it must be called in the context of a UI click!
     */
    TransportWebHID.listen = function (observer) {
        var unsubscribed = false;
        getFirstLedgerDevice().then(function (device) {
            if (!device) {
                observer.error(new TransportOpenUserCancelled("Access denied to use Ledger device"));
            }
            else if (!unsubscribed) {
                var deviceModel = typeof device.productId === "number"
                    ? identifyUSBProductId(device.productId)
                    : undefined;
                observer.next({
                    type: "add",
                    descriptor: device,
                    deviceModel: deviceModel
                });
                observer.complete();
            }
        }, function (error) {
            observer.error(new TransportOpenUserCancelled(error.message));
        });
        function unsubscribe() {
            unsubscribed = true;
        }
        return {
            unsubscribe: unsubscribe
        };
    };
    return TransportWebHID;
}(Transport));
export default TransportWebHID;
//# sourceMappingURL=TransportWebHID.js.map