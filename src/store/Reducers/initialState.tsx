// Action types
import { INIT } from '../Actions/types';

const initialState = {
  drawer: {
    myserviceData: [],
    error: null,
  },

  mainScreen: {
    chennelData: [],
    error: null,
  },

  playlist: {
    nowPlayingData: [],
    channelVideos: [],
    upcomingVideoCollection: [],
    videoCollection: [],
    channelInfo: [],
    error: null,
    errordata: 'abcd',
  },
  user: {
    user: null,
    phase: INIT,
    error: null,
  },
};

export default initialState;
