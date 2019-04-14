// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-cell-group v1.0.0 available at github.com/author-elements/cell-group
// Last Build: 4/13/2019, 10:12:44 PM
var AuthorCellGroupElement = (function () {
  'use strict';

  if (!window.hasOwnProperty('AuthorBaseElement')) {
              console.error('[ERROR] <author-cell-group> Required dependency "AuthorBaseElement" not found.');
              console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
            }
          (function () {
            let missingDependencies = Array.from(new Set([])).filter(dep => !customElements.get(dep));
            if (missingDependencies.length > 0) {
              console.error(`[ERROR] <author-cell-group> Required dependenc${missingDependencies.length !== 1 ? 'ies' : 'y'} not found: ${missingDependencies.map(d => `<${d}>`).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])}`);
              missingDependencies.forEach((dep, i) => console.info(`${i+1}. <${dep}> is available at ${'https://github.com/author-elements/cell-group'.replace('cell-group', dep.replace('author-', ''))}`));
            }
          })();
          class AuthorCellGroupElement extends AuthorBaseElement(HTMLElement) {
    constructor () {
      super(`<template><style>@charset "UTF-8"; :host *,:host :after,:host :before{box-sizing:border-box}author-cell-group *,author-cell-group :after,author-cell-group :before{box-sizing:border-box}</style><slot></slot></template>`);

      this.UTIL.defineProperties({
        defaultRole: {
          private: true,
          readonly: true,
          get: () => sourceElement.localName === 'tr' ? 'row' : 'rowgroup'
        },

        injected: {
          private: true,
          default: false
        },

        sourceElement: {
          private: true,
          default: null
        }
      });

      this.UTIL.defineAttributes({
        role: this.PRIVATE.defaultRole
      });

      this.UTIL.registerListeners(this, {
        'attribute.change': evt => {
          let { attribute, newValue } = evt.detail;

          switch (attribute.toLowerCase()) {
            case 'role':
              if (newValue !== this.PRIVATE.defaultRole) {
                this.setAttribute('role', this.PRIVATE.defaultRole);
              }

              break
          }
        },

        connected: () => this.setAttribute('role', this.PRIVATE.defaultRole)
      });
    }

    inject (sourceElement) {
      // Prevent re-injections
      if (this.PRIVATE.injected) {
        return
      }

      this.PRIVATE.sourceElement = sourceElement;
      this.PRIVATE.injected = true;
    }
  }

  customElements.define('author-cell-group', AuthorCellGroupElement);

  return AuthorCellGroupElement;

}());
//# sourceMappingURL=author-cell-group.js.map
