"use strict";

var cronJob = require('cron').CronJob;
var moment = require('moment');
import cardService from '../service/hms/assess/card'
import smsService from '../service/hms/sms'
import orgService from '../service/hms/organizations/organization'

export default function () {


    let job = new cronJob({
        cronTime: '00 00 09 * * *',
        onTick: function () {

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
                        data.cardId = data.id;
                        orgService.findOne({ id: data.centerId }).then(org => {
                            console.log(data.mobile);
                            console.log(org.name);
                            console.log(moment(data.checkDate).format('YYYY-MM-DD HH:mm:ss'));
                            smsService.sendSMS(data, data.mobile, `【智康云】${org.name}提醒您：您已预约${moment(data.checkDate).format('YYYY-MM-DD')}在${data.checkArea}体检，请明天及时前往。`)
                        })

                    }
                });
        },
        start: false,
        timeZone: 'Asia/Shanghai'
    });
    job.start();

}