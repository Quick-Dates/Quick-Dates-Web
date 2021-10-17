import moment from "moment";

export default function formatDate(date: Date, format = "DD/MM/YYYY"): string {
  const dateString = date?.toString().split("T")[0];
  return moment(dateString).format(format);
}
