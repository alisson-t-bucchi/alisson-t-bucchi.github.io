let menuVisible = false;

function showMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function selection() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function skillsEffect() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progress");
    habilidades[0].classList.add("java");
    habilidades[1].classList.add("javascript");
    habilidades[2].classList.add("python");
    habilidades[3].classList.add("selenium");
    habilidades[4].classList.add("cypress");
    habilidades[5].classList.add("robot");
    habilidades[6].classList.add("machine-learning");
    habilidades[7].classList.add("comunication");
    habilidades[8].classList.add("teamwork");
    habilidades[9].classList.add("creativity");
    habilidades[10].classList.add("dedication");
    habilidades[11].classList.add("project");
  }
}

window.onscroll = function () {
  skillsEffect();
};
