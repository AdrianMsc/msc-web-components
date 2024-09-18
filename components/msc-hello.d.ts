import type { Components, JSX } from "../types/components";

interface MscHello extends Components.MscHello, HTMLElement {}
export const MscHello: {
    prototype: MscHello;
    new (): MscHello;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
