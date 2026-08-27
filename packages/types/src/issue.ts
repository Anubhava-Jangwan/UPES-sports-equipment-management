import { EquipmentItem } from './equipment.js';
import { UserProfile } from './user.js';

export enum IssueStatus {
  REQUESTED = 'REQUESTED',
  APPROVED = 'APPROVED',
  ACTIVE = 'ACTIVE',
  RETURNED = 'RETURNED',
  OVERDUE = 'OVERDUE',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

export interface IssueRecord {
  id: string;
  userId: string;
  user?: UserProfile;
  equipmentId: string;
  equipment?: EquipmentItem;
  issueDate: string;
  expectedReturnDate: string;
  actualReturnDate?: string;
  status: IssueStatus;
  issuedByAdminId: string;
  receivedByAdminId?: string;
  fineAmount?: number;
  remarks?: string;
  createdAt: string;
  updatedAt: string;
}
