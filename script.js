async function fetchRandomVerseFromXML() {

    const translationField = document.getElementById("text-version");
    const translation = translationField.value;

    try {
        const res = await fetch("bible/por-almeida.usfx.xml"); // arquivo local

        if (translation == "almeida") {
            res = await fetch("bible/por-almeida.usfx.xml");
        } else if (translation == "kjv") {
            res = await fetch("bible/eng-kjv.osis.xml");
        }
        
        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");

        const books = Array.from(xml.getElementsByTagName("book"));
        const randomBook = books[Math.floor(Math.random() * books.length)];

        const bookName = randomBook.getElementsByTagName("h")[0]?.textContent ?? "Desconhecido";
        const chapters = Array.from(randomBook.getElementsByTagName("c"));
        const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];

        const verses = Array.from(randomChapter.getElementsByTagName("v"));
        const randomVerse = verses[Math.floor(Math.random() * verses.length)];

        const chapterNumber = randomChapter.getAttribute("id");
        const verseNumber = randomVerse.getAttribute("id");
        const verseText = randomVerse.textContent;

        document.getElementById("verse-text").innerText = verseText;
        document.getElementById("verse-ref").innerText = `${bookName} ${chapterNumber}:${verseNumber}`;

    } catch (error) {
        console.error("Erro ao carregar XML:", error);
        document.getElementById("verse-text").innerText = "Erro ao carregar versículo.";
        document.getElementById("verse-ref").innerText = "";
    }
}

// Ativação
window.addEventListener("DOMContentLoaded", fetchRandomVerseFromXML);
document.getElementById("new-verse").addEventListener("click", fetchRandomVerseFromXML);
