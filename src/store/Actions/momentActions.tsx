// Aciton Types
import { USER_MOMENT_DATA, MOMENT_DATA } from './types';

// Aciton Creators
export function myMomentData(token: string) {
  return {
    token,
    type: USER_MOMENT_DATA,
  };
}

// Aciton Creators
export function momentData(channelId: string) {
  return {
    channelId,
    type: MOMENT_DATA,
  };
}
