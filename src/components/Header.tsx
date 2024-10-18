import { AppBar } from '@mui/material';

const Header = () => {
  return (
    <AppBar className="p-4 bg-red-400" position="sticky">
      <h2 className="text-black text-lg uppercase">F1 Info</h2>
    </AppBar>
  );
};

export default Header;
