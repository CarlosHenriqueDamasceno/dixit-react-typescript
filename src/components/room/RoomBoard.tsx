import { useSelector } from "react-redux";
import { selectCurrentPlayer, selectPlayers } from "../../store/playersSlice";
import { selectMaster, selectRoomStatus, selectSelectedCards } from "../../store/roomSlice";
import { RoomStatus } from "../../types/RoomStatus";
import Card from "./Card";
import GiveTipModal from "./GiveTipModal";
import RoomStatusTitle from "./RoomStatusTitle";
import SelectCardModal from "./SelectCardModal";

export default function RoomBoard()
{

    const players            = useSelector(selectPlayers);
    const master             = useSelector(selectMaster);
    const me                 = useSelector(selectCurrentPlayer);
    const roomStatus         = useSelector(selectRoomStatus);
    const roundSelectedCards = useSelector(selectSelectedCards);

    return(
        <div className="row mt-5">

            <RoomStatusTitle/>

            {
                Object.values(players).map(
                    player => <Card key={player.id} player={player.nick} status={1}/>
                )
            }

            <GiveTipModal show={roomStatus == RoomStatus.waitingForMasterGiveTip && master == me.id}/>
            <SelectCardModal show={roomStatus == RoomStatus.waitingForPlayersCardSelection && !roundSelectedCards[me.id]}/>
        </div>
    );
}