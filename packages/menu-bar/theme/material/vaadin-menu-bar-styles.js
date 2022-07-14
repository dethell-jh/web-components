import { css, registerStyles } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin-menu-bar',
  css`
    [part='container'] {
      /* To retain the box-shadow */
      padding-bottom: 5px;
    }

    :host([has-single-button]) [part$='button'] {
      border-radius: 4px;
    }
  `,
  { moduleId: 'material-menu-bar' },
);
