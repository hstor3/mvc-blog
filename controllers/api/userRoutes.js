const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
    
        req.session.save(() => {
            req.session.userId = userData.isSoftDeleted;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    console.log(req.body)
    // try {
        // const userData = await User.findOne({ where: { username: req.body.username}});
        console.log('hey, me')
        const userData = await User.findOne({ where: { username: 'heather123'}});
// console.log(userData)
        if(!userData) {
            res.status(400).json({ message: 'Incorrect username or password, please try again.'});
            return;
        }

        const correctPass = await userData.checkPassword('heather123');
        // const correctPass = await userData.checkPassword(req.body.password);

        if (!correctPass) {
            res.status(400).json({ message: 'Incorrect username of password, please try again.' });
            return;
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You have successfully logged in!' });
        })
    // } catch (err) {
        // res.status(400).json(err);
    // }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
});

module.exports = router;