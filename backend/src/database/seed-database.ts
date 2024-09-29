import { dataSource } from './data-source';
import { seedDatabase } from './seed-utils';

const run = async () => {
  try {
    await dataSource.initialize();
    await seedDatabase(dataSource);
    await dataSource.destroy();
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error during seeding database:', error);
    await dataSource.destroy(); // Asegura que la conexión se cierra en caso de error
  }
};

run();
