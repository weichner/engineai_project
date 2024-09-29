import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SecurityCompany } from './security.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('prices')
export class Price {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'date', nullable: true })
  date: string | null;

  @Field({ nullable: true })
  @Column('float', { nullable: true })
  close: number | null;

  @Field({ nullable: true })
  @Column('bigint', { nullable: true })
  volume: number | null;

  @Field(() => SecurityCompany, { nullable: true })
  @ManyToOne(
    () => SecurityCompany,
    (securityCompany) => securityCompany.prices,
    { nullable: true },
  )
  securityCompany: SecurityCompany | null;
}
