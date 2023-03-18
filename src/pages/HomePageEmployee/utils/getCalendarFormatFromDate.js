export function getCalendarFormatFromDate({ date }) {
  if (date === '' || date === null) return;
  const dateObject = new Date(date);
  const dateString = new Date(
    dateObject.getTime() - dateObject.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split('T')[0];
  return dateString;
}
