import { Router } from '@vaadin/router';


export class HashRouter extends Router {
  __updateBrowserHistory(pathname, replace) {
    if (window.location.hash.substring(1) !== pathname) {
      window.location.hash = '#' + pathname;
    }
  }
  __onNavigationEvent(event) {
    let hash = (window.location.hash ? window.location.hash.substring(1) : '');
    const pathname = event ? event.detail.pathname : hash;
    if (isString(this.__normalizePathname(pathname))) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }
      this.render(pathname, true);
    }
  }
}

function globalHashChangeHandler(event) {
  const pathname = event.newURL && event.newURL.indexOf('#') > -1
    ? event.newURL.substring(event.newURL.indexOf('#') + 1)
    : '/';
    Router.go(pathname);
}


function isString(s) {
  return typeof s === 'string';
}

const HASHCHANGE = {
  activate() {
    window.addEventListener('hashchange', globalHashChangeHandler, false);
  },

  inactivate() {
    window.removeEventListener('hashchange', globalHashChangeHandler, false);
  },
};


Router.NavigationTrigger = [HASHCHANGE];
