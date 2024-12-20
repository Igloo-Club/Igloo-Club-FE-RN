const formatDateString = (dateString: string | undefined) => {
  if (!dateString) {
    return undefined;
  }
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);

  return `${year}-${month}-${day}`;
};

export default formatDateString;
