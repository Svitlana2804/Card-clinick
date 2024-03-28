/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/variables.js
var startWorking = 8;
var endWorking = 20;
var doctorBtnWrapper = document.querySelector('.doctorBtnWrapper');
var selectDoctor = document.querySelector('.js-doctor');
var doctorSelect = document.querySelector('.chooseDoctorSelect');
var regNumbOnly = /^[0-9.,]{1,}$/;
var regTextNumbers = /^[a-zA-Zа-яА-Я0-9ієїІЄЇ'".,\\ -]{2,}$/;
var displayNoCards = document.querySelector('.noCards');
var btnToggleText = document.querySelector('.btnToggleText');
var variables_cardContainer = document.getElementById("cardContainer");

;// CONCATENATED MODULE: ./src/js/components/closeModal.js
function closeModal(elemSelector) {
  var modalElement = document.querySelector(elemSelector);
  var modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
}
/* harmony default export */ const components_closeModal = (closeModal);
;// CONCATENATED MODULE: ./src/js/functions/load-existing-cards.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function loadExistingCards(_x) {
  return _loadExistingCards.apply(this, arguments);
}
function _loadExistingCards() {
  _loadExistingCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(token) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer ".concat(token)
            }
          });
        case 3:
          response = _context.sent;
          if (response.ok) {
            _context.next = 6;
            break;
          }
          throw new Error('Помилка при завантаженні всіх карток з серверу');
        case 6:
          _context.next = 8;
          return response.json();
        case 8:
          return _context.abrupt("return", _context.sent);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log('Помилка: ', _context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _loadExistingCards.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/js/components/freeTime.js
function freeTime_typeof(o) { "@babel/helpers - typeof"; return freeTime_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, freeTime_typeof(o); }
function freeTime_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ freeTime_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == freeTime_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(freeTime_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function freeTime_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function freeTime_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { freeTime_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { freeTime_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function freeTime(_x, _x2) {
  return _freeTime.apply(this, arguments);
}
function _freeTime() {
  _freeTime = freeTime_asyncToGenerator( /*#__PURE__*/freeTime_regeneratorRuntime().mark(function _callee(doctor, day) {
    var token, allCards, timeVisit;
    return freeTime_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          token = localStorage.getItem('token');
          _context.next = 3;
          return loadExistingCards(token);
        case 3:
          allCards = _context.sent;
          allCards = allCards.filter(function (elem) {
            return elem.doctor === doctor && elem.date === day;
          });
          timeVisit = allCards.map(function (elem) {
            return elem.timeVisit;
          });
          return _context.abrupt("return", timeVisit);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _freeTime.apply(this, arguments);
}

;// CONCATENATED MODULE: ./src/js/components/windowToggle.js
function windowToggle_typeof(o) { "@babel/helpers - typeof"; return windowToggle_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, windowToggle_typeof(o); }
function windowToggle_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ windowToggle_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == windowToggle_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(windowToggle_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function windowToggle_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function windowToggle_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { windowToggle_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { windowToggle_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var isCreateVisitBtn = false;
var icon = document.querySelector('#svgPlus');
function windowToggle(_x) {
  return _windowToggle.apply(this, arguments);
}
function _windowToggle() {
  _windowToggle = windowToggle_asyncToGenerator( /*#__PURE__*/windowToggle_regeneratorRuntime().mark(function _callee(showCards) {
    var token, allCards;
    return windowToggle_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (showCards) {
            isCreateVisitBtn = true;
            changeBtnGetCards();
          }
          doctorBtnWrapper.classList.toggle('d-none', isCreateVisitBtn);
          variables_cardContainer.classList.toggle('d-none', !isCreateVisitBtn);
          isCreateVisitBtn = !isCreateVisitBtn;
          isCreateVisitBtn ? changeBtnGetCards() : restoreCreateVisitButton();
          if (!isCreateVisitBtn) {
            _context.next = 9;
            break;
          }
          displayNoCards.style.display = 'none';
          _context.next = 14;
          break;
        case 9:
          token = localStorage.getItem('token');
          _context.next = 12;
          return loadExistingCards(token);
        case 12:
          allCards = _context.sent;
          if (allCards.length === 0) {
            displayNoCards.style.display = 'flex';
          }
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _windowToggle.apply(this, arguments);
}
function changeBtnGetCards() {
  btnToggleText.textContent = 'Перейти до карток';
  icon.classList.add('d-none');
  btnToggleText.classList.add('buttonGetCards');
}
function restoreCreateVisitButton() {
  btnToggleText.textContent = 'Додати візит';
  icon.classList.remove('d-none');
  btnToggleText.classList.remove('buttonGetCards');
}
;// CONCATENATED MODULE: ./src/js/classes/baseForm.js
function baseForm_typeof(o) { "@babel/helpers - typeof"; return baseForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, baseForm_typeof(o); }
function baseForm_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ baseForm_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == baseForm_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(baseForm_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function baseForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function baseForm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { baseForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { baseForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == baseForm_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != baseForm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != baseForm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var BaseForm = /*#__PURE__*/function () {
  function BaseForm() {
    var _this = this;
    _classCallCheck(this, BaseForm);
    _defineProperty(this, "date", new Date());
    _defineProperty(this, "isToday", false);
    _defineProperty(this, "checkForToday", function (e) {
      _this.isToday = _this.getCurrentDate().toString() === e.target.value.toString() ? true : false;
    });
  }
  return _createClass(BaseForm, [{
    key: "getCurrentDate",
    value: function getCurrentDate() {
      var year = this.date.getFullYear();
      var month = (this.date.getMonth() + 1).toString().padStart(2, '0');
      var day = this.date.getDate().toString().padStart(2, '0');
      return "".concat(year, "-").concat(month, "-").concat(day);
    }
  }, {
    key: "createInput",
    value: function createInput(fieldName) {
      var attributeNameValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var type = arguments.length > 2 ? arguments[2] : undefined;
      var placeholder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      if (attributeNameValue === 'indexBM') {
        return "\n            <div class = 'input-group flex-column fieldWrapper mt-2'>\n               <label class = 'nput-group-text formLabelStyle' for='".concat(attributeNameValue, "'>").concat(fieldName, "</label>\n               <input class = 'form-control formInputStyle' value='").concat(value, "' placeholder='").concat(placeholder, "' type=\"").concat(type, "\" id='").concat(attributeNameValue, "' name='").concat(attributeNameValue, "' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>\n               <a tabindex=\"0\" class=\"btn btn-sm text-start\"  id=\"countImt\" role=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"focus\" data-bs-title=\"\u0412\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0456\u043D\u0434\u0435\u043A\u0441\u0443 \u043C\u0430\u0441\u0438 \u0442\u0456\u043B\u0430\" data-bs-content=\"\u0429\u043E\u0431 \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u0438 \u0456\u043D\u0434\u0435\u043A\u0441 \u043C\u0430\u0441\u0438 \u0442\u0456\u043B\u0430, \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0432\u0438\u043C\u0456\u0440\u044F\u0442\u0438 \u0437\u0440\u0456\u0441\u0442 (\u0443 \u043C\u0435\u0442\u0440\u0430\u0445) \u0456 \u0432\u0430\u0433\u0443 (\u0443 \u043A\u0456\u043B\u043E\u0433\u0440\u0430\u043C\u0430\u0445). \u0424\u043E\u0440\u043C\u0443\u043B\u0430: \u0406\u041C\u0422 = \u0412\u0430\u0433\u0430 / (\u0417\u0440\u0456\u0441\u0442 * \u0417\u0440\u0456\u0441\u0442)\">\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435 \u044F\u043A \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 <u>\u0442\u0443\u0442</u></a>\n            </div>\n          ");
      }
      return "\n      <div class = 'input-group flex-column fieldWrapper mt-2'>\n         <label class = 'nput-group-text formLabelStyle' for='".concat(attributeNameValue, "'>").concat(fieldName, "</label>\n         <input class = 'form-control formInputStyle' value='").concat(value, "' placeholder='").concat(placeholder, "' type=\"").concat(type, "\" id='").concat(attributeNameValue, "' name='").concat(attributeNameValue, "' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>\n      </div>\n      ");
    }
  }, {
    key: "createTextArea",
    value: function createTextArea(fieldName) {
      var attributeNameValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return "\n      <div class = 'form-floating fieldWrapper mt-2'>\n         <textarea class = 'form-control formTextareaStyle' placeholder = '".concat(fieldName, "' id='floatingTextarea' name='").concat(attributeNameValue, "'>").concat(description, "</textarea>\n         <label class = 'nput-group-text start-10' for='floatingTextarea'>").concat(fieldName, "</label>\n      </div>\n  ");
    }
  }, {
    key: "createSelect",
    value: function createSelect(options) {
      var attributeNameValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var textContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var selectHTML = "\n      <div class=\"d-flex flex-column fieldWrapper mt-2\">\n        <label class=\"formLabelStyle\" for=\"".concat(attributeNameValue, "\">").concat(textContent, "</label>\n        <select id=\"").concat(attributeNameValue, "\" value=\"").concat(value, "\" name=\"").concat(attributeNameValue, "\" aria-label=\"Small select example\" class=\"form-select form-select-sm formInputStyle\">\n    ");
      if (options.length === 0) {
        selectHTML += "<option value=\"null\">\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0438\u0439 \u0434\u0435\u043D\u044C</option>";
      } else {
        for (var i = 0; i < options.length; i++) {
          if (options[i].optionValue === value) {
            selectHTML += "<option value=\"".concat(options[i].optionValue, "\" selected>").concat(options[i].textContent, "</option>");
          } else {
            selectHTML += "<option value=\"".concat(options[i].optionValue, "\">").concat(options[i].textContent, "</option>");
          }
        }
      }
      selectHTML += "\n        </select>\n      </div>\n    ";
      return selectHTML;
    }
  }, {
    key: "createDatepicker",
    value: function createDatepicker(inputName, labelText) {
      var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return "\n      <div class=\"flex-column input-group fieldWrapper mt-2\">\n        <label for=\"".concat(inputName, "\" class=\"form-label formLabelStyle m-0\">").concat(labelText, "</label>\n        <input\n          type=\"date\"\n          id=\"").concat(inputName, "\"\n          name=\"").concat(inputName, "\"\n          class=\"visit-form-date border formInputStyle \"\n          value=\"").concat(date, "\"\n          title=\"\u0414\u0430\u0442\u0430 \u0432\u0456\u0437\u0438\u0442\u0443\"\n          ").concat(inputName === 'dateOfLastVisit' ? "max=\"".concat(this.getCurrentDate(), "\"") : "min=\"".concat(this.getCurrentDate(), "\""), "\n        />\n      </div>\n    ");
    }
  }, {
    key: "createAppointmentHours",
    value: function createAppointmentHours() {
      var timeVisit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.createSelect(this.visitHours(), 'timeVisit', 'Час візиту:', timeVisit);
    }
  }, {
    key: "newTime",
    value: function () {
      var _newTime = baseForm_asyncToGenerator( /*#__PURE__*/baseForm_regeneratorRuntime().mark(function _callee(doctor, day) {
        var data, optionsTime;
        return baseForm_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return freeTime(doctor, day);
            case 2:
              data = _context.sent;
              optionsTime = this.visitHours();
              data.forEach(function (dataItem) {
                optionsTime = optionsTime.filter(function (elem) {
                  return elem.optionValue !== dataItem;
                });
              });
              return _context.abrupt("return", this.createSelect(optionsTime, 'timeVisit', 'Час візиту'));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function newTime(_x, _x2) {
        return _newTime.apply(this, arguments);
      }
      return newTime;
    }()
  }, {
    key: "visitHours",
    value: function visitHours() {
      var optionsTime = [];
      var startWorking = 8;
      if (this.isToday) {
        startWorking = this.date.getHours() + 1;
      }
      for (var i = startWorking; i <= endWorking; i++) {
        var time = "".concat(i.toString().padStart(2, 0), ":00");
        optionsTime.push({
          optionValue: time,
          textContent: time
        });
      }
      return optionsTime;
    }
  }, {
    key: "createBtn",
    value: function createBtn(marker) {
      if (marker) {
        return "\n         <div class=\"d-grid gap-2 col-6 w-100 mt-4 formBtnStyleWrapper\">\n           <button type=\"submit\" class=\"btn btn-primary formBtnStyle formBtnStyleEdit\"  id=\"liveToastBtn\">\n           <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" viewBox=\"0 0 512 512\">\n           <g fill=\"none\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"50\" class=\"color000 svgShape\" data-name=\"Check Mark\">\n             <path d=\"M8.5 8.5h495v495H8.5z\" class=\"colorStroke202020 svgStroke\"/>\n             <path d=\"m141.47 239.88 87.1 87.1 141.96-141.96\"/>\n           </g>\n         </svg>\n           \u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0434\u0430\u043D\u0456 \u0432\u0456\u0437\u0438\u0442\u0443</button>\n         </div>\n       ";
      }
      return "\n      <div class=\"d-grid gap-2 col-6 w-100 mt-4 formBtnStyleWrapper\">\n        <button type=\"submit\" class=\"btn btn-primary formBtnStyle\"  id=\"liveToastBtn\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class='me-2' width=\"19\" height=\"19\" fill=\"none\"><g fill=\"#fff\" clip-path=\"url(#a)\"><path fill-opacity=\".01\" d=\"M.276 0h16v16h-16z\"/><g clip-path=\"url(#b)\"><path d=\"M14.275 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12Zm-12-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-12Z\"/><path d=\"M8.275 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 1 1 0 1h-3v3a.5.5 0 1 1-1 0v-3h-3a.5.5 0 1 1 0-1h3v-3a.5.5 0 0 1 .5-.5Z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M.276 0h16v16h-16z\"/></clipPath><clipPath id=\"b\"><path fill=\"#fff\" d=\"M.276 0h16v16h-16z\"/></clipPath></defs></svg>\n        \u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0432\u0456\u0437\u0438\u0442</button>\n      </div>\n    ";
    }
  }, {
    key: "createForm",
    value: function createForm(fullName, target, date, description, timeVisit, urgency) {
      selectDoctor.value = 'choose';
      var form = document.createElement('form');
      form.classList.add('row', 'g-3', 'needs-validation', 'd-flex', 'px-3', 'flex-wrap', 'justify-content-between', 'doctorForm');
      form.insertAdjacentHTML('beforeend', this.createFormFields(fullName, target, date, description, timeVisit, urgency));
      return form;
    }
  }, {
    key: "createFormFields",
    value: function createFormFields(fullName, target, date, description, timeVisit, urgency) {
      var optionsArr = [{
        optionValue: 'виберіть терміновість',
        textContent: 'виберіть терміновість'
      }, {
        optionValue: 'common',
        textContent: 'звичайна'
      }, {
        optionValue: 'priority',
        textContent: 'пріоритетна'
      }, {
        optionValue: 'urgent',
        textContent: 'невідкладна'
      }];
      var formFields = this.createInput('Прізвище Ім’я По-батькові:', 'fullName', 'text', 'Іванова Ірина Володимирівна', fullName) + this.createDatepicker('date', 'Дата візиту:', date) + this.createInput('Мета візиту:', 'target', 'text', 'Поставлення діагнозу', target) + this.createAppointmentHours(timeVisit) + this.createSelect(optionsArr, 'urgency', 'Терміновість візиту:', urgency) + this.createTextArea('Опис:', 'description', description);
      return formFields;
    }
  }, {
    key: "validationCheck",
    value: function validationCheck(validations, form) {
      var isValid = validations.map(function (validation) {
        var elem = form[validation.inputName];
        if (!validation.isValid) {
          elem.classList.add('is-invalid');
          elem.classList.remove('is-valid');
          return false;
        } else {
          elem.classList.remove('is-invalid');
          elem.classList.add('is-valid');
          return true;
        }
      });
      return isValid.every(function (elem) {
        return elem === true;
      });
    }
  }, {
    key: "closeWindow",
    value: function closeWindow(showCards) {
      components_closeModal('.modalVisit');
      windowToggle(showCards);
    }
  }, {
    key: "resetForm",
    value: function resetForm(form) {
      form.reset();
      Array.from(form.elements).forEach(function (elem) {
        return elem.classList.remove('is-valid');
      });
    }
  }]);
}();
/* harmony default export */ const baseForm = (BaseForm);
;// CONCATENATED MODULE: ./src/js/components/toast.js
function createTost(textContent, addedClass) {
  var removeClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var toastTrigger = document.getElementById('liveToastBtn');
  var toastLiveExample = document.getElementById('liveToast');
  if (toastTrigger) {
    var toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    var toastBody = document.querySelector('.toast-body');
    toastBody.textContent = textContent;
    toastBody.classList.add(addedClass);
    toastBody.classList.remove(removeClass);
    toastBootstrap.show();
  }
}
/* harmony default export */ const toast = (createTost);
;// CONCATENATED MODULE: ./src/js/api/sendData.js
function sendData_typeof(o) { "@babel/helpers - typeof"; return sendData_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, sendData_typeof(o); }
function sendData_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ sendData_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == sendData_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(sendData_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function sendData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function sendData_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { sendData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { sendData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function sendData(_x) {
  return _sendData.apply(this, arguments);
}
function _sendData() {
  _sendData = sendData_asyncToGenerator( /*#__PURE__*/sendData_regeneratorRuntime().mark(function _callee(dataForCard) {
    var token, response;
    return sendData_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          token = localStorage.getItem('token');
          _context.prev = 1;
          _context.next = 4;
          return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify(dataForCard)
          });
        case 4:
          response = _context.sent;
          if (!response.ok) {
            toast('Сталася помилка! Візит НЕ створено, перезавантажте сторінку!', 'text-danger', 'text-success');
          }
          toast('Новий візит успішно створено!', 'text-success', 'text-danger', 'text-danger');
          _context.next = 9;
          return response.json();
        case 9:
          return _context.abrupt("return", _context.sent);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          toast('Сталася помилка! Візит НЕ створено, перезавантажте сторінку!', 'text-danger', 'text-success');
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _sendData.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/js/functions/date-converters.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Tue Month dd yyyy hh:mm:ss GMT+0200 (time zone)   =>   dd.mm.yyyy
function simplifyDateToString(date) {
  return ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear().toString().slice(-2) + ' ' + date.getHours() + ':' + date.getMinutes();
}

// 2023-10-07T00:00:00.000Z   =>   07.10.2023
function changeDateRecord(date1) {
  var date = new Date(date1);
  var day = date.getUTCDate();
  var month = date.getUTCMonth() + 1;
  var year = date.getUTCFullYear();
  return "".concat(day < 10 ? '0' : '').concat(day, ".").concat(month < 10 ? '0' : '').concat(month, ".").concat(year);
}

//   YYYY-MM-DD and 13:00   =>   Tue Month dd yyyy hh:mm:ss GMT+0200 (time zone)
function convertToDateFormat(date) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '00:00';
  var _date$split = date.split('-'),
    _date$split2 = _slicedToArray(_date$split, 3),
    year = _date$split2[0],
    month = _date$split2[1],
    day = _date$split2[2];
  var _time$split = time.split(':'),
    _time$split2 = _slicedToArray(_time$split, 2),
    hours = _time$split2[0],
    minutes = _time$split2[1];
  return new Date(year, month - 1, day, hours, minutes);
}
function formatDateTime(obj) {
  var dateObject = new Date(obj);
  var day = dateObject.getDate();
  var month = dateObject.getMonth() + 1; // Місяці починаються з 0
  var year = dateObject.getFullYear();
  var hours = dateObject.getHours();
  var minutes = dateObject.getMinutes();
  var formattedDay = day < 10 ? "0".concat(day) : day;
  var formattedMonth = month < 10 ? "0".concat(month) : month;
  var formattedHours = hours < 10 ? "0".concat(hours) : hours;
  var formattedMinutes = minutes < 10 ? "0".concat(minutes) : minutes;
  return "".concat(formattedDay, ".").concat(formattedMonth, ".").concat(year, " ").concat(formattedHours, ":").concat(formattedMinutes);
}
;// CONCATENATED MODULE: ./src/js/classes/visit.js
function visit_typeof(o) { "@babel/helpers - typeof"; return visit_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, visit_typeof(o); }
function visit_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ visit_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == visit_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(visit_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function visit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function visit_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { visit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { visit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function visit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function visit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, visit_toPropertyKey(descriptor.key), descriptor); } }
function visit_createClass(Constructor, protoProps, staticProps) { if (protoProps) visit_defineProperties(Constructor.prototype, protoProps); if (staticProps) visit_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function visit_toPropertyKey(t) { var i = visit_toPrimitive(t, "string"); return "symbol" == visit_typeof(i) ? i : i + ""; }
function visit_toPrimitive(t, r) { if ("object" != visit_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != visit_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var Visit = /*#__PURE__*/function () {
  function Visit(date, id) {
    var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var timeVisit = arguments.length > 3 ? arguments[3] : undefined;
    var fullName = arguments.length > 4 ? arguments[4] : undefined;
    var target = arguments.length > 5 ? arguments[5] : undefined;
    var urgency = arguments.length > 6 ? arguments[6] : undefined;
    var description = arguments.length > 7 ? arguments[7] : undefined;
    var editDate = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
    visit_classCallCheck(this, Visit);
    this.status = true; // open/done
    this.id = id;
    this.date = date;
    this.status = status;
    this.timeVisit = timeVisit;
    this.fullName = fullName;
    this.target = target; //мета
    this.urgency = urgency; // терміновість
    this.description = description; // опис
    this.editDate = editDate;
    this.isExpand = false;
  }

  // СТВОРЕННЯ КАРТКИ
  return visit_createClass(Visit, [{
    key: "renderCards",
    value: function renderCards() {
      var cardItem = document.createElement('li');
      cardItem.classList.add('card__item', 'col-xxl-3', 'col-lg-4', 'col-md-6', 'col-12');
      // cardItem.setAttribute("draggable", "true");

      this.cardItem = cardItem;
      this.generateElementContent();
      variables_cardContainer.appendChild(cardItem);
    }
  }, {
    key: "generateElementContent",
    value: function generateElementContent() {
      var _this = this;
      this.cardItem.innerHTML = this.generateCardHtml();
      var deleteBtn = this.cardItem.querySelector('.card__btn-close');
      deleteBtn.addEventListener('click', function () {
        return _this.deleteCard();
      });
      var statusSelect = this.cardItem.querySelector('.card__status-selector');
      statusSelect.addEventListener('change', function () {
        return _this.changeStatus();
      });
      var editBtn = this.cardItem.querySelector(".card__edit-btn");
      editBtn.addEventListener("click", function () {
        return _this.editedResponseBody();
      });
      var expandCollapseBtn = this.cardItem.querySelector('.card__expand-collapse-btn');
      expandCollapseBtn.addEventListener('click', function () {
        return _this.expandCollapseCard();
      });
    }
  }, {
    key: "checkStatus",
    value: function checkStatus() {
      var currentDate = new Date();
      var dateOfVisit = new Date(convertToDateFormat(this.date, this.timeVisit));
      if (dateOfVisit >= currentDate) {
        this.status = true;
        this.isDateHadPassed = false;
      } else {
        this.status = false;
        this.isDateHadPassed = true;
        this.editCard();
      }
    }

    // КНОПКА ПОКАЗАТИ БІЛЬШЕ-МЕНШЕ
  }, {
    key: "expandCollapseCard",
    value: function expandCollapseCard() {
      var expandCollapseBlock = this.cardItem.querySelector('.card__expand-collapse-container');
      expandCollapseBlock.classList.toggle('card__expand-collapse-container--show');
      if (expandCollapseBlock.classList.contains('card__expand-collapse-container--show')) {
        event.target.innerText = 'Показати менше ⯅';
        this.isExpand = true;
      } else {
        event.target.innerText = 'Показати більше ⯆';
        this.isExpand = false;
      }
    }

    // ВИДАЛЕННЯ ВІЗИТУ І КАРТКИ
  }, {
    key: "deleteCard",
    value: function () {
      var _deleteCard = visit_asyncToGenerator( /*#__PURE__*/visit_regeneratorRuntime().mark(function _callee() {
        var token, request, allCards;
        return visit_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              token = localStorage.getItem('token');
              _context.prev = 1;
              _context.next = 4;
              return fetch("https://ajax.test-danit.com/api/v2/cards/".concat(this.id), {
                method: 'DELETE',
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            case 4:
              request = _context.sent;
              if (request.ok) {
                _context.next = 7;
                break;
              }
              throw new Error('Помилка при видаленні візиту');
            case 7:
              _context.next = 9;
              return loadExistingCards(token);
            case 9:
              allCards = _context.sent;
              if (allCards.length === 0) {
                displayNoCards.style.display = 'flex';
              }
              this.cardItem.remove();
              _context.next = 17;
              break;
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              console.log('Помилка: ', _context.t0);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 14]]);
      }));
      function deleteCard() {
        return _deleteCard.apply(this, arguments);
      }
      return deleteCard;
    }()
  }, {
    key: "rewriteEditDate",
    value: function rewriteEditDate() {
      var currentDate = new Date();
      this.editDate = simplifyDateToString(currentDate);
    }

    // ЗМІНА ДАНИХ ВІЗИТУ І КАРТКИ
  }, {
    key: "editCard",
    value: function () {
      var _editCard = visit_asyncToGenerator( /*#__PURE__*/visit_regeneratorRuntime().mark(function _callee2() {
        var token, response;
        return visit_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              token = localStorage.getItem('token');
              _context2.prev = 1;
              _context2.next = 4;
              return fetch("https://ajax.test-danit.com/api/v2/cards/".concat(this.id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer ".concat(token)
                },
                body: JSON.stringify(this)
              });
            case 4:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 7;
                break;
              }
              throw new Error("Помилка при зміні даних візиту");
            case 7:
              this.generateElementContent(this.cardItem);
              _context2.next = 13;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              console.log('Помилка: ', _context2.t0);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[1, 10]]);
      }));
      function editCard() {
        return _editCard.apply(this, arguments);
      }
      return editCard;
    }() // EVENTS ДЛЯ КНОПКИ "АКТИВНИЙ - ЗАВЕРШЕНИЙ"
  }, {
    key: "changeStatus",
    value: function changeStatus() {
      if (event.target.value === 'open') {
        this.status = true;
      } else if (event.target.value === 'done') {
        this.status = false;
      }
      this.editCard();
    }
  }]);
}();

;// CONCATENATED MODULE: ./src/img/cardiology-or.png
const cardiology_or_namespaceObject = __webpack_require__.p + "bf52677209b0831638a2.png";
;// CONCATENATED MODULE: ./src/js/components/openModal.js
function openModal(elemSelector) {
  var modalElement = document.querySelector(elemSelector);
  var modal = new bootstrap.Modal(modalElement);
  modal.show();
}
/* harmony default export */ const components_openModal = (openModal);
;// CONCATENATED MODULE: ./src/js/classes/cardiologist-visit.js
function cardiologist_visit_typeof(o) { "@babel/helpers - typeof"; return cardiologist_visit_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, cardiologist_visit_typeof(o); }
function cardiologist_visit_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ cardiologist_visit_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == cardiologist_visit_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(cardiologist_visit_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function cardiologist_visit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function cardiologist_visit_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { cardiologist_visit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { cardiologist_visit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function cardiologist_visit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function cardiologist_visit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, cardiologist_visit_toPropertyKey(descriptor.key), descriptor); } }
function cardiologist_visit_createClass(Constructor, protoProps, staticProps) { if (protoProps) cardiologist_visit_defineProperties(Constructor.prototype, protoProps); if (staticProps) cardiologist_visit_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function cardiologist_visit_toPropertyKey(t) { var i = cardiologist_visit_toPrimitive(t, "string"); return "symbol" == cardiologist_visit_typeof(i) ? i : i + ""; }
function cardiologist_visit_toPrimitive(t, r) { if ("object" != cardiologist_visit_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != cardiologist_visit_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (cardiologist_visit_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CardiologistVisit = /*#__PURE__*/function (_Visit) {
  function CardiologistVisit() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      date = _ref.date,
      id = _ref.id,
      status = _ref.status,
      timeVisit = _ref.timeVisit,
      fullName = _ref.fullName,
      target = _ref.target,
      urgency = _ref.urgency,
      description = _ref.description,
      pressureLower = _ref.pressureLower,
      pressureHigh = _ref.pressureHigh,
      age = _ref.age,
      pressure = _ref.pressure,
      indexBM = _ref.indexBM,
      disease = _ref.disease,
      editDate = _ref.editDate;
    cardiologist_visit_classCallCheck(this, CardiologistVisit);
    _this = _callSuper(this, CardiologistVisit, [date, id, status, timeVisit, fullName, target, urgency, description, editDate]);
    _this.doctor = 'Кардіолог';
    _this.age = age;
    _this.pressure = pressure;
    _this.indexBM = indexBM;
    _this.disease = disease;
    _this.doctorImgUrl = cardiology_or_namespaceObject;
    _this.pressureLower = pressureLower;
    _this.pressureHigh = pressureHigh;
    return _this;
  }
  _inherits(CardiologistVisit, _Visit);
  return cardiologist_visit_createClass(CardiologistVisit, [{
    key: "createResponseBody",
    value: function createResponseBody() {
      return {
        doctor: this.doctor,
        status: this.status,
        date: this.date,
        timeVisit: this.timeVisit,
        fullName: this.fullName,
        target: this.target,
        urgency: this.urgency,
        description: this.description,
        age: this.age,
        pressure: this.pressure,
        indexBM: this.indexBM,
        disease: this.disease,
        editDate: this.editDate,
        editTime: this.editTime
      };
    }
  }, {
    key: "generateCardHtml",
    value: function generateCardHtml() {
      var editDateString = this.editDate ? "\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E: ".concat(formatDateTime(this.editDate)) : '';
      var expandClass = '';
      var expandBtnText = 'Показати більше ⯆';
      if (this.isExpand) {
        expandClass = 'card__expand-collapse-container--show';
        expandBtnText = 'Показати менше ⯅';
      }
      var urgencyText = '';
      var higthUgencyBage = '';
      switch (this.urgency) {
        case 'urgent':
          urgencyText = "<span style='color: #DC3545;'>висока</span>";
          higthUgencyBage = "<span class=\"badge bg-danger\">!</span>";
          break;
        case 'priority':
          urgencyText = 'пріоритетна';
          break;
        case 'common':
          urgencyText = 'нормальна';
          break;
      }
      var containerStatus = '';
      var selectOpen = '';
      var selectDone = '';
      if (this.status) {
        selectOpen = 'selected';
      } else {
        containerStatus = 'card__container--done';
        selectDone = 'selected';
      }
      var disabled = '';
      if (this.isDateHadPassed) {
        disabled = 'disabled';
      }
      return "\n        <div draggable=\"true\" class=\"card__container ".concat(containerStatus, "\">\n        <div class=\"card__head\">\n          <img src=\"").concat(this.doctorImgUrl, "\" alt=\"Doctor type image\" class=\"card__img\">\n          <div class=\"card__head__info\">\n            <h3 class=\"card__doctor-type\">").concat(this.doctor, " ").concat(higthUgencyBage, "</h3>\n            <h5 class=\"card__date\">").concat(changeDateRecord(this.date), " ").concat(this.timeVisit, "</h5>\n          </div>\n          <button type=\"button\" class=\"card__btn-close btn-close\" aria-label=\"Close\"></button>\n        </div>\n        <h4 class=\"card__full-name\">").concat(this.fullName, "</h4>\n        <div class=\"card__expand-collapse-container ").concat(expandClass, "\">\n          <p class=\"card__text\"><span class=\"card__text-title\">\u041C\u0435\u0442\u0430 \u0432\u0456\u0437\u0438\u0442\u0443: </span>").concat(this.target, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u0422\u0435\u0440\u043C\u0456\u043D\u043E\u0432\u0456\u0441\u0442\u044C: </span>").concat(urgencyText, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u0417\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439 \u0442\u0438\u0441\u043A: </span>").concat(this.pressureLower, " / ").concat(this.pressureHigh, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u0406\u041C\u0422: </span>").concat(this.indexBM, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u0412\u0456\u043A: </span>").concat(this.age, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u0456 \u0437\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u043D\u044F: </span>").concat(this.disease, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u041E\u043F\u0438\u0441: </span>").concat(this.description, "</p>\n          <p class=\"card__edit-time\">").concat(editDateString, "</p>\n          <select ").concat(disabled, " class=\"card__status-selector form-select col-12\" aria-label=\"Default select\">\n            <option ").concat(selectOpen, " value=\"open\">\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439</option>\n            <option ").concat(selectDone, " value=\"done\">\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0439</option>\n          </select>\n        </div>\n        <div class=\"card__bottom\">\n          <button type=\"button\" class=\"btn btn-secondary card__expand-collapse-btn\">").concat(expandBtnText, "</button>\n          <button ").concat(disabled, " type=\"button\" class=\"btn btn-secondary card__edit-btn\">\u0417\u043C\u0456\u043D\u0438\u0442\u0438</button>\n        </div>\n      </div>");
    }
  }, {
    key: "editedResponseBody",
    value: function () {
      var _editedResponseBody = cardiologist_visit_asyncToGenerator( /*#__PURE__*/cardiologist_visit_regeneratorRuntime().mark(function _callee() {
        return cardiologist_visit_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              components_openModal('.modalVisit');
              createForm('cardiologist', this);
              this.rewriteEditDate();
              return _context.abrupt("return", this.createResponseBody());
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function editedResponseBody() {
        return _editedResponseBody.apply(this, arguments);
      }
      return editedResponseBody;
    }()
  }]);
}(Visit);
;// CONCATENATED MODULE: ./src/js/api/editCard.js
function editCard_typeof(o) { "@babel/helpers - typeof"; return editCard_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, editCard_typeof(o); }
function editCard_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ editCard_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == editCard_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(editCard_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function editCard_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function editCard_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { editCard_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { editCard_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function editCard(_x) {
  return _editCard.apply(this, arguments);
}
function _editCard() {
  _editCard = editCard_asyncToGenerator( /*#__PURE__*/editCard_regeneratorRuntime().mark(function _callee(id) {
    var newResponseBody,
      token,
      response,
      _args = arguments;
    return editCard_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          newResponseBody = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
          token = localStorage.getItem("token");
          _context.prev = 2;
          _context.next = 5;
          return fetch("https://ajax.test-danit.com/api/v2/cards/".concat(id), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify(newResponseBody)
          });
        case 5:
          response = _context.sent;
          if (response.ok) {
            _context.next = 9;
            break;
          }
          toast('Сталася помилка! Візит НЕ змінено, перезавантажте сторінку!', 'text-danger', 'text-success');
          throw new Error('Помилка при зміні даних візиту');
        case 9:
          toast('Дані візиту оновлено', 'text-success', 'text-danger');
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          console.log('Помилка: ', _context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 12]]);
  }));
  return _editCard.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/img/tooth-or.png
const tooth_or_namespaceObject = __webpack_require__.p + "5438a05a792f44318f61.png";
;// CONCATENATED MODULE: ./src/js/classes/dentist-visit.js
function dentist_visit_typeof(o) { "@babel/helpers - typeof"; return dentist_visit_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dentist_visit_typeof(o); }
function dentist_visit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function dentist_visit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, dentist_visit_toPropertyKey(descriptor.key), descriptor); } }
function dentist_visit_createClass(Constructor, protoProps, staticProps) { if (protoProps) dentist_visit_defineProperties(Constructor.prototype, protoProps); if (staticProps) dentist_visit_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function dentist_visit_toPropertyKey(t) { var i = dentist_visit_toPrimitive(t, "string"); return "symbol" == dentist_visit_typeof(i) ? i : i + ""; }
function dentist_visit_toPrimitive(t, r) { if ("object" != dentist_visit_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != dentist_visit_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function dentist_visit_callSuper(t, o, e) { return o = dentist_visit_getPrototypeOf(o), dentist_visit_possibleConstructorReturn(t, dentist_visit_isNativeReflectConstruct() ? Reflect.construct(o, e || [], dentist_visit_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function dentist_visit_possibleConstructorReturn(self, call) { if (call && (dentist_visit_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return dentist_visit_assertThisInitialized(self); }
function dentist_visit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function dentist_visit_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (dentist_visit_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function dentist_visit_getPrototypeOf(o) { dentist_visit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dentist_visit_getPrototypeOf(o); }
function dentist_visit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) dentist_visit_setPrototypeOf(subClass, superClass); }
function dentist_visit_setPrototypeOf(o, p) { dentist_visit_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dentist_visit_setPrototypeOf(o, p); }






var DentistVisit = /*#__PURE__*/function (_Visit) {
  function DentistVisit() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      date = _ref.date,
      id = _ref.id,
      status = _ref.status,
      timeVisit = _ref.timeVisit,
      fullName = _ref.fullName,
      target = _ref.target,
      urgency = _ref.urgency,
      description = _ref.description,
      dateOfLastVisit = _ref.dateOfLastVisit,
      editDate = _ref.editDate;
    dentist_visit_classCallCheck(this, DentistVisit);
    _this = dentist_visit_callSuper(this, DentistVisit, [date, id, status, timeVisit, fullName, target, urgency, description, editDate]);
    _this.doctor = 'Стоматолог';
    _this.dateOfLastVisit = dateOfLastVisit;
    _this.doctorImgUrl = tooth_or_namespaceObject;
    return _this;
  }
  dentist_visit_inherits(DentistVisit, _Visit);
  return dentist_visit_createClass(DentistVisit, [{
    key: "createResponseBody",
    value: function createResponseBody() {
      return {
        doctor: this.doctor,
        status: this.status,
        date: this.date,
        timeVisit: this.timeVisit,
        fullName: this.fullName,
        target: this.target,
        urgency: this.urgency,
        description: this.description,
        dateOfLastVisit: this.dateOfLastVisit,
        editDate: this.editDate
      };
    }
  }, {
    key: "generateCardHtml",
    value: function generateCardHtml() {
      var editDateString = this.editDate ? "\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E: ".concat(formatDateTime(this.editDate)) : '';
      var lastVisitDateString = this.dateOfLastVisit ? "".concat(changeDateRecord(this.dateOfLastVisit)) : 'немає, цей візит є першим';
      var expandClass = '';
      var expandBtnText = 'Показати більше ⯆';
      if (this.isExpand) {
        expandClass = 'card__expand-collapse-container--show';
        expandBtnText = 'Показати менше ⯅';
      }
      var urgencyText = '';
      var higthUgencyBage = '';
      switch (this.urgency) {
        case 'urgent':
          urgencyText = "<span style='color: #DC3545;'>висока</span>";
          higthUgencyBage = "<span class=\"badge bg-danger\">!</span>";
          break;
        case 'priority':
          urgencyText = 'пріоритетна';
          break;
        case 'common':
          urgencyText = 'нормальна';
          break;
      }
      var containerStatus = '';
      var selectOpen = '';
      var selectDone = '';
      if (this.status) {
        selectOpen = 'selected';
      } else {
        containerStatus = 'card__container--done';
        selectDone = 'selected';
      }
      var disabled = '';
      if (this.isDateHadPassed) {
        disabled = 'disabled';
      }
      return "\n        <div draggable=\"true\" class=\"card__container ".concat(containerStatus, "\">\n        <div class=\"card__head\">\n          <img src=\"").concat(this.doctorImgUrl, "\" alt=\"Doctor type image\" class=\"card__img\">\n          <div class=\"card__head__info\">\n            <h3 class=\"card__doctor-type\">").concat(this.doctor, " ").concat(higthUgencyBage, "</h3>\n            <h5 class=\"card__date\">").concat(changeDateRecord(this.date), " ").concat(this.timeVisit, "</h5>\n          </div>\n          <button type=\"button\" class=\"card__btn-close btn-close\" aria-label=\"Close\"></button>\n        </div>\n        <h4 class=\"card__full-name\">").concat(this.fullName, "</h4>\n        <div class=\"card__expand-collapse-container ").concat(expandClass, "\">\n          <p class=\"card__text\"><span class=\"card__text-title\">\u041C\u0435\u0442\u0430 \u0432\u0456\u0437\u0438\u0442\u0443: </span>").concat(this.target, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u0422\u0435\u0440\u043C\u0456\u043D\u043E\u0432\u0456\u0441\u0442\u044C: </span>").concat(urgencyText, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u0414\u0430\u0442\u0430 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E \u0432\u0456\u0437\u0438\u0442\u0443: </span>").concat(lastVisitDateString, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u041E\u043F\u0438\u0441: </span>").concat(this.description, "</p>\n          <p class=\"card__edit-time\">").concat(editDateString, "</p>\n          <select ").concat(disabled, " class=\"card__status-selector form-select col-12\" aria-label=\"Default select\">\n            <option ").concat(selectOpen, " value=\"open\">\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439</option>\n            <option ").concat(selectDone, " value=\"done\">\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0439</option>\n          </select>\n        </div>\n        <div class=\"card__bottom\">\n          <button type=\"button\" class=\"btn btn-secondary card__expand-collapse-btn\">").concat(expandBtnText, "</button>\n          <button ").concat(disabled, " type=\"button\" class=\"btn btn-secondary card__edit-btn\">\u0417\u043C\u0456\u043D\u0438\u0442\u0438</button>\n        </div>\n      </div>");
    }
  }, {
    key: "editedResponseBody",
    value: function editedResponseBody() {
      components_openModal('.modalVisit');
      createForm('dentist', this);
      this.rewriteEditDate();
      return this.createResponseBody();
    }
  }]);
}(Visit);
;// CONCATENATED MODULE: ./src/img/stethoscop-or.png
const stethoscop_or_namespaceObject = __webpack_require__.p + "603d6a9aadc40e9dbd08.png";
;// CONCATENATED MODULE: ./src/js/classes/therapist-visit.js
function therapist_visit_typeof(o) { "@babel/helpers - typeof"; return therapist_visit_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, therapist_visit_typeof(o); }
function therapist_visit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function therapist_visit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, therapist_visit_toPropertyKey(descriptor.key), descriptor); } }
function therapist_visit_createClass(Constructor, protoProps, staticProps) { if (protoProps) therapist_visit_defineProperties(Constructor.prototype, protoProps); if (staticProps) therapist_visit_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function therapist_visit_toPropertyKey(t) { var i = therapist_visit_toPrimitive(t, "string"); return "symbol" == therapist_visit_typeof(i) ? i : i + ""; }
function therapist_visit_toPrimitive(t, r) { if ("object" != therapist_visit_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != therapist_visit_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function therapist_visit_callSuper(t, o, e) { return o = therapist_visit_getPrototypeOf(o), therapist_visit_possibleConstructorReturn(t, therapist_visit_isNativeReflectConstruct() ? Reflect.construct(o, e || [], therapist_visit_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function therapist_visit_possibleConstructorReturn(self, call) { if (call && (therapist_visit_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return therapist_visit_assertThisInitialized(self); }
function therapist_visit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function therapist_visit_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (therapist_visit_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function therapist_visit_getPrototypeOf(o) { therapist_visit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return therapist_visit_getPrototypeOf(o); }
function therapist_visit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) therapist_visit_setPrototypeOf(subClass, superClass); }
function therapist_visit_setPrototypeOf(o, p) { therapist_visit_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return therapist_visit_setPrototypeOf(o, p); }






var TherapistVisit = /*#__PURE__*/function (_Visit) {
  function TherapistVisit() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      date = _ref.date,
      id = _ref.id,
      status = _ref.status,
      timeVisit = _ref.timeVisit,
      fullName = _ref.fullName,
      target = _ref.target,
      urgency = _ref.urgency,
      description = _ref.description,
      age = _ref.age,
      editDate = _ref.editDate;
    therapist_visit_classCallCheck(this, TherapistVisit);
    _this = therapist_visit_callSuper(this, TherapistVisit, [date, id, status, timeVisit, fullName, target, urgency, description, editDate]);
    _this.doctor = "Терапевт";
    _this.age = age;
    _this.doctorImgUrl = stethoscop_or_namespaceObject;
    return _this;
  }
  therapist_visit_inherits(TherapistVisit, _Visit);
  return therapist_visit_createClass(TherapistVisit, [{
    key: "createResponseBody",
    value: function createResponseBody() {
      return {
        doctor: this.doctor,
        status: this.status,
        date: this.date,
        timeVisit: this.timeVisit,
        fullName: this.fullName,
        target: this.target,
        urgency: this.urgency,
        description: this.description,
        age: this.age,
        editDate: this.editDate
      };
    }
  }, {
    key: "generateCardHtml",
    value: function generateCardHtml() {
      var editDateString = this.editDate ? "\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E: ".concat(formatDateTime(this.editDate)) : '';
      var expandClass = '';
      var expandBtnText = 'Показати більше ⯆';
      if (this.isExpand) {
        expandClass = 'card__expand-collapse-container--show';
        expandBtnText = 'Показати менше ⯅';
      }
      var urgencyText = '';
      var higthUgencyBage = '';
      switch (this.urgency) {
        case 'urgent':
          urgencyText = "<span style='color: #DC3545;'>висока</span>";
          higthUgencyBage = "<span class=\"badge bg-danger\">!</span>";
          break;
        case 'priority':
          urgencyText = 'пріоритетна';
          break;
        case 'common':
          urgencyText = 'нормальна';
          break;
      }
      var containerStatus = '';
      var selectOpen = '';
      var selectDone = '';
      if (this.status) {
        selectOpen = 'selected';
      } else {
        containerStatus = 'card__container--done';
        selectDone = 'selected';
      }
      var disabled = '';
      if (this.isDateHadPassed) {
        disabled = 'disabled';
      }
      return "\n        <div draggable=\"true\" class=\"card__container ".concat(containerStatus, "\">\n        <div class=\"card__head\">\n          <img src=\"").concat(this.doctorImgUrl, "\" alt=\"Doctor type image\" class=\"card__img\">\n          <div class=\"card__head__info\">\n            <h3 class=\"card__doctor-type\">").concat(this.doctor, " ").concat(higthUgencyBage, "</h3>\n            <h5 class=\"card__date\">").concat(changeDateRecord(this.date), " ").concat(this.timeVisit, "</h5>\n          </div>\n          <button type=\"button\" class=\"card__btn-close btn-close\" aria-label=\"Close\"></button>\n        </div>\n        <h4 class=\"card__full-name\">").concat(this.fullName, "</h4>\n        <div class=\"card__expand-collapse-container ").concat(expandClass, "\">\n          <p class=\"card__text\"><span class=\"card__text-title\">\u041C\u0435\u0442\u0430 \u0432\u0456\u0437\u0438\u0442\u0443: </span>").concat(this.target, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u0422\u0435\u0440\u043C\u0456\u043D\u043E\u0432\u0456\u0441\u0442\u044C: </span>").concat(urgencyText, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u0412\u0456\u043A: </span>").concat(this.age, "</p>\n          <p class=\"card__text\"><span class=\"card__text-title\">\u041E\u043F\u0438\u0441: </span>").concat(this.description, "</p>\n          <p class=\"card__edit-time\">").concat(editDateString, "</p>\n          <select ").concat(disabled, " class=\"card__status-selector form-select col-12\" aria-label=\"Default select\">\n            <option ").concat(selectOpen, " value=\"open\">\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439</option>\n            <option ").concat(selectDone, " value=\"done\">\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0439</option>\n          </select>\n        </div>\n        <div class=\"card__bottom\">\n          <button type=\"button\" class=\"btn btn-secondary card__expand-collapse-btn\">").concat(expandBtnText, "</button>\n          <button ").concat(disabled, " type=\"button\" class=\"btn btn-secondary card__edit-btn\">\u0417\u043C\u0456\u043D\u0438\u0442\u0438</button>\n        </div>\n      </div>");
    }
  }, {
    key: "editedResponseBody",
    value: function editedResponseBody() {
      components_openModal('.modalVisit');
      createForm('therapist', this);
      this.rewriteEditDate();
      return this.createResponseBody();
    }
  }]);
}(Visit);
;// CONCATENATED MODULE: ./src/js/functions/render-cards.js
function render_cards_typeof(o) { "@babel/helpers - typeof"; return render_cards_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, render_cards_typeof(o); }
function render_cards_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ render_cards_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == render_cards_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(render_cards_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function render_cards_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function render_cards_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { render_cards_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { render_cards_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





function renderCards(_x) {
  return _renderCards.apply(this, arguments);
}
function _renderCards() {
  _renderCards = render_cards_asyncToGenerator( /*#__PURE__*/render_cards_regeneratorRuntime().mark(function _callee(cardsArr) {
    return render_cards_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          variables_cardContainer.innerHTML = '';
          _context.next = 3;
          return cardsArr.forEach(function (card) {
            var loadedVisit;
            function startRenderCard() {
              if (loadedVisit.status === true) {
                loadedVisit.checkStatus();
              }
              loadedVisit.renderCards();
            }
            switch (card.doctor) {
              case 'Стоматолог':
                loadedVisit = new DentistVisit(card);
                startRenderCard();
                break;
              case 'Терапевт':
                loadedVisit = new TherapistVisit(card);
                startRenderCard();
                break;
              case 'Кардіолог':
                loadedVisit = new CardiologistVisit(card);
                startRenderCard();
                break;
            }
          });
        case 3:
          if (cardsArr.length === 0) {
            displayNoCards.style.display = 'flex';
          }
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _renderCards.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/js/classes/cardiologistForm.js
function cardiologistForm_typeof(o) { "@babel/helpers - typeof"; return cardiologistForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, cardiologistForm_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { cardiologistForm_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function cardiologistForm_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ cardiologistForm_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == cardiologistForm_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(cardiologistForm_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function cardiologistForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function cardiologistForm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { cardiologistForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { cardiologistForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function cardiologistForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function cardiologistForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, cardiologistForm_toPropertyKey(descriptor.key), descriptor); } }
function cardiologistForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) cardiologistForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) cardiologistForm_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function cardiologistForm_callSuper(t, o, e) { return o = cardiologistForm_getPrototypeOf(o), cardiologistForm_possibleConstructorReturn(t, cardiologistForm_isNativeReflectConstruct() ? Reflect.construct(o, e || [], cardiologistForm_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function cardiologistForm_possibleConstructorReturn(self, call) { if (call && (cardiologistForm_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return cardiologistForm_assertThisInitialized(self); }
function cardiologistForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function cardiologistForm_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (cardiologistForm_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function cardiologistForm_getPrototypeOf(o) { cardiologistForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return cardiologistForm_getPrototypeOf(o); }
function cardiologistForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) cardiologistForm_setPrototypeOf(subClass, superClass); }
function cardiologistForm_setPrototypeOf(o, p) { cardiologistForm_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return cardiologistForm_setPrototypeOf(o, p); }
function cardiologistForm_defineProperty(obj, key, value) { key = cardiologistForm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function cardiologistForm_toPropertyKey(t) { var i = cardiologistForm_toPrimitive(t, "string"); return "symbol" == cardiologistForm_typeof(i) ? i : i + ""; }
function cardiologistForm_toPrimitive(t, r) { if ("object" != cardiologistForm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != cardiologistForm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







var CardiologistForm = /*#__PURE__*/function (_BaseForm) {
  function CardiologistForm() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      disease = _ref.disease,
      age = _ref.age,
      indexBM = _ref.indexBM,
      fullName = _ref.fullName,
      target = _ref.target,
      date = _ref.date,
      pressureLower = _ref.pressureLower,
      pressureHigh = _ref.pressureHigh,
      timeVisit = _ref.timeVisit,
      description = _ref.description,
      urgency = _ref.urgency,
      status = _ref.status,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? null : _ref$id;
    cardiologistForm_classCallCheck(this, CardiologistForm);
    _this = cardiologistForm_callSuper(this, CardiologistForm);
    cardiologistForm_defineProperty(_this, "sendCardiologistData", /*#__PURE__*/function () {
      var _ref2 = cardiologistForm_asyncToGenerator( /*#__PURE__*/cardiologistForm_regeneratorRuntime().mark(function _callee(e) {
        var token, visitData, allCards, response, createNewCard;
        return cardiologistForm_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              token = localStorage.getItem('token');
              visitData = _this.createObjData(e.currentTarget);
              if (!_this.isValidForm(visitData)) {
                _context.next = 25;
                break;
              }
              if (!_this.id) {
                _context.next = 18;
                break;
              }
              visitData.editDate = new Date();
              _context.next = 8;
              return editCard(_this.id, visitData);
            case 8:
              cardContainer.innerHTML = '';
              _context.next = 11;
              return loadExistingCards(token);
            case 11:
              allCards = _context.sent;
              _context.next = 14;
              return renderCards(allCards);
            case 14:
              _this.id = null;
              _this.closeWindow(true);
              _context.next = 24;
              break;
            case 18:
              visitData.status = true;
              _context.next = 21;
              return sendData(visitData);
            case 21:
              response = _context.sent;
              if (response) {
                createNewCard = new CardiologistVisit(response);
                createNewCard.renderCards();
              }
              _this.closeWindow();
            case 24:
              _this.resetForm(_this.cardiologistForm);
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    _this.diseaseEdit = disease;
    _this.ageEdit = age;
    _this.indexBMEdit = indexBM;
    _this.fullNameEdit = fullName;
    _this.targetEdit = target;
    _this.dateEdit = date;
    _this.timeVisitEdit = timeVisit;
    _this.descriptionEdit = description;
    _this.urgencyEdit = urgency;
    _this.id = id;
    _this.pressureLower = pressureLower;
    _this.pressureHigh = pressureHigh;
    _this.status = status;
    _this.cardiologistForm = null;
    return _this;
  }
  cardiologistForm_inherits(CardiologistForm, _BaseForm);
  return cardiologistForm_createClass(CardiologistForm, [{
    key: "createDoctorForm",
    value: function createDoctorForm() {
      this.cardiologistForm = this.createForm(this.fullNameEdit, this.targetEdit, this.dateEdit, this.descriptionEdit, this.timeVisitEdit, this.urgencyEdit);
      selectDoctor.value = 'cardiologist';
      doctorSelect.disabled = !!this.id;
      var uniqueFields = [{
        labelValue: 'Перенесені хвороби:',
        attrName: 'disease',
        inputType: 'text',
        placeholder: 'наприклад: гіпертонія, аритмія',
        value: this.diseaseEdit
      }, {
        labelValue: 'Вік:',
        attrName: 'age',
        inputType: 'number',
        placeholder: 'від 0 до 122',
        value: this.ageEdit
      }, {
        labelValue: 'ІМТ: ',
        attrName: 'indexBM',
        inputType: 'text',
        placeholder: 'наприклад: 24.5',
        value: this.indexBMEdit
      }];
      var newFields = '';
      for (var i = 0; i < uniqueFields.length; i++) {
        newFields += this.createInput(uniqueFields[i].labelValue, uniqueFields[i].attrName, uniqueFields[i].inputType, uniqueFields[i].placeholder, uniqueFields[i].value);
      }
      this.cardiologistForm.insertAdjacentHTML('beforeend', newFields);
      if (this.pressureLower && this.pressureHigh) {
        this.cardiologistForm.insertAdjacentHTML('beforeend', "\n               <div class = 'input-group flex-column fieldWrapper mt-2'>\n                  <label class = 'nput-group-text formLabelStyle' for='bloodPressure'>\u0417\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439 \u0442\u0438\u0441\u043A</label>\n                  <div class = 'd-flex bloodPressureInputWrapper'>\n                   <input class = 'form-control formInputStyle bloodPressureInput' value='".concat(this.pressureLower, "' placeholder=\"80\" type=\"number\" id='bloodPressure' name='pressureLower' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>\n                   <span class='mx-3 fs-2'> / </span>\n                   <input class = 'form-control formInputStyle bloodPressureInput' value='").concat(this.pressureHigh, "' placeholder=\"120\" type=\"number\" name='pressureHigh' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>\n                  </div>\n               </div>\n            "));
      } else {
        this.cardiologistForm.insertAdjacentHTML('beforeend', "\n               <div class = 'input-group flex-column fieldWrapper mt-2'>\n                  <label class = 'nput-group-text formLabelStyle' for='bloodPressure'>\u0417\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439 \u0442\u0438\u0441\u043A</label>\n                  <div class = 'd-flex bloodPressureInputWrapper'>\n                   <input class = 'form-control formInputStyle bloodPressureInput' placeholder=\"80\" type=\"number\" id='bloodPressure' name='pressureLower' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>\n                   <span class='mx-3 fs-2'> / </span>\n                   <input class = 'form-control formInputStyle bloodPressureInput' placeholder=\"120\" type=\"number\" name='pressureHigh' aria-label = 'Sizing example input' aria-describedby= 'inputGroup-sizing-default'>\n                  </div>\n               </div>\n            ");
      }
      this.cardiologistForm.insertAdjacentHTML('beforeend', this.createBtn(this.fullNameEdit));
      this.cardiologistForm.addEventListener('submit', this.sendCardiologistData);
      return this.cardiologistForm;
    }
  }, {
    key: "createObjData",
    value: function createObjData(data) {
      var formData = new FormData(data);
      var formObj = {};
      formData.forEach(function (value, key) {
        formObj[key] = value;
      });
      var visitData = _objectSpread({
        doctor: 'Кардіолог',
        editDate: null,
        status: this.status
      }, formObj);
      return visitData;
    }
  }, {
    key: "isValidForm",
    value: function isValidForm(formDataObj) {
      var validations = [{
        isValid: regTextNumbers.test(formDataObj.target),
        inputName: 'target'
      }, {
        isValid: formDataObj.fullName.length > 2,
        inputName: 'fullName'
      }, {
        isValid: regTextNumbers.test(formDataObj.description),
        inputName: 'description'
      }, {
        isValid: formDataObj.date !== '',
        inputName: 'date'
      }, {
        isValid: formDataObj.urgency !== 'виберіть терміновість',
        inputName: 'urgency'
      }, {
        isValid: regNumbOnly.test(formDataObj.pressureLower) && formDataObj.pressureLower < 300,
        inputName: 'pressureLower'
      }, {
        isValid: regNumbOnly.test(formDataObj.pressureHigh) && formDataObj.pressureHigh < 300,
        inputName: 'pressureHigh'
      }, {
        isValid: regNumbOnly.test(formDataObj.indexBM) && formDataObj.indexBM > 1 && formDataObj.indexBM < 50,
        inputName: 'indexBM'
      }, {
        isValid: regNumbOnly.test(formDataObj.age) && formDataObj.age < 122,
        inputName: 'age'
      }, {
        isValid: formDataObj.timeVisit !== 'null',
        inputName: 'timeVisit'
      }];
      return this.validationCheck(validations, this.cardiologistForm);
    }
  }]);
}(baseForm);
/* harmony default export */ const cardiologistForm = (CardiologistForm);
;// CONCATENATED MODULE: ./src/js/classes/dentistForm.js
function dentistForm_typeof(o) { "@babel/helpers - typeof"; return dentistForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dentistForm_typeof(o); }
function dentistForm_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function dentistForm_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? dentistForm_ownKeys(Object(t), !0).forEach(function (r) { dentistForm_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dentistForm_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function dentistForm_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ dentistForm_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == dentistForm_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(dentistForm_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function dentistForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function dentistForm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { dentistForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { dentistForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function dentistForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function dentistForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, dentistForm_toPropertyKey(descriptor.key), descriptor); } }
function dentistForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) dentistForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) dentistForm_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function dentistForm_callSuper(t, o, e) { return o = dentistForm_getPrototypeOf(o), dentistForm_possibleConstructorReturn(t, dentistForm_isNativeReflectConstruct() ? Reflect.construct(o, e || [], dentistForm_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function dentistForm_possibleConstructorReturn(self, call) { if (call && (dentistForm_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return dentistForm_assertThisInitialized(self); }
function dentistForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function dentistForm_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (dentistForm_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function dentistForm_getPrototypeOf(o) { dentistForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dentistForm_getPrototypeOf(o); }
function dentistForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) dentistForm_setPrototypeOf(subClass, superClass); }
function dentistForm_setPrototypeOf(o, p) { dentistForm_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dentistForm_setPrototypeOf(o, p); }
function dentistForm_defineProperty(obj, key, value) { key = dentistForm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function dentistForm_toPropertyKey(t) { var i = dentistForm_toPrimitive(t, "string"); return "symbol" == dentistForm_typeof(i) ? i : i + ""; }
function dentistForm_toPrimitive(t, r) { if ("object" != dentistForm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != dentistForm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







var DentistForm = /*#__PURE__*/function (_BaseForm) {
  function DentistForm() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      fullName = _ref.fullName,
      target = _ref.target,
      date = _ref.date,
      timeVisit = _ref.timeVisit,
      description = _ref.description,
      urgency = _ref.urgency,
      dateOfLastVisit = _ref.dateOfLastVisit,
      status = _ref.status,
      id = _ref.id;
    dentistForm_classCallCheck(this, DentistForm);
    _this = dentistForm_callSuper(this, DentistForm);
    dentistForm_defineProperty(_this, "sendDentistData", /*#__PURE__*/function () {
      var _ref2 = dentistForm_asyncToGenerator( /*#__PURE__*/dentistForm_regeneratorRuntime().mark(function _callee(e) {
        var visitData, token, allCards, response, createNewCard;
        return dentistForm_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              visitData = _this.createObjData(e.currentTarget);
              token = localStorage.getItem('token');
              if (!_this.isValidForm(visitData)) {
                _context.next = 25;
                break;
              }
              if (!_this.id) {
                _context.next = 18;
                break;
              }
              visitData.editDate = new Date();
              _context.next = 8;
              return editCard(_this.id, visitData);
            case 8:
              cardContainer.innerHTML = '';
              _context.next = 11;
              return loadExistingCards(token);
            case 11:
              allCards = _context.sent;
              _context.next = 14;
              return renderCards(allCards);
            case 14:
              _this.id = null;
              _this.closeWindow(true);
              _context.next = 24;
              break;
            case 18:
              visitData.status = true;
              _context.next = 21;
              return sendData(visitData);
            case 21:
              response = _context.sent;
              if (response) {
                createNewCard = new DentistVisit(response);
                createNewCard.renderCards();
              }
              _this.closeWindow();
            case 24:
              _this.resetForm(_this.dentistForm);
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    _this.fullNameEdit = fullName;
    _this.targetEdit = target;
    _this.dateEdit = date;
    _this.timeVisitEdit = timeVisit;
    _this.descriptionEdit = description;
    _this.urgencyEdit = urgency;
    _this.dateOfLastVisitEdit = dateOfLastVisit;
    _this.id = id;
    _this.status = status;
    _this.dentistForm = null;
    return _this;
  }
  dentistForm_inherits(DentistForm, _BaseForm);
  return dentistForm_createClass(DentistForm, [{
    key: "createDoctorForm",
    value: function createDoctorForm() {
      this.dentistForm = this.createForm(this.fullNameEdit, this.targetEdit, this.dateEdit, this.descriptionEdit, this.timeVisitEdit, this.urgencyEdit);
      selectDoctor.value = 'dentist';
      doctorSelect.disabled = !!this.id;
      this.dentistForm.insertAdjacentHTML('beforeend', this.createDatepicker('dateOfLastVisit', 'Дата останнього візиту:', this.dateOfLastVisitEdit));
      this.dentistForm.insertAdjacentHTML('beforeend', this.createBtn(this.fullNameEdit));
      this.dentistForm.addEventListener('submit', this.sendDentistData);
      return this.dentistForm;
    }
  }, {
    key: "createObjData",
    value: function createObjData(data) {
      var formData = new FormData(data);
      var formObj = {};
      formData.forEach(function (value, key) {
        formObj[key] = value;
      });
      var visitData = dentistForm_objectSpread({
        doctor: 'Стоматолог',
        editDate: null,
        status: this.status
      }, formObj);
      return visitData;
    }
  }, {
    key: "isValidForm",
    value: function isValidForm(formDataObj) {
      var validations = [{
        isValid: regTextNumbers.test(formDataObj.target),
        inputName: 'target'
      }, {
        isValid: formDataObj.fullName.length > 2,
        inputName: 'fullName'
      }, {
        isValid: regTextNumbers.test(formDataObj.description),
        inputName: 'description'
      }, {
        isValid: formDataObj.date !== '',
        inputName: 'date'
      }, {
        isValid: formDataObj.urgency !== 'виберіть терміновість',
        inputName: 'urgency'
      }, {
        isValid: formDataObj.timeVisit !== 'null',
        inputName: 'timeVisit'
      }];
      return this.validationCheck(validations, this.dentistForm);
    }
  }]);
}(baseForm);
/* harmony default export */ const dentistForm = (DentistForm);
;// CONCATENATED MODULE: ./src/js/classes/therapistForm.js
function therapistForm_typeof(o) { "@babel/helpers - typeof"; return therapistForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, therapistForm_typeof(o); }
function therapistForm_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function therapistForm_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? therapistForm_ownKeys(Object(t), !0).forEach(function (r) { therapistForm_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : therapistForm_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function therapistForm_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ therapistForm_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == therapistForm_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(therapistForm_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function therapistForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function therapistForm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { therapistForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { therapistForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function therapistForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function therapistForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, therapistForm_toPropertyKey(descriptor.key), descriptor); } }
function therapistForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) therapistForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) therapistForm_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function therapistForm_callSuper(t, o, e) { return o = therapistForm_getPrototypeOf(o), therapistForm_possibleConstructorReturn(t, therapistForm_isNativeReflectConstruct() ? Reflect.construct(o, e || [], therapistForm_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function therapistForm_possibleConstructorReturn(self, call) { if (call && (therapistForm_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return therapistForm_assertThisInitialized(self); }
function therapistForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function therapistForm_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (therapistForm_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function therapistForm_getPrototypeOf(o) { therapistForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return therapistForm_getPrototypeOf(o); }
function therapistForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) therapistForm_setPrototypeOf(subClass, superClass); }
function therapistForm_setPrototypeOf(o, p) { therapistForm_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return therapistForm_setPrototypeOf(o, p); }
function therapistForm_defineProperty(obj, key, value) { key = therapistForm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function therapistForm_toPropertyKey(t) { var i = therapistForm_toPrimitive(t, "string"); return "symbol" == therapistForm_typeof(i) ? i : i + ""; }
function therapistForm_toPrimitive(t, r) { if ("object" != therapistForm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != therapistForm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







var TherapistForm = /*#__PURE__*/function (_BaseForm) {
  function TherapistForm() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      age = _ref.age,
      fullName = _ref.fullName,
      target = _ref.target,
      date = _ref.date,
      timeVisit = _ref.timeVisit,
      description = _ref.description,
      urgency = _ref.urgency,
      status = _ref.status,
      id = _ref.id;
    therapistForm_classCallCheck(this, TherapistForm);
    _this = therapistForm_callSuper(this, TherapistForm);
    therapistForm_defineProperty(_this, "dataForTherapist", /*#__PURE__*/function () {
      var _ref2 = therapistForm_asyncToGenerator( /*#__PURE__*/therapistForm_regeneratorRuntime().mark(function _callee(e) {
        var visitData, token, allCards, response, createNewCard;
        return therapistForm_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              visitData = _this.createObjData(e.currentTarget);
              token = localStorage.getItem('token');
              if (!_this.isValidForm(visitData)) {
                _context.next = 25;
                break;
              }
              if (!_this.id) {
                _context.next = 18;
                break;
              }
              visitData.editDate = new Date();
              _context.next = 8;
              return editCard(_this.id, visitData);
            case 8:
              cardContainer.innerHTML = '';
              _context.next = 11;
              return loadExistingCards(token);
            case 11:
              allCards = _context.sent;
              _context.next = 14;
              return renderCards(allCards);
            case 14:
              _this.id = null;
              _this.closeWindow(true);
              _context.next = 24;
              break;
            case 18:
              visitData.status = true;
              _context.next = 21;
              return sendData(visitData);
            case 21:
              response = _context.sent;
              if (response) {
                createNewCard = new TherapistVisit(response);
                createNewCard.renderCards();
              }
              _this.closeWindow();
            case 24:
              _this.resetForm(_this.therapistForm);
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    _this.ageEdit = age;
    _this.fullNameEdit = fullName;
    _this.targetEdit = target;
    _this.dateEdit = date;
    _this.timeVisitEdit = timeVisit;
    _this.descriptionEdit = description;
    _this.urgencyEdit = urgency;
    _this.id = id;
    _this.status = status;
    _this.therapistForm = null;
    return _this;
  }
  therapistForm_inherits(TherapistForm, _BaseForm);
  return therapistForm_createClass(TherapistForm, [{
    key: "createDoctorForm",
    value: function createDoctorForm() {
      this.therapistForm = this.createForm(this.fullNameEdit, this.targetEdit, this.dateEdit, this.descriptionEdit, this.timeVisitEdit, this.urgencyEdit);
      selectDoctor.value = 'therapist';
      doctorSelect.disabled = !!this.id;
      var uniqueFields = [{
        labelValue: 'Вік:',
        attrName: 'age',
        inputType: 'number',
        placeholder: 'від 0 до 122',
        value: this.ageEdit
      }];
      for (var i = 0; i < uniqueFields.length; i++) {
        this.therapistForm.insertAdjacentHTML('beforeend', this.createInput(uniqueFields[i].labelValue, uniqueFields[i].attrName, uniqueFields[i].inputType, uniqueFields[i].placeholder, uniqueFields[i].value));
      }
      this.therapistForm.insertAdjacentHTML('beforeend', this.createBtn(this.fullNameEdit));
      this.therapistForm.addEventListener('submit', this.dataForTherapist);
      return this.therapistForm;
    }
  }, {
    key: "createObjData",
    value: function createObjData(data) {
      var formData = new FormData(data);
      var formObject = {};
      formData.forEach(function (value, key) {
        formObject[key] = value;
      });
      var visitData = therapistForm_objectSpread({
        doctor: 'Терапевт',
        editDate: null,
        status: this.status
      }, formObject);
      return visitData;
    }
  }, {
    key: "isValidForm",
    value: function isValidForm(formDataObj) {
      var validations = [{
        isValid: regTextNumbers.test(formDataObj.target),
        inputName: 'target'
      }, {
        isValid: formDataObj.fullName.length > 2,
        inputName: 'fullName'
      }, {
        isValid: regTextNumbers.test(formDataObj.description),
        inputName: 'description'
      }, {
        isValid: formDataObj.date !== '',
        inputName: 'date'
      }, {
        isValid: formDataObj.urgency !== 'виберіть терміновість',
        inputName: 'urgency'
      }, {
        isValid: regNumbOnly.test(formDataObj.age) && formDataObj.age < 122,
        inputName: 'age'
      }, {
        isValid: formDataObj.timeVisit !== 'null',
        inputName: 'timeVisit'
      }];
      return this.validationCheck(validations, this.therapistForm);
    }
  }]);
}(baseForm);
/* harmony default export */ const therapistForm = (TherapistForm);
;// CONCATENATED MODULE: ./src/js/components/activatePopover.js
function activatePopover(idElem) {
  var exampleEl = document.getElementById(idElem);
  return new bootstrap.Popover(exampleEl);
}
/* harmony default export */ const components_activatePopover = (activatePopover);
;// CONCATENATED MODULE: ./src/js/components/drugDropForm.js
var editForm = document.querySelector('.editForm');
var toggle = true;
var targetElement;
function drugDropForm() {
  editForm.addEventListener('click', function () {
    var fieldWrapper = document.querySelectorAll('.fieldWrapper');
    var formLabelStyle = document.querySelectorAll('.formLabelStyle');
    var doctorForm = document.querySelector('.doctorForm');
    if (toggle) {
      editForm.textContent = 'Зберегти зміни';
      fieldWrapper.forEach(function (elem) {
        elem.style.backgroundColor = '#45494d2c';
        elem.style.cursor = 'move';
        elem.draggable = true;
        elem.addEventListener('dragenter', dragenter);
        elem.addEventListener('dragstart', dragstart);
      });
      formLabelStyle.forEach(function (elem) {
        elem.style.cursor = 'move';
        elem.addEventListener('dragenter', dragenter);
        elem.addEventListener('dragstart', dragstart);
      });
      doctorForm.addEventListener('dragover', dragover);
      doctorForm.addEventListener('drop', drop);
      toggle = !toggle;
    } else {
      editForm.textContent = 'Змінити форму';
      fieldWrapper.forEach(function (elem) {
        elem.style.backgroundColor = 'transparent';
        elem.style.cursor = 'default';
        elem.draggable = false;
        elem.removeEventListener('dragenter', dragenter);
        elem.removeEventListener('dragstart', dragstart);
      });
      formLabelStyle.forEach(function (elem) {
        elem.style.cursor = 'default';
        elem.removeEventListener('dragenter', dragenter);
        elem.removeEventListener('dragstart', dragstart);
      });
      doctorForm.removeEventListener('dragover', dragover);
      doctorForm.removeEventListener('drop', drop);
      toggle = !toggle;
    }
  });
}
function dragstart() {
  this.classList.add('dragElem');
}
function dragenter(event) {
  event.preventDefault();
  targetElement = this;
}
function dragover(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  var draggedElement = document.querySelector('.dragElem');
  this.insertBefore(draggedElement, targetElement);
  draggedElement.classList.remove('dragElem');
}
function changeDoctor() {
  toggle = !toggle;
  editForm.textContent = 'Змінити форму';
}
;// CONCATENATED MODULE: ./src/js/components/createVisit.js
function createVisit_typeof(o) { "@babel/helpers - typeof"; return createVisit_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, createVisit_typeof(o); }
function createVisit_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ createVisit_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == createVisit_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(createVisit_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function createVisit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function createVisit_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { createVisit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { createVisit_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var jsContentModal = document.querySelector('.js-contentModal');
var baseFormInstance = new baseForm();
var timeVisitChangeHandler;
var dateVisitElement;
drugDropForm();

// Вибір лікаря по селекту
selectDoctor.addEventListener('change', function () {
  createForm(selectDoctor.value);
  !toggle && changeDoctor();
});

// Вибір лікаря по кліку
doctorBtnWrapper.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.nodeName === 'DIV') {
    return;
  }
  components_openModal('.modalVisit');
  !toggle && changeDoctor();
  var clickDoctorValue = e.target.tagName !== 'IMG' ? e.target.innerText : e.target.parentElement.innerText;
  var doctorMap = {
    КАРДІОЛОГ: 'cardiologist',
    СТОМАТОЛОГ: 'dentist',
    ТЕРАПЕВТ: 'therapist'
  };
  createForm(doctorMap[clickDoctorValue]);
});
function createForm(chooseDoctorValue, dataObj) {
  jsContentModal.textContent = '';
  switch (chooseDoctorValue) {
    case 'cardiologist':
      jsContentModal.appendChild(new cardiologistForm(dataObj).createDoctorForm());
      components_activatePopover('countImt');
      dateVisitElement = document.getElementById('date');
      createNewTime('Кардіолог');
      break;
    case 'dentist':
      jsContentModal.appendChild(new dentistForm(dataObj).createDoctorForm());
      dateVisitElement = document.getElementById('date');
      createNewTime('Стоматолог');
      break;
    case 'therapist':
      jsContentModal.appendChild(new therapistForm(dataObj).createDoctorForm());
      dateVisitElement = document.getElementById('date');
      createNewTime('Терапевт');
      break;
  }
  dateVisitElement.addEventListener('change', function (e) {
    baseFormInstance.checkForToday(e);
    document.getElementById('timeVisit').innerHTML = baseFormInstance.createAppointmentHours();
  });
}
function createNewTime(doctor) {
  dateVisitElement.removeEventListener('change', timeVisitChangeHandler);
  timeVisitChangeHandler = /*#__PURE__*/function () {
    var _ref = createVisit_asyncToGenerator( /*#__PURE__*/createVisit_regeneratorRuntime().mark(function _callee(e) {
      var timeOptions, optionsTimeElement;
      return createVisit_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return baseFormInstance.newTime(doctor, e.target.value);
          case 3:
            timeOptions = _context.sent;
            optionsTimeElement = document.getElementById('timeVisit');
            optionsTimeElement.innerHTML = timeOptions;
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error('Помилка при оновленні часу візиту:', _context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function timeVisitChangeHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  dateVisitElement.addEventListener('change', timeVisitChangeHandler);
}
;// CONCATENATED MODULE: ./src/js/login.js
function login_typeof(o) { "@babel/helpers - typeof"; return login_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, login_typeof(o); }
function login_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ login_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == login_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(login_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function login_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function login_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { login_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { login_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var openBtn = document.getElementById('openBtn');
var login = document.querySelector('.form');
var closeBtn = document.getElementById('closeBtn');
var createVisit = document.getElementById('create_visit');
var homePage = document.getElementById('home-page');
var navbarFilter = document.getElementById('navbarFilter');
var login_cardContainer = document.getElementById('cardContainer');
closeBtn.addEventListener('click', /*#__PURE__*/login_asyncToGenerator( /*#__PURE__*/login_regeneratorRuntime().mark(function _callee() {
  return login_regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        //треба функція яка буде закривати форму,зміна  кнопок

        closeBtn.style.display = 'none';
        createVisit.style.display = 'none';
        openBtn.style.display = 'block';
        localStorage.removeItem('token');
        homePage.classList.remove('d-none');
        displayNoCards.style.display = 'none';
        navbarFilter.classList.remove('d-flex-important');
        login_cardContainer.classList.add('d-none');
        doctorBtnWrapper.classList.add('d-none');
      case 9:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));

// Your token is : e70fac32-b103-4aba-9264-0fe9126991b7

var loginUrl = 'https://ajax.test-danit.com/api/v2/cards/login';
var TOKEN = 'token';
try {
  login.addEventListener('submit', function (event) {
    event.preventDefault();
    var body = {};
    event.target.querySelectorAll('input').forEach(function (input) {
      body[input.name] = input.value; // дані які будуть передаватися на сервер
    });
    fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password
      }) // Використовуйте змінну body для передачі даних
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Помилка при отриманні запиту');
      }
      return response.text();
    }).then(function (token) {
      localStorage.setItem(TOKEN, token); // Збереження токена в localStorage
      // location.reload();
      renderCardsToPage(token);
      successAuthorization(); // Виклик функції після успішної авторизації
    })["catch"](function (error) {
      alert(error.message); // Обробка помилок
    });
  });
} catch (error) {
  alert(error); // Обробка помилок на рівні спроби
}
function successAuthorization() {
  closeBtn.style.display = 'block';
  openBtn.style.display = 'none';
  homePage.classList.add('d-none');
  createVisit.style.display = 'block';
  navbarFilter.classList.add('d-flex-important');
  login_cardContainer.classList.add('d-flex');
  var modalElement = document.querySelector('.modalsome');
  var modal = bootstrap.Modal.getInstance(modalElement);
  if (modal) {
    modal.hide();
  }
  login.reset();
}
document.addEventListener('DOMContentLoaded', function () {
  var localStorageToken = localStorage.getItem('token');
  if (localStorageToken) {
    successAuthorization();
    renderCardsToPage(localStorageToken);
  }
});
createVisit.addEventListener('click', function () {
  windowToggle();
});
function renderCardsToPage(_x) {
  return _renderCardsToPage.apply(this, arguments);
}
function _renderCardsToPage() {
  _renderCardsToPage = login_asyncToGenerator( /*#__PURE__*/login_regeneratorRuntime().mark(function _callee2(token) {
    var allCards;
    return login_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return loadExistingCards(token);
        case 2:
          allCards = _context2.sent;
          _context2.next = 5;
          return renderCards(allCards);
        case 5:
          if (btnToggleText.textContent === 'Перейти до карток') {
            doctorBtnWrapper.classList.add('d-flex');
            doctorBtnWrapper.classList.remove('d-none');
          } else {
            login_cardContainer.classList.add('d-flex');
            login_cardContainer.classList.remove('d-none');
          }
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _renderCardsToPage.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/js/filter.js
function filter_typeof(o) { "@babel/helpers - typeof"; return filter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, filter_typeof(o); }
function filter_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ filter_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == filter_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(filter_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function filter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function filter_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { filter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { filter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var filter_open = document.querySelector('.open');
var filter_close = document.querySelector('.done');
var urgent = document.querySelector('.urgency');
var priority = document.querySelector('.priority');
var common = document.querySelector('.common');
var cardsClient = document.querySelector('.cards_client');
var cardsPriority = document.querySelector('.cards_priority');
cardsClient.addEventListener('click', showAllCards);
cardsPriority.addEventListener('click', showAllCards);
function showAllCards() {
  return _showAllCards.apply(this, arguments);
} // Функції фільтрації для вибору карток за статусом "open,done,high,normal,low"
function _showAllCards() {
  _showAllCards = filter_asyncToGenerator( /*#__PURE__*/filter_regeneratorRuntime().mark(function _callee3() {
    var token, allCards;
    return filter_regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          token = localStorage.getItem('token');
          document.getElementById('cardContainer').innerHTML = '';
          _context3.next = 4;
          return loadExistingCards(token);
        case 4:
          allCards = _context3.sent;
          renderCards(allCards);
          if (allCards.length !== 0) {
            displayNoCards.style.display = 'none';
          }
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _showAllCards.apply(this, arguments);
}
function chooseCardStatus(_x) {
  return _chooseCardStatus.apply(this, arguments);
} // Додаємо обробники подій для кнопок "Open" і "Done"
function _chooseCardStatus() {
  _chooseCardStatus = filter_asyncToGenerator( /*#__PURE__*/filter_regeneratorRuntime().mark(function _callee4(status) {
    var token, allCards, filterCards;
    return filter_regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          token = localStorage.getItem('token');
          _context4.next = 3;
          return loadExistingCards(token);
        case 3:
          allCards = _context4.sent;
          document.getElementById('cardContainer').innerHTML = '';
          filterCards = allCards.filter(function (card) {
            var cardStatus = card.status;
            return cardStatus === JSON.parse(status);
          });
          if (allCards.length !== 0) {
            displayNoCards.style.display = 'none';
          }
          _context4.next = 9;
          return renderCards(filterCards);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _chooseCardStatus.apply(this, arguments);
}
filter_open.addEventListener('click', /*#__PURE__*/filter_asyncToGenerator( /*#__PURE__*/filter_regeneratorRuntime().mark(function _callee() {
  var openCards;
  return filter_regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return chooseCardStatus('true');
      case 2:
        openCards = _context.sent;
      case 3:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
filter_close.addEventListener('click', /*#__PURE__*/filter_asyncToGenerator( /*#__PURE__*/filter_regeneratorRuntime().mark(function _callee2() {
  var doneCards;
  return filter_regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return chooseCardStatus('false');
      case 2:
        doneCards = _context2.sent;
      case 3:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));
function chooseCardUrgency(_x2) {
  return _chooseCardUrgency.apply(this, arguments);
} //Додаю обробник події для кнопок high,normal,low
function _chooseCardUrgency() {
  _chooseCardUrgency = filter_asyncToGenerator( /*#__PURE__*/filter_regeneratorRuntime().mark(function _callee5(urgency) {
    var token, allCards;
    return filter_regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          token = localStorage.getItem('token');
          _context5.next = 3;
          return loadExistingCards(token);
        case 3:
          allCards = _context5.sent;
          document.getElementById('cardContainer').innerHTML = '';
          renderCards(allCards.filter(function (allCards) {
            return allCards.urgency === urgency;
          }));
          if (allCards.length !== 0) {
            displayNoCards.style.display = 'none';
          }
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _chooseCardUrgency.apply(this, arguments);
}
urgent.addEventListener('click', function () {
  var urgentCards = chooseCardUrgency('urgent');
});
common.addEventListener('click', function () {
  var commonCards = chooseCardUrgency('common');
});
priority.addEventListener('click', function () {
  var priorityCards = chooseCardUrgency('priority');
});
;// CONCATENATED MODULE: ./src/js/search.js
function search_typeof(o) { "@babel/helpers - typeof"; return search_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, search_typeof(o); }
function search_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ search_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == search_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(search_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function search_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var searchInput = document.getElementById('search-input');
var cleanText = document.querySelector('.clean-text');
cleanText.addEventListener('click', /*#__PURE__*/search_asyncToGenerator( /*#__PURE__*/search_regeneratorRuntime().mark(function _callee() {
  var token, allCards;
  return search_regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        token = localStorage.getItem('token');
        _context.next = 3;
        return loadExistingCards(token);
      case 3:
        allCards = _context.sent;
        renderCards(allCards);
        searchInput.value = '';
        cleanText.classList.add('d-none');
        displayNoCards.style.display = 'none';
      case 8:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
searchInput.addEventListener('input', /*#__PURE__*/search_asyncToGenerator( /*#__PURE__*/search_regeneratorRuntime().mark(function _callee2() {
  var token, allCards;
  return search_regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        if (!(searchInput.value !== '')) {
          _context2.next = 4;
          break;
        }
        cleanText.classList.remove('d-none');
        _context2.next = 11;
        break;
      case 4:
        token = localStorage.getItem('token');
        _context2.next = 7;
        return loadExistingCards(token);
      case 7:
        allCards = _context2.sent;
        renderCards(allCards);
        cleanText.classList.add('d-none');
        displayNoCards.style.display = 'none';
      case 11:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));
var filter = /*#__PURE__*/function () {
  var _ref3 = search_asyncToGenerator( /*#__PURE__*/search_regeneratorRuntime().mark(function _callee3(e) {
    var token, allCards, inputSearch;
    return search_regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(btnToggleText.textContent !== 'Перейти до карток')) {
            _context3.next = 13;
            break;
          }
          token = localStorage.getItem('token');
          _context3.prev = 2;
          _context3.next = 5;
          return loadExistingCards(token);
        case 5:
          allCards = _context3.sent;
          inputSearch = document.getElementById('search-input');
          if (inputSearch.value !== '') {
            allCards = allCards.filter(function (_ref4) {
              var fullName = _ref4.fullName;
              return fullName === null || fullName === void 0 ? void 0 : fullName.includes(inputSearch.value);
            });
            document.getElementById('cardContainer').innerHTML = '';
            renderCards(allCards);
            if (allCards.length !== 0) {
              displayNoCards.style.display = 'none';
            }
          }
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](2);
          console.error('Error in filter:', _context3.t0);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 10]]);
  }));
  return function filter(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var addFilterListener = function addFilterListener() {
  var searchBtn = document.getElementById('search_btn');
  searchBtn.addEventListener('click', filter);
};
addFilterListener();
;// CONCATENATED MODULE: ./src/js/functions/drag-and-drop.js

var draggedItem = null;
var currentItem = null;
var cards = [];
variables_cardContainer.addEventListener('dragstart', function (event) {
  if (!event.target.classList.contains('card__container')) {
    return;
  }
  dragStart(event);
});
variables_cardContainer.addEventListener('dragend', function (event) {
  if (!event.target.classList.contains('card__container')) {
    return;
  }
  dragEnd(event);
});
variables_cardContainer.addEventListener('dragover', function (event) {
  dragOver(event);
});
variables_cardContainer.addEventListener('dragenter', function (event) {
  if (event.target.classList.contains('card__container')) {
    dragEnter(event.target);
  } else if (event.target.closest('.card__container')) {
    dragEnter(event.target.closest('.card__container'));
  } else {
    return;
  }
});
variables_cardContainer.addEventListener('dragleave', function (event) {
  if (!event.target.classList.contains('card__container')) {
    return;
  }
  dragLeave(event);
});
variables_cardContainer.addEventListener('drop', function (event) {
  if (event.target.classList.contains('card__container')) {
    drag_and_drop_drop(event);
  } else if (event.target.closest('.card__container')) {
    drag_and_drop_drop(event.target.closest('.card__container'));
  } else {
    return;
  }
});
function dragStart(event) {
  draggedItem = event.target;
  event.target.style.opacity = '0.4';
}
function dragEnd(event) {
  draggedItem.style.opacity = '1';
  draggedItem = null;
  removeOverClassFromAllCards();
}
function dragOver(event) {
  if (event.preventDefault) {
    event.preventDefault();
  }
  return false;
}
function dragEnter(cardContainer) {
  removeOverClassFromAllCards();
  currentItem = cardContainer;
  if (currentItem != draggedItem) {
    currentItem.classList.add('card__over');
  }
}
function dragLeave(event) {
  if (!event.relatedTarget) {
    return;
  }
  if (!event.relatedTarget.closest('.card__container')) {
    removeOverClassFromAllCards();
    currentItem = null;
  }
}
function drag_and_drop_drop(event) {
  if (!currentItem || !draggedItem) {
    return;
  }
  currentItem.classList.remove('card__over');
  var draggedItemLi = draggedItem.closest('.card__item');
  var currentItemLi = currentItem.closest('.card__item');
  cards = Array.from(variables_cardContainer.querySelectorAll('.card__item'));
  var indexOfDraggedItem = cards.indexOf(draggedItemLi);
  var indexOfCurrentItem = cards.indexOf(currentItemLi);
  if (indexOfDraggedItem > indexOfCurrentItem) {
    currentItemLi.insertAdjacentElement('beforebegin', draggedItemLi);
  } else if (indexOfDraggedItem < indexOfCurrentItem) {
    currentItemLi.insertAdjacentElement('afterend', draggedItemLi);
  }
  removeOverClassFromAllCards();
}
function findCardContainer(event) {
  var cardContainer;
  if (event.target.classList.contains('card__item')) {
    cardContainer = event.target.firstElementChild;
  } else if (event.target.closest('.card__container')) {
    cardContainer = event.target.closest('.card__container');
  } else if (event.target.classList.contains('card__container')) {
    cardContainer = event.target;
  } else {
    return;
  }
  return cardContainer;
}
function removeOverClassFromAllCards() {
  cards = variables_cardContainer.querySelectorAll('.card__container');
  cards.forEach(function (card) {
    card.classList.remove('card__over');
  });
}
;// CONCATENATED MODULE: ./src/js/main.js






/******/ })()
;