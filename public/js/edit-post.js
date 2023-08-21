const editPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#edit-post-title').value.trim();
    const content = document.querySelector('#edit-post-content').value.trim();
    const postId = window.location.pathname.split('/')[2]; // Extracts post ID from URL like '/edit-post/1'

    if (title && content) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update post');
        }
    }
};

document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editPostFormHandler);