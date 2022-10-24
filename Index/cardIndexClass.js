class CardFormat{
    constructor(dice, name, flow, cardeffect = null){
        this.dice = dice;
        this.name = name;
        this.flow = flow;
        if (cardeffect !=  null){
            this.cardeffect = cardeffect;
        }
    };
}

class Card1die extends Card{
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1 = null, proq1Effect = null){
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
    die1low, die1high, die1type, proq1 = null, proq1Effect = null,
    die2low, die2high, die2type, proq2 = null, proq2Effect = null){
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
    die2low, die2high, die2type, proq2 = null, proq2Effect = null,
    die3low, die3high, die3type, proq3 = null, proq3Effect = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1, proq1Effect,
        die2low, die2high, die2type, proq2, proq2Effect);
        this.die3low = die3low;
        this.die3high = die3high;
        this.die3type = die3type;
        if (proq3 != null && proq3Effect != null){
            this.proq3 = proq3;
            this.proq3Effect = proq3Effect;
        }
    }
}

class Card4die extends Card3die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1, proq1Effect,
    die2low, die2high, die2type, proq2 = null, proq2Effect = null,
    die3low, die3high, die3type, proq3 = null, proq3Effect = null,
    die4low, die4high, die4type, proq4 = null, proq4Effect = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1, proq1Effect,
        die2low, die2high, die2type, proq2, proq2Effect,
        die3low, die3high, die3type, proq3, proq3Effect);
        this.die4low = die4low;
        this.die4high = die4high;
        this.die4type = die4type;
        if (proq4 !== null && proq4Effect !== null){
            this.proq4 = proq4;
            this.proq4Effect = proq4Effect;
        }
    }
}

class Card5die extends Card4die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1, proq1Effect,
    die2low, die2high, die2type, proq2 = null, proq2Effect = null,
    die3low, die3high, die3type, proq3 = null, proq3Effect = null,
    die4low, die4high, die4type, proq4 = null, proq4Effect = null,
    die5low, die5high, die5type, proq5 = null, proq5Effect = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1, proq1Effect,
        die2low, die2high, die2type, proq2, proq2Effect,
        die3low, die3high, die3type, proq3, proq3Effect,
        die4low, die4high, die4type, proq4, proq4Effect);
        this.die5low = die5low;
        this.die5high = die5high;
        this.die5type = die5type;
        if (proq5 !== null && proq5Effect !== null) {
            this.proq5 = proq5;
            this.proq5Effect = proq5Effect;
        }
    }
}

class Card6die extends Card5die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1, proq1Effect,
    die2low, die2high, die2type, proq2 = null, proq2Effect = null,
    die3low, die3high, die3type, proq3 = null, proq3Effect = null,
    die4low, die4high, die4type, proq4 = null, proq4Effect = null,
    die5low, die5high, die5type, proq5 = null, proq5Effect = null,
    die6low, die6high, die6type, proq6 = null, proq6Effect = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1, proq1Effect,
        die2low, die2high, die2type, proq2, proq2Effect,
        die3low, die3high, die3type, proq3, proq3Effect,
        die4low, die4high, die4type, proq4, proq4Effect,
        die5low, die5high, die5type, proq5, proq5Effect);
        this.die6low = die6low;
        this.die6high = die6high;
        this.die6type = die6type;
        if (proq6 !== null && proq6Effect !== null) {
            this.proq6 = proq6;
            this.proq6Effect = proq6Effect;
        }
    }
}

class Card7die extends Card6die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1, proq1Effect,
    die2low, die2high, die2type, proq2 = null, proq2Effect = null,
    die3low, die3high, die3type, proq3 = null, proq3Effect = null,
    die4low, die4high, die4type, proq4 = null, proq4Effect = null,
    die5low, die5high, die5type, proq5 = null, proq5Effect = null,
    die6low, die6high, die6type, proq6 = null, proq6Effect = null,
    die7low, die7high, die7type, proq7 = null, proq7Effect = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1, proq1Effect,
        die2low, die2high, die2type, proq2, proq2Effect,
        die3low, die3high, die3type, proq3, proq3Effect,
        die4low, die4high, die4type, proq4, proq4Effect,
        die5low, die5high, die5type, proq5, proq5Effect,
        die6low, die6high, die6type, proq6, proq6Effect);
        this.die7low = die7low;
        this.die7high = die7high;
        this.die7type = die7type;
        if (proq7 !== null && proq7Effect !== null) {
            this.proq7 = proq7;
            this.die7type = die7type;
        }
    }
}
