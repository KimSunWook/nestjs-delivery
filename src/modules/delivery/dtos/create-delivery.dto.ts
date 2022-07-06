// Nestjs
import { PartialType, PickType } from '@nestjs/swagger';

// Entity
import { DeliveryEntity } from '../entities/delivery.entity';

// Main section
export class CreateDeliveryDto extends PickType(PartialType(DeliveryEntity), [
  'code',
  'invoice',
] as const) {}
