import type { Bean } from 'pro-crud-page/types/interface';
import { request } from 'pro-crud-page';
const { post, get } = request;
/**
  --------------------------------模板生成  start--------------------------------
* */
const prefix = 'http://localhost:9999';

/** 新增 */
export function add(params: Bean) {
  return post(prefix + '/api/cmmSite/saveCmmSite', params);
}

/** 修改 */
export function modify(params: Bean) {
  return post(prefix + '/api/cmmSite/saveCmmSite', params);
}

/** 删除 */
export function remove({ id }: Bean) {
  return get(
    prefix + '/api/cmmSite/removeCmmSite',
    { id },
    { method: 'DELETE' },
  );
}

/** 查询单个 */
export function queryDetail({ id }: Bean) {
  return get(prefix + '/api/cmmSite/detailCmmSite', { id });
}

/** 查询分页 */
export async function queryListPage(params: Bean) {
  const result = await get(prefix + '/api/cmmSite/pageCmmSite', params, {
    clearEmptyFields: true,
  });
  console.log(
    '🚀 ~ file: services.ts ~ line 31 ~ queryListPage ~ params result',
    params,
    result,
  );
  return result;
}

/** 查询树 */
export function queryTreeList(params: Bean) {
  return get(prefix + '/api/cmmSite/treeCmmSite', params, {
    clearEmptyFields: true,
  });
}

/**
  --------------------------------模板生成  end--------------------------------
* */
