import seedData from './data.json';
import { DataSource } from 'typeorm';
import { SecurityCompany } from 'src/securities/entities/security.entity';
import { Price } from 'src/securities/entities/price.entity';

const seedDatabase = async (dataSource: DataSource) => {
  const companyRepository = dataSource.getRepository(SecurityCompany);
  const priceRepository = dataSource.getRepository(Price);

  // Iterar sobre las empresas en el JSON
  for (const companyData of seedData) {
    const securityCompany = new SecurityCompany();
    securityCompany.ticker = companyData.ticker;
    securityCompany.securityName = companyData.securityName;
    securityCompany.sector = companyData.sector;
    securityCompany.country = companyData.country;
    securityCompany.trend = companyData.trend;

    // Guardar la compañía primero
    await companyRepository.save(securityCompany);

    // Crear y guardar los precios asociados
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

  // Vaciar las tablas
  await priceRepository.clear();
  await companyRepository.clear();

  console.log('Database tables cleared successfully!');
};

export { seedDatabase, clearDatabase };
