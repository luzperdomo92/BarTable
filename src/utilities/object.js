export const removeEmptyKeys = (object) => {
  return Object.fromEntries(
    Object.entries(object).filter(([_, v]) => v !== '')
  );
};
