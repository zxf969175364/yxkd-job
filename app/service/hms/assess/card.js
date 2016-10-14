/**
 * Created by huangjun on 16/6/14.
 *
 * 测评卡service
 */


import cardDao from '../../../dao/hms/assess/card'



export default {

    /**
     * 根据条件查询
     * @param query
     * @param paginates
     * @param orderby
     */
    findByQuery: async function (query, paginates, orderby) {
        "use strict";
        query['isDelete'] = query['isDelete'] || false;
        let cards = await cardDao.findByQuery(query, paginates, orderby);

        cards = _.forEach(cards, function (data) {
            data.status2 = '未使用';
            if (data.status === 'UNUSED') {
                data.status2 = '未使用';
            } else if (data.status === 'UNFINISHED') {
                data.status2 = '未完成';
            } else if (data.status === 'FINISHED' && data.status === false) {
                data.status2 = '未下载';
            } else {
                data.status2 = '已下载';
            }
        });

        return cards;
    },
};

