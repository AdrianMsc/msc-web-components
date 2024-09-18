import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'msc-hello',
  styleUrl: 'msc-hello.css',
  shadow: true,
})
export class MscHello {
  render() {
    return (
      <Host>
        <div class="bg-indigo-500 p-6 rounded-md flex justify-center">
          <h1 class="text-white font-sans">This is a Stencil component using Tailwind</h1>
        </div>
      </Host>
    );
  }
}
