import { Box, Button } from '@mui/material';

interface DriverProps {
  name: string;
  number: string;
  isSelected: boolean;
  onSelectDriver: () => void;
}

const DriverOption: React.FC<DriverProps> = ({
  name,
  number,
  isSelected,
  onSelectDriver,
}) => {
  return (
    <Box className={`p-2 ${isSelected && 'bg-green-300'} rounded-sm`}>
      <p>Nombre: {name}</p>
      <p>Número: {number}</p>
      <Button onClick={onSelectDriver} variant="outlined">
        Más información
      </Button>
    </Box>
  );
};

export default DriverOption;
