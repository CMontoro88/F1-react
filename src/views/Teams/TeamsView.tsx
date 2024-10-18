import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTeamsDataByYear } from '@/services';
import { TeamData } from '@/types';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Link,
} from '@mui/material';

const TeamsView = () => {
  const { data, isPending } = useQuery({
    queryKey: ['teamsByYear'],
    queryFn: fetchTeamsDataByYear,
  });

  const [selectedTeam, setSelectedTeam] = useState<TeamData | undefined>();
  const handleSelectTeam = (event: SelectChangeEvent<TeamData>) => {
    const teamId = event.target.value;
    const teamInfo = data.find(
      (team: TeamData) => team.constructorId === teamId
    );
    setSelectedTeam(teamInfo);
  };

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h2 className="text-black text-2xl uppercase">Teams</h2>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Selecciona un equipo
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedTeam}
          label="Age"
          onChange={handleSelectTeam}
        >
          {data.map((team: TeamData) => (
            <MenuItem value={team.constructorId}>{team.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedTeam && (
        <Card className="max-w-[345px] mt-10">
          <CardActionArea>
            <CardContent>
              <p className="text-xl">{selectedTeam.name}</p>
              <p className="text-lg">{selectedTeam.nationality}</p>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              href={selectedTeam.url}
              underline="hover"
              target="_blank"
              className="text-lg"
            >
              Wikipedia Link
            </Link>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default TeamsView;
