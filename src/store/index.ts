import {configureStore} from '@reduxjs/toolkit';
import playersReducer from './playersSlice';
import roomSlice from './roomSlice';

export default configureStore({
    reducer:{
        players: playersReducer,
        room: roomSlice
    }
});