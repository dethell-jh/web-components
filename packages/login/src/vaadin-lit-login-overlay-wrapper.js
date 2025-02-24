/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, LitElement } from 'lit';
import { defineCustomElement } from '@vaadin/component-base/src/define.js';
import { DirMixin } from '@vaadin/component-base/src/dir-mixin.js';
import { PolylitMixin } from '@vaadin/component-base/src/polylit-mixin.js';
import { OverlayMixin } from '@vaadin/overlay/src/vaadin-overlay-mixin.js';
import { overlayStyles } from '@vaadin/overlay/src/vaadin-overlay-styles.js';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { loginOverlayWrapperStyles } from './vaadin-login-overlay-wrapper-styles.js';

/**
 * An element used internally by `<vaadin-login-overlay>`. Not intended to be used separately.
 *
 * @extends HTMLElement
 * @private
 */
class LoginOverlayWrapper extends OverlayMixin(DirMixin(ThemableMixin(PolylitMixin(LitElement)))) {
  static get is() {
    return 'vaadin-login-overlay-wrapper';
  }

  static get styles() {
    return [overlayStyles, loginOverlayWrapperStyles];
  }

  static get properties() {
    return {
      /**
       * Title of the application.
       */
      title: {
        type: String,
      },

      /**
       * Application description. Displayed under the title.
       */
      description: {
        type: String,
      },
    };
  }

  /** @protected */
  render() {
    return html`
      <div id="backdrop" part="backdrop" ?hidden="${!this.withBackdrop}"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <section part="card">
            <div part="brand">
              <slot name="title">
                <h1 part="title">${this.title}</h1>
              </slot>
              <p part="description">${this.description}</p>
            </div>
            <div part="form">
              <slot></slot>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

defineCustomElement(LoginOverlayWrapper);
