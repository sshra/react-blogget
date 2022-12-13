const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: 'numeric',
};

const formatDate = date =>
  new Intl.DateTimeFormat('ru', options)
    .format(new Date(date));

const formatTimestamp = time =>
  new Intl.DateTimeFormat('ru', options)
    .format(new Date(time * 1000));

export { formatDate, formatTimestamp };

