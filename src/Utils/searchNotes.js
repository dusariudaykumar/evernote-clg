export const searchNotes = (title, notesArray) => {
  return notesArray.filter((note) => note.title.toLowerCase().includes(title));
};
