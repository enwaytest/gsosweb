export default {
  isRequestProxy: true,
  development: {
    // 开发环境接口请求
    host: 'http://test.sehub.jp',
    // 开发环境 cdn 路径
    cdn: '',
  },
  test: {
    // 测试环境接口地址
    host: 'http://test.sehub.jp',
    // 测试环境 cdn 路径
    cdn: '',
  },
  release: {
    // 正式环境接口地址
    host: 'http://test.sehub.jp',
    // 正式环境 cdn 路径
    cdn: '',
  },
  site: {
    // TDesign部署特殊需要 与release功能一致
    host: 'http://test.sehub.jp',
    // 正式环境 cdn 路径
    cdn: '',
  },
};
