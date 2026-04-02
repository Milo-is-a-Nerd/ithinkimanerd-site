const videoIds = [
    "t8q9I4okhUA",
    "X77lo17IZPM",
    "iX-l388cczU",
    "RxXEiOiB0TY",
    "GAG5nxQvuMk",
    "0DghFzSe3Us"
];

const videoTitles = [
    "Newest Video",
    "Middle Child",
    "Third Youngest",
    "The Forgotten 4th",
    "Does It Even Matter What I Write Here?",
    "Why Are You Reading This?"
];

const videosContainer = document.getElementById("videos-container");
const loadMoreBtn = document.getElementById("load-more-btn");

let videosShown = 0;
const increment = 3;

function loadVideos() {
    const batchContainer = document.createElement("div");
    batchContainer.classList.add("videos-batch");

    for (let i = videosShown; i < videosShown + increment && i < videoIds.length; i++) {
        const card = document.createElement("div");
        card.classList.add("video-card");

        const wrapper = document.createElement("div");
        wrapper.classList.add("video-wrapper");

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoIds[i]}`;
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
    if (videosShown >= videoIds.length) {
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

