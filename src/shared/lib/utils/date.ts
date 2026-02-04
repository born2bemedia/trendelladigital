import { format as fd, isValid, parseISO } from 'date-fns';

export const formatDate = (
  value: string | Date,
  format: string = 'dd.MM.yyyy',
): string => {
  const date = typeof value === 'string' ? parseISO(value) : value;

  if (!isValid(date)) {
    return 'Invalid date';
  }

  try {
    return fd(date, format);
  } catch {
    return 'Invalid date format';
  }
};
