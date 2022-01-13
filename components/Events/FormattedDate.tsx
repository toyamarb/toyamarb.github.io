import dayjs from "dayjs";

export const FormattedDate: React.VFC<{ date: string }> = (props) => (
  <span>{dayjs(props.date).format("YYYY/MM/DD")}</span>
);

export const FormattedHour: React.VFC<{ date: string }> = (props) => (
  <span>{dayjs(props.date).format("HH:mm")}</span>
);
