export enum AgentType {
  AINA_MENTOR = "AINA_MENTOR",
  AINA_VOICE = "AINA_VOICE"
}

export interface SessionResetPayload {
  agent: AgentType;
  user_id: string;
}

export interface ApiResponse {
  status: number;
  ok: boolean;
  body: unknown;
  error?: string;
}

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';