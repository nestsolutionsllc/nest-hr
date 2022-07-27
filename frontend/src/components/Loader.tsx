import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
};
