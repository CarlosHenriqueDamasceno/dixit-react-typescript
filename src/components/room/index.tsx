import RoomBoard from "./RoomBoard";
import RoomHeader from "./RoomHeader";

function Room()
{
    return(
        <div className="position-relative container p-3">
            <RoomHeader/>
            <RoomBoard/>
        </div>
    );
}

export default Room;