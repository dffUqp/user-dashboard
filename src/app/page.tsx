'use client';

import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { LineChart, UserTable } from 'features';
import { cardInformation, userRows, yAxisData } from 'shared/constants';
import { fCurrency, objectKeys } from 'shared/lib';

function HomePage() {
  const [yAxisTestValue, setYAxisTestValue] =
    useState<keyof typeof yAxisData>('budget');
  const [yAxisSeriesValue, setYAxisSeriesValue] =
    useState<keyof typeof yAxisData>('income');

  const chartData = [yAxisData[yAxisTestValue], yAxisData[yAxisSeriesValue]];

  const cardInformationWithValue = cardInformation.map(card => {
    const total = userRows.reduce((accumulator, item) => {
      const value = item[card.key];

      if (typeof value === 'string') {
        return accumulator;
      }

      return value + accumulator;
    }, 0);

    const formattedValue =
      (card.dollarSign && fCurrency(total)) ||
      (card.isPercent && `${total.toFixed(2)}%`) ||
      total;

    return {
      ...card,
      value: formattedValue,
    };
  });

  return (
    <Container maxWidth="md">
      <Stack
        direction={{ sm: 'row', xs: 'column' }}
        marginBottom="24px"
        rowGap="10px"
      >
        <Typography variant="h4">User Dashboard</Typography>
      </Stack>

      <Stack width="100%" direction="column" spacing={3}>
        <Grid container spacing={2}>
          {cardInformationWithValue.map(card => (
            <Grid item xs={6} md={3} key={card.title}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle2" noWrap>
                    {card.title}
                  </Typography>
                  <Typography variant="h4" marginTop="15px">
                    {card.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card>
          <CardContent sx={{ maxHeight: '400px' }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                position: 'relative',
                maxWidth: { sm: '50%', xs: '100%' },
                marginBottom: { sm: '-30px', xs: '5px' },
                zIndex: 1000,
              }}
            >
              <TextField
                variant="outlined"
                select
                fullWidth
                size="small"
                label="Y1 axis selection"
                value={yAxisTestValue}
                onChange={event =>
                  setYAxisTestValue(
                    event.target.value as keyof typeof yAxisData,
                  )
                }
              >
                {objectKeys(yAxisData).map(option => (
                  <MenuItem key={option} value={option}>
                    {yAxisData[option].label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                variant="outlined"
                select
                fullWidth
                size="small"
                label="Y2 axis selection"
                value={yAxisSeriesValue}
                onChange={event =>
                  setYAxisSeriesValue(
                    event.target.value as keyof typeof yAxisData,
                  )
                }
              >
                {objectKeys(yAxisData).map(option => (
                  <MenuItem key={option} value={option}>
                    {yAxisData[option].label}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <LineChart data={chartData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Users" sx={{ mb: 2 }} />
          <UserTable rows={userRows} />
        </Card>
      </Stack>
    </Container>
  );
}

export default HomePage;
