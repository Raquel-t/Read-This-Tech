const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

const updateButtonHandler = async (event) => {
  if (event.target.classList.contains('update-btn')) {
    const id = event.target.getAttribute('data-id');
    // Navigate to a page where the user can edit the post, you might need to create this page.
    document.location.replace(`/edit-post/${id}`);
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostFormHandler);

  // Listener for the update buttons
const updateButtons = document.querySelectorAll('.update-btn');
updateButtons.forEach(btn => {
    btn.addEventListener('click', updateButtonHandler);
});

// Listener for the delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(btn => {
    btn.addEventListener('click', delButtonHandler);
});


