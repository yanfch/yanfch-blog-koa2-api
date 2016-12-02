import ejs from 'elastic.js';
import moment from 'moment';
import _ from 'lodash';
import logger from '../server/util/logs';
import Total from '../server/model/total';
import Record from '../server/model/record';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss,SSS';

/* eslint-disable no-underscore-dangle */

// search().then((data) => {
//   console.log(data.hits.hits[0]);
// }).catch((err) => {
//   console.error(err);
// });

// console.log(search());


// function a() {
//   return 'a';
// }

// function b() {
//   return 'b';
// }

// function c() {
//   return 'c';
// }

// const p = async () => {
//   const av = await search();
//   console.log(av);
//   // const bv = await b();
//   // console.log(bv);
//   // const cv = await c();
//   // console.log(cv);
//   return av;
// };

// p().then((v) => {
//   console.log(v);
// });

// (async () => {
//   await hevb.indices.totalIndexInit();
//   await hevb.indices.recordIndexInit();
// })();

// totalIndexInit();

// recordIndexInit();

// console.log(moment().format('YYYY-MM'));

// const total = {
//   openid: 'yanfch',
//   total: 100,
//   consume: 20,
//   sumtotal: 120,
//   is_bind: '1',
//   update_time: +moment(),
//   create_time: +moment()
// };

// const total = {
//   openid: 'yanfch',
//   operation: 3000,
//   operation_remark: '签到',
//   operation_description: '个人主页活动获得',
//   total: '20',
//   update_time: +moment()
// };

// hevb.index.saveTotal(total).then((data) => {
//   console.log(data);
// });

// const opts = {
//   index: 'hevb-total',
//   type: 'hevb'
// };
// const opts = {
//   index: 'hevb-record-2016-10',
//   type: 'hevb',
//   alias: 'hevb-alias'
// };

// const client = new Client(opts);

// client.save(total).then((val) => {
//   console.log(val);
// }).catch((err) => {
//   console.error(err);
// });

// const data = {
//   mappings: {
//     _id: {
//       index: 'not_analyzed',
//       path: 'id'
//     },
//     properties: {
//       id: {type: 'string', index: 'not_analyzed'},
//       openid: {type: 'string', index: 'not_analyzed'},
//       operation: {type: 'long'},
//       operation_remark: {type: 'string', index: 'not_analyzed'},
//       operation_description: {type: 'string', index: 'not_analyzed'},
//       total: {type: 'long'},
//       create_time: {type: 'date'},
//       extend1: {type: 'string', index: 'not_analyzed'},
//       extend2: {type: 'string', index: 'not_analyzed'},
//       extend3: {type: 'string', index: 'not_analyzed'},
//       extend4: {type: 'long'},
//       extend5: {type: 'long'},
//       extend6: {type: 'string'},
//       extend7: {type: 'string'},
//       extend8: {type: 'string'},
//       extend9: {type: 'string'},
//       extend10: {type: 'string'}
//     }
//   }
// };

// const data = {
//   mappings: {
//     _id: {
//       index: 'not_analyzed',
//       path: 'openid'
//     },
//     properties: {
//       openid: {type: 'string', index: 'not_analyzed'},
//       total: {type: 'long'},
//       consume: {type: 'long'},
//       sumtotal: {type: 'long'},
//       is_bind: {type: 'string', index: 'not_analyzed'},
//       update_time: {type: 'date'},
//       create_time: {type: 'date'},
//       extend1: {type: 'string'},
//       extend2: {type: 'string'},
//       extend3: {type: 'string', index: 'not_analyzed'},
//       extend4: {type: 'string', index: 'not_analyzed'},
//       extend5: {type: 'long'}
//     }
//   }
// };

// client.indices(data).then((val) => {
//   console.log(val);
// }).catch((err) => {
//   console.error(err);
// });

/* eslint-disable new-cap, no-underscore-dangle */
// const params1 = {
//   body: $.Request().query($.TermQuery('openid', 'yanfch'))
// };

// client.search(params).then((data) => {
//   console.log(data.hits.hits[0]._source);
// }).catch((err) => {
//   console.error(err);
// });

// const params = {
//   id: 'yanfch'
// };

// client.get(params).then((data) => {
//   console.log(data._source);
// }).catch((err) => {
//   console.error(err);
// });

// (async () => {
//   const [data, data1] = await Promise.all([client.get(params), client.search(params1)]);
//   console.log(data);
//   console.log(data1);
// })();

// ##############################

// const total = new Total();

// total.indices();

// const obj = {
//   openid: 'yanfch',
//   total: 100,
//   consume: 20,
//   sumtotal: 140,
//   is_bind: '1',
//   update_time: +moment()
// };

// const params = {
//   id: 'yanfch'
// };

// total.get(params).then((data) => {
//   console.log(data);
// });

// total.save(obj).then((data) => {
//   console.log(data);
// });

// ##############################

// let obj = {
//   openid: 'yanfch',
//   operation: 3000,
//   operation_remark: '签到',
//   operation_description: '个人主页活动获得',
//   total: '30',
//   create_time: +moment()
// };

// obj = _.merge(obj, { id: obj.openid.concat('-').concat(+moment()).concat('-').concat(obj.operation) });

// const record = new Record();

// record.save(obj).then((data) => {
//   console.log(data);
// });

// record.indices();

// ########

// const total = {
//   id: 'yanfch',
//   openid: 'yanfch',
//   total: 100,
//   consume: 20,
//   sumtotal: 140,
//   is_bind: '1',
//   update_time: +moment(),
//   create_time: +moment()
// };

// let record = {
//   openid: 'yanfch',
//   telephone: '18510993929',
//   nickname: 'YANFCH',
//   operation: 3000,
//   operation_remark: '签到15',
//   operation_description: '个人主页活动获得',
//   total: '20',
//   channel: '微信',
//   create_time: +moment()
// };

// record = _.merge(record, { id: record.openid.concat('-').concat(+moment()).concat('-').concat(record.operation) });
// record = _.merge(record, { id: 'yanfch-1477969305991-3000' });

// (async () => {
//   try {
//     Promise.all([new Total().indices(), new Record().indices()]);
//   } catch (err) {
//     console.error(err);
//   }
// })();

(async () => {
  try {
    // const to = new Total();
    // await to.indices();
    const re = new Record();
    await re.indices();
    for (let i = 0; i < 100; i += 1) {
      let record = {
        openid: 'yanfch',
        telephone: '18510993929',
        nickname: 'YANFCH',
        operation: i,
        operation_remark: '签到15',
        operation_description: '个人主页活动获得',
        total: '20',
        channel: '微信',
        create_time: moment().format(DATE_FORMAT)
      };
      record = _.merge(record, { id: record.openid.concat('-').concat(+moment()).concat('-').concat(record.operation) });
      re.save(record);
    }
    // const re = new Record();
    // const a = await re.indices();
    // console.log(a);
    // await re.save(record);
    // new Record().indices();
  } catch (err) {
    console.error(err);
  }
})();

// (async () => {
//   new Total().get({ openid: 'yanfch' }).then((data) => {
//     console.log(data);
//   });
// })();

// const sort = { create_time: { order: 'desc' } };

// const params = {
//   scroll: '1m',
//   body: ejs.Request()
//           .query(ejs.TermQuery('openid', 'yanfch'))
//           .sort(ejs.Sort('operation').order('desc'))
//           .size(5)
// };

// // console.log(params);

// const record = new Record();
// record.search(params)
//   .then((res) => {
//     console.log('################## scroll ##################');
//     record.scroll({ scrollId: res._scroll_id, scroll: '1m' });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// record.scroll(params1)
//   .then((res) => {
//     res.hits.hits.forEach((data) => {
//       console.log(JSON.stringify(data));
//     }, this);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
