import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { SecurityCompany } from 'src/securities/entities/security.entity';
import { Price } from 'src/securities/entities/price.entity';
import { PostgresConfigService } from 'src/config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot({ isGlobal: true });
const configService = new ConfigService();

const postgresConfigService = new PostgresConfigService(configService);

const databaseInfo = postgresConfigService.createTypeOrmOptions() as any;

export const dataSource = new DataSource({
  type: 'postgres',
  host: databaseInfo.host,
  port: databaseInfo.port,
  username: databaseInfo.username,
  password: databaseInfo.password,
  database: databaseInfo.database as string,
  entities: [SecurityCompany, Price],
  synchronize: databaseInfo.synchronize,
  ssl: databaseInfo.ssl,
});
