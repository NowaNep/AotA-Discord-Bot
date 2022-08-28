class CardFormat{
    constructor(dice, name, flow, cardeffect){
        this.dice = dice;
        this.name = name;
        this.flow = flow;
        this.cardeffect = cardeffect;
    };
}

class Card1die extends Card{
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
    };
}

class Card2die extends Card1die{
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1, proq1Effect,
    die2low, die2high, die2type, proq2, proq2Effect){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1, proq1Effect);
        this.die2low = die2low;
        this.die2high = die2high;
        this.die2type = die2type;
        if (proq2 != null && proq2Effect != null) {
            this.proq2 = proq2;
            this.proq2Effect = proq2Effect;
        };
    };
}

class Card3die extends Card2die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1, proq1Effect,
    die2low, die2high, die2type, proq2, proq2Effect,
    die3low, die3high, die3type, proq3, proq3Effect){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1, proq1Effect,
        die2low, die2high, die2type, proq2, proq2Effect);
        
    }
}

class Card4die extends Card3die {

}

class Card5die extends Card4die {

}

class Card6die extends Card5die {

}

class Card7die extends Card6die {

}
