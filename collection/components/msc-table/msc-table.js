import { h } from "@stencil/core";
import { components } from "./constants";
export class MscTable {
    constructor() {
        this.comps = components;
    }
    render() {
        return (h("div", { key: '58b380e8070fe68e8b4ccfa7ba192855b67e8c82', class: "container" }, h("h1", { key: 'd7471e42730acccedeabf311903df79d251db718' }, "Component Status"), this.comps.map(category => (h("div", { key: category.category }, h("h2", { class: "font-bold text-2xl mt-5" }, category.category), h("div", { class: "relative overflow-x-auto mt-3" }, h("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500" }, h("thead", { class: "text-xs text-gray-700 bg-gray-50" }, h("tr", null, h("th", { scope: "col", class: "px-6 py-3 w-[20%]" }, "\u00A0"), h("th", { scope: "col", class: "px-6 py-3 w-[15%]" }, "Figma"), h("th", { scope: "col", class: "px-6 py-3 w-[15%]" }, "Guidelines"), h("th", { scope: "col", class: "px-6 py-3 w-[15%]" }, "CDN"), h("th", { scope: "col", class: "px-6 py-3 w-[15%]" }, "Storybook"), h("th", { scope: "col", class: "px-6 py-3", colSpan: 3 }, "Comments"))), h("tbody", null, category.components.map(component => {
            var _a, _b, _c, _d;
            return (h("tr", { class: "bg-white border-b", key: component.id }, h("th", { scope: "row", class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap" }, component.name), h("td", { class: "px-6 py-4" }, (_a = component.statuses.find(status => status.platform === 'Figma')) === null || _a === void 0 ? void 0 : _a.status), h("td", { class: "px-6 py-4" }, (_b = component.statuses.find(status => status.platform === 'Guidelines')) === null || _b === void 0 ? void 0 : _b.status), h("td", { class: "px-6 py-4" }, (_c = component.statuses.find(status => status.platform === 'CDN')) === null || _c === void 0 ? void 0 : _c.status), h("td", { class: "px-6 py-4" }, (_d = component.statuses.find(status => status.platform === 'Storybook')) === null || _d === void 0 ? void 0 : _d.status), h("td", { class: "px-6 py-4", colSpan: 3 }, component.comment)));
        })))))))));
    }
    static get is() { return "msc-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["msc-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["msc-table.css"]
        };
    }
}
//# sourceMappingURL=msc-table.js.map
