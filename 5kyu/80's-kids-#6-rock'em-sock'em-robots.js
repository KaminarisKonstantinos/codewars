// You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.

// Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tactics they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.

// Your job is to decide who wins.

// Example:

//  robot1 = {
//   "name": "Rocky",
//   "health": 100,
//   "speed": 20,
//   "tactics": ["punch", "punch", "laser", "missile"]
//  }
//  robot2 = {
//    "name": "Missile Bob",
//    "health": 100,
//    "speed": 21,
//    "tactics": ["missile", "missile", "missile", "missile"]
//  }
//  tactics = {
//    "punch": 20,
//    "laser": 30,
//    "missile": 35
//  }
 
//  fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."

// robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.

// Rules

//     A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
//     Robots alternate turns attacking. Tactics are used in order.
//     A fight is over when a robot has 0 or less health or both robots have run out of tactics.
//     A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
//     If both robots run out of tactics, whoever has the most health wins. If one robot has 0 health, the other wins. Return the message "{Name} has won the fight."
//     If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."


// My solution

function fight(robot1, robot2, tactics) {
    // Who robot will Rock 'em, Sock 'em?!
    
    let [attacker, defender] = (robot1.speed >= robot2.speed) ? [robot1, robot2] : [robot2, robot1];
    attacker.moveNo = 0, defender.moveNo = 0;
    
    let move = attacker.tactics[attacker.moveNo++];
    
    while (attacker.health>0 && (move || defender.tactics[defender.moveNo])) {
      if (move)
        defender.health -= tactics[move];
      let temp = defender;
      defender = attacker;
      attacker = temp;
      move = attacker.tactics[attacker.moveNo++]
    }
    
    if (attacker.health == defender.health)
      return "The fight was a draw.";
    
    return (defender.health > attacker.health) ? defender.name + " has won the fight.": attacker.name + " has won the fight.";
    
}