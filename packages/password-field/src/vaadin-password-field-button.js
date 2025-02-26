/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html } from '@polymer/polymer/polymer-element.js';
import { Button } from '@vaadin/button/src/vaadin-button.js';
import { defineCustomElement } from '@vaadin/component-base/src/define.js';

/**
 * An element used internally by `<vaadin-password-field>`. Not intended to be used separately.
 *
 * @customElement
 * @extends Button
 * @private
 */
class PasswordFieldButton extends Button {
  static get is() {
    return 'vaadin-password-field-button';
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot name="tooltip"></slot>
    `;
  }
}

defineCustomElement(PasswordFieldButton);
