const copy = require('rollup-plugin-copy')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      copy({
        targets: [{ src: 'src/abis/*', dest: 'dist/abis' }]
      })
    )
    return config
  }
}
