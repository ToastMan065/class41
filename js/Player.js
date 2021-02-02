//creating the class
class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  //getting which player is being used
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //updating the counts
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //getting the player names and distance
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //getting player info
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  //getting the rank by cars at end data
  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data) => {
      this.rank = data.val();
    });
  }

  //changing the rank of the cars
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd:rank
    })
  }
}
