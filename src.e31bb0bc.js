// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\arrow.svg":[["arrow.305c14c2.svg","images/arrow.svg"],"images/arrow.svg"],"./..\\images\\menu-modal\\minmobile-modal.jpg":[["minmobile-modal.3f186384.jpg","images/menu-modal/minmobile-modal.jpg"],"images/menu-modal/minmobile-modal.jpg"],"./..\\images\\menu-modal\\minmobile-modal@2x.jpg":[["minmobile-modal@2x.932e9a2a.jpg","images/menu-modal/minmobile-modal@2x.jpg"],"images/menu-modal/minmobile-modal@2x.jpg"],"./..\\images\\menu-modal\\mobile-modal.jpg":[["mobile-modal.1048462d.jpg","images/menu-modal/mobile-modal.jpg"],"images/menu-modal/mobile-modal.jpg"],"./..\\images\\menu-modal\\mobile-modal@2x.jpg":[["mobile-modal@2x.d89db9f5.jpg","images/menu-modal/mobile-modal@2x.jpg"],"images/menu-modal/mobile-modal@2x.jpg"],"./..\\images\\menu-modal\\largemobile-modal.jpg":[["largemobile-modal.25b6ec91.jpg","images/menu-modal/largemobile-modal.jpg"],"images/menu-modal/largemobile-modal.jpg"],"./..\\images\\menu-modal\\largemobile-modal@2x.jpg":[["largemobile-modal@2x.9a27c38b.jpg","images/menu-modal/largemobile-modal@2x.jpg"],"images/menu-modal/largemobile-modal@2x.jpg"],"./..\\images\\menu-modal\\tablet-modal.jpg":[["tablet-modal.cfc427a0.jpg","images/menu-modal/tablet-modal.jpg"],"images/menu-modal/tablet-modal.jpg"],"./..\\images\\menu-modal\\tablet-modal@2x.jpg":[["tablet-modal@2x.4774f3e2.jpg","images/menu-modal/tablet-modal@2x.jpg"],"images/menu-modal/tablet-modal@2x.jpg"],"./..\\images\\menu-modal\\desktop-modal.jpg":[["desktop-modal.3b65f3dd.jpg","images/menu-modal/desktop-modal.jpg"],"images/menu-modal/desktop-modal.jpg"],"./..\\images\\menu-modal\\desktop-modal@2x.jpg":[["desktop-modal@2x.18fb7582.jpg","images/menu-modal/desktop-modal@2x.jpg"],"images/menu-modal/desktop-modal@2x.jpg"],"./..\\images\\check.svg":[["check.4b7c2681.svg","images/check.svg"],"images/check.svg"],"./..\\images\\modal-thanks\\minmobile-thanks.jpg":[["minmobile-thanks.4ff82c84.jpg","images/modal-thanks/minmobile-thanks.jpg"],"images/modal-thanks/minmobile-thanks.jpg"],"./..\\images\\modal-thanks\\mobile-thanks.jpg":[["mobile-thanks.fcb65277.jpg","images/modal-thanks/mobile-thanks.jpg"],"images/modal-thanks/mobile-thanks.jpg"],"./..\\images\\modal-thanks\\mobile-thanks@2x.jpg":[["mobile-thanks@2x.aee02df2.jpg","images/modal-thanks/mobile-thanks@2x.jpg"],"images/modal-thanks/mobile-thanks@2x.jpg"],"./..\\images\\modal-thanks\\tablet-thanks.jpg":[["tablet-thanks.da285e9a.jpg","images/modal-thanks/tablet-thanks.jpg"],"images/modal-thanks/tablet-thanks.jpg"],"./..\\images\\modal-thanks\\tablet-thanks@2x.jpg":[["tablet-thanks@2x.241384ba.jpg","images/modal-thanks/tablet-thanks@2x.jpg"],"images/modal-thanks/tablet-thanks@2x.jpg"],"./..\\images\\modal-thanks\\desktop-thanks.jpg":[["desktop-thanks.434e8c7d.jpg","images/modal-thanks/desktop-thanks.jpg"],"images/modal-thanks/desktop-thanks.jpg"],"./..\\images\\modal-thanks\\desktop-thanks@2x.jpg":[["desktop-thanks@2x.ec9e58b8.jpg","images/modal-thanks/desktop-thanks@2x.jpg"],"images/modal-thanks/desktop-thanks@2x.jpg"],"./..\\images\\hero-tablet\\jug-milk.png":[["jug-milk.28c37672.png","images/hero-tablet/jug-milk.png"],"images/hero-tablet/jug-milk.png"],"./..\\images\\hero-tablet\\jug-milk@2x.png":[["jug-milk@2x.4e27d0f3.png","images/hero-tablet/jug-milk@2x.png"],"images/hero-tablet/jug-milk@2x.png"],"./..\\images\\hero-desktop\\jug-milk.png":[["jug-milk.530b0803.png","images/hero-desktop/jug-milk.png"],"images/hero-desktop/jug-milk.png"],"./..\\images\\hero-desktop\\jug-milk@2x.png":[["jug-milk@2x.e11199bc.png","images/hero-desktop/jug-milk@2x.png"],"images/hero-desktop/jug-milk@2x.png"],"./..\\images\\hero-mobile\\ice-cream.png":[["ice-cream.d0239782.png","images/hero-mobile/ice-cream.png"],"images/hero-mobile/ice-cream.png"],"./..\\images\\hero-mobile\\ice-cream@2x.png":[["ice-cream@2x.27aefde2.png","images/hero-mobile/ice-cream@2x.png"],"images/hero-mobile/ice-cream@2x.png"],"./..\\images\\hero-tablet\\ice-cream.png":[["ice-cream.f662072b.png","images/hero-tablet/ice-cream.png"],"images/hero-tablet/ice-cream.png"],"./..\\images\\hero-tablet\\ice-cream@2x.png":[["ice-cream@2x.576fad7c.png","images/hero-tablet/ice-cream@2x.png"],"images/hero-tablet/ice-cream@2x.png"],"./..\\images\\hero-desktop\\ice-cream.png":[["ice-cream.27607dc5.png","images/hero-desktop/ice-cream.png"],"images/hero-desktop/ice-cream.png"],"./..\\images\\hero-desktop\\ice-cream@2x.png":[["ice-cream@2x.fe3b95ce.png","images/hero-desktop/ice-cream@2x.png"],"images/hero-desktop/ice-cream@2x.png"],"./..\\images\\hero-tablet\\tasty.png":[["tasty.3ff40e05.png","images/hero-tablet/tasty.png"],"images/hero-tablet/tasty.png"],"./..\\images\\hero-tablet\\tasty@2x.png":[["tasty@2x.f90f7ae2.png","images/hero-tablet/tasty@2x.png"],"images/hero-tablet/tasty@2x.png"],"./..\\images\\hero-desktop\\tasty.png":[["tasty.a122370c.png","images/hero-desktop/tasty.png"],"images/hero-desktop/tasty.png"],"./..\\images\\hero-desktop\\tasty@2x.png":[["tasty@2x.d3ae8890.png","images/hero-desktop/tasty@2x.png"],"images/hero-desktop/tasty@2x.png"],"./..\\images\\products\\ice-cream.png":[["ice-cream.1ec4dc0b.png","images/products/ice-cream.png"],"images/products/ice-cream.png"],"./..\\images\\products\\ice-cream@2x.png":[["ice-cream@2x.fbf4c41f.png","images/products/ice-cream@2x.png"],"images/products/ice-cream@2x.png"],"./..\\images\\products\\ice-cream-table.png":[["ice-cream-table.1e9f1b5e.png","images/products/ice-cream-table.png"],"images/products/ice-cream-table.png"],"./..\\images\\products\\ice-cream-table@2x.png":[["ice-cream-table@2x.f57e6e43.png","images/products/ice-cream-table@2x.png"],"images/products/ice-cream-table@2x.png"],"./..\\images\\products\\ice-cream-desk.png":[["ice-cream-desk.f4de2c3e.png","images/products/ice-cream-desk.png"],"images/products/ice-cream-desk.png"],"./..\\images\\products\\ice-cream-desk@2x.png":[["ice-cream-desk@2x.b3101fdd.png","images/products/ice-cream-desk@2x.png"],"images/products/ice-cream-desk@2x.png"],"./..\\images\\products\\ice-coffee.png":[["ice-coffee.2c3fb82f.png","images/products/ice-coffee.png"],"images/products/ice-coffee.png"],"./..\\images\\products\\ice-coffee@2x.png":[["ice-coffee@2x.2ad150fe.png","images/products/ice-coffee@2x.png"],"images/products/ice-coffee@2x.png"],"./..\\images\\products\\ice-coffee-table.png":[["ice-coffee-table.0ce519c6.png","images/products/ice-coffee-table.png"],"images/products/ice-coffee-table.png"],"./..\\images\\products\\ice-coffee-table@2x.png":[["ice-coffee-table@2x.2a390507.png","images/products/ice-coffee-table@2x.png"],"images/products/ice-coffee-table@2x.png"],"./..\\images\\products\\ice-coffee-desk.png":[["ice-coffee-desk.74ba5da1.png","images/products/ice-coffee-desk.png"],"images/products/ice-coffee-desk.png"],"./..\\images\\products\\ice-coffee-desk@2x.png":[["ice-coffee-desk@2x.3891e695.png","images/products/ice-coffee-desk@2x.png"],"images/products/ice-coffee-desk@2x.png"],"./..\\images\\products\\milkshakes.png":[["milkshakes.1bd539a6.png","images/products/milkshakes.png"],"images/products/milkshakes.png"],"./..\\images\\products\\milkshakes@2x.png":[["milkshakes@2x.51d47c31.png","images/products/milkshakes@2x.png"],"images/products/milkshakes@2x.png"],"./..\\images\\products\\milkshakes-table.png":[["milkshakes-table.6ce91add.png","images/products/milkshakes-table.png"],"images/products/milkshakes-table.png"],"./..\\images\\products\\milkshakes-table@2x.png":[["milkshakes-table@2x.e277bf87.png","images/products/milkshakes-table@2x.png"],"images/products/milkshakes-table@2x.png"],"./..\\images\\products\\milkshakes-desk.png":[["milkshakes-desk.22731e13.png","images/products/milkshakes-desk.png"],"images/products/milkshakes-desk.png"],"./..\\images\\products\\milkshakes-desk@2x.png":[["milkshakes-desk@2x.0554cad3.png","images/products/milkshakes-desk@2x.png"],"images/products/milkshakes-desk@2x.png"],"./..\\images\\about\\bg1mobile-320.png":[["bg1mobile-320.0ee445ab.png","images/about/bg1mobile-320.png"],"images/about/bg1mobile-320.png"],"./..\\images\\about\\bg2mobile@2x.png":[["bg2mobile@2x.36fe41d3.png","images/about/bg2mobile@2x.png"],"images/about/bg2mobile@2x.png"],"./..\\images\\about\\cow-280.png":[["cow-280.aff8acb7.png","images/about/cow-280.png"],"images/about/cow-280.png"],"./..\\images\\about\\cow-280@2x.png":[["cow-280@2x.cb9e012b.png","images/about/cow-280@2x.png"],"images/about/cow-280@2x.png"],"./..\\images\\about\\1tablet-cow-340.png":[["1tablet-cow-340.dff83bc9.png","images/about/1tablet-cow-340.png"],"images/about/1tablet-cow-340.png"],"./..\\images\\about\\1tablet-cow2@2x-680.png":[["1tablet-cow2@2x-680.63281882.png","images/about/1tablet-cow2@2x-680.png"],"images/about/1tablet-cow2@2x-680.png"],"./..\\images\\about\\bg1desktop.png":[["bg1desktop.0e931f7f.png","images/about/bg1desktop.png"],"images/about/bg1desktop.png"],"./..\\images\\about\\bg2desktop@2x.png":[["bg2desktop@2x.35c0a37d.png","images/about/bg2desktop@2x.png"],"images/about/bg2desktop@2x.png"],"./..\\images\\about\\home-pic1-1desktop.png":[["home-pic1-1desktop.ad3a3b3f.png","images/about/home-pic1-1desktop.png"],"images/about/home-pic1-1desktop.png"],"./..\\images\\about\\home-pic2-1desktop@2x.png":[["home-pic2-1desktop@2x.532f4823.png","images/about/home-pic2-1desktop@2x.png"],"images/about/home-pic2-1desktop@2x.png"],"D:\\GOIT\\Курс фулстек\\HTML + CSS\\parcel-project-template\\src\\images\\reviews\\quotes.png":[["quotes.ad2a46ab.png","images/reviews/quotes.png"],"images/reviews/quotes.png"],"./..\\images\\home.svg":[["home.941c208c.svg","images/home.svg"],"images/home.svg"],"./..\\images\\arrow-white.svg":[["arrow-white.06acb568.svg","images/arrow-white.svg"],"images/arrow-white.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "4311" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map