document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const postBtn = document.getElementById('post-btn');
    const postList = document.getElementById('post-list');

    // Handle login
    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple password validation (for demonstration purposes)
        if (username && password === 'password') {
            document.getElementById('user-username').textContent = username;
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('user-dashboard').style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });

    // Handle post
    postBtn.addEventListener('click', () => {
        const postContent = document.getElementById('post-content').value;
        const postItem = document.createElement('li');
        postItem.innerHTML = `
            <p>${postContent}</p>
            <p><small>Posted on: ${new Date().toLocaleString()}</small></p>
            <button class="like-btn">👍</button> <span class="like-count">0</span>
            <button class="dislike-btn">👎</button> <span class="dislike-count">0</span>
            <textarea class="comment-content" placeholder="Write your comment..."></textarea>
            <button class="comment-btn">Comment</button>
            <ul class="comment-list"></ul>
        `;
        postList.appendChild(postItem);

        // Add event listeners for like, dislike, and comment buttons
        postItem.querySelector('.like-btn').addEventListener('click', () => {
            const likeCount = postItem.querySelector('.like-count');
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });

        postItem.querySelector('.dislike-btn').addEventListener('click', () => {
            const dislikeCount = postItem.querySelector('.dislike-count');
            dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
        });

        postItem.querySelector('.comment-btn').addEventListener('click', () => {
            const commentContent = postItem.querySelector('.comment-content').value;
            const commentItem = document.createElement('li');
            commentItem.textContent = commentContent;
            postItem.querySelector('.comment-list').appendChild(commentItem);
        });

        // Emoji support for post and comments
        postItem.querySelector('.comment-content').addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(':)', '😊').replace(':(', '😢');
        });
    });

    // Emoji support for post content
    document.getElementById('post-content').addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(':)', '😊').replace(':(', '😢');
    });
});
