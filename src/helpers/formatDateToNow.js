import { formatDistanceToNow } from "date-fns";
import { format } from 'date-fns';



export const formatDateToNow = (postedAt) => {
  return (
      formatDistanceToNow(new Date(postedAt), { addSuffix: true })
  )
};
export const formattedDate = date => {
  return format(new Date(date), 'MM/dd/yyyy, h:mm a');
};