import moment from "moment";

export default function formatDate(incomingDate) {
  let date = moment(incomingDate);
  return date.format("DD.MM.YYYY");
}
