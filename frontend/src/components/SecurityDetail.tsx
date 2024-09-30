import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, Typography, Paper, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Accessibility from 'highcharts/modules/accessibility';
import {
  GET_SECURITY_DETAIL,
  SecurityDetailData,
  SecurityPrice,
} from '../graph/queries';

Accessibility(Highcharts);

const SecurityDetail: React.FC = () => {
  const { securityId } = useParams<{ securityId: string }>();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery<SecurityDetailData>(
    GET_SECURITY_DETAIL,
    {
      variables: { id: parseInt(securityId!) },
    }
  );

  if (error) return <p>Error: Unexpected error happened, please try again.</p>;
  if (loading ?? !data) return <p>Loading...</p>;

  const security = data.security;

  const options = {
    accessibility: {
      enabled: true,
    },
    chart: {
      type: 'line',
    },
    title: {
      text: 'Security Detail Chart',
    },
    xAxis: {
      categories: security.prices.map((price: SecurityPrice) => price.date),
    },
    yAxis: [
      {
        title: {
          text: 'Stock',
        },
      },
      {
        title: {
          text: 'Volume',
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: 'Stock Price',
        data: security.prices.map((price: SecurityPrice) => price.close),
        color: '#0071A7',
      },
      {
        name: 'Volume',
        data: security.prices.map((price: SecurityPrice) => price.volume),
        yAxis: 1,
        color: '#FF404E',
      },
    ],
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ marginBottom: '20px', color: '#0071A7', fontWeight: 'bold' }}
      >
        Back to Security List
      </Button>

      <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {security.ticker} - {security.securityName}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: '10px' }}>
          Sector: {security.sector}
        </Typography>
        <Typography variant="h6">Country: {security.country}</Typography>
      </Paper>

      <Paper sx={{ padding: '20px' }}>
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>
          Security Detail Chart
        </Typography>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Paper>
    </Box>
  );
};

export default SecurityDetail;
