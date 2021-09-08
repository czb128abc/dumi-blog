import { calcCurdPageConfig, CrudPage } from 'pro-crud-page';

import { PageContainer } from '@ant-design/pro-layout';

import { columnsMap } from './consts';
import * as services from './services';

import type {
  CrudPageConfig,
  CrudPageProps,
  Dispatch,
  PartialCrudPageProps,
} from 'pro-crud-page/types/interface';

const crudPageConfig: Partial<CrudPageConfig> = {
  columnsMap,
  filterKeys: ['name', 'address', 'createTime', 'modifyTime', 'deleteTime'],
  detailFormKeys: ['name', 'address', 'addressDetail'],
  columnsKeys: [
    'id',
    'name',
    'address',
    'addressDetail',
    'remark',
    'fkOrgId',
    'latitude',
    'longitude',
    'prov',
    'city',
    'district',
    'isDelete',
    'createTime',
    'modifyTime',
    'deleteTime',
  ],
  services,
  // PageContainer: ({ children }) => <div>{children}</div>,
};

class Demo extends CrudPage.default {
  setCurdPageConfig() {
    this.crudPageConfig = calcCurdPageConfig(crudPageConfig);
  }

  // async queryPageList() {
  //   return await queryListPage({});
  // }
}

export default (props: PartialCrudPageProps) => {
  const Temp = Demo;
  const commonProps = {
    ...props,
  } as CrudPageProps;
  return <Temp {...commonProps} />;
};
