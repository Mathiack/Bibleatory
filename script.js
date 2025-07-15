async function fetchRandomVerse() {
    const bible = {
        books: [ // yes, there are 66 books from Bible
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Leviticus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Numbers",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Deuteronomy",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Joshua",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Genesis",
                capLenght: 50,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            },
            {
                name: "Exodus",
                capLenght: 40,
                capNum: 1
            }
        ]
    }
    const bookList = ["Genesis", "Exodus", "Psalms", "Proverbs", "Isaiah", "Matthew", "Mark", "Luke", "John", "Romans"];
    const book = bookList[Math.floor(Math.random() * bookList.length)];
    const chapter = Math.floor(Math.random() * 10) + 1;
    const verse = Math.floor(Math.random() * 10) + 1;

    try {
        const res = await fetch(`https://bible-api.com/${book}%20${chapter}:${verse}?translation=almeida`);
        const data = await res.json();
        if (data.text) {
            document.getElementById("verse-text").innerText = data.text.trim();
            document.getElementById("verse-ref").innerText = `${data.reference}`;
        } else {
            document.getElementById("verse-text").innerText = "Versículo não encontrado. Tente novamente.";
            document.getElementById("verse-ref").innerText = "";
        }
    } catch (error) {
        document.getElementById("verse-text").innerText = "Erro ao buscar versículo.";
        document.getElementById("verse-ref").innerText = "";
    }
}

window.addEventListener("DOMContentLoaded", fetchRandomVerse);
document.getElementById("new-verse").addEventListener("click", fetchRandomVerse);

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();
        fetchRandomVerse();
    }
});