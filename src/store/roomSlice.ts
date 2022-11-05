import { createSlice } from "@reduxjs/toolkit";
import { RoomStatus } from "../types/RoomStatus";

type RoomState =  {
    status:RoomStatus,
    master: string
}

const initialState: RoomState = {
    status: RoomStatus.waitingForMasterGiveTip,
    master: "1"
}

export const slice = createSlice({
    name: 'room',
    initialState,
    reducers:{}
});

export const selectRoomStatus = (state:RoomState) => state.room.status;

export const selectMaster =
    (state:RoomState) => state.room.master;

export default slice.reducer;