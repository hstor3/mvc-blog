// const router = require('express').Router();
// const { Post, Comment } = require('../../models');

// // const commentData = Post.findAll({
// //     include: [
// //         {
// //             model: Comment
// //         },
// //     ],
// // });

// // const comments = commentData.map((comment) => comment.get({ plain: true }));
// // res.render('comments', {
// //     comments
// // });
// router.get('/comments', async (req, res) => {
//     const comments = await Comment.findAll({
//         include: [
//             {
//                 model: Post,
//                 attributes: ['posts', 'username'],
//             },
//         ],
//     });
// const comment = comments.map((com) => comment.get({ plain: true }))
// res.render('comments', {
//     comment
// })

// })

// router.post('/comments', (req, res) => {
//     Comment.create(req.body).then((newComment) => {
//         res.status(200).json(newComment)
//     }).then(() => {
//         res.redirect('/posts')
//     })
// });

// router.put('/:id', (req, res) => {
//     Comment.update(req.body, {
//         where: {
//             id: req.params.id,
//         }
//     }).then(commentUpdate => {
//         res.status(200).json(commentUpdate)
//     })
// });

// router.put('/comments', async (req, res) => {
//     res.redirect('/posts')
//     return;
// });

// router.delete('/:id', (req, res) => {
//     Comment.destroy({
//         where: {
//             id: req.params.id,
//         },
//     }).then(destroyComment => {
//         res.status(200).json(destroyComment)
//         res.render('/posts')
//     })
// });

// module.exports = router;