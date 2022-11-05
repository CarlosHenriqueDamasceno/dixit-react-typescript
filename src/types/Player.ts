export default class Player{

    nick: string;
    initials: string;
    id: string;
    score: number;
    me: boolean;
    deck: Array<string>;

    constructor(
        id: string,
        nick: string,
        initials: string,
        score:number,
        me: boolean,
        deck: Array<string>,
    ){
        this.id       = id;
        this.nick     = nick;
        this.initials = initials;
        this.score    = score;
        this.me       = me;
        this.deck     = deck;
    }
}