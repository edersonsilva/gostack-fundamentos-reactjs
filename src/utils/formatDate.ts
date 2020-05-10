import pt, { format, parseISO } from 'date-fns';

const formatDate = (date: string): string =>
  format(parseISO(date), 'P', {
    locale: pt,
  }); // TODO

export default formatDate;
