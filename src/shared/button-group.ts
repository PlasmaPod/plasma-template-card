import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("plasma-button-group")
export class PlasmaButtonGroup extends LitElement {
  @property() public fill: boolean = false;

  @property() public rtl: boolean = false;

  protected render(): TemplateResult {
    return html`
      <div
        class=${classMap({
          container: true,
          fill: this.fill,
        })}
      >
        <slot></slot>
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        width: 100%;
      }
      .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
      .container ::slotted(*:not(:last-child)) {
        margin-right: var(--spacing);
      }
      :host([rtl]) .container ::slotted(*:not(:last-child)) {
        margin-right: initial;
        margin-left: var(--spacing);
      }
      .container > ::slotted(plasma-button) {
        width: 0;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: calc(var(--control-height) * var(--control-button-ratio));
      }
      .container > ::slotted(plasma-input-number) {
        width: 0;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: calc(
          var(--control-height) * var(--control-button-ratio) * 3
        );
      }
      .container.fill > ::slotted(plasma-button),
      .container.fill > ::slotted(plasma-input-number) {
        flex-grow: 1;
      }
    `;
  }
}
