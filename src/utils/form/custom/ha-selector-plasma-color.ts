import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fireEvent, HomeAssistant } from "../../../ha";
import "../../../shared/editor/color-picker";

export type PlasmaColorSelector = {
  plasma_color: {};
};

@customElement("ha-selector-plasma_color")
export class HaPlasmaColorSelector extends LitElement {
  @property() public hass!: HomeAssistant;

  @property() public selector!: PlasmaColorSelector;

  @property() public value?: string;

  @property() public label?: string;

  protected render() {
    return html`
      <plasma-color-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value}
        @value-changed=${this._valueChanged}
      ></plasma-color-picker>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    fireEvent(this, "value-changed", { value: ev.detail.value || undefined });
  }
}
