let cpuChoice;
let userChoice;

function checkCpuChoice() {
  cpuChoice = Math.floor(Math.random() * 3);
  if (cpuChoice === 0) {
    cpuChoice = "pierre";
    return;
  } else if (cpuChoice === 1) {
    cpuChoice = "feuille";
    return;
  } else {
    cpuChoice = "ciseaux";
    return;
  }
}

while (true) {
  userChoice = prompt("pierre, feuille, ciseaux ? ");
  checkCpuChoice();
  switch (userChoice) {
    case "pierre":
      resultat();

      break;
    case "feuille":
      resultat();
      break;
    case "ciseaux":
      resultat();
      break;
    default:
      alert("Merci de taper un choix valide");
      break;

      function resultat() {
        if (userChoice === cpuChoice) {
          alert(
            "*************************__      ÉGALITÉ      __/*************************\n\n\n" +
              "Vous avez choisit : " +
              userChoice +
              ", la machine a également choisit " +
              cpuChoice
          );
        } else if (
          (userChoice === "feuille" && cpuChoice === "pierre") ||
          (userChoice === "pierre" && cpuChoice === "ciseaux") ||
          (userChoice === "ciseaux" && cpuChoice === "pierre")
        ) {
          alert(
            "*************************__      GAGNÉ       __/*************************\n\n\n" +
              "Vous avez choisit : " +
              userChoice +
              ", la machine a choisit : " +
              cpuChoice
          );
        } else {
          alert(
            "*************************__      PERDU       __/*************************\n\n\n" +
              "Vous avez choisit : " +
              userChoice +
              ", la machine a choisit : " +
              cpuChoice
          );
        }
      }
  }
}
