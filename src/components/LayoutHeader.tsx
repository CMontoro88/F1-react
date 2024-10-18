import { AppBar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const menuOptions = ['Drivers', 'Teams'];
  const handleClickMenuOption = (menuOption: string) => {
    console.log(menuOption);
    navigate(`/${menuOption.toLowerCase()}`);
  };

  return (
    <AppBar className="flex p-4 bg-red-400" position="sticky">
      <div className="flex items-center gap-4">
        <h1 className="text-black text-lg uppercase text-4xl mx-10">F1 Info</h1>
        {menuOptions.map((menuOption) => (
          <Button
            className="text-black text-xl"
            key={menuOption}
            onClick={() => handleClickMenuOption(menuOption)}
          >
            {menuOption}
          </Button>
        ))}
      </div>
    </AppBar>
  );
};

export default Header;
