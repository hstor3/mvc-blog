const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

    // })
    // const postData = await Post.findAll({
        // include: [
            // {
                // model: Post
            // },
        // ],
    // });
    // const posts = postData.map((post) => post.get({ plain: true }));
    // res.render('posts', {
        // posts
// })

router.post('/', (req, res) => {
    // try {
         Post.create(req.body).then((newPost) => {
             res.status(200).json(newPost);
             
            //  if (req.body.title)
         }).then(() => {
             res.redirect('/')
         })
            // ...req.body,
            // userId: req.session.userId,
// });

    // } catch (err) {
        // res.status(400).json(err);
    // }
});

router.put('/api:id', (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id,
        }
    }).then(newPost => {
        res.status(200).json(newPost)
    })
})

router.put('/posts', async (req, res) => {
    alert('hi')
    res.redirect('/posts');
    return;
    // res.render('posts')
})

router.delete('/api:id', (req, res) => {
    // try {
        Post.destroy({
            where: {
                id: req.params.id,
                // userId: req.session.userId,
            },
        }).then(newPost => {
            res.status(200).json(newPost)
            res.render('/')
        })

        // if (!postData) {
            // res.status(404).json({ message: 'No post found with this id!' });
            // return;
        // }
        
        // res.status(200).json(postData);
    // } catch (err) {
        // res.status(500).json(err);
    // }
});

module.exports = router;