const newPost = async (e) => {
    e.preventDefault();

    console.log('foeiauralkj')
    const title = document.querySelector('.post-input').value.trim();
    const body = document.querySelector('.post-body').value.trim();
    console.log(title, body)

    if (title && body) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
};

// const deleteButtons = async (e) => {
//     if (e.target.hasAttribute('')) {

//         const id = e.target.getAttribute('data.id');
//         const response = await fetch(`/api/posts/${id}`, {

//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.replace('/')
//         } else {
//             alert(response.statusText);
//         }
//     }
// }

document.querySelector('#confirm-post').addEventListener('click', newPost);
// document.querySelector('.posts').addEventListener('click', deleteButton);