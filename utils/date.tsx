const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (date: String) => {
  // console.log(date);
  const newDate = date.split("T")[0];
  const [year, month, day] = newDate.split("-");
  return `${day} ${months[parseInt(month) - 1]} ${year}`;
};
