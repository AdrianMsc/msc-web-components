import { Host, h } from "@stencil/core";
import chevronDown from "../../assets/icons/chevron-down.svg";
export class MscDrawer {
    constructor() {
        this.toggleSideNav = () => {
            this.isSideNavOpen = !this.isSideNavOpen;
        };
        this.toggleAccordion = () => { };
        this.navTitle = 'Fuel Design System';
        this.items = undefined;
        this.logo = 'https://adrianmsc.github.io/msc-tailwind-theme/assets/msc-logo.svg';
        this.isSideNavOpen = false;
    }
    render() {
        return (h(Host, { key: 'e934bae6d65bc56b1415fd7eb44c04efadd32c01' }, h("button", { key: '642e9d9eeec085594cbfc41eaf44302bf04391df', onClick: this.toggleSideNav, "aria-controls": "default-sidebar", type: "button", class: "inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" }, h("span", { key: 'a116c87c190788ecfde3b81ea506202892122fe5', class: "sr-only" }, "Open sidebar"), h("svg", { key: '61872785a2cec9ae1466c759f4f8c2a0c1956fee', class: "w-6 h-6", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'd21fe708b230756522cb237233652a431f6d1463', "clip-rule": "evenodd", "fill-rule": "evenodd", d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" }))), h("aside", { key: '23ec2a0610ce1218ad0d0bfc6d5a32fd2276d676', id: "msc-sidebar", class: `fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${this.isSideNavOpen ? 'transform-none' : '-translate-x-full'} sm:translate-x-0`, "aria-label": "Sidebar" }, h("div", { key: '607c5e20cf7a56b65ac75d721d524ef03cb794d5', class: "h-full px-3 py-4 overflow-y-auto bg-gray-50" }, h("a", { key: '2b7db63f23658af7938fd618b57bf24e9afd346f', href: "../index.html" }, h("img", { key: 'e543704bc1545f8f5222216593cde8176ea6045e', src: this.logo, alt: " MSC LOGO", class: "mb-3", onClick: this.toggleSideNav })), h("p", { key: '3a8782e86a955ce9e90048c72f24e71f0928bcfd', class: "font-bold text-lg mb-5" }, this.navTitle), h("ul", { key: '4a04c5c10df610c7509e101b24be238996ffd9ce', class: "space-y-1 font-normal text-sm" }, this.items.map(c => {
            return (h("li", null, h("button", { type: "button", class: "flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100", "aria-controls": "dropdown-action", "data-collapse-toggle": "dropdown-action" }, h("span", { class: "flex-1 text-left rtl:text-right whitespace-nowrap" }, c.category), h("img", { class: "flex-shrink-0 w-3 h-3", width: "24", height: "24", src: chevronDown })), h("ul", { id: "dropdown-action", class: "py-2 space-y-2" }, c.pages.map(e => {
                return (h("li", null, h("a", { href: e.href, class: "flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group" }, h("span", { class: "flex-1 ml-3 whitespace-nowrap" }, e.text))));
            }))));
        })))), h("div", { key: '50bcbd8cf46ab712383e0e8634913e6f34b4da6e', class: "p-4 sm:ml-64" }, h("section", { key: '32b9bb1238e3603a566344e95d4c1df9bc9c7d9b', class: "container mx-auto" }, h("div", { key: '9fd05d27d1d64593c1ff07dad63288f4333c387e', class: "grid grid-cols-12" }, h("div", { key: '1aa7a9081042e7b1c7a49c5bca059610c87930b8', class: "col-span-12 md:col-span-8 md:col-start-3 pt-10" }, h("slot", { key: 'afc2b7b616b7a8067ed043d8a8c3f5c0011cfab9' })))))));
    }
    static get is() { return "msc-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["msc-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["msc-drawer.css"]
        };
    }
    static get properties() {
        return {
            "navTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "nav-title",
                "reflect": false,
                "defaultValue": "'Fuel Design System'"
            },
            "items": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "items",
                "reflect": false
            },
            "logo": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "logo",
                "reflect": false,
                "defaultValue": "'https://adrianmsc.github.io/msc-tailwind-theme/assets/msc-logo.svg'"
            }
        };
    }
    static get states() {
        return {
            "isSideNavOpen": {}
        };
    }
}
//# sourceMappingURL=msc-drawer.js.map
