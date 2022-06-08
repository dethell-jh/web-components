import { expect } from '@esm-bundle/chai';
import { fixtureSync } from '@vaadin/testing-helpers';
import '../../src/vaadin-combo-box.js';
import { resetUniqueId } from '@vaadin/component-base/src/unique-id-utils.js';

describe('vaadin-combo-box', () => {
  let comboBox;

  beforeEach(() => {
    resetUniqueId();
    comboBox = fixtureSync('<vaadin-combo-box></vaadin-combo-box>');
  });

  describe('host', () => {
    it('placeholder', async () => {
      comboBox.placeholder = 'Placeholder';
      await expect(comboBox).dom.to.equalSnapshot();
    });

    it('pattern', async () => {
      comboBox.pattern = '[0-9]*';
      await expect(comboBox).dom.to.equalSnapshot();
    });
  });

  describe('shadow', () => {
    it('default', async () => {
      await expect(comboBox).shadowDom.to.equalSnapshot();
    });

    it('disabled', async () => {
      comboBox.disabled = true;
      await expect(comboBox).shadowDom.to.equalSnapshot();
    });

    it('readonly', async () => {
      comboBox.readonly = true;
      await expect(comboBox).shadowDom.to.equalSnapshot();
    });

    it('invalid', async () => {
      comboBox.invalid = true;
      await expect(comboBox).shadowDom.to.equalSnapshot();
    });

    it('theme', async () => {
      comboBox.setAttribute('theme', 'align-right');
      await expect(comboBox).shadowDom.to.equalSnapshot();
    });
  });

  describe('slots', () => {
    it('default', async () => {
      await expect(comboBox).lightDom.to.equalSnapshot();
    });

    it('label', async () => {
      comboBox.label = 'Label';
      await expect(comboBox).lightDom.to.equalSnapshot();
    });

    it('helper', async () => {
      comboBox.helperText = 'Helper';
      await expect(comboBox).lightDom.to.equalSnapshot();
    });

    it('error', async () => {
      comboBox.errorMessage = 'Error';
      comboBox.invalid = true;
      await expect(comboBox).lightDom.to.equalSnapshot();
    });
  });
});
