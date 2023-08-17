import dayjs from "dayjs";
export const data = (req, res) => {
  const parsedDepartureDate = dayjs("09/11/2024", "DD/MM/YYYY").toDate();
  console.log(parsedDepartureDate);
  res.send(parsedDepartureDate);
};
// ... continue with Prisma logic
