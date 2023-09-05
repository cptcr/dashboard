//default english by Assistants Center
//German by toowake
//Dutch by jasondev
//Russian by franki1902.
//Chinese by Chat GPT
//czech by dev.diortecxcz
const enUS = require("./Languages/english-us");
const deDE = require("./Languages/german");
const nlNL = require("./Languages/dutch");
const csCZ = require("./Languages/czech");
const zhCN = require("./Languages/simple-chinese");
const locales = {
    enUS: enUS ,
    deDE: deDE,    
    nlNL: nlNL,
    csCZ: csCZ,
    zhCN: zhCN,
};

module.exports = locales