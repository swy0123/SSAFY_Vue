async function fetchGetUser(postId) {
    const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await postResponse.json();
    const userId = post.userId;

    try {
        const userResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const user = await userResponse.json();
        return user;
    } catch (err) {
        console.log("Faile to fetch user:", err);
        return "Unknown";
    }
}

fetchGetUser(10).then((user) => console.log("user:", user));

