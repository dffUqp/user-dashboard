'use client';

import { FC, PropsWithChildren } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { Header } from './ui';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container component="main">
      <Header />

      <Stack
        sx={{
          pt: 3,
          pb: 6,
          minHeight: '100vh',
        }}
      >
        {children}
      </Stack>
    </Container>
  );
};

export { AppLayout };
