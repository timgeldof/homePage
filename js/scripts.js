fetch('https://quotes.rest/qod')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        document.getElementById("quote").innerText = myJson.contents.quotes[0].quote;
        document.getElementById("author").innerText = myJson.contents.quotes[0].author;

        console.log(myJson);
    });