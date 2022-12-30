import type { ColumnsMap } from 'pro-crud-page/types/interface';

export const namespace = 'demoTest';

export const initialValue = '';

export const columnsMap: ColumnsMap = {
  /** 主键uuid */
  key: {
    title: '主键uuid',
    dataIndex: 'key',
    valueType: 'text',
  },
  /** owner */
  owner: {
    title: '拥有者',
    dataIndex: 'owner',
    valueType: 'text',
  },
  /** desc */
  desc: {
    title: '描述',
    dataIndex: 'desc',
    valueType: 'text',
  },
  /** updatedAt */
  updatedAt: {
    title: '更新时间',
    dataIndex: 'updatedAt',
    valueType: 'text',
  },
  /** createdAt */
  createdAt: {
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'text',
  },
};
