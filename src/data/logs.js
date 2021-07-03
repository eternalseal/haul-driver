import moment from "moment-timezone";
import data from "./api";

const payPerHour = 22;
const overtimePayPerHour = 33;

const getDailyDuration = (log) => {
  const onDutyDuration = moment.duration(
    log.dutyStatusDurations.onDutyDurationMs
  );
  const onDutyHours = Math.floor(onDutyDuration.asHours());
  const onDutyMinutes =
    Math.floor(onDutyDuration.asMinutes()) - onDutyHours * 60;

  // Floated value of hours
  const hours = moment
    .duration(log.dutyStatusDurations.onDutyDurationMs)
    .asHours();

  // Formated hours for user interface
  const format = moment()
    .hour(onDutyHours)
    .minute(onDutyMinutes)
    .format("HH:mm");
  return { format, hours };
};

// Get daily gross pay with considaration of previous hours worked in that week
const getDailyGross = (log, prevHours = 0) => {
  let pay = 0;
  let extra = 0;

  const hours = moment
    .duration(log.dutyStatusDurations.onDutyDurationMs)
    .asHours();
  const total = hours + prevHours;

  if (total <= 40) {
    // 1. In case the total hasn't reached 40 yet.
    pay = hours * payPerHour;
  } else if (prevHours <= 40 && total > 40) {
    // 2. In case the total hours hasn't reach 40 but will reach once we add this log hours,
    //    hours before reaching 40, will have normal cost and the rest will have overtime cost
    const gab = 40 - prevHours;
    pay = gab * payPerHour;
    extra = (hours - gab) * overtimePayPerHour;
    pay = pay + extra;
  } else if (total > 40) {
    // 3. In case the total reached 40 long time ago all the day hours will have overtime cost
    pay = hours * overtimePayPerHour;
  }
  return { pay, hours };
};

// Process data and return object with weekly data each key represents the week
const proccessLogs = (data) => {
  const weeks = {};
  data.map((log) => {
    const start = moment(log.startTime).startOf("week").format("MMM-DD");
    const end = moment(log.startTime).endOf("week").format("MMM-DD");
    const id = `${start}:${end}`;
    weeks[id] = weeks[id] ? weeks[id] : { days: [], hours: 0, pay: 0 };

    // Setting daily log needed keys for user interface to be displayed
    log.startTime = moment(log.startTime).format("DD MMM YYYY");
    log.endTime = moment(log.endTime).format("DD MMM YYYY");
    const { format, hours } = getDailyDuration(log);
    log.hours = hours;
    log.formattedHours = format;
    log.pay = getDailyGross(log, weeks[id].hours).pay;

    weeks[id].hours += log.hours;
    weeks[id].pay += log.pay;
    weeks[id].days.push(log);
  });
  return weeks;
};

const logs = proccessLogs(data);

export default logs;
