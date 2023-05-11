const { exec } = require('child_process')

const data = require('./devices.json')
const json = data.devices

json.map((e, index) => {
  exec(
    `svgexport ./files/${index + 1}_${e.codename}.svg ./exported_png/${
      index + 1
    }_${e.codename}.png`,
    (err, stdout, stderr) => {
      if (err) {
        console.log('png error')
        return
      }
      console.log('png exported')
    }
  )
})
