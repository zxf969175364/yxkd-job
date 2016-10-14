/**
 * Created by huangjun on 16/6/14.
 * 测评卡操作
 */

export default {
    /**
     * 根据条件查询
     * @param query
     * @param paginates
     * @param orderby
     */
    findByQuery: async function (query, paginates, orderby) {
        'use strict';
        return D.model('card').find(query).paginate(paginates).sort(orderby).toPromise();

    }
}