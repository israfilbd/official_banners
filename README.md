### A script for generating `svg` & `png` release banners for Evolution X Updates channel.

## Requirements
- Node js
- Montserrat font installed (https://fonts.google.com/specimen/Montserrat)

## Setting up `devices.json` file
This file is used to generate the benners

- The structre of `devices.json` file
```
{
  "devices": [
    {
      "codename": "codename",
      "device_name": "Device Name",
      "device_type": 1,     ---->See below all "device_type" numbers<---- 
      "maintainer": "Maintainer"
    }
  ]
}
```

## All `device_type` numbers 

![Github banner](https://github.com/Evolution-X-Devices/official_banners/assets/88089607/23f854e7-dd5e-4a38-b49d-7690bb4252d7)

## Run script
```
npm install
```
```
npm run start
```
## Output
- `.svg` files are exported to `./svg`
- `.png` files are exported to `./png`

## Preview 

![1_example](https://user-images.githubusercontent.com/88089607/204087920-b5fa91cf-16e7-4c74-abfc-860dd800757a.png)
