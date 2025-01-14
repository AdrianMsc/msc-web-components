import { r as registerInstance, h } from './index-5af41f24.js';

const spinner = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style="shape-rendering: auto; display: block; background: rgba(255, 255, 255, 0);" class="animate-spin"><g data-idx="1"><g transform="matrix(1,0,0,1,80,50)" data-idx="2">
<g transform="matrix(1,0,0,1,0,0)" data-idx="3">
<circle fill-opacity="0.535" fill="#1c58ee" r="6" cy="0" cx="0" data-idx="4" transform="matrix(1.2675000429153442,0,0,1.2675000429153442,0,0)">
  
  
</circle>
</g>
</g><g transform="matrix(1,0,0,1,71.21320343017578,71.21320343017578)" data-idx="7">
<g transform="matrix(0.7071067811865476,0.7071067811865476,-0.7071067811865476,0.7071067811865476,0,0)" data-idx="8">
<circle fill-opacity="0.66" fill="#1c58ee" r="6" cy="0" cx="0" data-idx="9" transform="matrix(1.3300000429153442,0,0,1.3300000429153442,0,0)">
  
  
</circle>
</g>
</g><g transform="matrix(1,0,0,1,50,80)" data-idx="12">
<g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)" data-idx="13">
<circle fill-opacity="0.785" fill="#1c58ee" r="6" cy="0" cx="0" data-idx="14" transform="matrix(1.3925000429153442,0,0,1.3925000429153442,0,0)">
  
  
</circle>
</g>
</g><g transform="matrix(1,0,0,1,28.78679656982422,71.21320343017578)" data-idx="17">
<g transform="matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,0,0)" data-idx="18">
<circle fill-opacity="0.91" fill="#1c58ee" r="6" cy="0" cx="0" data-idx="19" transform="matrix(1.4550000429153442,0,0,1.4550000429153442,0,0)">
  
  
</circle>
</g>
</g><g transform="matrix(1,0,0,1,20,50)" data-idx="22">
<g transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)" data-idx="23">
<circle fill-opacity="0.035" fill="#1c58ee" r="6" cy="0" cx="0" data-idx="24" transform="matrix(1.0175000429153442,0,0,1.0175000429153442,0,0)">
  
  
</circle>
</g>
</g><g transform="matrix(1,0,0,1,28.78679656982422,28.78679656982422)" data-idx="27">
<g transform="matrix(-0.7071067811865477,-0.7071067811865475,0.7071067811865475,-0.7071067811865477,0,0)" data-idx="28">
<circle fill-opacity="0.16" fill="#1c58ee" r="6" cy="0" cx="0" data-idx="29" transform="matrix(1.0800000429153442,0,0,1.0800000429153442,0,0)">
  
  
</circle>
</g>
</g><g transform="matrix(1,0,0,1,50,20)" data-idx="32">
<g transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,0,0)" data-idx="33">
<circle fill-opacity="0.285" fill="#1c58ee" r="6" cy="0" cx="0" data-idx="34" transform="matrix(1.1425000429153442,0,0,1.1425000429153442,0,0)">
  
  
</circle>
</g>
</g><g transform="matrix(1,0,0,1,71.21320343017578,28.78679656982422)" data-idx="37">
<g transform="matrix(0.7071067811865474,-0.7071067811865477,0.7071067811865477,0.7071067811865474,0,0)" data-idx="38">
<circle fill-opacity="0.41" fill="#1c58ee" r="6" cy="0" cx="0" data-idx="39" transform="matrix(1.2050000429153442,0,0,1.2050000429153442,0,0)">
  
  
</circle>
</g>
</g><g data-idx="42"></g></g><text data-watermark="true" text-anchor="middle" dominant-baseline="middle" stroke-opacity="0.1" fill="black" fill-opacity="0.1" stroke="white" stroke-width="1" font-size="5.0" x="50" y="50" data-idx="43" style="opacity: 1; font-size: 5px;">LOADING.IO</text></svg>
  `;

const mscTableCss = "/*! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}:host{display:block}.static{position:static}.relative{position:relative}.mt-3{margin-top:.75rem}.mt-5{margin-top:1.25rem}.table{display:table}.w-\\[15\\%\\]{width:15%}.w-\\[20\\%\\]{width:20%}.w-full{width:100%}.overflow-x-auto{overflow-x:auto}.whitespace-nowrap{white-space:nowrap}.border-b{border-bottom-width:1px}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.text-left{text-align:left}.text-2xl{font-size:1.5rem;line-height:2rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.rtl\\:text-right:where([dir=rtl],[dir=rtl] *){text-align:right}";
const MscTableStyle0 = mscTableCss;

const MscTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.svg = spinner;
        this.comps = [];
    }
    render() {
        return (h("div", { key: '6e162debe2cd64ecd1c713475d8c499e18e46592', class: "container" }, h("h1", { key: '99c461b0d578de0d11e5c75e1bb855944e12f2cd' }, "Component Status"), this.comps.length > 0 ? '' : h("div", { innerHTML: this.svg }), this.comps.map(category => (h("div", { key: category.category }, h("h2", { class: "font-bold text-2xl mt-5" }, category.category), h("div", { class: "relative overflow-x-auto mt-3" }, h("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500" }, h("thead", { class: "text-xs text-gray-700 bg-gray-50" }, h("tr", null, h("th", { scope: "col", class: "px-6 py-3 w-[20%]" }, "\u00A0"), h("th", { scope: "col", class: "px-6 py-3 w-[15%]" }, "Figma"), h("th", { scope: "col", class: "px-6 py-3 w-[15%]" }, "Guidelines"), h("th", { scope: "col", class: "px-6 py-3 w-[15%]" }, "CDN"), h("th", { scope: "col", class: "px-6 py-3 w-[15%]" }, "Storybook"), h("th", { scope: "col", class: "px-6 py-3", colSpan: 3 }, "Comments"))), h("tbody", null, category.components.map(component => {
            var _a, _b, _c, _d;
            return (h("tr", { class: "bg-white border-b", key: component.id }, h("th", { scope: "row", class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap" }, component.name), h("td", { class: "px-6 py-4" }, (_a = component.statuses.find(status => status.platform === 'Figma')) === null || _a === void 0 ? void 0 : _a.status), h("td", { class: "px-6 py-4" }, (_b = component.statuses.find(status => status.platform === 'Guidelines')) === null || _b === void 0 ? void 0 : _b.status), h("td", { class: "px-6 py-4" }, (_c = component.statuses.find(status => status.platform === 'CDN')) === null || _c === void 0 ? void 0 : _c.status), h("td", { class: "px-6 py-4" }, (_d = component.statuses.find(status => status.platform === 'Storybook')) === null || _d === void 0 ? void 0 : _d.status), h("td", { class: "px-6 py-4", colSpan: 3 }, component.comment)));
        })))))))));
    }
};
MscTable.style = MscTableStyle0;

export { MscTable as msc_table };

//# sourceMappingURL=msc-table.entry.js.map