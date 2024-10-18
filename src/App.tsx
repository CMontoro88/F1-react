import './App.css';
import { Container } from '@mui/material';
import { router } from '@/routes/index';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <Container>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Container>
    </>
  );
};

export default App;
