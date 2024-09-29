import { gql } from '@apollo/client';

export type SecurityPrice = {
  date: string;
  close: number;
  volume: number;
}

export type SecurityDetail = {
  id: number;
  ticker: string;
  securityName: string;
  sector: string;
  country: string;
  trend: number;
  trendColor: string;
  prices: SecurityPrice[];
}

export type SecurityDetailData = {
  security: SecurityDetail;
};

export type Security = {
  id: string;
  ticker: string;
  securityName: string;
  sector: string;
  country: string;
  trend: number;
  trendColor?: string;
};


export type SecuritiesData = {
  securities: Security[];
};

export const GET_SECURITIES = gql`
  query GetSecurities {
    securities {
      id
      ticker
      securityName
      sector
      country
      trend
      trendColor
    }
  }
`;

export const GET_SECURITY_DETAIL = gql`
  query GetSecurityDetail($id: Int!) {
  security(id: $id) {
    id
    ticker
    securityName
    sector
    country
    trend
    trendColor
    prices {
      date
      close
      volume
    }
  }
}
`;