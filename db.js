const mongoose = require('mongoose');

const uri = "mongodb+srv://webdev:Pass%401234@cluster0.mongodb.net/CourseWebsite?retryWrites=true&w=majority"; // Update with your MongoDB connection string

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

module.exports = mongoose; // Export mongoose for use in other files
