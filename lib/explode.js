/**
 * Разбивает строку с помощью разделителя
 *
 * @param delimiter Разделитель
 * @param string Входная строка
 * @returns {null|string[]}
 */export const explode=(a,b)=>""===a||!1===a||null===a||"function"==typeof a||"object"==typeof a||"function"==typeof b||"object"==typeof b?null:b.toString().split(a.toString());