export const FilterByLabel = (notes, filterBy) => {
  if (filterBy) {
    return notes.filter((item) => item.label === filterBy);
  }
  return notes;
};
