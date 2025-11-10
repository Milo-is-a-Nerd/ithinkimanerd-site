const playlistId = "UUba6x58CC9LoFdEBrDqTqjw";
const videosContainer = document.getElementById("videos-container");
const loadMoreBtn = document.getElementById("load-more-btn");

const videoTitles = [
    "Newest Video",
    "Middle Child",
    "Third Youngest",
    "We Barely Post so This is Probably like 6 Months Old",
    "Which Means This is 8 Months Old",
    "And This Being Over a Year Old"
];

let videosShown = 0;
const increment = 3;

function loadVideos() {
    const batchContainer = document.createElement("div");
    batchContainer.classList.add("videos-batch");

    for (let i = videosShown; i < videosShown + increment && i < videoTitles.length; i++) {
        const card = document.createElement("div");
        card.classList.add("video-card");

        const wrapper = document.createElement("div");
        wrapper.classList.add("video-wrapper");

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed?listType=playlist&list=${playlistId}&index=${i + 1}`;
        iframe.allowFullscreen = true;

        wrapper.appendChild(iframe);

        const title = document.createElement("div");
        title.classList.add("video-title");
        title.textContent = videoTitles[i];

        card.appendChild(wrapper);
        card.appendChild(title);

        batchContainer.appendChild(card);

        setTimeout(() => card.classList.add("show"), (i - videosShown) * 100);
    }

    videosContainer.appendChild(batchContainer);

    videosShown += increment;
    if (videosShown >= videoTitles.length) {
        loadMoreBtn.style.display = "none";
    }
}

loadVideos();
loadMoreBtn.addEventListener("click", loadVideos);

// Personal Favorites slide-up animation
const favoriteVideos = document.querySelectorAll(".favorite-video");
function revealFavorites() {
    const triggerBottom = window.innerHeight * 0.85;

    favoriteVideos.forEach((video, index) => {
        const rect = video.getBoundingClientRect().top;
        if (rect < triggerBottom) {
            setTimeout(() => video.classList.add("visible"), index * 200);
        }
    });
}

window.addEventListener("scroll", revealFavorites);
revealFavorites();
