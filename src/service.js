export function fetchWord() {
    return fetch("https://api.dictionaryapi.dev/api/v2/entries/en/<word>", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    }).then((response) => response.json());
  }

export function fetchQuote() {
    return fetch("https://icanhazdadjoke.com/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    }).then((response) => response.json());
  }