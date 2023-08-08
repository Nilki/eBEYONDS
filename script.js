/**
 * Toggle the visibility of the language selection dropdown.
 */
function clickDropdownButton() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("show");

  /**
   * Attach click event listeners to language links in the dropdown.
   *
   * @param {HTMLElement} dropdown - The dropdown container element.
   */
  const languageLinks = dropdown.getElementsByTagName("a");
  for (const link of languageLinks) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedLanguage = link.getAttribute("data-lang");
      updateInputField(selectedLanguage);
      dropdown.classList.remove("show");
    });
  }
}

/**
 * Update the input field with the name of the selected language.
 *
 * @param {string} language - The language code of the selected language.
 */
function updateInputField(language) {
  const inputField = document.querySelector(".text-box");
  const languageName = getLanguageName(language);
  inputField.value = languageName;

  const welcomeElement = document.getElementById("welcome");
  const welcomeTo = {
    en: "WELCOME TO",
    de: "WILLKOMMEN ZU",
    fr: "BIENVENUE À",
    it: "BENVENUTO A",
  };

  if (welcomeTo.hasOwnProperty(language)) {
    welcomeElement.innerHTML = welcomeTo[language];
  } else {
    welcomeElement.innerHTML = "WELCOME TO"; // Default value
  }
}

/**
 * Get the full name of a language based on its language code.
 *
 * @param {string} code - The language code to retrieve the full name for.
 * @returns {string} The full name of the language corresponding to the given code.
 */
function getLanguageName(code) {
  switch (code) {
    case "en":
      return "English";
    case "de":
      return "German";
    case "fr":
      return "French";
    case "it":
      return "Italian";
    default:
      return "Select one";
  }
}
