import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fireEvent, HomeAssistant } from "../../../ha";
import "../../../shared/editor/info-picker";
import { Info } from "../../info";

export type PlasmaInfoSelector = {
  plasma_info: {
    infos?: Info[];
  };
};

@customElement("ha-selector-plasma_info")
export class HaPlasmaInfoSelector extends LitElement {
  @property() public hass!: HomeAssistant;

  @property() public selector!: PlasmaInfoSelector;

  @property() public value?: string;

  @property() public label?: string;

  protected render() {
    return html`
      <plasma-info-picker
        .hass=${this.hass}
        .infos=${this.selector.plasma_info.infos}
        .label=${this.label}
        .value=${this.value}
        @value-changed=${this._valueChanged}
      ></plasma-info-picker>
    `;
  }

  private _valueChanged(ev: CustomEvent) {
    fireEvent(this, "value-changed", { value: ev.detail.value || undefined });
  }
}
