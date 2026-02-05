import { css } from "lit";

export const themeVariables = css`
  --spacing: var(--plasma-spacing, 10px);

  /* Title */
  --title-padding: var(--plasma-title-padding, 24px 12px 8px);
  --title-spacing: var(--plasma-title-spacing, 8px);
  --title-font-size: var(--plasma-title-font-size, 24px);
  --title-font-weight: var(--plasma-title-font-weight, normal);
  --title-line-height: var(--plasma-title-line-height, 32px);
  --title-color: var(--plasma-title-color, var(--primary-text-color));
  --title-letter-spacing: var(--plasma-title-letter-spacing, -0.288px);
  --subtitle-font-size: var(--plasma-subtitle-font-size, 16px);
  --subtitle-font-weight: var(--plasma-subtitle-font-weight, normal);
  --subtitle-line-height: var(--plasma-subtitle-line-height, 24px);
  --subtitle-color: var(--plasma-subtitle-color, var(--secondary-text-color));
  --subtitle-letter-spacing: var(--plasma-subtitle-letter-spacing, 0px);

  /* Card */
  --card-primary-font-size: var(--plasma-card-primary-font-size, 14px);
  --card-secondary-font-size: var(--plasma-card-secondary-font-size, 12px);
  --card-primary-font-weight: var(--plasma-card-primary-font-weight, 500);
  --card-secondary-font-weight: var(--plasma-card-secondary-font-weight, 400);
  --card-primary-line-height: var(--plasma-card-primary-line-height, 20px);
  --card-secondary-line-height: var(--plasma-card-secondary-line-height, 16px);
  --card-primary-color: var(
    --plasma-card-primary-color,
    var(--primary-text-color)
  );
  --card-secondary-color: var(
    --plasma-card-secondary-color,
    var(--primary-text-color)
  );
  --card-primary-letter-spacing: var(--plasma-card-primary-letter-spacing, 0.1px);
  --card-secondary-letter-spacing: var(
    --plasma-card-secondary-letter-spacing,
    0.4px
  );

  /* Chips */
  --chip-spacing: var(--plasma-chip-spacing, 8px);
  --chip-padding: var(--plasma-chip-padding, 0 0.25em);
  --chip-height: var(--plasma-chip-height, 36px);
  --chip-border-radius: var(--plasma-chip-border-radius, 19px);
  --chip-border-width: var(
    --plasma-chip-border-width,
    var(--ha-card-border-width, 1px)
  );
  --chip-border-color: var(
    --plasma-chip-border-color,
    var(--ha-card-border-color, var(--divider-color))
  );
  --chip-box-shadow: var(
    --plasma-chip-box-shadow,
    var(--ha-card-box-shadow, "none")
  );
  --chip-font-size: var(--plasma-chip-font-size, 0.3em);
  --chip-font-weight: var(--plasma-chip-font-weight, bold);
  --chip-icon-size: var(--plasma-chip-icon-size, 0.5em);
  --chip-avatar-padding: var(--plasma-chip-avatar-padding, 0.1em);
  --chip-avatar-border-radius: var(--plasma-chip-avatar-border-radius, 50%);
  --chip-background: var(
    --plasma-chip-background,
    var(--ha-card-background, var(--card-background-color, white))
  );
  /* Controls */
  --control-border-radius: var(--plasma-control-border-radius, 12px);
  --control-height: var(--plasma-control-height, 42px);
  --control-button-ratio: var(--plasma-control-button-ratio, 1);
  --control-icon-size: var(--plasma-control-icon-size, 0.5em);
  --control-spacing: var(--plasma-control-spacing, 12px);

  /* Slider */
  --slider-threshold: var(--plasma-slider-threshold);

  /* Input Number */
  --input-number-debounce: var(--plasma-input-number-debounce);

  /* Layout */
  --layout-align: var(--plasma-layout-align, center);

  /* Badge */
  --badge-size: var(--plasma-badge-size, 16px);
  --badge-icon-size: var(--plasma-badge-icon-size, 0.75em);
  --badge-border-radius: var(--plasma-badge-border-radius, 50%);

  /* Icon */
  --icon-border-radius: var(--plasma-icon-border-radius, 50%);
  --icon-size: var(--plasma-icon-size, 36px);
  --icon-symbol-size: var(--plasma-icon-symbol-size, 0.667em);
`;

export const themeColorCss = css`
  /* RGB */
  /* Standard colors */
  --rgb-red: var(--plasma-rgb-red, var(--default-red));
  --rgb-pink: var(--plasma-rgb-pink, var(--default-pink));
  --rgb-purple: var(--plasma-rgb-purple, var(--default-purple));
  --rgb-deep-purple: var(--plasma-rgb-deep-purple, var(--default-deep-purple));
  --rgb-indigo: var(--plasma-rgb-indigo, var(--default-indigo));
  --rgb-blue: var(--plasma-rgb-blue, var(--default-blue));
  --rgb-light-blue: var(--plasma-rgb-light-blue, var(--default-light-blue));
  --rgb-cyan: var(--plasma-rgb-cyan, var(--default-cyan));
  --rgb-teal: var(--plasma-rgb-teal, var(--default-teal));
  --rgb-green: var(--plasma-rgb-green, var(--default-green));
  --rgb-light-green: var(--plasma-rgb-light-green, var(--default-light-green));
  --rgb-lime: var(--plasma-rgb-lime, var(--default-lime));
  --rgb-yellow: var(--plasma-rgb-yellow, var(--default-yellow));
  --rgb-amber: var(--plasma-rgb-amber, var(--default-amber));
  --rgb-orange: var(--plasma-rgb-orange, var(--default-orange));
  --rgb-deep-orange: var(--plasma-rgb-deep-orange, var(--default-deep-orange));
  --rgb-brown: var(--plasma-rgb-brown, var(--default-brown));
  --rgb-light-grey: var(--plasma-rgb-light-grey, var(--default-light-grey));
  --rgb-grey: var(--plasma-rgb-grey, var(--default-grey));
  --rgb-dark-grey: var(--plasma-rgb-dark-grey, var(--default-dark-grey));
  --rgb-blue-grey: var(--plasma-rgb-blue-grey, var(--default-blue-grey));
  --rgb-black: var(--plasma-rgb-black, var(--default-black));
  --rgb-white: var(--plasma-rgb-white, var(--default-white));
  --rgb-disabled: var(--plasma-rgb-disabled, var(--default-disabled));

  /* Action colors */
  --rgb-info: var(--plasma-rgb-info, var(--rgb-blue));
  --rgb-success: var(--plasma-rgb-success, var(--rgb-green));
  --rgb-warning: var(--plasma-rgb-warning, var(--rgb-orange));
  --rgb-danger: var(--plasma-rgb-danger, var(--rgb-red));

  /* State colors */
  --rgb-state-vacuum: var(--plasma-rgb-state-vacuum, var(--rgb-teal));
  --rgb-state-fan: var(--plasma-rgb-state-fan, var(--rgb-green));
  --rgb-state-light: var(--plasma-rgb-state-light, var(--rgb-orange));
  --rgb-state-entity: var(--plasma-rgb-state-entity, var(--rgb-blue));
  --rgb-state-media-player: var(
    --plasma-rgb-state-media-player,
    var(--rgb-indigo)
  );
  --rgb-state-lock: var(--plasma-rgb-state-lock, var(--rgb-blue));
  --rgb-state-number: var(--plasma-rgb-state-number, var(--rgb-blue));
  --rgb-state-humidifier: var(--plasma-rgb-state-humidifier, var(--rgb-purple));

  /* State alarm colors */
  --rgb-state-alarm-disarmed: var(
    --plasma-rgb-state-alarm-disarmed,
    var(--rgb-info)
  );
  --rgb-state-alarm-armed: var(
    --plasma-rgb-state-alarm-armed,
    var(--rgb-success)
  );
  --rgb-state-alarm-triggered: var(
    --plasma-rgb-state-alarm-triggered,
    var(--rgb-danger)
  );

  /* State person colors */
  --rgb-state-person-home: var(
    --plasma-rgb-state-person-home,
    var(--rgb-success)
  );
  --rgb-state-person-not-home: var(
    --plasma-rgb-state-person-not-home,
    var(--rgb-danger)
  );
  --rgb-state-person-zone: var(--plasma-rgb-state-person-zone, var(--rgb-info));
  --rgb-state-person-unknown: var(
    --plasma-rgb-state-person-unknown,
    var(--rgb-grey)
  );

  /* State update colors */
  --rgb-state-update-on: var(--plasma-rgb-state-update-on, var(--rgb-orange));
  --rgb-state-update-off: var(--plasma-rgb-update-off, var(--rgb-green));
  --rgb-state-update-installing: var(
    --plasma-rgb-update-installing,
    var(--rgb-blue)
  );

  /* State lock colors */
  --rgb-state-lock-locked: var(--plasma-rgb-state-lock-locked, var(--rgb-green));
  --rgb-state-lock-unlocked: var(
    --plasma-rgb-state-lock-unlocked,
    var(--rgb-red)
  );
  --rgb-state-lock-pending: var(
    --plasma-rgb-state-lock-pending,
    var(--rgb-orange)
  );

  /* State cover colors */
  --rgb-state-cover-open: var(--plasma-rgb-state-cover-open, var(--rgb-blue));
  --rgb-state-cover-closed: var(
    --plasma-rgb-state-cover-closed,
    var(--rgb-disabled)
  );

  /* State climate colors */
  --rgb-state-climate-auto: var(
    --plasma-rgb-state-climate-auto,
    var(--rgb-green)
  );
  --rgb-state-climate-cool: var(--plasma-rgb-state-climate-cool, var(--rgb-blue));
  --rgb-state-climate-dry: var(--plasma-rgb-state-climate-dry, var(--rgb-orange));
  --rgb-state-climate-fan-only: var(
    --plasma-rgb-state-climate-fan-only,
    var(--rgb-teal)
  );
  --rgb-state-climate-heat: var(
    --plasma-rgb-state-climate-heat,
    var(--rgb-deep-orange)
  );
  --rgb-state-climate-heat-cool: var(
    --plasma-rgb-state-climate-heat-cool,
    var(--rgb-green)
  );
  --rgb-state-climate-idle: var(
    --plasma-rgb-state-climate-idle,
    var(--rgb-disabled)
  );
  --rgb-state-climate-off: var(
    --plasma-rgb-state-climate-off,
    var(--rgb-disabled)
  );
`;
