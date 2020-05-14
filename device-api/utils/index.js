exports.execShell = cmd => {
  const { exec } = require('child_process')
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      // if (error) {
      //   console.warn(error)
      // }
      resolve()
    })
  })
}

exports.isDeviceExists = deviceId => {
  const fs = require('fs')
  return fs.existsSync(`../deploy/.sawtooth/keys/${deviceId}.pub`)
}
