/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["vaadin-text-area shadow default"] = 
`<div class="vaadin-text-area-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container
    part="input-field"
    style="--_text-area-vertical-scroll-position:0px;"
  >
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="textarea">
    </slot>
    <slot
      name="suffix"
      slot="suffix"
    >
    </slot>
    <div
      aria-hidden="true"
      id="clearButton"
      part="clear-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
`;
/* end snapshot vaadin-text-area shadow default */

snapshots["vaadin-text-area shadow disabled"] = 
`<div class="vaadin-text-area-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container
    disabled=""
    part="input-field"
    style="--_text-area-vertical-scroll-position:0px;"
  >
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="textarea">
    </slot>
    <slot
      name="suffix"
      slot="suffix"
    >
    </slot>
    <div
      aria-hidden="true"
      id="clearButton"
      part="clear-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
`;
/* end snapshot vaadin-text-area shadow disabled */

snapshots["vaadin-text-area shadow readonly"] = 
`<div class="vaadin-text-area-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container
    part="input-field"
    readonly=""
    style="--_text-area-vertical-scroll-position:0px;"
  >
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="textarea">
    </slot>
    <slot
      name="suffix"
      slot="suffix"
    >
    </slot>
    <div
      aria-hidden="true"
      id="clearButton"
      part="clear-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
`;
/* end snapshot vaadin-text-area shadow readonly */

snapshots["vaadin-text-area shadow invalid"] = 
`<div class="vaadin-text-area-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container
    invalid=""
    part="input-field"
    style="--_text-area-vertical-scroll-position:0px;"
  >
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="textarea">
    </slot>
    <slot
      name="suffix"
      slot="suffix"
    >
    </slot>
    <div
      aria-hidden="true"
      id="clearButton"
      part="clear-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
`;
/* end snapshot vaadin-text-area shadow invalid */

snapshots["vaadin-text-area shadow theme"] = 
`<div class="vaadin-text-area-container">
  <div part="label">
    <slot name="label">
    </slot>
    <span
      aria-hidden="true"
      part="required-indicator"
    >
    </span>
  </div>
  <vaadin-input-container
    part="input-field"
    style="--_text-area-vertical-scroll-position:0px;"
    theme="align-right"
  >
    <slot
      name="prefix"
      slot="prefix"
    >
    </slot>
    <slot name="textarea">
    </slot>
    <slot
      name="suffix"
      slot="suffix"
    >
    </slot>
    <div
      aria-hidden="true"
      id="clearButton"
      part="clear-button"
      slot="suffix"
    >
    </div>
  </vaadin-input-container>
  <div part="helper-text">
    <slot name="helper">
    </slot>
  </div>
  <div part="error-message">
    <slot name="error-message">
    </slot>
  </div>
</div>
`;
/* end snapshot vaadin-text-area shadow theme */

snapshots["vaadin-text-area slots default"] = 
`<textarea
  id="textarea-vaadin-text-area-3"
  slot="textarea"
>
</textarea>
<label
  for="textarea-vaadin-text-area-3"
  id="label-vaadin-text-area-0"
  slot="label"
>
</label>
<div
  hidden=""
  id="error-message-vaadin-text-area-2"
  slot="error-message"
>
</div>
`;
/* end snapshot vaadin-text-area slots default */

snapshots["vaadin-text-area slots helper"] = 
`<textarea
  aria-describedby="helper-vaadin-text-area-1"
  id="textarea-vaadin-text-area-3"
  slot="textarea"
>
</textarea>
<label
  for="textarea-vaadin-text-area-3"
  id="label-vaadin-text-area-0"
  slot="label"
>
</label>
<div
  hidden=""
  id="error-message-vaadin-text-area-2"
  slot="error-message"
>
</div>
<div
  id="helper-vaadin-text-area-1"
  slot="helper"
>
  Helper
</div>
`;
/* end snapshot vaadin-text-area slots helper */

