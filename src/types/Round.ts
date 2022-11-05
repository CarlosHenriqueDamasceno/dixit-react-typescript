import { ObjectKeyValue } from "./ObjectKeyValue";

export default class Round{

    count: number;
    masterId: string;
    tip: string | null;
    selectedCards: ObjectKeyValue;
    votes: ObjectKeyValue;

    constructor(
        count: number,
        masterId: string,
        tip: string | null,
        selectedCards: ObjectKeyValue,
        votes: ObjectKeyValue //playerId: PlayerIdCard
    ){
        this.count         = count;
        this.masterId      = masterId;
        this.tip           = tip;
        this.selectedCards = selectedCards;
        this.votes         = votes;
    }
}