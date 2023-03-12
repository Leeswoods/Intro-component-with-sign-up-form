// On chercher à l'aide de querySelector la class Form
const form = document.querySelector(".Form");

// On va chercher les éléments du formulaires, les inputs
const firstName = form.elements["First Name"];
const lastName = form.elements["Last Name"];
const email = form.elements["Email Address"];
const password = form.elements["Password"];

// Ecoute du bouton au moment du clique
form.addEventListener("submit", (event) => {
  // Vérifier si les champs requis sont vides
  if (firstName.value === "") {
    showError(firstName, "First Name cannot be empty");
    event.preventDefault();
  }
  if (lastName.value === "") {
    showError(lastName, "Last Name cannot be empty");
    event.preventDefault();
  }
  if (email.value === "") {
    showError(email, "Email Address cannot be empty");
    event.preventDefault();
  }
  if (password.value === "") {
    showError(password, "Password cannot be empty");
    event.preventDefault();
  }

  // Vérifier si l'adresse électronique est formatée correctement
  // Utilisation de la méthode Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    showError(email, "Looks like this is not an email");
    event.preventDefault();
  }
});

// Fonction qui montre les Erreurs
function showError(input, message) {
  const errorDiv = input.parentElement.querySelector(".error-message");
  if (errorDiv) {
    errorDiv.textContent = message;
  } else {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
  }
  input.classList.add("error");

  // Ajouter les styles pour les erreurs
  input.style.borderColor = "red";
  const errorText = input.parentElement.querySelector(".error-message");
  errorText.style.color = "red";
}
