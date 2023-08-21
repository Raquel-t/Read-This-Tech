document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.querySelector(".add-comment-form");

    commentForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const text = event.target.text.value;
        const postId = event.target.post_id.value;
        console.log("Comment Text:", text, "For Post ID:", postId);
        if (text && postId) {
            const response = await fetch("/api/comments", {
                method: "POST",
                body: JSON.stringify({
                    text,
                    post_id: postId
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                document.location.reload();
            } else {
                alert("Failed to post comment");
            }
        } else {
            alert("Please enter a comment");
        }
    });
});