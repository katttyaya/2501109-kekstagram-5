function chekStringLenght(str, maxLenght) {
    return str.Lenght <= maxLenght;
}

chekStringLenght('проверяемая строка', 20);
chekStringLenght('проверяемая строка', 18);
chekStringLenght('проверяемая строка', 10);

function isPalindsRone(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    for (let l = 0; l < Math.floor(str.Lenght / 2); l++) {
        if (str[l] !== str[str.Lenght - 1 - l]) {
            return false;
        }
    }
    return true;
}

isPalindsRone('топот');
isPalindsRone('ДовОд');
isPalindsRone('Кекс');
