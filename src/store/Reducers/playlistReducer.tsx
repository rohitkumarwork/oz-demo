import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

//  Action Types
import {
  CLEAR_STORES,
  API_URI,
  RUN_VIDEO_STREAM,
  RUN_VIDEO_STREAM_SUCCESS,
  RUN_VIDEO_STREAM_FAILURE,
  GET_CHANNEL_VIDEOS,
  CHANNEL_VIDEOS_SUCCESS,
  VIDEO_COLLECTION_SUCCESS,
  VIDEO_COLLECTION_FAILURE,
  CHANNEL_INFO_SUCCESS,
  CHANNEL_INFO_ERROR,
  GET_VIDEOS_NOW,
  VIDEO_NOW_SUCCESS,
  VIDEO_NOW_ERROR,
  GET_UPCOMING_VIDEOS,
  UPCOMING_VIDEOS_SUCCESS,
  UPCOMING_VIDEOS_ERROR,
  CHENNEL_DATA_ERROR,
} from '../Actions/types';

import initialState from '../Reducers/initialState';

/*
  Reducer
*/
export function playlistStore(state = initialState.playlist, action: any) {
  switch (action.type) {
    case RUN_VIDEO_STREAM_SUCCESS:
      return {
        ...state,
        nowPlayingData: action.payload,
        error: null,
      };
    case RUN_VIDEO_STREAM_FAILURE:
      return {
        ...state,
        nowPlayingData: [],
        error: action.payload,
      };

    case CHANNEL_VIDEOS_SUCCESS:
      return {
        ...state,
        channelVideos: action.payload,
        error: null,
      };
    case CHENNEL_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CHANNEL_INFO_SUCCESS:
      return {
        ...state,
        channelInfo: action.payload,
      };
    case CHANNEL_INFO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case VIDEO_COLLECTION_SUCCESS:
      return {
        ...state,
        videoCollection: action.payload,
      };
    case VIDEO_COLLECTION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UPCOMING_VIDEOS_SUCCESS:
      return {
        ...state,
        upcomingVideoCollection: action.payload,
      };
    case UPCOMING_VIDEOS_ERROR:
      return {
        ...state,
        error: action.payload,
        upcomingVideoCollection: [],
      };

    case CLEAR_STORES:
      return {
        ...state,
        channelVideos: [],
        error: null,
        nowPlayingData: [],
        upcomingVideoCollection: [],
        videoCollection: [],
      };
    default: {
      return state;
    }
  }
}

/*
  Epics
*/

const runChannelInfoEpic = (action$: any) =>
  action$
    .ofType(GET_CHANNEL_VIDEOS)
    .mergeMap((action: any) =>
      Observable.ajax(`${API_URI}/channels/${action.channelId}`).map(
        (payload: any) => {
          return {
            payload: payload.response,
            type: CHANNEL_INFO_SUCCESS,
          };
        },
      ),
    )
    .catch((error: any) =>
      Observable.of({
        payload: { error },
        type: CHANNEL_INFO_ERROR,
      }),
    );

const channelVideosEpic = (action$: any) =>
  action$
    .ofType(GET_CHANNEL_VIDEOS)
    .mergeMap((action: any) =>
      Observable.ajax(`${API_URI}/channels/${action.channelId}/videos`).map(
        (payload: any) => ({
          payload: payload.response.data,
          type: CHANNEL_VIDEOS_SUCCESS,
        }),
      ),
    )
    .catch((error: any) =>
      Observable.of({
        payload: { error },
        type: CHENNEL_DATA_ERROR,
      }),
    );

const videoStreamEpic = (action$: any) =>
  action$.ofType(RUN_VIDEO_STREAM).mergeMap((action: any) => {
    const header = {
      Authorization: action.token !== '' && 'Bearer '.concat(action.token),
    };
    return Observable.ajax
      .get(
        `${API_URI}/channels/${action.channelId}/videos/${
          action.videoId
        }/streamUrl`,
        action.token !== '' && header,
      )

      .map(payloadMap => ({
        payload: payloadMap.response.data,
        type: RUN_VIDEO_STREAM_SUCCESS,
      }))
      .catch(error =>
        Observable.of({
          payload: error,
          type: RUN_VIDEO_STREAM_FAILURE,
        }),
      );
  });

const videoCollectionsEpic = (action$: any) =>
  action$
    .ofType(GET_CHANNEL_VIDEOS)
    .mergeMap((action: any) =>
      Observable.ajax(
        `${API_URI}/channels/${action.channelId}/videos_collections?search=`,
      ).map(payload => {
        return {
          payload: payload.response.data,
          type: VIDEO_COLLECTION_SUCCESS,
        };
      }),
    )
    .catch((error: any) =>
      Observable.of({
        payload: { error },
        type: VIDEO_COLLECTION_FAILURE,
      }),
    );

const videoNowEpic = (action$: any) =>
  action$
    .ofType(GET_VIDEOS_NOW) /* Will be used later after user login */
    .mergeMap((action: any) =>
      Observable.ajax(`${API_URI}/${action.channelId}/now?`).map(payload => ({
        payload: payload.response.data,
        type: VIDEO_NOW_SUCCESS,
      })),
    )
    .catch((error: any) =>
      Observable.of({
        payload: { error },
        type: VIDEO_NOW_ERROR,
      }),
    );

const upcomingVideoEpic = (action$: any) =>
  action$
    .ofType(GET_UPCOMING_VIDEOS)
    .mergeMap((action: any) =>
      Observable.ajax(`${API_URI}/channels/${action.channelId}/schedule`).map(
        payload => ({
          payload: payload.response,
          type: UPCOMING_VIDEOS_SUCCESS,
        }),
      ),
    )
    .catch((error: any) =>
      Observable.of({
        payload: { error },
        type: UPCOMING_VIDEOS_ERROR,
      }),
    );

/*
  Export Epics
*/
export const playListEpic = combineEpics(
  videoStreamEpic,
  channelVideosEpic,
  videoCollectionsEpic,
  videoNowEpic,
  runChannelInfoEpic,
  upcomingVideoEpic,
);
