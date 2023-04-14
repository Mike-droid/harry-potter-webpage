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
var apiURL = 'https://hp-api.onrender.com/api/characters';
var charactersDiv = document.getElementById('characters');
var getDataButton = document.getElementById('getData_button');
var houses = document.getElementById('houses');
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        function fillData() {
            for (var index = 0; index < data.length; index++) {
                var characterCard = "\n        <div class=\"character " + houses.value + "\">\n          <h2>" + data[index].name + "</h2>\n          <img src=\"" + data[index].image + "\" />\n          <p>Ancestry: " + data[index].ancestry + "</p>\n          <p>Date of birth: " + data[index].dateOfBirth + "</p>\n        </div>\n      ";
                if (data[index].house === houses.value) {
                    charactersDiv.innerHTML += characterCard;
                }
                else if (houses.value === 'none') {
                    charactersDiv.innerHTML = "<h2>Please select a Hogwart's House.</h2>";
                }
            }
        }
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(apiURL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (charactersDiv.innerHTML === '') {
                        fillData();
                    }
                    else {
                        charactersDiv.innerHTML = '';
                        fillData();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
getDataButton === null || getDataButton === void 0 ? void 0 : getDataButton.addEventListener('click', getData);
