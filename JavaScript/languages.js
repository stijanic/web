var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (language in languages) {
    if (typeof languages[language] === "string") {
        console.log(languages[language]);
    }
}