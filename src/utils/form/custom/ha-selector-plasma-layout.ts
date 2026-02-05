import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fireEvent, HomeAssistant } from "../../../ha";
import "../../../shared/editor/layout-picker";

export type PlasmaLayoutSelector = {
  plasma_layout: {};
};

@customElement("ha-selector-plasma_layout")
export class HaPlasmaLayoutSelector extends LitElement {
  @property() public hass!: HomeAssistant;

  @property() public selector!: PlasmaLayoutSelector;

  @property() public value?: string;

  @property() public label?: string;

  protected render() {
    return html`
      <plasma-layout-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value}
        @value-changed=${this._valueChanged}
      ></plasma-layout-picker>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    fireEvent(this, "value-changed", { value: ev.detail.value || undefined });
  }
}
