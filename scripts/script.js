import data from "/post-data.js"

document.getElementById("latest-post").style.backgroundImage = `url('${data[0].image2}')`;
document.querySelector("#latest-post .date").textContent = data[0].date
document.querySelector("#latest-post .title").textContent = data[0].title
document.querySelector("#latest-post .description").textContent = data[0].description

let postsToShow = 7;
const initialPosts = 7;
const increment = 3;
const btn = document.getElementById("btn-view-more");

function renderPosts() {
    document.getElementById("older-posts-container").innerHTML = data
        .slice(1, postsToShow)
        .map(({ image, date, title, description }) =>
            `<div class="older-posts-info-wrapper">
    <img src="${image}" alt="${title}">
    <p class="date">${date}</p>
    <h2 class="title">${title}</h2>
    <p class="description">${description}</p>
    </div>
    `).join("");
}

renderPosts();

btn.addEventListener("click", (e) => {
    if (btn.textContent === "View More") {
        postsToShow += increment;
        if (postsToShow >= data.length) {
            postsToShow = data.length;
            btn.textContent = "View Less";
        }
        renderPosts();
    } else { // When button says "View Less"
        postsToShow = initialPosts;
        btn.textContent = "View More";
        renderPosts();
    }
});