let pathPanel = "./Schemas.js/Panel/Systems/";
let path = "./Schemas.js/";

const update = require("./Schemas.js/Nexus/update");
const akanekoPanel = require("./Schemas.js/Panel/NSFW/akaneko");
const nsfwPanel = require("./Schemas.js/Panel/NSFW/nsfw");

// Panel Boolean Schemas
const afkPanel = require(`${pathPanel}afk`);
const automodPanel = require(`${pathPanel}automod`);
const economyPanel = require(`${pathPanel}economy`);
const giveawayPanel = require(`${pathPanel}giveaway`);
const interactionPanel = require(`${pathPanel}interactions`);
const jointocreatePanel = require(`${pathPanel}jointocreate`);
const pollPanel = require(`${pathPanel}poll`);
const remindPanel = require(`${pathPanel}remind`);
const streamPanel = require(`${pathPanel}stream`);
const ticketPanel = require(`${pathPanel}ticket`);
const verifyPanel = require(`${pathPanel}verify`);
const warnPanel = require(`${pathPanel}warn`);
const xpPanel = require(`${pathPanel}xp`);

// Data Schemas
const auditlog = require(`${path}auditlog`);
const autoreply = require(`${path}autoreply`);
const blacklistuser = require(`${path}blacklist`);
const blacklistserver = require(`${path}blacklistserver`);
const ghostnum = require(`${path}ghostnum`);
const ghostpingschma = require(`${path}ghostpingSchema`);
const giveawaySchema = require(`${path}giveawaySchema`);
const joinrole = require(`${path}joinrole`);
const jointocreateSchema = require(`${path}jointocreate`);
const linkSchema = require(`${path}linkSchema`);
const modmail = require(`${path}modmail`);
const pollSchema = require(`${path}pollSchema`);
const reactionrole = require(`${path}reactionrole`);
const ticketSchema = require(`${path}ticketSchema`);
const warnSchema = require(`${path}warnSchema`);
const welcomeSchema = require(`${path}welcomeSchema`);
const xproles = require(`${path}xp-roles`);
const xpChannel = require(`${path}xpChannel`);

module.exports = {
  update,
  akanekoPanel,
  nsfwPanel,
  afkPanel,
  automodPanel,
  economyPanel,
  giveawayPanel,
  interactionPanel,
  jointocreatePanel,
  pollPanel,
  remindPanel,
  streamPanel,
  ticketPanel,
  verifyPanel,
  warnPanel,
  xpPanel,
  auditlog,
  autoreply,
  blacklistuser,
  blacklistserver,
  ghostnum,
  ghostpingschma,
  giveawaySchema,
  joinrole,
  jointocreateSchema,
  linkSchema,
  modmail,
  pollSchema,
  reactionrole,
  ticketSchema,
  warnSchema,
  welcomeSchema,
  xproles,
  xpChannel,
};
