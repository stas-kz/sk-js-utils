/**
 * Разбивает строку с помощью разделителя
 *
 * @param delimiter Разделитель
 * @param string Входная строка
 * @returns {null|string[]}
 */

const explode = (delimiter, string) => (
    delimiter === "" ||
    delimiter === false ||
    delimiter === null ||
    typeof delimiter == "function" ||
    typeof delimiter == "object" ||
    typeof string == "function" ||
    typeof string == "object"
) ? null : string.toString().split(delimiter.toString());