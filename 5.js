class Electric {
    constructor(item, power) {
    this.item = item;
    this.power = power;
    this.plugged = false;
  }
  
  plugIn = function() {
    console.log(this.item + " - включено");
    this.isPlugged = true;
  }
  
  getPower = function() {
    return this.isPlugged ? this.power : 0;
  }
  }
  
  const lamp = new Electric('Lamp', 60);
  const computer = new Electric('Computer', 500);
  
  console.log(lamp.getPower() + computer.getPower());
  
  lamp.plugIn();
  console.log(lamp.getPower() + computer.getPower());
  
  computer.plugIn();
  console.log(lamp.getPower() + computer.getPower());