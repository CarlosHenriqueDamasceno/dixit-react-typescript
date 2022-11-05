import card from '../../assets/imgs/card.svg';

export enum CardStatus {
    waiting  = 1,
    selected = 2,
    reveled  = 3,
};

type CardProps = {
    player: string,
    status: CardStatus
}

export default function Card(props:CardProps)
{
    return(
        <div className='col-md-4 text-center mt-3'>
            <div className='row'>
                <label className="text-white">{props.player}</label>
            </div>
            <div className='row d-flex justify-content-center'>
                <img src={card} style={{maxWidth:'200px'}}/>
            </div>
        </div>
    );
}