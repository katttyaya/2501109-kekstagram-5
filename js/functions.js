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

/*5.16. Функции возвращаются*/
function имяФункции(startWork, endWork, startMeeting, duration) {
  function timeToMinutes(time) {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
  }

  const startWorkMinutes = timeToMinutes(startWork);
  const endWorkMinutes = timeToMinutes(endWork);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + duration;

  return startMeetingMinutes >= startWorkMinutes && endMeetingMinutes <= endWorkMinutes;
}
