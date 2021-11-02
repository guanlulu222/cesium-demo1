module.exports = {
  configureWebpack: {
    output: {
      sourcePrefix: ' ' // 1 让webpack 正确处理多行字符串配置 amd参数
    },
    amd: {
      // 2
      toUrlUndefined: true // webpack在cesium中能友好的使用require
    }
  }
}
