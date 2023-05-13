### A utility for generating device-specific `svg` & `png` banners for the Evolution X [Updates channel](https://t.me/evolutionxupdates).

![example](https://raw.githubusercontent.com/Evolution-X-Devices/official_banners/tiramisu/example.png)

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
      "device_type": 0,
      "maintainer": "Joey Huab (Stallix)"
    }
  ]
}
```

- `device_type` list to choose from:
![device_types](https://raw.githubusercontent.com/Evolution-X-Devices/official_banners/tiramisu/device_types.png)

## Generate banners
```
npm install
```
```
npm run start
### After running the script, the utility will generate the SVG banners. Upon completion, a prompt will appear asking if you want to export the banners to PNG format.
```

- `.svg` files are exported to `./svg`
- `.png` files are exported to `./png`
