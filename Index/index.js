class CardFormat{
    constructor(dice, name, flow, cardeffect){
        this.dice = dice;
        this.name = name;
        this.flow = flow;
        this.cardeffect = cardeffect;
    }
}

class Card1die{
    constructor(dice, name, flow, cardeffect,
                die1low, die1high, die1type, proq1, proq1Effect){
        super(dice, name, flow, cardeffect);
        this.die1low = die1low;
        this.die1high = die1high;
        this.die1type = die1type;
        if (proq1 != null && proq1Effect != null) {
            this.proq1 = proq1;
            this.proq1Effect = proq1Effect;
        };
    }
}

