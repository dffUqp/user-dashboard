'use client';

import { FC } from 'react';

import { Box } from '@mui/material';
import { Line } from 'react-chartjs-2';

import 'chart.js/auto';

interface LineChartProps {
  data: { label: string; data: number[] }[];
}

const LineChart: FC<LineChartProps> = ({ data }) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

    datasets: [
      {
        ...data[0],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        ...data[1],
        fill: false,
        borderColor: '#742774',
      },
    ],
  };

  return (
    <Box sx={{ minHeight: { sm: '300px', md: '350px' } }}>
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 1,
          plugins: {
            legend: {
              align: 'end',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
              },
            },
          },
        }}
        plugins={[
          {
            id: 'increase-legend-spacing',
            beforeInit(chart) {
              // Get reference to the original fit function
              const originalFit = (chart.legend as any).fit;
              // Override the fit function
              (chart.legend as any).fit = function fit() {
                // Call original function and bind scope in order to use `this` correctly inside it
                originalFit.bind(chart.legend)();
                // eslint-disable-next-line react/no-this-in-sfc
                this.height += 30;
              };
            },
          },
        ]}
        data={chartData}
      />
    </Box>
  );
};

export { LineChart };
