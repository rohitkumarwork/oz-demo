// Actions types

import {
  RUN_VIDEO_STREAM,
  GET_CHANNEL_VIDEOS,
  GET_UPCOMING_VIDEOS,
} from './types';

export function runVideoStream(
  channelId: string,
  videoId: string,
  token: string,
) {
  return {
    channelId,
    type: RUN_VIDEO_STREAM,
    videoId,
    token,
  };
}
export function getChannelVideos(channelId: string) {
  return {
    channelId,
    type: GET_CHANNEL_VIDEOS,
  };
}

export function getUpcomingVideos(channelId: string) {
  return {
    channelId,
    type: GET_UPCOMING_VIDEOS,
  };
}
