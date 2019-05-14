import { LitElement, html } from '../web_modules/lit-element.js';

import bootstrapStyle from '../web_modules/@granite-elements/granite-lit-bootstrap.js';

class BeerDetails extends LitElement {

  static get properties() {
    return { 
      location: {
        type: Object,
      }
    };
  }

  static get styles() {
    return bootstrapStyle;
  }

  render() {
    return html`
      <div id='details'>
        I am the beer ${this.location.params.id}
      </div>
    `;
  }
}

customElements.define('beer-details', BeerDetails);