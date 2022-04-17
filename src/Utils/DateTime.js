import Moment from "react-moment";
export const DateTime = (datea) => {
  return <Moment date={datea} format="DD/MM/YYYY, h:mm:ss a" trim />;
};
