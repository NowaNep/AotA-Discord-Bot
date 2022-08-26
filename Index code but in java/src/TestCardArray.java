import java.util.*;

public class TestCardArray {
  private String cardName, cardEffects, cardType;
  private int dice, flow;
  private ArrayList<Integer> lowValueRole = new ArrayList<Integer>(); private ArrayList<Integer> highValueRole = new ArrayList<Integer>(); 
  private ArrayList<Integer> dieType = new ArrayList<Integer>(); private ArrayList<Integer> dieProq = new ArrayList<Integer>(); private ArrayList<Integer> proqEffect = new ArrayList<Integer>();

  public TestCardArray(
    int dice, String cardName, int flow, String cardEffects, String cardType,
    int[] lowValueRole, int[] highValueRole, String[] dieType,
    String[] dieProq, String[] proqEffect) {

    }

  public String getCardName() {
    return this.cardName;
  }

  public void setCardName(String cardName) {
    this.cardName = cardName;
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

  public int getFlow() {
    return this.flow;
  }

  public void setFlow(int flow) {
    this.flow = flow;
  }

  public String getCardType() {
    return this.cardType;
  }

  public void setCardType(String cardType) {
    this.cardType = cardType;
  }

  public ArrayList<Integer> getLowValueRole() {
    return this.lowValueRole;
  }

  public void setLowValueRole(ArrayList<Integer> lowValueRole) {
    this.lowValueRole.clear();
    for (int i = 0; i < lowValueRole.size(); i++) {
      this.lowValueRole.add(lowValueRole.get(i));
    }
  }

  public ArrayList<Integer> getHighValueRole() {
    return this.highValueRole;
  }

  public void setHighValueRole(ArrayList<Integer> highValueRole) {
    this.highValueRole.clear();
    for (int i = 0; i < highValueRole.size(); i++) {
      this.highValueRole.add(highValueRole.get(i));
    }
  }

  public ArrayList<Integer> getDieType() {
    return this.dieType;
  }

  public void setDieType(ArrayList<Integer> dieType) {
    this.dieType.clear();
    for (int i = 0; i < dieType.size(); i++) {
      this.dieType.add(dieType.get(i));
    }
  }

  public ArrayList<Integer> getDieProq() {
    return this.dieProq;
  }

  public void setDieProq(ArrayList<Integer> dieProq) {
    this.dieProq.clear();
    for (int i = 0; i < dieProq.size(); i++) {
      this.dieProq.add(dieProq.get(i));
    }
  }

  public ArrayList<Integer> getProqEffect() {
    return this.proqEffect;
  }

  public void setProqEffect(ArrayList<Integer> proqEffect) {
    this.proqEffect.clear();
    for (int i = 0; i < proqEffect.size(); i++) {
      this.proqEffect.add(proqEffect.get(i));
    }
  }

 /* THIS SHIT IS TOO COMPLICATED IAGHASFGHJKASHGJKL;ASHGJKLAHJFLAJOSD;FJASIP'F
  public String toString(){
    switch (this.dice){
      case 0: 
        return (this.cardName + ", " + this.flow + ", " + this.cardEffects);
      case 1:
        String cardLine = this.cardName + ", " + this.flow + ", " + this.cardEffects;
        String die1 = this.lowValueRole.get(0) + "-" + this.highValueRole.get(0) + " " + this.dieType.get(0) +
              ", " + this.dieProq.get(0) + ", " + this.proqEffect.get(0); 
        return cardLine + "\n" + die1;
      case 2:
        String cardLine2 = this.cardName + ", " + this.flow + ", " + this.cardEffects;
        String die21 = this.lowValueRole.get(1) + "-" + this.highValueRole.get(0) + " " +  this.dieType.get(0) +
              ", "  

      case 3:
        String cardLine3 = this.cardName + ", " + this.flow + ", " + this.cardEffects;

      case 4:
        String cardLine4 = this.cardName + ", " + this.flow + ", " + this.cardEffects;
      case 5:
        String cardLine5 = this.cardName + ", " + this.flow + ", " + this.cardEffects;
      case 6:
        String cardLine6 = this.cardName + ", " + this.flow + ", " + this.cardEffects;
      case 7:
        String cardLine7 = this.cardName + ", " + this.flow + ", " + this.cardEffects;
      default:
        return "dice on this card is unavailable";
    }
  }
  */

  public String toString(){
    return "fuck you";
  }

}
