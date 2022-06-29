// Nestjs
import { ApiProperty } from '@nestjs/swagger';

// Typeorm
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

// Third party
import { Exclude, Type } from 'class-transformer';
import { IsInt, IsPositive, IsString, IsUUID, Max, Min, ValidateNested } from 'class-validator';

// Constants
import { sampleUuid } from '../../../constants/sample';

// Entity
import { AbstractEntity } from '../../../common/abstract.entity';
import { LemonSymphonyEntity } from './lemon-symphony.entity';

// Main section
@Entity({ name: 'lemons' })
export class LemonEntity extends AbstractEntity {
  // ManyToOne fields
  @Type(() => LemonSymphonyEntity)
  @ValidateNested()
  @ManyToOne(() => LemonSymphonyEntity, (lemonSymphony) => lemonSymphony.lemons)
  @JoinColumn({ name: 'userId' })
  lemonSymphony: LemonSymphonyEntity;

  @Type()
  @ApiProperty({ type: 'string', description: 'lemonSymphony의 id', default: sampleUuid })
  @IsUUID()
  @Column({ nullable: false })
  lemonSymphonyId: Uuid;

  // Basic fields
  @ApiProperty({ type: 'string', description: '제목' })
  @IsString()
  @Column({ nullable: true })
  title: string;

  @ApiProperty({ type: 'number', description: '숫자', default: 0 })
  @Exclude({ toPlainOnly: true })
  @IsInt()
  @IsPositive()
  @Min(1)
  @Max(10)
  @Column({ nullable: false })
  number: number;
}