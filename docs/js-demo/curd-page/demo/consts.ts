import type { ColumnsMap } from 'pro-crud-page/types/interface';

export const namespace = 'basicDataMgtCmmSite';

export const initialValue = '';

/**
 * ["id","name","address","addressDetail","remark","fkOrgId","latitude","longitude","prov","city","district","isDelete","createTime","modifyTime","deleteTime"]
 */
export const columnsMap: ColumnsMap = {
  /** 主键uuid */
  id: {
    title: '主键uuid',
    dataIndex: 'id',
    valueType: 'text',
  },
  /** 站点名称 */
  name: {
    title: '站点名称',
    dataIndex: 'name',
    valueType: 'text',
  },
  /** 地址 */
  address: {
    title: '地址',
    dataIndex: 'address',
    valueType: 'text',
  },
  /** 详细地址 */
  addressDetail: {
    title: '详细地址',
    dataIndex: 'addressDetail',
    valueType: 'text',
  },
  /** 备注 */
  remark: {
    title: '备注',
    dataIndex: 'remark',
    valueType: 'text',
  },
  /** 组织外键id */
  fkOrgId: {
    title: '组织外键id',
    dataIndex: 'fkOrgId',
    valueType: 'text',
  },
  /** 纬度 */
  latitude: {
    title: '纬度',
    dataIndex: 'latitude',
    valueType: 'text',
  },
  /** 经度 */
  longitude: {
    title: '经度',
    dataIndex: 'longitude',
    valueType: 'text',
  },
  /** 省份名称 */
  prov: {
    title: '省份名称',
    dataIndex: 'prov',
    valueType: 'text',
  },
  /** 市名称 */
  city: {
    title: '市名称',
    dataIndex: 'city',
    valueType: 'text',
  },
  /** 区名称 */
  district: {
    title: '区名称',
    dataIndex: 'district',
    valueType: 'text',
  },
  /** 是否删除:1-是，0-否 */
  isDelete: {
    title: '是否删除', // 添加枚举 fieldAttr.props: {allowClear: true,children: enumToOptions(enumIsDelete)},
    dataIndex: 'isDelete',
    valueType: 'text',
  },
  /** 创建时间 */
  createTime: {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'text',
  },
  /** 修改时间 */
  modifyTime: {
    title: '修改时间',
    dataIndex: 'modifyTime',
    valueType: 'text',
  },
  /** 删除时间 */
  deleteTime: {
    title: '删除时间',
    dataIndex: 'deleteTime',
    valueType: 'text',
  },
};
