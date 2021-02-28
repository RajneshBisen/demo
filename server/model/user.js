import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password:String,
    email:String,
    picture: String,
    dob: Number,
    address: String
});

module.exports = mongoose.model('User', UserSchema);
