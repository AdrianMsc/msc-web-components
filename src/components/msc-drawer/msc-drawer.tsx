import { Component, Host, Prop, State, h } from '@stencil/core';
import chevronDown from '../../assets/icons/chevron-down.svg';

@Component({
  tag: 'msc-drawer',
  styleUrl: 'msc-drawer.css',
  shadow: true,
})
export class MscDrawer {
  @Prop() navTitle = 'Fuel Design System';
  @Prop() items;
  @Prop() logo = 'https://adrianmsc.github.io/msc-tailwind-theme/assets/msc-logo.svg';

  @State() isSideNavOpen: boolean = false;

  toggleSideNav = () => {
    this.isSideNavOpen = !this.isSideNavOpen;
  };

  toggleAccordion = () => {};

  render() {
    return (
      <Host>
        <button
          onClick={this.toggleSideNav}
          aria-controls="default-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <aside
          id="msc-sidebar"
          class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${this.isSideNavOpen ? 'transform-none' : '-translate-x-full'} sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
            <a href="../index.html">
              <img src={this.logo} alt=" MSC LOGO" class="mb-3" onClick={this.toggleSideNav} />
            </a>
            <p class="font-bold text-lg mb-5">{this.navTitle}</p>

            <ul class="space-y-1 font-normal text-sm">
              {this.items.map(c => {
                return (
                  <li>
                    <button
                      type="button"
                      class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                      aria-controls="dropdown-action"
                      data-collapse-toggle="dropdown-action"
                    >
                      <span class="flex-1 text-left rtl:text-right whitespace-nowrap">{c.category}</span>
                      <img class="flex-shrink-0 w-3 h-3" width="24" height="24" src={chevronDown} />
                    </button>
                    <ul id="dropdown-action" class="py-2 space-y-2">
                      {c.pages.map(e => {
                        return (
                          <li>
                            <a href={e.href} class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group">
                              <span class="flex-1 ml-3 whitespace-nowrap">{e.text}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <div class="p-4 sm:ml-64">
          <section class="container mx-auto">
            <div class="grid grid-cols-12">
              <div class="col-span-12 md:col-span-8 md:col-start-3 pt-10">
                <slot></slot>
              </div>
            </div>
          </section>
        </div>
      </Host>
    );
  }
}
