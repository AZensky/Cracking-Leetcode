export function getDayMonthYear(date) {
  let months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  let solutionDay = date.getDate();
  let month = date.getMonth();
  let solutionYear = date.getFullYear();

  let solutionMonth = months[month];

  return { day: solutionDay, month: solutionMonth, year: solutionYear };
}
