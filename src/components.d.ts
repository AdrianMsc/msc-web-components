/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SideNav {
    }
}
declare global {
    interface HTMLSideNavElement extends Components.SideNav, HTMLStencilElement {
    }
    var HTMLSideNavElement: {
        prototype: HTMLSideNavElement;
        new (): HTMLSideNavElement;
    };
    interface HTMLElementTagNameMap {
        "side-nav": HTMLSideNavElement;
    }
}
declare namespace LocalJSX {
    interface SideNav {
    }
    interface IntrinsicElements {
        "side-nav": SideNav;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "side-nav": LocalJSX.SideNav & JSXBase.HTMLAttributes<HTMLSideNavElement>;
        }
    }
}
