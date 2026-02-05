import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fireEvent, HomeAssistant } from "../../../ha";
import "../../../shared/editor/alignment-picker";

export type PlasmaAlignementSelector = {
  plasma_alignment: {};
};

@customElement("ha-selector-plasma_alignment")
export class HaPlasmaAlignmentSelector extends LitElement {
  @property() public hass!: HomeAssistant;

  @property() public selector!: PlasmaAlignementSelector;

  @property() public value?: string;

  @property() public label?: string;

  protected render() {
    return html`
      <plasma-alignment-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value}
        @value-changed=${this._valueChanged}
      ></plasma-alignment-picker>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    fireEvent(this, "value-changed", { value: ev.detail.value || undefined });
  }
}
