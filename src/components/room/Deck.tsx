import card from '../../assets/imgs/card.svg';

export default function Deck()
{
    return (
        <div className='row'>
            <div className="col-md-2">
                <img src={card}/>
            </div>
            <div className="col-md-2">
                <img src={card}/>
            </div>
            <div className="col-md-2">
                <img src={card}/>
            </div>
            <div className="col-md-2">
                <img src={card}/>
            </div>
            <div className="col-md-2">
                <img src={card}/>
            </div>
            <div className="col-md-2">
                <img src={card}/>
            </div>
        </div>
    );
}