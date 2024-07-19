import { ReactNode } from 'react';

import { Container } from '@mui/material';

import { AppLayout } from 'widgets';
import { AuthProvider, ThemeProvider } from 'app/_providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <Container component="main">
              <AppLayout>{children}</AppLayout>
            </Container>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
