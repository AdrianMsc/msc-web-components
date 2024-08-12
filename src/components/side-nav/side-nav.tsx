import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'side-nav',
  styleUrl: 'side-nav.css',
  shadow: true,
})
export class SideNav {
  render() {
    return (
      <Host>
        <ul class="space-y-1 font-normal text-sm">
          {/* GETTING STARTED */}
          <li>
            <button
              type="button"
              class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span class="flex-1 text-left rtl:text-right whitespace-nowrap">Start Here</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <ul id="dropdown-example" class="py-2 space-y-2">
              <li>
                <a href="component-status.html" class="flex items-center w-full px-2 text-gray-900 transition duration-75 rounded-lg pl-5 group hover:bg-gray-100">
                  Component Status
                </a>
              </li>
            </ul>
          </li>

          {/* INDICATOR */}
          <li>
            <button
              type="button"
              class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-indicator"
              data-collapse-toggle="dropdown-indicator"
            >
              <span class="flex-1 text-left rtl:text-right whitespace-nowrap">Indicator</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <ul id="dropdown-indicator" class="py-2 space-y-2">
              <li>
                <a href="spinner.html" class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group">
                  <span class="flex-1 ms-3 whitespace-nowrap">Spinner</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </Host>
    );
  }
}
