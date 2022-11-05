import { useSelector } from "react-redux";
import { selectCurrentPlayer, selectPlayers } from "../../store/playersSlice";
import { selectMaster, selectRoomStatus } from "../../store/roomSlice";
import { RoomStatus } from "../../types/RoomStatus";
import Card from "./Card";
import GiveTipModal from "./GiveTipModal";

export default function RoomBoard()
{

    const players    = useSelector(selectPlayers);
    const master     = useSelector(selectMaster);
    const me         = useSelector(selectCurrentPlayer);
    const roomStatus = useSelector(selectRoomStatus);

    console.log(master)


    return(
        <div className="row mt-5">
            {
                Object.values(players).map(player => <Card key={player.id} player={player.nick} status={1}/>)
            }

            <GiveTipModal show={roomStatus == RoomStatus.waitingForMasterGiveTip && master == me.id}/>
        </div>
    );
}