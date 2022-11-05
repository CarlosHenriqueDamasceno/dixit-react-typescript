import { createSlice } from "@reduxjs/toolkit";
import { RoomStatus } from "../types/RoomStatus";
import Round from "../types/Round";

type RoomState =  {
    status:RoomStatus,
    round: Round
}

const initialState: RoomState = {
    status: RoomStatus.waitingForMasterGiveTip,
    round:{
        count: 1,
        masterId: '2',
        selectedCards: {},
        votes:{},
        tip: null
    }
}

export const slice = createSlice({
    name: 'room',
    initialState,
    reducers:{}
});

export const selectRoomStatus = (state:RoomState) => state.room.status;

export const selectMaster = (state:RoomState) => state.room.round.masterId;

export const selectSelectedCards = (state:RoomState) => state.room.round.selectedCards;

export const selectVotes = (state:RoomState) => state.room.round.votes;

export default slice.reducer;