import { LitElement, html } from '../../web_modules/lit-element.js';

class BeerListItem extends LitElement {
  render() {
    return html`
      <p>Hello world! From beer-list-item</p>
    `;
  }
}

customElements.define('beer-list-item', BeerListItem);