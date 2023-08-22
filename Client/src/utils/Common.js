import useProperties from "../hooks/usePackage";

const { data, isError, isLoading } = useProperties();

const sortByPriceLowToHigh = () => {
  const sortedData = data.slice().sort((a, b) => a.price - b.price);
  return sortedData;
};

const sortByPriceHighToLow = () => {
  const sortedData = data.slice().sort((a, b) => b.price - a.price);
  return sortedData;
};

const sortByNameAZ = () => {
  const sortedData = data
    .slice()
    .sort((a, b) => a.destination.localeCompare(b.destination));
  return sortedData;
};
