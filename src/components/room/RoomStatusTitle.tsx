import { useSelector } from "react-redux";
import { selectCurrentPlayer } from "../../store/playersSlice";
import { selectRoomStatus, selectSelectedCards, selectVotes } from "../../store/roomSlice";
import { RoomStatus } from "../../types/RoomStatus";

export default function RoomStatusTitle()
{

    const roomStatus         = useSelector(selectRoomStatus);
    const roundSelectedCards = useSelector(selectSelectedCards);
    const roundVotes         = useSelector(selectVotes);
    const me                 = useSelector(selectCurrentPlayer);

    interface RoomStatusDescription{
        title: string,
        subtitle: string
    }

    let status:RoomStatusDescription = {
        title: '',
        subtitle: ''
    };

    if(roomStatus == RoomStatus.waitingForMasterGiveTip){
        status.title    = "Vez do(a) narador(a)!";
        status.subtitle = "Aguarde até que a carta seja escolhida.";
    }

    if(roomStatus == RoomStatus.waitingForPlayersCardSelection){

        if(!roundSelectedCards[me.id]){
            status.title    = "Sua vez!";
            status.subtitle = "Confunda seus oponentes escolhendo uma carta relacionada com a dica.";
        }else{
            status.title    = "Aguarde seus oponentes";
            status.subtitle = "Aguarde até que todos tenham escolhido suas cartas.";
        }
    }

    if(roomStatus == RoomStatus.waitingForPlayersVoting){

        if(!roundVotes[me.id]){
            status.title    = "Cartas reveladas!";
            status.subtitle = "Adivinhe a carta do narrador.";
        }else{
            status.title    = "Aguarde seus oponentes";
            status.subtitle = "Aguarde até que todos votem.";
        }
    }

    return(
        <>
            <h2 className="text-center">{status.title}</h2>
            <p className="text-center">{status.subtitle}</p>
        </>
    );
}