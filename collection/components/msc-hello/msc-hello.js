import { Host, h } from "@stencil/core";
export class MscHello {
    render() {
        return (h(Host, { key: '8b9d9bb7dc5bb178997899d22abe7394e6831f01' }, h("div", { key: '5272ae9609032d97f8c759d51c5dc93637d25c45', class: "bg-indigo-500 p-6 rounded-md flex justify-center" }, h("h1", { key: '6dca2d1055f777a0ba7bbeebd75beac4a463db45', class: "text-white font-sans" }, "This is a Stencil component using Tailwind"))));
    }
    static get is() { return "msc-hello"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["msc-hello.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["msc-hello.css"]
        };
    }
}
//# sourceMappingURL=msc-hello.js.map
