/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MscDrawer {
        "items": any;
        "logo": string;
        "navTitle": string;
    }
    interface MscHello {
    }
}
declare global {
    interface HTMLMscDrawerElement extends Components.MscDrawer, HTMLStencilElement {
    }
    var HTMLMscDrawerElement: {
        prototype: HTMLMscDrawerElement;
        new (): HTMLMscDrawerElement;
    };
    interface HTMLMscHelloElement extends Components.MscHello, HTMLStencilElement {
    }
    var HTMLMscHelloElement: {
        prototype: HTMLMscHelloElement;
        new (): HTMLMscHelloElement;
    };
    interface HTMLElementTagNameMap {
        "msc-drawer": HTMLMscDrawerElement;
        "msc-hello": HTMLMscHelloElement;
    }
}
declare namespace LocalJSX {
    interface MscDrawer {
        "items"?: any;
        "logo"?: string;
        "navTitle"?: string;
    }
    interface MscHello {
    }
    interface IntrinsicElements {
        "msc-drawer": MscDrawer;
        "msc-hello": MscHello;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "msc-drawer": LocalJSX.MscDrawer & JSXBase.HTMLAttributes<HTMLMscDrawerElement>;
            "msc-hello": LocalJSX.MscHello & JSXBase.HTMLAttributes<HTMLMscHelloElement>;
        }
    }
}
