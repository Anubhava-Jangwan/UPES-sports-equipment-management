export enum UserRole {
  STUDENT = 'STUDENT',
  FACULTY = 'FACULTY',
  COACH = 'COACH',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
}

export interface UserProfile {
  id: string;
  email: string;
  sapId: string;
  fullName: string;
  phone?: string;
  role: UserRole;
  status: UserStatus;
  department?: string;
  createdAt: string;
  updatedAt: string;
}
