export const SortByDateTime = (notes, sortBy) => {
  if (sortBy === "OLDEST_FIRST") {
    return notes.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
  }
  if (sortBy === "NEWEST_FIRST") {
    return notes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }
  return notes;
};
