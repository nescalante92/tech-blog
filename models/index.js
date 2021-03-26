const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comment"); 

// USER ----------------------
User.hasMany(Blog, { 
    foreignKey: "user_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id"
});

// BLOG------------------------
Blog.hasMany(Comment, {
    foreignKey: "blog_id"
});

Blog.belongsTo(User, {
    foreignKey: "user_id"
});

// COMMENT---------------------
Comment.belongsTo(Blog, {
    foreignKey: "blog_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});



module.exports = { User, Blog, Comment }; 
