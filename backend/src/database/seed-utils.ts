import seedData from './data.json';
import { DataSource } from 'typeorm';
import { SecurityCompany } from 'src/securities/entities/security.entity';
import { Price } from 'src/securities/entities/price.entity';

const seedDatabase = async (dataSource: DataSource) => {
  const companyRepository = dataSource.getRepository(SecurityCompany);
  const priceRepository = dataSource.getRepository(Price);

  for (const companyData of seedData) {
    const securityCompany = new SecurityCompany();
    securityCompany.ticker = companyData.ticker;
    securityCompany.securityName = companyData.securityName;
    securityCompany.sector = companyData.sector;
    securityCompany.country = companyData.country;
    securityCompany.trend = companyData.trend;

    await companyRepository.save(securityCompany);

    for (const priceData of companyData.prices) {
      const price = new Price();
      price.date = priceData.date;
      price.close = parseFloat(priceData.close);
      price.volume = Number(priceData.volume);
      price.securityCompany = securityCompany;

      await priceRepository.save(price);
    }
  }

  console.log('Database seeded successfully from JSON!');
};

const clearDatabase = async (dataSource: DataSource) => {
  const companyRepository = dataSource.getRepository(SecurityCompany);
  const priceRepository = dataSource.getRepository(Price);

  await priceRepository.clear();
  await companyRepository.clear();

  console.log('Database tables cleared successfully!');
};

export { seedDatabase, clearDatabase };
