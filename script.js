async function fetchRandomVerse() {
    // 66 bible books. Maybe I can add more due the diff translations
    const bible = [
        { name: "Genesis", capLenght: 50 },
        { name: "Exodus", capLenght: 40 },
        { name: "Leviticus", capLenght: 27 },
        { name: "Numbers", capLenght: 36 },
        { name: "Deuteronomy", capLenght: 34 },
        { name: "Joshua", capLenght: 24 },
        { name: "Judges", capLenght: 21 },
        { name: "Ruth", capLenght: 4 },
        { name: "1 Samuel", capLenght: 31 },
        { name: "2 Samuel", capLenght: 24 },
        { name: "1 Kings", capLenght: 22 },
        { name: "2 Kings", capLenght: 25 },
        { name: "1 Chronicles", capLenght: 29 },
        { name: "2 Chronicles", capLenght: 36 },
        { name: "Ezra", capLenght: 10 },
        { name: "Nehemiah", capLenght: 13 },
        { name: "Esther", capLenght: 10 },
        { name: "Job", capLenght: 42 },
        { name: "Psalms", capLenght: 150 },
        { name: "Proverbs", capLenght: 31 },
        { name: "Ecclesiastes", capLenght: 12 },
        { name: "Isaiah", capLenght: 66 },
        { name: "Jeremiah", capLenght: 52 },
        { name: "Lamentations", capLenght: 5 },
        { name: "Ezekiel", capLenght: 48 },
        { name: "Daniel", capLenght: 12 },
        { name: "Hosea", capLenght: 14 },
        { name: "Joel", capLenght: 3 },
        { name: "Amos", capLenght: 9 },
        { name: "Obadiah", capLenght: 1 },
        { name: "Jonah", capLenght: 4 },
        { name: "Micah", capLenght: 7 },
        { name: "Nahum", capLenght: 3 },
        { name: "Habakkuk", capLenght: 3 },
        { name: "Zephaniah", capLenght: 3 },
        { name: "Haggai", capLenght: 2 },
        { name: "Zechariah", capLenght: 14 },
        { name: "Malachi", capLenght: 4 },
        { name: "Matthew", capLenght: 28 },
        { name: "Mark", capLenght: 16 },
        { name: "Luke", capLenght: 24 },
        { name: "John", capLenght: 21 },
        { name: "Acts", capLenght: 28 },
        { name: "Romans", capLenght: 16 },
        { name: "1 Corinthians", capLenght: 16 },
        { name: "2 Corinthians", capLenght: 13 },
        { name: "Galatians", capLenght: 6 },
        { name: "Ephesians", capLenght: 6 },
        { name: "Philippians", capLenght: 4 },
        { name: "Colossians", capLenght: 4 },
        { name: "1 Thessalonians", capLenght: 5 },
        { name: "2 Thessalonians", capLenght: 3 },
        { name: "1 Timothy", capLenght: 6 },
        { name: "2 Timothy", capLenght: 4 },
        { name: "Titus", capLenght: 3 },
        { name: "Philemon", capLenght: 1 },
        { name: "Hebrews", capLenght: 13 },
        { name: "James", capLenght: 5 },
        { name: "1 Peter", capLenght: 5 },
        { name: "2 Peter", capLenght: 3 },
        { name: "1 John", capLenght: 5 },
        { name: "2 John", capLenght: 1 },
        { name: "3 John", capLenght: 1 },
        { name: "Jude", capLenght: 1 },
        { name: "Revelation", capLenght: 22 }
    ];

    const book = bible[Math.floor(Math.random() * bible.length)];
    const chapter = Math.floor(Math.random() * book.capLenght) + 1;
    const translationField = document.getElementById("text-version");
    const translation = translationField.value;
    console.log(translation);


    const reference = `${book.name} ${chapter}`;
    const encoded = encodeURIComponent(reference);
    const url = `https://bible-api.com/${encoded}?translation=${translation}`;


    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.verses && data.verses.length > 0) {
            const verse = data.verses[Math.floor(Math.random() * data.verses.length)];
            document.getElementById("verse-text").innerText = verse.text.trim();
            document.getElementById("verse-ref").innerText = `${verse.book_name} ${verse.chapter}:${verse.verse}`;
        } else {
            document.getElementById("verse-text").innerText = "Nenhum versículo encontrado.";
            document.getElementById("verse-ref").innerText = "";
        }
    } catch (error) {
        document.getElementById("verse-text").innerText = "Erro ao buscar versículo.";
        document.getElementById("verse-ref").innerText = "";
        console.error(error);
    }
};

window.addEventListener("DOMContentLoaded", fetchRandomVerse);
document.getElementById("new-verse").addEventListener("click", fetchRandomVerse);