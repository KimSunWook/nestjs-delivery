// Nestjs
import { PartialType, PickType } from '@nestjs/swagger';

// Entity
import { DeliveryHistoryEntity } from '../entities/delivery-history.entity';

// Main section
export class UpdateDeliveryHistoryDto extends PickType(
  PartialType(DeliveryHistoryEntity),
  [] as const,
) {}
