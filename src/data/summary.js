import moment from "moment-timezone";

const getWarningMessage = () => {
  const hours = 70;
  const minimum = 80;
  const warningMessage = ` reach minimum of ${minimum}% from ${hours} hrs/week`;
  return warningMessage;
};

const getWeekId = () => {
  const start = moment().startOf("week").format("MMM-DD");
  const end = moment().endOf("week").format("MMM-DD");
  return [start, end].join(";");
};

const getPeriod = () => {
  const _period = `${moment()
    .subtract(7, "days")
    .format("MMM D")} - ${moment().format("MMM D")}`;
  return _period;
};

// These are the default properties of a weekly summary, the week is the current week, we'll look it up in the actual data recevied from api
const _summary = {
  id: getWeekId(),
  period: getPeriod(),
  message: getWarningMessage(),
  pay: 0,
  hours: 0,
  percentage: 0,
};

export default _summary;
