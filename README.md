# Plasma Template Card

[![hacs][hacs-badge]][hacs-url]
[![release][release-badge]][release-url]
![downloads][downloads-badge]
![build][build-badge]
> Based on the original [Mushroom](https://github.com/piitaya/lovelace-mushroom) by [piitaya](https://github.com/piitaya).

<img width="853" height="257" alt="image" src="https://github.com/user-attachments/assets/68941aa7-60b3-4f8a-8ed4-9de690b30afd" />


## What is Plasma Template Card ?

Template Card is a smaller version of 🍄 Mushroom with only the Template Card and Template Badge.

### Features

- 🛠 Editor for **all cards** and and **all options** (no need to edit `yaml`)
- 😍 Icon picker
- 🖌 Color picker
- 🚀 0 dependencies : no need to install another card.
- 🌈 Based on Material UI colors
- 🌓 Light and dark theme support
- 🎨 Optional theme customization

The goal of Template Card is to provide a custom template card and badge for ultimate customization.

## Installation

<!--### HACS (Easy Mode)

Plasma Template Card is available in [HACS][hacs] (Home Assistant Community Store).

Use this link to directly go to the repository in HACS

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=plasmapod&repository=plasma-template-card)-->

### HACS (Manual Mode)
1. Install HACS if you don't have it already
2. Open HACS in Home Assistant
3. Click the 3 dots in the top right corner.
4. Click "Custom Repositories".
5. For Repository type ``/PlasmaPod/plasma-template-card``
6. For Type select "Dashboard
7. Click "Add" then close the window
8. Search for "Plasma Template Card"
9. Click the download button. ⬇️

## Usage

All the Plasma Template cards can be configured using Dashboard UI editor.

1. In Dashboard UI, click 3 dots in top right corner.
2. Click _Edit Dashboard_.
3. Click Plus button to add a new card.
4. Find one of the _Custom: Plasma_ card in the list.

### Cards

Different cards are available for differents entities :

- 🕳 [Empty card](docs/cards/empty.md)
- 🛠 [Template card](docs/cards/template.md)

### Badges

A [template badge](docs/badges/template.md) is available if you're using at least Home Assistant 2024.8.

<!-- Badges -->

[hacs-url]: https://github.com/hacs/integration
[hacs-badge]: https://img.shields.io/badge/hacs-default-orange.svg?style=flat-square
[release-badge]: https://img.shields.io/github/v/release/plasmapod/plasma-template-card?style=flat-square
[downloads-badge]: https://img.shields.io/github/downloads/plasmapod/plasma-template-card/total?style=flat-square
[build-badge]: https://img.shields.io/github/actions/workflow/status/plasmapod/plasma-template-card/build.yml?branch=main&style=flat-square

<!-- References -->

[hacs]: https://hacs.xyz
[release-url]: https://github.com/plasmapod/plasma-template-card/releases
