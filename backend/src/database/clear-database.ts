import { dataSource } from './data-source';
import { clearDatabase } from './seed-utils';

const run = async () => {
  try {
    await dataSource.initialize();
    await clearDatabase(dataSource);
    await dataSource.destroy();
    console.log('Database cleared successfully!');
  } catch (error) {
    console.error('Error during clearing database:', error);
    await dataSource.destroy(); // Asegura que la conexión se cierra en caso de error
  }
};

run();
