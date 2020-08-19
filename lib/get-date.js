/**
 * Вытаскивает дату в формате "2019-12-31" из переданной даты
 *
 * @param {Date} date
 * @return {string} Форматирует дату в формате "2019-12-31"
 */export const getDate=(a=null,b=!0)=>{const c=a?new Date(a):new Date,d="0"+(c.getMonth()+1),e="0"+c.getDate();return b?[c.getFullYear(),d.substr(-2),e.substr(-2)].join("-"):{day:e.substr(-2),month:d.substr(-2),year:c.getFullYear()}};/**
 * Вытаскивает дату в формате "2019-12-31" из переданной даты и отнимает (decrement) количество дней
 *
 * @param {Integer} decrement
 * @param {Date} date
 * @return {string} Форматирует дату в формате "2019-12-31"
 */export const getDateDecrement=(a=1,b=null,c=!0)=>{const e=b?new Date(b):new Date;e.setDate(e.getDate()-a);const d="0"+(e.getMonth()+1),f="0"+e.getDate();return c?[e.getFullYear(),d.substr(-2),f.substr(-2)].join("-"):{day:f.substr(-2),month:d.substr(-2),year:e.getFullYear()}};