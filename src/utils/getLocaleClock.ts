export function getLocaleClock(time: string) {
  const hour = time.split(':')[0];
  const minute = time.split(':')[1];

  const localeHour = parseInt(hour) - 3;
  if (localeHour < 0) {
    return `${localeHour + 24}:${minute}`;
  }
  return `${localeHour}:${minute}`;
}
