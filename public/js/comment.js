// let post = ('/post')

const newComment = async (e) => {
    e.preventDefault();

    const id = document.querySelector('#post_id').value.trim();
    const body = document.querySelector('.comment-input').value.trim();

    if (body) {
        const response = await fetch(`/api/posts/${id}/comment`, {
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload()
        } 
    }
};

// const deleteComment = async (e) => {
//     // check get attribute
//     const id = e.target.getAttribute('id');
//     const response = await fetch(`/api/comments/${id}`, {
//         method: 'DELETE',
//     });

//     if (response.ok) {
//         document.location.replace('/posts')
//     }
// };

// add query selector from button
let confirmComment = document.querySelector('#confirm-comment');
if (confirmComment) {
    confirmComment.addEventListener('click', newComment)
};

// add query selector from button
// let removeComment = document.querySelector('');
// if (removeComment) {
//     removeComment.addEventListener('click', deleteComment)
// };