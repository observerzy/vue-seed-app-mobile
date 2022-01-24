const { merge } = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')
module.exports = {
    publicPath: "./",
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 9000,
    },
  chainWebpack: config => {
    config.module
            .rule('ts')
            .use('ts-loader')
            .tap((options) => {
                options = merge(options, {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'vant',
                                libraryDirectory: 'es',
                                style: true,
                            }),
                        ],
                        compilerOptions: {
                            module: 'es2015',
                        },
                    }),
                })
                // 返回修改后的选项配置。
                return options
            })
  }
}
