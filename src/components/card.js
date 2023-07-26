const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement("div");
  const headline1 = document.createElement("div");
  const author1 = document.createElement("div");
  const imgCont1 = document.createElement("div");
  const authorPhoto = document.createElement("img");
  const authorName = document.createElement("span");

  headline1.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  card.appendChild(headline1);
  card.appendChild(author1);
  author1.appendChild(imgCont1);
  imgCont1.appendChild(authorPhoto);
  author1.appendChild(authorName);

  card.classList.add("card");
  headline1.classList.add("headline");
  author1.classList.add("author");
  imgCont1.classList.add("img-container");

  card.addEventListener("click", () => {
    console.log(article.headline);
  });

  return card;
};

const cardAppender = (selector) => {
  const parentElement = document.querySelector(selector);
  axios
    .get(`http://localhost:5001/api/articles`)
    .then((resp) => {
      const bootstrap = resp.data.articles.bootstrap;
      bootstrap.forEach((elem) => {
        parentElement.appendChild(Card(elem));
      });
      const javascript = resp.data.articles.javascript;
      javascript.forEach((elem) => {
        parentElement.appendChild(Card(elem));
      });
      const technology = resp.data.articles.technology;
      technology.forEach((elem) => {
        parentElement.appendChild(Card(elem));
      });
      const jquery = resp.data.articles.jquery;
      jquery.forEach((elem) => {
        parentElement.appendChild(Card(elem));
      });
      const node = resp.data.articles.node;
      node.forEach((elem) => {
        parentElement.appendChild(Card(elem));
      });
    })

    .catch((err) => {
      console.error(err);
    });
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
