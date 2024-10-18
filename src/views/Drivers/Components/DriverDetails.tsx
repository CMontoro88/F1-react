import { DriverData } from '@/types';
import { Box } from '@mui/material';

const DriverDetails: React.FC<Partial<DriverData>> = ({
  givenName,
  familyName,
  permanentNumber,
  dateOfBirth,
  nationality,
  url,
}) => {
  return (
    <Box>
      <p>{`${givenName} ${familyName} (${permanentNumber})`}</p>
      <p>{dateOfBirth}</p>
      <p>{nationality}</p>
      <a href={url}>More info</a>
    </Box>
  );
};

export default DriverDetails;
