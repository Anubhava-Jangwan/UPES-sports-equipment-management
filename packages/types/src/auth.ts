import { UserProfile, UserRole } from './user.js';

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

export interface AuthResponse {
  user: UserProfile;
  tokens: AuthTokens;
}

export interface JWTPayload {
  sub: string;
  email: string;
  sapId: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}
