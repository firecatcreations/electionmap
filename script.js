var createPolitician = function (name, color) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.color = color;
     
      
  politician.totalVotes = function () { 
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };

  return politician;
};


var hermione = createPolitician("Hermione",  [132, 17, 11]);
var bellatrix = createPolitician("Bellatrix", [245, 141, 136]);

hermione.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
bellatrix.electionResults =[4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

hermione.electionResults[9] = 1;
bellatrix.electionResults[9] = 28;

hermione.electionResults[4] = 17;
bellatrix.electionResults[4] = 38;

hermione.electionResults[43] = 11;
bellatrix.electionResults[43] = 27;

console.log(hermione.electionResults);
console.log(bellatrix.electionResults);

var setStateResults = function(state) {
  theStates[state].winner = null;
  
  if (hermione.electionResults[state] > bellatrix.electionResults[state]) {
    theStates[state].winner = hermione;
  }
  else if (hermione.electionResults[state] < bellatrix.electionResults[state]) {
    theStates[state].winner = bellatrix;
  }
  
  
 var stateWinner = theStates[state].winner;
  if (theStates[state].winner !== null) {
    theStates[state].rgbColor = stateWinner.color;
  }
  else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  
     
var stateInfoTable = document.getElementById("stateResults");
   var header = stateInfoTable.children[0];
   var stateName = header.children[0].children[0];
   var stateAbbrev = header.children[0].children[1];
   var body = stateInfoTable.children[1];
   var candidate1Name = body.children[0].children[0];
   var candidate1Result = body.children[0].children[1];
   var candidate2Name = body.children[1].children[0];
   var candidate2Result = body.children[1].children[1];
   var winnerName = body.children[2].children[1];

   stateName.innerText = theStates[state].nameFull;
   stateAbbrev.innerText = theStates[state].nameAbbrev;
   candidate1Name.innerText = hermione.name;
   candidate1Result.innerText = hermione.electionResults[state];
   candidate2Name.innerText = bellatrix.name;
   candidate2Result.innerText = bellatrix.electionResults[state];
 
 
  if (theStates[state].winner === null){
    winnerName.innerText = "DRAW";
  } else {
    winnerName.innerText = theStates[state].winner.name;
  }
}


hermione.totalVotes();
bellatrix.totalVotes();
console.log(hermione.totalVotes);
console.log(bellatrix.totalVotes);

var winner = "??";

if (hermione.totalVotes > bellatrix.totalVotes) {
  winner = hermione.name;
}
else if (hermione.totalVotes < bellatrix.totalVotes) {
  winner = bellatrix.name;
}
else {
  winner = "DRAW!"
}


console.log("The winner is... " + winner + "!");

console.log("Hermione's party color is " + hermione.color + "!");
console.log("Bellatrix's party color is " + bellatrix.color + "!");


var table = document.getElementById("countryResults");
var row = table.children[0].children[0];
  row.children[0].innerText = hermione.name;
  row.children[1].innerText = hermione.totalVotes;
  row.children[2].innerText = bellatrix.name;
  row.children[3].innerText = bellatrix.totalVotes;
  row.children[5].innerText = winner;


