# A utility for generating device-specific `svg` & `png` banners for the Evolution X [Updates channel](https://t.me/evolutionxupdates).
![example](https://raw.githubusercontent.com/Evolution-X-Devices/official_banners/tiramisu/readme_assets/example.png)

## Dependencies
- [Node.js](https://nodejs.org/)
- [Montserrat font](https://fonts.google.com/specimen/Montserrat)

## Configuring `devices.json`
This file is used to generate the banners

- `devices.json` structure:
```
{
  "devices": [
    {
      "codename": "raphael",
      "device_name": "Mi 9T Pro / Redmi K20 Pro",
      "device_name_line2": "",
      "device_type": 0,
      "maintainer": "Joey Huab (Stallix)"
    }
  ]
}
```

- `device_type` list to choose from:
![device_types](https://raw.githubusercontent.com/Evolution-X-Devices/official_banners/tiramisu/readme_assets/device_types.png)

## Generate banners
![Example output](https://raw.githubusercontent.com/Evolution-X-Devices/official_banners/tiramisu/readme_assets/example_output.gif)
```
npm install
npm run start
```
- The utility will generate the SVG banners and list all the codenames. Upon completion, a prompt will appear asking if you want to export the SVG banners to PNG.

- `.svg` banners are exported to `./svg/codename.svg`
- `.png` banners are exported to `./png/codename.png ` & `./png/banners.zip `
