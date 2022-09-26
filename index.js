// @review it's a good practice not to tie the code too much to global variables (in case we need to change things in the future)
// let cpuChoice;
// let userChoice;

// @review we are not "checking" the CPU choice, we are "getting" it
// function checkCpuChoice() {
  function getCpuChoice() {
  // @review since we only care about 0 and 1 in the conditions, maybe we want to top the randomness to 2
  // cpuChoice = Math.floor(Math.random() * 3);
  let cpuChoice = Math.floor(Math.random() * 2);

  // @review a switch/case here would be relevant =>
  switch (cpuChoice) {
    case 0:
      cpuChoice = "pierre";
      break;
    case 1:
      cpuChoice = "feuille";
      break;
    default:
      cpuChoice = "ciseaux";
      break;
  }
  // if (cpuChoice === 0) {
  //   cpuChoice = "pierre";
  //   return;
  // } else if (cpuChoice === 1) {
  //   cpuChoice = "feuille";
  //   return;
  // } else {
  //   cpuChoice = "ciseaux";
  //   return;
  // }

  // @review, this function does not return anything, is that intended ?
  return cpuChoice;
}

// @review no "franglais" renaming the function
// @review passing parameters to the function so no need to use a switch/case in the while loop
function gameResult(userChoice, cpuChoice) {
  if (userChoice === cpuChoice) {
    alert(
      "*************************__      ÉGALITÉ      __/*************************\n\n\n" +
        "Vous avez choisi : " +
        userChoice +
        ", la machine a également choisi " +
        cpuChoice
    );
  } else if (
    (userChoice === "feuille" && cpuChoice === "pierre") ||
    (userChoice === "pierre" && cpuChoice === "ciseaux") ||
    (userChoice === "ciseaux" && cpuChoice === "pierre")
  ) {
    alert(
      "*************************__      GAGNÉ       __/*************************\n\n\n" +
        "Vous avez choisi : " +
        userChoice +
        ", la machine a choisi : " +
        cpuChoice
    );
  } else {
    alert(
      "*************************__      PERDU       __/*************************\n\n\n" +
        "Vous avez choisi : " +
        userChoice +
        ", la machine a choisi : " +
        cpuChoice
    );
  }
}

while (true) {
  let userChoice = prompt("pierre, feuille, ciseaux ? ");

  // @review stopping the program if user choice is not valid
  if (!["pierre", "feuille", "ciseaux"].includes(userChoice)) {
    alert("Merci de taper un choix valide");
  }

  let cpuChoice = getCpuChoice();
  gameResult(userChoice, cpuChoice);

  // @review no need for this switch/case since `gameResult` takes parameters
  // switch (userChoice) {
  //   case "pierre":
  //     resultat();
  //     break;
  //   case "feuille":
  //     resultat();
  //     break;
  //   case "ciseaux":
  //     resultat();
  //     break;
  //   default:
  //     alert("Merci de taper un choix valide");
  //     break;
      // @review moving this function to declarations at the beginning of the script for readability
      // function resultat() {
      //   if (userChoice === cpuChoice) {
      //     alert(
      //       "*************************__      ÉGALITÉ      __/*************************\n\n\n" +
      //         "Vous avez choisit : " +
      //         userChoice +
      //         ", la machine a également choisit " +
      //         cpuChoice
      //     );
      //   } else if (
      //     (userChoice === "feuille" && cpuChoice === "pierre") ||
      //     (userChoice === "pierre" && cpuChoice === "ciseaux") ||
      //     (userChoice === "ciseaux" && cpuChoice === "pierre")
      //   ) {
      //     alert(
      //       "*************************__      GAGNÉ       __/*************************\n\n\n" +
      //         "Vous avez choisit : " +
      //         userChoice +
      //         ", la machine a choisit : " +
      //         cpuChoice
      //     );
      //   } else {
      //     alert(
      //       "*************************__      PERDU       __/*************************\n\n\n" +
      //         "Vous avez choisit : " +
      //         userChoice +
      //         ", la machine a choisit : " +
      //         cpuChoice
      //     );
      //   }
      // }
  // }

}
