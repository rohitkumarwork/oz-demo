import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

// custom modules

import { mainStore, mainEpic } from './Reducers/mainReducer';
import { userStore, userEpic } from './Reducers/userReducer';
import { playlistStore, playListEpic } from './Reducers/playlistReducer';
import { drawerStore, drawerEpic } from './Reducers/drawerReducer';
import { momentEpic, momentStore } from './Reducers/momentReducer';

export const rootEpic = combineEpics(
  mainEpic,
  userEpic,
  playListEpic,
  drawerEpic,
  momentEpic,
);

export const rootReducer = combineReducers({
  mainStore,
  userStore,
  playlistStore,
  drawerStore,
  momentStore,
});
