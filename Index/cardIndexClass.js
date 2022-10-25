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
    die1low, die1high, die1type, proq1 = null){
        super(dice, name, flow, cardeffect);
        this.die1low = die1low;
        this.die1high = die1high;
        this.die1type = die1type;
        if (proq1 != null) {
            this.proq1 = proq1;
        };
    };
}

class Card2die extends Card1die{
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1 = null,
    die2low, die2high, die2type, proq2 = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1, proq1Effect);
        this.die2low = die2low;
        this.die2high = die2high;
        this.die2type = die2type;
        if (proq2 != null) {
            this.proq2 = proq2;
        };
    };
}

class Card3die extends Card2die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1 = null,
    die2low, die2high, die2type, proq2 = null,
    die3low, die3high, die3type, proq3 = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1,
        die2low, die2high, die2type, proq2);
        this.die3low = die3low;
        this.die3high = die3high;
        this.die3type = die3type;
        if (proq3 != null){
            this.proq3 = proq3;
        }
    }
}

class Card4die extends Card3die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1 = null,
    die2low, die2high, die2type, proq2 = null,
    die3low, die3high, die3type, proq3 = null,
    die4low, die4high, die4type, proq4 = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1,
        die2low, die2high, die2type, proq2,
        die3low, die3high, die3type, proq3);
        this.die4low = die4low;
        this.die4high = die4high;
        this.die4type = die4type;
        if (proq4 !== null){
            this.proq4 = proq4;
        }
    }
}

class Card5die extends Card4die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1 = null,
    die2low, die2high, die2type, proq2 = null,
    die3low, die3high, die3type, proq3 = null,
    die4low, die4high, die4type, proq4 = null,
    die5low, die5high, die5type, proq5 = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1,
        die2low, die2high, die2type, proq2,
        die3low, die3high, die3type, proq3,
        die4low, die4high, die4type, proq4);
        this.die5low = die5low;
        this.die5high = die5high;
        this.die5type = die5type;
        if (proq5 !== null) {
            this.proq5 = proq5;
        }
    }
}

class Card6die extends Card5die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1 = null,
    die2low, die2high, die2type, proq2 = null,
    die3low, die3high, die3type, proq3 = null,
    die4low, die4high, die4type, proq4 = null,
    die5low, die5high, die5type, proq5 = null,
    die6low, die6high, die6type, proq6 = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1,
        die2low, die2high, die2type, proq2,
        die3low, die3high, die3type, proq3,
        die4low, die4high, die4type, proq4,
        die5low, die5high, die5type, proq5);
        this.die6low = die6low;
        this.die6high = die6high;
        this.die6type = die6type;
        if (proq6 !== null) {
            this.proq6 = proq6;
        }
    }
}

class Card7die extends Card6die {
    constructor(dice, name, flow, cardeffect,
    die1low, die1high, die1type, proq1 = null,
    die2low, die2high, die2type, proq2 = null,
    die3low, die3high, die3type, proq3 = null,
    die4low, die4high, die4type, proq4 = null,
    die5low, die5high, die5type, proq5 = null,
    die6low, die6high, die6type, proq6 = null,
    die7low, die7high, die7type, proq7 = null){
        super(dice, name, flow, cardeffect,
        die1low, die1high, die1type, proq1,
        die2low, die2high, die2type, proq2,
        die3low, die3high, die3type, proq3,
        die4low, die4high, die4type, proq4,
        die5low, die5high, die5type, proq5,
        die6low, die6high, die6type, proq6);
        this.die7low = die7low;
        this.die7high = die7high;
        this.die7type = die7type;
        if (proq7 !== null) {
            this.proq7 = proq7;
        }
    }
}
