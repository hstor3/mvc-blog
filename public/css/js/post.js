const newPost = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/post')
        } else {
            alert('Failed to create post.');
        }
    }
};

const deleteButton = async (e) => {
    if (e.target.hasAttribute('data-id')) {
        const id = e.target.getAttribute('data.id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/post')
        } else {
            alert('Failed to delete post.');
        }
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newPost);
document.querySelector('.post-list').addEventListener('click', deleteButton);