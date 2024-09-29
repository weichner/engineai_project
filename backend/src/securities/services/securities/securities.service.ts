import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SecurityCompany } from '../../entities/security.entity';

@Injectable()
export class SecuritiesService {
  constructor(
    @InjectRepository(SecurityCompany)
    private securityCompanyRepository: Repository<SecurityCompany>,
  ) {}

  async findAll(): Promise<SecurityCompany[]> {
    const securities = await this.securityCompanyRepository.find({
      relations: ['prices'],
    });
    return securities.map((security) => {
      if (security.prices) {
        security.prices = security.prices.filter(
          (price) => price.date !== null,
        );
      }
      return {
        ...security,
        trendColor: this.getBackgroundTrendColor(security.trend),
      };
    });
  }

  async findOne(id: number): Promise<SecurityCompany | null> {
    const security = await this.securityCompanyRepository.findOne({
      where: { id },
      relations: ['prices'],
    });

    if (security) {
      if (security.prices) {
        security.prices = security.prices.filter(
          (price) => price.date !== null,
        );
      }
      return {
        ...security,
        trendColor: this.getBackgroundTrendColor(security.trend),
      };
    }

    return null;
  }

  private getBackgroundTrendColor(trend: number): string {
    if (trend < -20) {
      return 'red';
    } else if (trend >= -20 && trend <= 20) {
      return 'green';
    } else if (trend > 20) {
      return 'blue';
    }
    return 'transparent';
  }
}
