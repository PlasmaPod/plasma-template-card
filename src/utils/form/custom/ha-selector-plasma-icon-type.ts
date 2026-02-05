import { fireEvent, HomeAssistant } from "../../../ha";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../../../shared/editor/icon-type-picker";

export type PlasmaIconTypeSelector = {
  plasma_icon_type: {};
};

@customElement("ha-selector-plasma_icon_type")
export class HaPlasmaIconTypeSelector extends LitElement {
  @property() public hass!: HomeAssistant;

  @property() public selector!: PlasmaIconTypeSelector;

  @property() public value?: string;

  @property() public label?: string;

  protected render() {
    return html`
      <plasma-icon-type-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value}
        @value-changed=${this._valueChanged}
      ></plasma-icon-type-picker>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    fireEvent(this, "value-changed", { value: ev.detail.value || undefined });
  }
}
