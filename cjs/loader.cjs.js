'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-12fe7208.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["msc-drawer.cjs",[[1,"msc-drawer",{"navTitle":[1,"nav-title"],"items":[8],"logo":[1],"isSideNavOpen":[32]}]]],["msc-hello.cjs",[[1,"msc-hello"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map