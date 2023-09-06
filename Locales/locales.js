//default english by Assistants Center
//German by toowake
//Dutch by jasondev
//Russian by franki1902.
//Chinese by Chat GPT
//Hungarian by Baluuh
//czech by dev.diortecxcz
const enUS = require("./Languages/english-us");
const deDE = require("./Languages/german");
const nlNL = require("./Languages/dutch");
const csCZ = require("./Languages/czech");
const zhCN = require("./Languages/simple-chinese");
const huHU = require("./Languages/hungarian");
const trTR = require("./Languages/turkish");
const frFR = require("./Languages/french");
const ruRU = require("./Languages/russian");
const esES = require("./Languages/spanish");

//export
const locales = {
    enUS: enUS ,
    deDE: deDE,    
    nlNL: nlNL,
    csCZ: csCZ,
    zhCN: zhCN,
    huHU: huHU,
    trTR: trTR,
    frFR: frFR,
    ruRU: ruRU,
    esES: esES
};

module.exports = locales
