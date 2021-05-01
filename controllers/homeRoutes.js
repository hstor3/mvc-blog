const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    // try {
        const postData = await Post.findAll({
            include: [ 
                {
                    model: User,
                    attributes: ['username'],
                },
            ], 
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts)

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        })
    // } catch (err) {
        // res.status(500).json(err);
    // }
});

router.get('/posts', async (req, res) => {
    // alert();
    console.log('hey')
    res.render('posts', {
        loggedIn: req.session.loggedIn
    })
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.userId, {
            include: [
                {
                    model: User,
                    // attributes: ['username'],
                    attributes: ['id'],

                },
            ],
        
        });

        const post = postData.get({ plain: true });

        res.render('posts', {
            ...post,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('homepage', withAuth, async (req, res) => {
    // try {
        const userData = await User.findByPk(req.session.userId, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('homepage', {
            ...user,
            loggedIn: true
        });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
    }
    res.render('login');
});

module.exports = router;