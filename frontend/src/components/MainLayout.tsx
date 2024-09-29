import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Banner from './Banner';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ marginLeft: 0 }}>
      <Banner />
      <Box
        sx={{ marginTop: isSmallScreen ? '340px' : '380px', padding: '20px' }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
