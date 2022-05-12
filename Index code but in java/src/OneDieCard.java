
// Card.java -> OneDieCard
public class OneDieCard extends Card {
  protected String die1Type, die1Proq, die1Effect;
  protected int die1Low, die1High;

  public OneDieCard
    (int dice, String cardName, int flow, String cardEffects,
    int die1Low, int die1High, String die1Type,
    String die1Proq, String die1Effect){
      //refer to card.java
      super(dice, cardName, flow, cardEffects);
      // the lowest value of the die
      this.setDie1Low(die1Low);
      // the highest value of the die
      this.setDie1High(die1High);
      // Blunt, Slash, Peirce, Bless, Block, Evade?
      this.setDie1Type(die1Type);
      // how is the effect applied?
      this.setDie1Proq(die1Proq);
      // die effect if applied
      this.setDie1Effect(die1Effect);
  }
  
  // setter and getters just used to change the data as well as getting the data per card
  public String getDie1Type() {
    return this.die1Type;
  }

  public void setDie1Type(String die1Type) {
    this.die1Type = die1Type;
  }

  public String getDie1Proq() {
    return this.die1Proq;
  }

  public void setDie1Proq(String die1Proq) {
    this.die1Proq = die1Proq;
  }

  public String getDie1Effect() {
    return this.die1Effect;
  }

  public void setDie1Effect(String die1Effect) {
    this.die1Effect = die1Effect;
  }

  public int getDie1Low() {
    return this.die1Low;
  }

  public void setDie1Low(int die1Low) {
    this.die1Low = die1Low;
  }

  public int getDie1High() {
    return this.die1High;
  }

  public void setDie1High(int die1High) {
    this.die1High = die1High;
  }


  // puts it into a string into the console (will need to put this into the folder)
  public String toString() {
    // shows this if there is no die proq
    if (this.die1Proq == null || this.die1Proq.isEmpty()) {
      return "Card name: " + this.cardName +
        "\nFlow required to use: " + this.flow + 
        "\n " + this.cardEffects +
        "\n" + this.die1Low + "-" + this.die1High + " " + this.die1Type;
    } else { //this will be shown if there is a proq 
      return "Card name: " + this.cardName +
        "\nFlow required to use: " + this.flow + 
        "\n" + this.cardEffects +
        "\n" + this.die1Low + "-" + this.die1High + " " + this.die1Type +
        " | " + this.die1Proq + ": " + this.die1Effect;
    }
  }
}
