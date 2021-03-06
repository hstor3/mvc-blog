const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const commentData = require('./commentData.json');
const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const user = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Post.create({
            ...post,
            userId: user[Math.floor(Math.random() * user.length)].id,
        });
    }

    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            userId: user[Math.floor(Math.random() * user.length)].id,
    })
}

    process.exit(0);
}

seedDatabase();