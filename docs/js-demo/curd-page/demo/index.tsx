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
  primaryKey: 'key',
  filterKeys: ['owner', 'desc'],
  detailFormKeys: ['owner', 'desc', 'updatedAt', 'createdAt'],
  columnsKeys: ['key', 'owner', 'desc', 'updatedAt', 'createdAt'],
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
