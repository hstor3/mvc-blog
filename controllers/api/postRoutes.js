const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
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

router.get('/post/:id/comments', withAuth, async (req, res) => {
    res.render('comments', {
        loggedIn: req.session.loggedIn
    })
});

router.get('/post/comments/:id', async (req, res) => {
    const commentData = await Comment.findByPk(req.params.id, {
        include: [
            {
                model: Post,
                attributes: ['id'],
            },
        ],
    });
    const comment = commentData.get({ plain: true });
    console.log(comment)
    res.render('comments', {
        comment,
        loggedIn: req.session.loggedIn
    })
});

router.post('/:id/comment', (req, res) => {
    // console.log(req.params)
        Comment.create({
            body: req.body.body,
            postId: req.params.id,
            userId: req.session.userId,
        }).then((newComment) => {
            res.status(200).json(newComment)
        }).then(() => {
            res.redirect('/')
        })
        //  Post.create(req.body).then((newPost) => {
        //      res.status(200).json(newPost);
             
        //  }).then(() => {
        //      res.redirect('/comments')
        //  })
});

router.post('/', (req, res) => {
         Post.create({
             body: req.body.body,
             title: req.body.title,
             userId: req.session.userId
         }).then((newPost) => {
             res.status(200).json(newPost);
         })
});

router.put('/:id', (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id,
        }
    }).then(newPost => {
        res.status(200).json(newPost)
    })
})

router.put('/', async (req, res) => {
    alert('hi')
    res.redirect('/posts');
    return;
    // res.render('posts')
})

router.delete('/:id', (req, res) => {
    console.log('try to delete post')
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