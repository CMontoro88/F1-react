import axios from 'axios';

export const fetchTeamsDataByYear = async () => {
  const { data } = await axios.get(
    'https://ergast.com/api/f1/2024/constructors.json',
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  const constructors = data.MRData.ConstructorTable.Constructors;
  return constructors;
};
