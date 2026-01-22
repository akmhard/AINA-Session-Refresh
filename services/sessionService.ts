import { API_URL, BEARER_TOKEN } from '../constants';
import { SessionResetPayload, ApiResponse } from '../types';

export const resetUserSession = async (payload: SessionResetPayload): Promise<ApiResponse> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Authorization': BEARER_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    // Attempt to parse JSON, fallback to empty object if body is empty or invalid
    const body = await response.json().catch(() => ({}));

    return {
      status: response.status,
      ok: response.ok,
      body
    };
  } catch (error) {
    return {
      status: 0,
      ok: false,
      body: null,
      error: error instanceof Error ? error.message : 'Unknown network error'
    };
  }
};