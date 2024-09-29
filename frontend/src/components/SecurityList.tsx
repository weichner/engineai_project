import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { GET_SECURITIES, SecuritiesData, Security } from '../graph/queries';
import { useNavigate } from 'react-router-dom';

const SecurityList: React.FC = () => {
  const { loading, error, data } = useQuery<SecuritiesData>(GET_SECURITIES);
  const navigate = useNavigate();

  if (error) return <p>Error: {error.message}</p>;
  if (loading ?? !data) return <p>Loading...</p>;

  const handleRowClick = (securityId: string) => {
    navigate(`/securities/${securityId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Symbol/Ticker</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Sector</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Trend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.securities.map((security: Security) => (
            <TableRow
              key={security.id}
              onClick={() => handleRowClick(security.id)}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <TableCell>{security.ticker}</TableCell>
              <TableCell>{security.securityName}</TableCell>
              <TableCell>{security.sector}</TableCell>
              <TableCell>{security.country}</TableCell>
              <TableCell sx={{ color: security.trendColor }}>
                {security.trend}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SecurityList;
