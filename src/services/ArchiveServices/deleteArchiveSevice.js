import axios from "axios";
import { toast } from "react-toastify";

export const deleteArchiveService = (noteId, encodedToken) => {
  try {
    const resp = axios.delete(`/api/archives/delete/${noteId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    toast.success("Deleted Note");
    return resp;
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
