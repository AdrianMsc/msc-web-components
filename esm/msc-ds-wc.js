import { p as promiseResolve, b as bootstrapLazy } from './index-5af41f24.js';
export { s as setNonce } from './index-5af41f24.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["msc-drawer",[[1,"msc-drawer",{"navTitle":[1,"nav-title"],"items":[8],"logo":[1],"isSideNavOpen":[32]}]]],["msc-hello",[[1,"msc-hello"]]]], options);
});

//# sourceMappingURL=msc-ds-wc.js.map