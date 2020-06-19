import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: String,
    usuario: String
});

export default model('User', UserSchema);