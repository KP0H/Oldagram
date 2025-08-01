const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 123456
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsContainer = document.getElementById("posts-container")

class Post {
    constructor({ name, username, location, avatar, post, comment, likes }) {
        this.name = name
        this.username = username
        this.location = location
        this.avatar = avatar
        this.post = post
        this.comment = comment
        this.likes = likes
    }

    render() {
        return `
            <section class="post">
            <div class="user-wrapper">
                <img src="${this.avatar}" class="user-avatar" alt="Avatar of ${this.name}">
                <div class="post-user-info">
                    <span class="post-user-fullname">${this.name}</span>
                    <span>${this.location}</span>
                </div>
            </div>

            <img src="${this.post}" class="post-img" alt="Selfie of ${this.name}">

            <div class="buttons-wrapper">
                <button class="like-btn">
                    <img src="images/icon-heart.png" class="post-button-like">
                </button>
                <button>
                    <img src="images/icon-comment.png" class="post-button-comment">
                </button>
                <button>
                    <img src="images/icon-dm.png" class="post-button-share">
                </button>
            </div>

            <div class="likes-wrapper">
                <p class="likes">${this.likes.toLocaleString('en-US')} likes</p>
            </div>

            <div class="comments-wrapper">
                <p><span class="comment-user">${this.username}</span> ${this.comment}</p>
            </div>
        </section>
        `
    }
}

posts.forEach(post => {
    const postData = new Post(post);
    postsContainer.innerHTML += postData.render();
});

const likes = document.getElementsByClassName("likes")
const addLikesButtons = document.getElementsByClassName("like-btn")
const postImgs = document.getElementsByClassName("post-img")

for (let i = 0; i < addLikesButtons.length; i++) {
    addLikesButtons[i].addEventListener("click", () => addLike(i))

    postImgs[i].addEventListener("dblclick", () => addLike(i))
}

function addLike(i) {
    let currentLikes = parseInt(likes[i].textContent.replace(/,/g, ''))
    currentLikes++
    likes[i].textContent = `${currentLikes.toLocaleString('en-US')} likes`
}