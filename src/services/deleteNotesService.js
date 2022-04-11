import axios from "axios";
import { toast } from "react-toastify";
export const deleteNotesService = async (notesId, encodedToken) => {
  try {
    const resp = await axios.delete(`/api/notes/${notesId}`, {
      headers: { authorization: encodedToken },
    });
    toast.success("Note deleted");
    return resp;
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
