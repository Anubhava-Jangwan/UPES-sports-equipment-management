export enum EquipmentCondition {
  EXCELLENT = 'EXCELLENT',
  GOOD = 'GOOD',
  FAIR = 'FAIR',
  DAMAGED = 'DAMAGED',
  UNDER_MAINTENANCE = 'UNDER_MAINTENANCE',
}

export enum EquipmentStatus {
  AVAILABLE = 'AVAILABLE',
  ISSUED = 'ISSUED',
  RESERVED = 'RESERVED',
  LOST = 'LOST',
  RETIRED = 'RETIRED',
}

export interface EquipmentCategory {
  id: string;
  name: string;
  code: string;
  description?: string;
}

export interface EquipmentItem {
  id: string;
  qrCode: string;
  name: string;
  categoryId: string;
  category?: EquipmentCategory;
  condition: EquipmentCondition;
  status: EquipmentStatus;
  location: string;
  specifications?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}
