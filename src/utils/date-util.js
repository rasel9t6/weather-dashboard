function getFormattedDate(value, type, isMs) {
  if (!type) return value;
  if (!isMs) {
    value = value * 1000;
  }
  const date = new Date(value);
  let options;
  if (type === 'date') {
    options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  } else if (type === 'time') {
    options = {
      hour: 'numeric',
      minute: 'numeric',
    };
  }

  return new Intl.DateTimeFormat('en-us', options).format(date);
}

export { getFormattedDate };
