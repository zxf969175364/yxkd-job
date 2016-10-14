/**
 * Created by ZXF on 2016/8/12.
 */
import base from './base';
var cronJob = require('cron').CronJob;
var moment = require('moment');
import cardService from '../../../service/hms/assess/card'

export default class extends base {

    async get() {
        let data = this.req.body;
        try {

            let query = {
                checkDate: {
                    '>=': moment().add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
                    '<=': moment().add(1, 'day').endOf('day').format('YYYY-MM-DD HH:mm:ss')
                },
                isDelete: false
            };

            cardService.findByQuery(query, {}, {})
                .then(result => {
                    console.log(result.length);
                    for (let data of result) {
                        console.log(data.id);
                    }
                });

        } catch (err) {

        }
        this.json();
    }

}
