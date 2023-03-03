"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsdom_1 = tslib_1.__importDefault(require("jsdom"));
const { JSDOM } = jsdom_1.default;
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const domWindow = dom.window;
const domDocument = domWindow._document;
const originalProto = global.__proto__;
Object.assign(domWindow, originalProto);
domWindow.__proto__.window = domWindow;
domWindow.__proto__.document = domDocument;
global.__proto__ = domWindow;
exports.default = null;
//# sourceMappingURL=index.js.map