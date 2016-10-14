/**
 * Created by G on 2016/6/17 0017.
 */
// let orgDao = G.dao.load('organization');

import orgDao from '../../../dao/hms/organizations/organizations'

export default {


    findOne: async function (query) {
        "use strict";
        // query['isDelete'] = query['isDelete'] || false;
        return orgDao.findOne(query)
    },


    /**
     * 根据条件查询
     * @param query
     * @param paginates
     * @param orderby
     */
    findByQuery: async function (query, paginates, orderby) {
        "use strict";
        query['isDelete'] = query['isDelete'] || false;
        return orgDao.findByQuery(query, paginates, orderby)
    },

    find: async function (query) {
        'use strict';
        return orgDao.find(query);
    }


};