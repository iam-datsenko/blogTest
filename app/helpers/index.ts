export const getGMTDate = (date: string) => {
  if (!date) {
    return null;
  }

  const today = new Date(date);

  const yyyy = today.getFullYear();
  const mm = +String(today.getMonth() + 1).padStart(2, '0') - 1;
  const dd = String(today.getDate()).padStart(2, '0');

  const monthNames = [
    'січень',
    'лютий',
    'березень',
    'квітень',
    'травень',
    'червень',
    'липень',
    'серпень',
    'вересень',
    'жовтень',
    'листопад',
    'грудень',
  ];

  const finalDate = `${monthNames[mm]}, ${dd} ${yyyy}`;

  return finalDate;
};
