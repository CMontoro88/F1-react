import axios from 'axios';

export const fetchDriversDataByYear = async () => {
  const { data } = await axios.get(
    'https://ergast.com/api/f1/2024/drivers.json',
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  const drivers = data.MRData.DriverTable.Drivers;
  return drivers;
};
