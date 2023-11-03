const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
    console.log("\r\n  __    __ _ _ _ _                   _           ___           _                     _ \r\n\/ \/ \/\\ \\ (_) | (_) __ _ _ __ ___   (_)_ __     \/ _ \\___  _ __| |_ _   _  __ _  __ _| |\r\n\\ \\\/  \\\/ \/ | | | |\/ _` | \'_ ` _ \\  | | \'_ \\   \/ \/_)\/ _ \\| \'__| __| | | |\/ _` |\/ _` | |\r\n \\  \/\\  \/| | | | | (_| | | | | | | | | | | | \/ ___\/ (_) | |  | |_| |_| | (_| | (_| | |\r\n  \\\/  \\\/ |_|_|_|_|\\__,_|_| |_| |_| |_|_| |_| \\\/    \\___\/|_|   \\__|\\__,_|\\__, |\\__,_|_|\r\n                                                                        |___\/         \r\n")

let playerName = '';

const intro = () => {
  console.log("Welkom bij het avontuur van William in Portugal!");
  rl.question("Wat is jouw naam? ", (name) => {
    playerName = name;
    console.log(`Welkom, ${playerName}!`);
    startJourney();
  });
};

const startJourney = () => {
  console.log("Je bent op weg naar Portugal.");
  rl.question("Je komt aan op een kruispunt. Ga je links (1) of rechts (2)? ", (choice) => {
    if (choice === '1') {
      choice1();
    } else if (choice === '2') {
      choice2();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      startJourney();
    }
  });
};

const continueJourney = () => {
    console.log("\r\n \r\n                     |\r\n                   .\' `.\r\n                : (     ) :\r\n     .      |  ( )`._ _.\'( )  |      .\r\n     O  .   |`-  -|  .  |-  -\'|   .  O\r\n     H  o   |A \/\\ | ( ) | \/\\ A|   o  H\r\n     H  I   |  -\' | | | | `-  |   I  H\r\n    .H__T___|_|___|_|_|_|___|_|___T__H.\r\n    |_________________________________|\r\n                 \/       \\\r\n                \/         \\     \r\n               \/           \\\r\n")
    console.log("Na je tijd in het dorp, vervolg je je reis en bereik je een oude tempel.");
  rl.question("Ga je de tempel betreden (1) of besluit je verder te reizen (2)? ", (choice) => {
    if (choice === '1') {
      choice6();
    } else if (choice === '2') {
      choice7();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      continueJourney();
    }
  });
};

const choice1 = () => {
  console.log("Je hebt de linkse weg gekozen en komt bij een prachtig strand.");
  rl.question("Ga je zwemmen (1) of loop je verder (2)? ", (choice) => {
    if (choice === '1') {
      console.log(`Je hebt een geweldige tijd op het strand, ${playerName}.`);
      endGame();
    } else if (choice === '2') {
      continueJourney();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      choice1();
    }
  });
};

const choice2 = () => {
  console.log("Je hebt de rechtse weg gekozen en komt bij een mysterieus bos.");
  rl.question("Ga je het bos in (1) of keer je om (2)? ", (choice) => {
    if (choice === '1') {
      choice3();
    } else if (choice === '2') {
      continueJourney();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      choice2();
    }
  });
};

const choice3 = () => {
  console.log("Je vervolgt je reis.");
  rl.question("Je komt bij een dorp. Ga je het dorp verkennen (1) of doorlopen (2)? ", (choice) => {
    if (choice === '1') {
      console.log(`Je hebt een geweldige tijd in het dorp, ${playerName}.`);
      endGame();
    } else if (choice === '2') {
      continueJourney();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      choice3();
    }
  });
};

const choice4 = () => {
  console.log("Je betreedt het mysterieuze bos.");
  rl.question("Ga je dieper het bos in (1) of probeer je de weg terug te vinden (2)? ", (choice) => {
    if (choice === '1') {
      choice10();
    } else if (choice === '2') {
      continueJourney();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      choice4();
    }
  });
};

const choice5 = () => {
  console.log("Je loopt verder en bereikt uiteindelijk Portugal.");
  console.log(`Je hebt het avontuur voltooid, ${playerName}.`);
  endGame();
};

const choice6 = () => {
  console.log("Je betreedt de oude tempel en ontdekt een mysterieuze schat.");
  rl.question("Wil je de schat meenemen (1) of de tempel verlaten (2)? ", (choice) => {
    if (choice === '1') {
      console.log(`Je hebt de schat meegenomen, ${playerName}.`);
      endGame();
    } else if (choice === '2') {
      continueJourney();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      choice6();
    }
  });
};

const choice7 = () => {
  console.log("Je besluit verder te reizen en bereikt een betoverend bos met glinsterende vuurvliegjes.");
  rl.question("Blijf je in het bos (1) of ga je verder op zoek naar nieuwe avonturen (2)? ", (choice) => {
    if (choice === '1') {
      console.log(`Je geniet van de betoverende sfeer in het bos, ${playerName}.`);
      endGame();
    } else if (choice === '2') {
      choice8();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      choice7();
    }
  });
};

const choice8 = () => {
    console.log("\r\n                                  |>>>\r\n                                  |\r\n                    |>>>      _  _|_  _         |>>>\r\n                    |        |;| |;| |;|        |\r\n                _  _|_  _    \\\\.    .  \/    _  _|_  _\r\n               |;|_|;|_|;|    \\\\:. ,  \/    |;|_|;|_|;|\r\n               \\\\..      \/    ||;   . |    \\\\.    .  \/\r\n                \\\\.  ,  \/     ||:  .  |     \\\\:  .  \/\r\n                 ||:   |_   _ ||_ . _ | _   _||:   |\r\n                 ||:  .|||_|;|_|;|_|;|_|;|_|;||:.  |\r\n                 ||:   ||.    .     .      . ||:  .|\r\n                 ||: . || .     . .   .  ,   ||:   |       \\,\/\r\n                 ||:   ||:  ,  _______   .   ||: , |            \/`\\\r\n                 ||:   || .   \/+++++++\\    . ||:   |\r\n                 ||:   ||.    |+++++++| .    ||: . |\r\n              __ ||: . ||: ,  |+++++++|.  . _||_   |\r\n     ____--`~    \'--~~__|.    |+++++__|----~    ~`---,              ___\r\n-~--~                   ~---__|,--~\'                  ~~----_____-~\'   `~----~~")
    console.log("Je reist verder en komt bij een majestueus kasteel aan de kust van Portugal.");
  rl.question("Ga je het kasteel verkennen (1) of reis je verder langs de kust (2)? ", (choice) => {
    if (choice === '1') {
      console.log(`Je ontdekt de geschiedenis van het kasteel en geniet van de prachtige uitzichten, ${playerName}.`);
      endGame();
    } else if (choice === '2') {
      choice9();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      choice8();
    }
  });
};

const choice9 = () => {
  console.log("Je reist verder langs de kust en komt uiteindelijk aan bij een bruisende havenstad in Portugal.");
  console.log(`Je hebt een geweldige reis gemaakt, ${playerName}, en vele avonturen beleefd.`);
  endGame();
};

const choice10 = () => {
  console.log("Je gaat dieper het mysterieuze bos in.");
  rl.question("Je hoort vreemde geluiden. Ga je op onderzoek uit (1) of probeer je onopgemerkt verder te reizen (2)? ", (choice) => {
    if (choice === '1') {
      console.log("Je ontdekt een geheime grot met een magische bron.");
      rl.question("Drink je van het water (1) of verlaat je snel de grot (2)? ", (choice) => {
        if (choice === '1') {
          console.log(`Je hebt het magische water gedronken, ${playerName}, en voelt je sterker dan ooit!`);
          endGame();
        } else if (choice === '2') {
          continueJourney();
        } else {
          console.log("Ongeldige keuze. Probeer opnieuw.");
          choice10();
        }
      });
    } else if (choice === '2') {
      continueJourney();
    } else {
      console.log("Ongeldige keuze. Probeer opnieuw.");
      choice10();
    }
  });
};

const endGame = () => {
  rl.close();
};

intro();

//Dit verhaal is een beetje gebaseerd op fantasie en omdat ik in Portugal woon , ik probeerde het meer advontuurlijk te maken.
