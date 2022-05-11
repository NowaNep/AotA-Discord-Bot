public class Card {
  protected String cardName, cardEffects;
  protected int dice, flow;

  public Card(int dice, String cardName, int flow, String cardEffects) {
    // used to show how many dice are in the card
    this.setDice(dice);
    // cards name
    this.setCardName(cardName);
    // how much flow is required
    this.setFlow(flow);
    // cards effects such as adding status or removing cards.
    this.setCardEffects(cardEffects);
  }


  //setters and getters
  public String getCardName() {
    return this.cardName;
  }

  public void setCardName(String cardName) {
    this.cardName = cardName;
  }

  public int getFlow() {
    return this.flow;
  }

  public void setFlow(int flow) {
    this.flow = flow;
  }

  public String getCardEffects() {
    return this.cardEffects;
  }

  public void setCardEffects(String cardEffects) {
    this.cardEffects = cardEffects;
  }

  public int getDice() {
    return this.dice;
  }

  public void setDice(int dice) {
    this.dice = dice;
  }

  public String toString() {
    return "Card name: " + this.cardName +
    "\nFlow required to use: " + this.flow + 
    "\n" + this.cardEffects;
  }
}
