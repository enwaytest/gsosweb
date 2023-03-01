export default {
  isRequestProxy: true,
  development: {
    // 开发环境接口请求
    host: 'test.sehub.jp:3002',
    // 开发环境 cdn 路径
    cdn: '',
  },
  test: {
    // 测试环境接口地址
    host: 'test.sehub.jp:3002',
    // 测试环境 cdn 路径
    cdn: '',
  },
  release: {
    // 正式环境接口地址
    host: 'test.sehub.jp:3002',
    // 正式环境 cdn 路径
    cdn: '',
  },
  site: {
    // TDesign部署特殊需要 与release功能一致
    host: 'test.sehub.jp:3002',
    // 正式环境 cdn 路径
    cdn: '',
  },
};
