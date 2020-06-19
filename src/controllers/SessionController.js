import User from '../models/User';

class SessionController {
    async store(req, res) {

        const { email, usuario } = req.body;

        let user = await User.findOne({ email, usuario });

        if (!user) {
            user = await User.create({ email, usuario });
        }
        return res.json(user)
    }
}

export default new SessionController();