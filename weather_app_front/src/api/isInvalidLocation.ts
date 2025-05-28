export const isInvalidLocation = (
  city: string,
  loading: boolean,
  temperature: string,
  isError: boolean
): boolean => {
  return !!city && !loading && !temperature && !isError;
};
