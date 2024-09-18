'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-12fe7208.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('msc-ds-wc.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["msc-drawer.cjs",[[1,"msc-drawer",{"navTitle":[1,"nav-title"],"items":[8],"logo":[1],"isSideNavOpen":[32]}]]],["msc-hello.cjs",[[1,"msc-hello"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=msc-ds-wc.cjs.js.map