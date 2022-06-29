// Nestjs
import { PartialType, PickType } from '@nestjs/swagger';

// Entity
import { LemonSymphonyEntity } from '../entities/lemon-symphony.entity';

// Main section
export class CreateLemonSymphonyDto extends PickType(PartialType(LemonSymphonyEntity), [
  'title',
  'number',
] as const) {}
