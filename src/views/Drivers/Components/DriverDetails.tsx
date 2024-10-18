import { DriverData } from '@/types';
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Link,
} from '@mui/material';

const DriverDetails: React.FC<Partial<DriverData>> = ({
  givenName,
  familyName,
  permanentNumber,
  dateOfBirth,
  nationality,
  url,
}) => {
  return (
    <Card className="max-w-[345px] mt-10">
      <CardActionArea>
        <CardContent>
          <p className="text-xl">{`${givenName} ${familyName} (${permanentNumber})`}</p>
          <p className="text-lg">{dateOfBirth}</p>
          <p className="text-lg">{nationality}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={url} underline="hover" target="_blank" className="text-lg">
          Wikipedia Link
        </Link>
      </CardActions>
    </Card>
  );
};

export default DriverDetails;
