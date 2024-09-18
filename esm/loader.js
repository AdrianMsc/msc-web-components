import { b as bootstrapLazy } from './index-5af41f24.js';
export { s as setNonce } from './index-5af41f24.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["msc-drawer",[[1,"msc-drawer",{"navTitle":[1,"nav-title"],"items":[8],"logo":[1],"isSideNavOpen":[32]}]]],["msc-hello",[[1,"msc-hello"]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map