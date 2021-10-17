import moment from "moment";

export default function formatDate(date: Date) {
  return moment(date).format('DD/MM/YYYY');
}
