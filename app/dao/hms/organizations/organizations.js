/**
 * Created by G on 2016/6/17 0017.
 */

export default {


    findOne: async function (data) {
        'use strict';
        return D.model('organizations').findOne(data).toPromise();
    },

    
    findByQuery: async function (query, paginates, orderby) {
        'use strict';
        return D.model('organizations').find(query).paginate(paginates).sort(orderby).toPromise();
    },

    find: async function(query){
        'use strict';
        return D.model('organizations').find(query).toPromise();
    }
    
}