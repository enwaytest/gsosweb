import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';

export default [
  {
    url: '/api/get-purchase-list',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|1-100': [
            {
              index: /S20201228115950[0-9][0-9][0-9]/,
              pdName: 'Macbook',
              pdNum: 'p_tmp_60a637cd0d',
              'purchaseNum|1-100': 100,
              adminName: '财务部111',
              updateTime: '2020-05-20@date("HH:mm:ss")',
              pdType: '电子产品',
            },
            {
              index: /S20201228115950[0-9][0-9][0-9]/,
              pdName: 'Macbook',
              pdNum: 'p_tmp_60a637cd0d',
              'purchaseNum|1-100': 100,
              adminName: '财务部',
              updateTime: '2020-05-20@date("HH:mm:ss")',
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/get-list',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|1-100': [
            {
              'index|+1': 1,
              'status|1': '@natural(0, 4)',
              no: 'BH00@natural(01, 100)',
              name: '@city()办公用品采购项目',
              'paymentType|1': '@natural(0, 1)',
              'contractType|1': '@natural(0, 2)',
              updateTime: '2020-05-30 @date("HH:mm:ss")',
              amount: '@natural(10, 500),000,000',
              adminName: '@cname()',
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/detail-basic',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          name: 'td_20023747',
          loginType: 'Web',
          currentRole: 'Admin',
          rightsList: '通用权限',
          userStatus: '启用',
          language: '简体中文',
          timeZone: '(GMT+08:00)中国时区—北京（Asia/Beijing）',
        }),
      },
    }),
  },
  {
    url: '/api/get-card-list',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|5': [
            {
              'index|+1': 1,
              isSetup: '@boolean',
              'type|1': '@natural(1,5)',
              'banner|1': [
                'https://tdesign.gtimg.com/starter/face-recognition.jpg',
              ],
              'name|1': ['用户A', '用户B', '用户C', '用户D', '用户E'],
              'description|1': [
                '联系电话09011111111',
                '联系电话09022222222',
                '联系电话09033333333',
                '联系电话09044444444',
                '联系电话09055555555',
              ],
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/get-project-list',
    method: 'get',
    response: () => ({
      code: 0,
      data: {
        ...Mock.mock({
          'list|1-50': [
            {
              'index|+1': 1,
              adminPhone: '+86 13587609955',
              updateTime: '2020-05-30 @date("HH:mm:ss")',
              'adminName|1': ['顾娟	', '常刚', '郑洋'],
              'name|1': [
                '沧州市办公用品采购项目',
                '红河哈尼族彝族自治州办公用品采购项目	',
                '铜川市办公用品采购项目',
                '陇南市办公用品采购项目	',
                '六安市办公用品采购项目	 ',
              ],
            },
          ],
        }),
      },
    }),
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/get-menu-list',
    method: 'get',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        ...Mock.mock({
          list: [
            {
              path: '/list',
              name: 'list',
              component: 'LAYOUT',
              redirect: '/list/base',
              meta: {
                title: '审批业务',
                icon: 'view-list',
              },
              children: [
                {
                  path: 'card',
                  name: 'ListCard',
                  component: '/list/card/index',
                  meta: {
                    title: '用户认证',
                  },
                },
                {
                  path: 'base',
                  name: 'ListBase',
                  component: '/list/base/index',
                  meta: {
                    title: '销售报备',
                  },
                },
              ],
            },
            // {
            //   path: '/form',
            //   name: 'form',
            //   component: 'LAYOUT',
            //   redirect: '/form/base',
            //   meta: {
            //     title: '表单页',
            //     icon: 'edit-1',
            //   },
            //   children: [
            //     {
            //       path: 'base',
            //       name: 'FormBase',
            //       component: '/form/base/index',
            //       meta: {
            //         title: '基础表单页',
            //       },
            //     },
            //     {
            //       path: 'step',
            //       name: 'FormStep',
            //       component: '/form/step/index',
            //       meta: {
            //         title: '分步表单页',
            //       },
            //     },
            //   ],
            // },
            {
              path: '/detail',
              name: 'detail',
              component: 'LAYOUT',
              redirect: '/detail/base',
              meta: {
                title: '售后管理',
                icon: 'layers',
              },
              children: [
                {
                  path: 'deploy',
                  name: 'DetailDeploy',
                  component: '/detail/deploy/index',
                  meta: {
                    title: '售后管理',
                  },
                },
              ],
            },
          ],
        }),
      },
    },
  },
] as MockMethod[];
