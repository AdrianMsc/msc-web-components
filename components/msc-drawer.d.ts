import type { Components, JSX } from "../types/components";

interface MscDrawer extends Components.MscDrawer, HTMLElement {}
export const MscDrawer: {
    prototype: MscDrawer;
    new (): MscDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
