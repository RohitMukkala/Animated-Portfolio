// Define DOM elements

const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// Load the User's color mode form the local storage.

function loadColorMode() {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleButton();
}

// Toggle the color mode

toggleButton.addEventListener("click", () => {
  saveColorMode();
});

// Save the user's preffered color mode to the local storage

function saveColorMode() {
  //   Check if the root element has a class of "dark-mode". If yes, then the current mode is switched
  //   to the light , and vice versa.
  const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";
  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleButton();
}

function updateToggleButton() {
  if (root.classList.contains("dark-mode")) {
    toggleButton.style.backgroundImage = "var(--moon)";
  } else {
    toggleButton.style.backgroundImage = "var(--sun)";
  }
}
