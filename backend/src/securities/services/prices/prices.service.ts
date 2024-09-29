import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Price } from '../../entities/price.entity';

@Injectable()
export class PricesService {
  constructor(
    @InjectRepository(Price)
    private companyPriceRepository: Repository<Price>,
  ) {}

  findPricesByCompanyId(companyId: number): Promise<Price[]> {
    return this.companyPriceRepository.find({
      where: { securityCompany: { id: companyId } },
    });
  }

  findOne(id: number): Promise<Price | null> {
    return this.companyPriceRepository.findOneBy({ id });
  }
}
