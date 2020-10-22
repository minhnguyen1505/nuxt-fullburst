const functions = require("firebase-functions");
const { Nuxt } = require("nuxt-start");

// const nuxtConfig = require("../nuxt.config.js").default();

const config = {
//   ...nuxtConfig,
  dev: false,
  buildDir: "nuxt"
};
const nuxt = new Nuxt(config);

exports.demoApp = functions.https.onRequest(async (req: any, res: any) => {
  await nuxt.ready();
  nuxt.render(req, res);
});
