export interface User {
  name:string;
  fullName: string;
  email: string;
  avatarUrl: string;
}

export interface UserResponse {
  status: string;
  user: User;
}

export interface UserMetadata {
  avatar_url:     string;
  email:          string;
  email_verified: boolean;
  full_name:      string;
  iss:            string;
  name:           string;
  phone_verified: boolean;
  picture:        string;
  provider_id:    string;
  sub:            string;
}