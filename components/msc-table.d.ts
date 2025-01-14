import type { Components, JSX } from "../types/components";

interface MscTable extends Components.MscTable, HTMLElement {}
export const MscTable: {
    prototype: MscTable;
    new (): MscTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
