import { Component, h } from '@stencil/core';
import { components } from './constants';

@Component({
  tag: 'msc-table',
  styleUrl: 'msc-table.css',
  shadow: true,
})
export class MscTable {
  comps = components;

  render() {
    return (
      <div class="container">
        <h1>Component Status</h1>

        {this.comps.map(category => (
          <div key={category.category}>
            <h2 class="font-bold text-2xl mt-5">{category.category}</h2>
            <div class="relative overflow-x-auto mt-3">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 w-[20%]">
                      &nbsp;
                    </th>
                    <th scope="col" class="px-6 py-3 w-[15%]">
                      Figma
                    </th>
                    <th scope="col" class="px-6 py-3 w-[15%]">
                      Guidelines
                    </th>
                    <th scope="col" class="px-6 py-3 w-[15%]">
                      CDN
                    </th>
                    <th scope="col" class="px-6 py-3 w-[15%]">
                      Storybook
                    </th>
                    <th scope="col" class="px-6 py-3" colSpan={3}>
                      Comments
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.components.map(component => (
                    <tr class="bg-white border-b" key={component.id}>
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {component.name}
                      </th>
                      <td class="px-6 py-4">{component.statuses.find(status => status.platform === 'Figma')?.status}</td>
                      <td class="px-6 py-4">{component.statuses.find(status => status.platform === 'Guidelines')?.status}</td>
                      <td class="px-6 py-4">{component.statuses.find(status => status.platform === 'CDN')?.status}</td>
                      <td class="px-6 py-4">{component.statuses.find(status => status.platform === 'Storybook')?.status}</td>
                      <td class="px-6 py-4" colSpan={3}>
                        {component.comment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
