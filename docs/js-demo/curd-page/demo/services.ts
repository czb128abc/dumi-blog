import type { Bean, ResultBean } from 'pro-crud-page/types/interface';
import { request, utils } from 'pro-crud-page';
const { post, get } = request;
const { asyncDelay } = utils;

const data = {
  data: [
    {
      key: 101,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      owner: '曲丽丽',
      desc: 'tttttttttttttt',
      callNo: 135,
      status: '0',
      updatedAt: '2021-10-04T06:28:23.360Z',
      createdAt: '2021-10-04T06:28:23.360Z',
      progress: 29,
    },
    {
      key: 100,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      owner: '曲丽丽',
      desc: '1111111',
      callNo: 133,
      status: '1',
      updatedAt: '2021-10-04T06:28:13.423Z',
      createdAt: '2021-10-04T06:28:13.423Z',
      progress: 68,
    },
    {
      key: 99,
      disabled: false,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      name: 'TradeCode 99',
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: 397,
      status: '3',
      updatedAt: '2021-10-02T19:43:05.068Z',
      createdAt: '2021-10-02T19:43:05.068Z',
      progress: 52,
    },
    {
      key: 98,
      disabled: false,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      name: 'TradeCode 98',
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: 304,
      status: '1',
      updatedAt: '2021-10-02T19:43:05.068Z',
      createdAt: '2021-10-02T19:43:05.068Z',
      progress: 29,
    },
    {
      key: 97,
      disabled: false,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      name: 'TradeCode 97',
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: 623,
      status: '0',
      updatedAt: '2021-10-02T19:43:05.068Z',
      createdAt: '2021-10-02T19:43:05.068Z',
      progress: 43,
    },
    {
      key: 96,
      disabled: true,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      name: 'TradeCode 96',
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: 276,
      status: '1',
      updatedAt: '2021-10-02T19:43:05.068Z',
      createdAt: '2021-10-02T19:43:05.068Z',
      progress: 14,
    },
    {
      key: 95,
      disabled: false,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      name: 'TradeCode 95',
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: 280,
      status: '1',
      updatedAt: '2021-10-02T19:43:05.068Z',
      createdAt: '2021-10-02T19:43:05.068Z',
      progress: 11,
    },
    {
      key: 94,
      disabled: false,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      name: 'TradeCode 94',
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: 447,
      status: '1',
      updatedAt: '2021-10-02T19:43:05.068Z',
      createdAt: '2021-10-02T19:43:05.068Z',
      progress: 52,
    },
    {
      key: 93,
      disabled: false,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      name: 'TradeCode 93',
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: 812,
      status: '3',
      updatedAt: '2021-10-02T19:43:05.068Z',
      createdAt: '2021-10-02T19:43:05.068Z',
      progress: 94,
    },
    {
      key: 92,
      disabled: false,
      href: 'https://ant.design',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      name: 'TradeCode 92',
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: 227,
      status: '1',
      updatedAt: '2021-10-02T19:43:05.068Z',
      createdAt: '2021-10-02T19:43:05.068Z',
      progress: 4,
    },
  ],
  total: 102,
  success: true,
  pageSize: 10,
  current: 1,
};

function getResult() {
  const result: ResultBean<any> = {
    success: true,
    data: {
      data: data.data,
    },
    code: 200,
    message: '0k',
  };
  return result;
}

/**
  --------------------------------模板生成  start--------------------------------
* */

/** 新增 */
export async function add(params: Bean) {
  await asyncDelay(100);
  return getResult();
}

/** 修改 */
export async function modify(params: Bean) {
  await asyncDelay(100);
  return getResult();
}

/** 删除 */
export async function remove({ id }: Bean) {
  await asyncDelay(100);
  return getResult();
}

/** 查询单个 */
export async function queryDetail({ id }: Bean) {
  await asyncDelay(100);
  return getResult();
}

/** 查询分页 */
export async function queryListPage(params: Bean) {
  await asyncDelay(100);
  const result: ResultBean<any> = {
    success: true,
    data: {
      data: data.data,
    },
    code: 200,
    message: '0k',
  };
  return result;
}

/** 查询树 */
export async function queryTreeList(params: Bean) {
  await asyncDelay(100);
  return getResult();
}

/**
  --------------------------------模板生成  end--------------------------------
* */
