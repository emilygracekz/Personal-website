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
})({"nomadDiscoverDatabase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var asiaWeather = "Warm";
var southAmericaWeather = "Warm";
var europeWeather = "Cold";
var northAmericaWeather = "Cold";
var africaWeather = "Warm"; //TODO: add photos(??)
//TODO: Add about section

var options = [//Tenerife
{
  continent: "Europe",
  country: "Spain",
  city: "Tenerife, Canary Islands",
  weather: europeWeather,
  budget: 2100,
  size: "Mid",
  url: "https://nomadlist.com/tenerife" // photo: xx;

}, //Valencia
{
  continent: "Europe",
  country: "Spain",
  city: "Valencia",
  weather: asiaWeather,
  budget: 2250,
  size: "Big",
  url: "https://nomadlist.com/valencia"
}, //Seville
{
  continent: "Europe",
  country: "Spain",
  city: "Seville",
  weather: asiaWeather,
  budget: 2250,
  size: "Big",
  url: "https://nomadlist.com/seville"
}, //Lisbon
{
  continent: "Europe",
  country: "Portugal",
  city: "Lisbon",
  weather: asiaWeather,
  budget: 1900,
  size: "Mid",
  url: "https://nomadlist.com/lisbon"
}, //Vilnius
{
  continent: "Europe",
  country: "Lithuania",
  city: "Vilnius",
  weather: europeWeather,
  budget: 1900,
  size: "Mid",
  url: "https://nomadlist.com/vilnius"
}, //Porto
{
  continent: "Europe",
  country: "Portugal",
  city: "Porto",
  weather: southAmericaWeather,
  budget: 1800,
  size: "Mid",
  url: "https://nomadlist.com/porto"
}, //Budapest
{
  continent: "Europe",
  country: "Hungary",
  city: "Budapest",
  weather: europeWeather,
  budget: 1500,
  size: "Big",
  url: "https://nomadlist.com/budapest"
}, //Sofia
{
  continent: "Europe",
  country: "Bulgaria",
  city: "Sofia",
  weather: "Cold",
  budget: 1200,
  size: "Big",
  url: "https://nomadlist.com/sofia"
}, //Berlin
{
  continent: "Europe",
  country: "Germany",
  city: "Berlin",
  weather: europeWeather,
  budget: 2800,
  size: "Big",
  url: "https://nomadlist.com/berlin"
}, //Zagreb
{
  continent: "Europe",
  country: "Croatia",
  city: "Zagreb",
  weather: europeWeather,
  budget: 1800,
  size: "Mid",
  url: "https://nomadlist.com/zagreb"
}, //Buenos Aires
{
  continent: "South-America",
  country: "Argentina",
  city: "Buenos Aires",
  weather: southAmericaWeather,
  budget: 1000,
  size: "Big",
  url: "https://nomadlist.com/buenos-aires"
}, //Ko Samui
{
  continent: "Asia",
  country: "Thailand",
  city: "Ko Samui",
  weather: asiaWeather,
  budget: 1400,
  size: "Small",
  url: "https://nomadlist.com/ko-samui"
}, //Mexico City
{
  continent: "South-America",
  country: "Mexico",
  city: "Mexico City",
  weather: southAmericaWeather,
  budget: 1500,
  size: "Big",
  url: "https://nomadlist.com/mexico-city"
}, //Medellín
{
  continent: "South-America",
  country: "Colombia",
  city: "Medellín",
  weather: southAmericaWeather,
  budget: 1000,
  size: "Big",
  url: "https://nomadlist.com/medellin"
}, //Canggu, Bali
{
  continent: "Asia",
  country: "Indonesia",
  city: "Canggu, Bali",
  weather: asiaWeather,
  budget: 1400,
  size: "Small",
  url: "https://nomadlist.com/canggu"
}, //São Paulo
{
  continent: "South-America",
  country: "Brazil",
  city: "São Paulo",
  weather: southAmericaWeather,
  budget: 1600,
  size: "Big",
  url: "https://nomadlist.com/sao-paulo"
}, //Bangkok
{
  continent: "Asia",
  country: "Thailand",
  city: "Bangkok",
  weather: asiaWeather,
  budget: 1500,
  size: "Big",
  url: "https://nomadlist.com/bangkok"
}, //Chaing Mai
{
  continent: "Asia",
  country: "Indonesia",
  city: "Chaing Mai",
  weather: asiaWeather,
  budget: 1100,
  size: "Mid",
  url: "https://nomadlist.com/chiang-mai"
}, //Da Nang
{
  continent: "Asia",
  country: "Vietnam",
  city: "Da Nang",
  weather: asiaWeather,
  budget: 1000,
  size: "Big",
  url: "https://nomadlist.com/da-nang"
}, //Tbilisi
{
  continent: "Europe",
  country: "Georgia",
  city: "Tbilisi",
  weather: europeWeather,
  budget: 1300,
  size: "Big",
  url: "https://nomadlist.com/tbilisi"
}, //Phuket
{
  continent: "Asia",
  country: "Thailand",
  city: "Phuket",
  weather: asiaWeather,
  budget: 1700,
  size: "Mid",
  url: "https://nomadlist.com/phuket"
}, //Prague
{
  continent: "Europe",
  country: "Czechia",
  city: "Prague",
  weather: europeWeather,
  budget: 2000,
  size: "Big",
  url: "https://nomadlist.com/prague"
}, //Istanbul
{
  continent: "Asia",
  country: "Turkey",
  city: "Istanbul",
  weather: europeWeather,
  budget: 1300,
  size: "Big",
  url: "https://nomadlist.com/istanbul"
}, //Cape Town
{
  continent: "Africa",
  country: "South Africa",
  city: "Cape Town",
  weather: africaWeather,
  budget: 1800,
  size: "Mid",
  url: "https://nomadlist.com/cape-town"
}, //Playa del Carmen
{
  continent: "North-America",
  country: "Mexico",
  city: "Playa del Carmen",
  weather: southAmericaWeather,
  budget: 1500,
  size: "Mid",
  url: "https://nomadlist.com/playa-del-carmen"
}, //Taipei
{
  continent: "Asia",
  country: "Taiwan",
  city: "Taipei",
  weather: asiaWeather,
  budget: 2000,
  size: "Big",
  url: "https://nomadlist.com/taipei"
}, //Kiev
{
  continent: "Europe",
  country: "Ukrane",
  city: "Kiev",
  weather: europeWeather,
  budget: 1800,
  size: "Big",
  url: "https://nomadlist.com/kiev"
}, //Bucharest
{
  continent: "Europe",
  country: "Romania",
  city: "Bucharest",
  weather: europeWeather,
  budget: 1500,
  size: "Big",
  url: "https://nomadlist.com/bucharest"
}, //Belgrade
{
  continent: "Europe",
  country: "Serbia",
  city: "Belgrade",
  weather: europeWeather,
  budget: 1400,
  size: "Big",
  url: "https://nomadlist.com/belgrade"
}, //Ko Tao
{
  continent: "Asia",
  country: "Thailand",
  city: "Ko Tao",
  weather: asiaWeather,
  budget: 1500,
  size: "Small",
  url: "https://nomadlist.com/ko-tao"
}, //Saint Petersburg
{
  continent: "Europe",
  country: "Russia",
  city: "Saint Petersburg",
  weather: europeWeather,
  budget: 1600,
  size: "Big",
  url: "https://nomadlist.com/saint-petersburg"
}, //Odessa
{
  continent: "Europe",
  country: "Ukraine",
  city: "Odessa",
  weather: europeWeather,
  budget: 1200,
  size: "Mid",
  url: "https://nomadlist.com/odessa"
}, //Havana
{
  continent: "North-America",
  country: "Cuba",
  city: "Havana",
  weather: southAmericaWeather,
  budget: 1600,
  size: "Big",
  url: "https://nomadlist.com/havana"
}, //Ubud, Bali
{
  continent: "Asia",
  country: "Indonesia",
  city: "Ubud, Bali",
  weather: asiaWeather,
  budget: 1800,
  size: "Mid",
  url: "https://nomadlist.com/ubud"
}, //Moscow
{
  continent: "Europe",
  country: "Russia",
  city: "Moscow",
  weather: europeWeather,
  budget: 2300,
  size: "Big",
  url: "https://nomadlist.com/moscow"
}, //Casablanca
{
  continent: "Africa",
  country: "Morocco",
  city: "Casablanca",
  weather: "Mild",
  budget: 1500,
  size: "Big",
  url: "https://nomadlist.com/casablanca"
}, //Dakar
{
  continent: "Africa",
  country: "Senegal",
  city: "Dakar",
  weather: africaWeather,
  budget: 1500,
  size: "Big",
  url: "https://nomadlist.com/dakar"
}, //Bansko
{
  continent: "Europe",
  country: "Bulgaria",
  city: "Bansko",
  weather: europeWeather,
  budget: 1300,
  size: "Small"
}, //Luang Prabang
{
  continent: "Asia",
  country: "Laos",
  city: "Luang Prabang",
  weather: asiaWeather,
  budget: 1300,
  size: "Small",
  url: "https://nomadlist.com/luang-prabang"
}, //Santiago
{
  continent: "South-America",
  country: "Chile",
  city: "Santiago",
  weather: southAmericaWeather,
  budget: 1400,
  size: "Big",
  url: "https://nomadlist.com/santiago"
}, //Da Lat
{
  continent: "Asia",
  country: "Vietnam",
  city: "Da Lat",
  weather: asiaWeather,
  budget: 1000,
  size: "Mid",
  url: "https://nomadlist.com/da-lat"
}, //Fes
{
  continent: "Africa",
  country: "Morocco",
  city: "Fes",
  weather: "Cold",
  budget: 1200,
  size: "Big",
  url: "https://nomadlist.com/fes"
}, //Marrakesh
{
  continent: "Africa",
  country: "Morocco",
  city: "Marrakesh",
  weather: "Mild",
  budget: 1900,
  size: "Mid",
  url: "https://nomadlist.com/marrakesh"
}, //Phnom Penh
{
  continent: "Asia",
  country: "Cambodia",
  city: "Phnom Penh",
  weather: asiaWeather,
  budget: 1200,
  size: "Big",
  url: "https://nomadlist.com/phnom-penh"
}, //Tunis
{
  continent: "Africa",
  country: "Tunisia",
  city: "Tunis",
  weather: "Warm",
  budget: 1000,
  size: "Big",
  url: "https://nomadlist.com/tunis"
}, //Siem Reap
{
  continent: "Asia",
  country: "Cambodia",
  city: "Siem Reap",
  weather: asiaWeather,
  budget: 1000,
  size: "Mid",
  url: "https://nomadlist.com/siem-reap"
}, //Mamaia
{
  continent: "Europe",
  country: "Romania",
  city: "Mamaia",
  weather: europeWeather,
  budget: 1400,
  size: "Mid",
  url: "https://nomadlist.com/mamaia"
}, //Montevideo
{
  continent: "South-America",
  country: "Uruguay",
  city: "Montevideo",
  weather: southAmericaWeather,
  budget: 1700,
  size: "Big",
  url: "https://nomadlist.com/montevideo"
}, //Hanoi
{
  continent: "Asia",
  country: "Vietnam",
  city: "Hanoi",
  weather: asiaWeather,
  budget: 1000,
  size: "Big",
  url: "https://nomadlist.com/hanoi"
}, //Tallinn
{
  continent: "Europe",
  country: "Estonia",
  city: "Tallinn",
  weather: europeWeather,
  budget: 2000,
  size: "Mid",
  url: "https://nomadlist.com/tallinn"
}, //Antalya
{
  continent: "Asia",
  country: "Turkey",
  city: "Antalya",
  weather: "Mild",
  budget: 1100,
  size: "Big",
  url: "https://nomadlist.com/antalya"
}, //La Paz
{
  continent: "North-America",
  country: "Mexico",
  city: "La Paz",
  weather: southAmericaWeather,
  budget: 1000,
  size: "Big",
  url: "https://nomadlist.com/la-paz"
}, //Male
{
  continent: "Asia",
  country: "Maldives",
  city: "Male",
  weather: asiaWeather,
  budget: 2000,
  size: "Mid",
  url: "https://nomadlist.com/male"
}, //Cebu
{
  continent: "Asia",
  country: "Philippines",
  city: "Cebu",
  weather: asiaWeather,
  budget: 1400,
  size: "Mid",
  url: "https://nomadlist.com/cebu"
}, //Palawan
{
  continent: "Asia",
  country: "Philippines",
  city: "Palawan",
  weather: asiaWeather,
  budget: 1400,
  size: "Mid",
  url: "https://nomadlist.com/palawan"
}, //Izmir
{
  continent: "Asia",
  country: "Turkey",
  city: "Izmir",
  weather: "Cold",
  budget: 700,
  size: "Big",
  url: "https://nomadlist.com/izmir"
}, //Split
{
  continent: "Europe",
  country: "Croatia",
  city: "Split",
  weather: "Mild",
  budget: 2500,
  size: "Mid",
  url: "https://nomadlist.com/split"
}, //Taghazout
{
  continent: "Africa",
  country: "Morocco",
  city: "Taghazout",
  weather: "Mild",
  budget: 1100,
  size: "Mid",
  url: "https://nomadlist.com/taghazout"
}, //Warsaw
{
  continent: "Europe",
  country: "Poland",
  city: "Warsaw",
  weather: europeWeather,
  budget: 1900,
  size: "Big",
  url: "https://nomadlist.com/warsaw"
}, //Makati
{
  continent: "Asia",
  country: "Philippines",
  city: "Makati",
  weather: asiaWeather,
  budget: 1800,
  size: "Mid",
  url: "https://nomadlist.com/makati"
}, //Koh Lanta
{
  continent: "Asia",
  country: "Thailand",
  city: "Koh Lanta",
  weather: asiaWeather,
  budget: 1500,
  size: "Small",
  url: "https://nomadlist.com/ko-lanta"
}, //Kraków
{
  continent: "Europe",
  country: "Poland",
  city: "Kraków",
  weather: europeWeather,
  budget: 1500,
  size: "Mid",
  url: "https://nomadlist.com/krakow"
}, //Lviv
{
  continent: "Europe",
  country: "Ukraine",
  city: "Lviv",
  weather: europeWeather,
  budget: 1100,
  size: "Mid",
  url: "https://nomadlist.com/lviv"
}];
var _default = options;
exports.default = _default;
},{}],"nomadDiscover.js":[function(require,module,exports) {
"use strict";

var _nomadDiscoverDatabase = _interopRequireDefault(require("./nomadDiscoverDatabase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// JS modules (es6, see https://exploringjs.com/es6/ch_modules.html)
// import options from './nomadDiscoverDatabase'
//match input to database
function matchInput() {
  var inputContinent = document.querySelector("#continent").value;
  var inputBudget = document.querySelector("#budget").value;
  var inputWeather = document.querySelector("#weather").value;
  var inputSize = document.querySelector("#size").value; // continent filter

  var continentsFiltered;

  var continentFilter = function continentFilter(entry) {
    return entry.continent === inputContinent;
  };

  var isContinentAny = inputContinent === "Any";

  if (isContinentAny) {
    continentsFiltered = _nomadDiscoverDatabase.default;
  } else {
    continentsFiltered = _nomadDiscoverDatabase.default.filter(continentFilter);
    console.log(continentsFiltered);
  } //budget filter


  var budgetFiltered;

  var budgetFilter = function budgetFilter(select) {
    return select.budget <= inputBudget;
  };

  var isBudgetAny = inputBudget === "Any";

  if (isBudgetAny) {
    budgetFiltered = continentsFiltered;
  } else {
    budgetFiltered = continentsFiltered.filter(budgetFilter);
    console.log(budgetFiltered);
  } //weather filter


  var weatherFiltered;

  var weatherFilter = function weatherFilter(pick) {
    return pick.weather === inputWeather;
  };

  var isWeatherAny = inputWeather === "Any";

  if (isWeatherAny) {
    weatherFiltered = budgetFiltered;
  } else {
    weatherFiltered = budgetFiltered.filter(weatherFilter);
    console.log(weatherFiltered);
  } // size filter


  var sizeFiltered;

  var sizeFilter = function sizeFilter(you) {
    return you.size === inputSize;
  };

  console.log(inputSize);
  var isSizeAny = inputSize === "Any";

  if (isSizeAny) {
    sizeFiltered = weatherFiltered;
  } else {
    sizeFiltered = weatherFiltered.filter(sizeFilter);
  }

  console.log(sizeFiltered);
  return sizeFiltered;
} //end of matchInputFunction
//grab modal parts


var modalOuter = document.querySelector(".modal-outer");
var modalInner = document.querySelector(".modal-inner"); //handle the submission, populate modal

function onSubmit(e) {
  e.preventDefault();
  var finalList = matchInput();

  if (finalList.length === 0) {
    modalInner.innerHTML = "<p>Your input didn't match any cities! Maybe you should be less picky \uD83D\uDE09</p>"; //show modal

    modalOuter.classList.add("open"); //reset the form

    e.target.reset();
    return;
  }

  e.preventDefault(); //reset the form

  e.target.reset(); //pick a random city from the list

  var randomPlace = finalList[Math.floor(Math.random() * finalList.length)];
  JSON.stringify(randomPlace);
  console.log(randomPlace); //populate the modal with new info

  modalInner.innerHTML = "<p>You should go to ".concat(randomPlace.city, ", ").concat(randomPlace.country, "! Check it out on NomadList: <img src=").concat(randomPlace.url, "></p>"); //show modal

  modalOuter.classList.add("open");
} //close the model when clicked out or esc is pressed


function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", function (event) {
  var isOutside = !event.target.closest(".modal-inner");

  if (isOutside) {
    modalOuter.classList.remove("open");
  }
});
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
}); //end of modals

document.querySelector("form").addEventListener("submit", onSubmit);
},{"./nomadDiscoverDatabase":"nomadDiscoverDatabase.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59898" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","nomadDiscover.js"], null)
//# sourceMappingURL=/nomadDiscover.d7b32fd7.js.map