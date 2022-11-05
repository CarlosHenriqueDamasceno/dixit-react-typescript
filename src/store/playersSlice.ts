import {createSlice } from '@reduxjs/toolkit';
import Player from '../types/Player';

type PlayersState = {
    [key: string]:Player
};

const initialState: PlayersState = {
    '1': {
        id: '1',
        initials: 'CA',
        nick: 'Carlos',
        score: 0,
        deck:[],
        me: true,
    },
    '2': {
        id: '2',
        initials: 'BM',
        nick: 'Brendo Maciel',
        score: 0,
        deck:[],
        me: false,
    },
    '3': {
        id:'3',
        initials: 'GS',
        nick: 'Gerlan Stanley',
        score: 0,
        deck:[],
        me: false,
    },
    '4': {
        id: '4',
        initials: 'DM',
        nick: 'Davi Matos',
        score: 0,
        deck:[],
        me: false,
    },
    '5': {
        id: '5',
        initials: 'MQ',
        nick: 'Miqueias',
        score: 0,
        deck:[],
        me: false
    },
    '6': {
        id: '6',
        initials: 'MS',
        nick: 'Mossoró',
        score: 0,
        deck:[],
        me: false,
    }
};


export const slice = createSlice({
    name: 'players',
    initialState,
    reducers:{}
});

export const selectPlayers = (state:PlayersState) => state.players;

export const selectCurrentPlayer =
    (state:PlayersState) => Object.values(state.players).find((e:Player) => e.me);

export default slice.reducer;