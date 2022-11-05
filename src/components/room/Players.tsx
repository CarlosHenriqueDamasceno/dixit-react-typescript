import '../../assets/css/Players.css'
import { useSelector } from 'react-redux';
import { selectPlayers } from '../../store/playersSlice';

function Players(){

    const players = useSelector(selectPlayers);

    return(
        <div className="d-flex align-items-center justify-content-center">
            {
                Object.values(players).map((player) => {
                    return (
                        <div key={player.id} className="font-monospace bg-white rounded-circle player-name-circle ms-3">
                            {player.initials}
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Players;