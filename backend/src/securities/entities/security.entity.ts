import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Price } from './price.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class SecurityCompany {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  ticker: string;

  @Field()
  @Column()
  securityName: string;

  @Field()
  @Column()
  sector: string;

  @Field()
  @Column()
  country: string;

  @Field()
  @Column('float')
  trend: number;

  @Field(() => [Price], { nullable: true })
  @OneToMany(() => Price, (price) => price.securityCompany, { cascade: true })
  prices: Price[];

  @Field()
  trendColor: string;
}
