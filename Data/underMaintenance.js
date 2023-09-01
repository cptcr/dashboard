const metaData = require("./Meta/meta");

//Cards
const hundred = require("./Cards/100+");
const five = require("./Cards/500");
const exmark = require("./Cards/!");

const Maintenance = {
    title: "Under Maintenance",
     contentTitle: "This page is under maintenance",
     texts: [
      "We still want to change for the better for you.",
      "Therefore, we are introducing technical updates so that we can allow you to enjoy the quality of our services.",
       "Come back to us later or join our Discord Support Server"
  ],
  //META DATA
  meta: metaData,
  //404 page
  error: {
      error404: {
          title: "Error 404",
          subtitle: "Page Not Found",
          description: "It seems you have stumbled into the abyss. Click the button below to return to the dashboard"
      },
      dbdError: {
          disableSecretMenu: false,
          secretMenuCombination: ["69", "82", "82", "79", "82"]
      }
  },
  //Blacklist
  error: {
      error404: {
          title: "Error 404",
          subtitle: "Page Not Found",
          description: "It seems you have stumbled into the abyss. Click the button below to return to the dashboard"
      },
      dbdError: {
          disableSecretMenu: false,
          secretMenuCombination: ["69", "82", "82", "79", "82"]
      }
  },
  infoCards: [hundred, five, exmark]
,};

module.exports = Maintenance