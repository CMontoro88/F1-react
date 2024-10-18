import './App.css';
import Header from '@/components/Header';
import { Container } from '@mui/material';
import { router } from '@/routes/index';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Container>
    </>
  );
};

export default App;
