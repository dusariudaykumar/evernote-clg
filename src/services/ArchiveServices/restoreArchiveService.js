import axios from "axios";
import { toast } from "react-toastify";
export const restoreArchiveService = (note, encodedToken) => {
  try {
    const resp = axios.post(
      `/api/archives/restore/${note._id}`,
      { note },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    toast.success("Note Unarchived");
    return resp;
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
