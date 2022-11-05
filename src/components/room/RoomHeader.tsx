import Players from "./Players";
import PlayerMenu from "./PlayerMenu";

export default function RoomHeader()
{
    return(
        <div className='row'>
            <div className='col-md-8 offset-2 d-flex justify-content-center align-items-center'>
                <Players/>
            </div>
            <div className='col-md-2 d-flex align-items-center justify-content-end'>
                <PlayerMenu/>
            </div>
        </div>
    );
}