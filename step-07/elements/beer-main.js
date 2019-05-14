import { LitElement, html } from '../web_modules/lit-element.js';

import bootstrapStyle from '../web_modules/@granite-elements/granite-lit-bootstrap.js';

import { HashRouter } from '../web_modules/@granite-elements/granite-vaadin-router.js';

import './beer-list.js';
import './beer-details.js';

class BeerMain extends LitElement {

  static get properties() {
    return { 
    };
  }

  static get styles() {
    return bootstrapStyle;
  }

  firstUpdated() {
    const outlet = this.shadowRoot.querySelector('#outlet');
    const router = new HashRouter(outlet,);
    router.setRoutes([
      {path: '/beers',  component: 'beer-list'},
      {path: '/beer/:id', component: 'beer-details'},
      {path: '(.*)', component: 'beer-list'}
    ]);
  }

  render() {
    return html`
      <div id='outlet'>
      </div>
    `;
  }
}

customElements.define('beer-main', BeerMain);