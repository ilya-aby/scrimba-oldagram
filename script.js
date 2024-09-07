const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
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

function renderPosts(posts) {
    const main = document.querySelector("main");
    posts.forEach(post => {
        postContent = `
        <div class="container">
            <div class="post">
                <div class="post-header">
                    <img class="user-avatar" src="${post.avatar}" alt="User Avatar">
                    <div class="user-info">
                        <p class="bold-text">${post.name}</p>
                        <p class="light-text">${post.location}</p>
                    </div>
                </div>
                <img class="post-image" src="${post.post}" alt="Post Image">
                <div class="post-footer">
                    <div class="actions">
                        <img class="icon" src="images/icon-heart.png" alt="Heart Icon">
                        <img class="icon" src="images/icon-comment.png" alt="Comment Icon">
                        <img class="icon" src="images/icon-dm.png" alt="DM Icon">
                    </div>
                    <p class="bold-text">${post.likes} likes</p>
                    <p class="light-text"><span class="bold-text">${post.username}</span> ${post.comment}</p>
                </div>
            </div>
        </div>
        `

        main.innerHTML += postContent;
    });
}

renderPosts(posts);
