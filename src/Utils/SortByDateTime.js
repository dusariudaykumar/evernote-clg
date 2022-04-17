export const SortByDateTime = (notes, sortBy) => {
  if (sortBy === "OLDEST_FIRST") {
    return notes.sort((a, b) => new Date(a.editedAt) - new Date(b.editedAt));
  }
  if (sortBy === "NEWEST_FIRST") {
    return notes.sort((a, b) => new Date(b.editedAt) - new Date(a.editedAt));
  }
  return notes;
};
