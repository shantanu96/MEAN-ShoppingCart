const { User } = require('../models/User');

module.exports = {
    register: async (req, res) => {
        const {
            username,
            email,
            password,
            number,
            address,
            pincode,
        } = req.body;

        const data = {};
        if (username) data.username = username;
        if (email) data.email = email;
        if (password) data.password = password;
        if (number) data.number = parseInt(number);
        if (address) data.address = address;
        if (pincode) data.pincode = parseInt(pincode);
        console.log(req.body);

        try {
            const user = new User(data);
            await user.save();
            res.status(201).json({ 'message': 'User registered' });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    login: async (req, res) => {
        const {
            email,
            password
        } = req.query;

        try {
            const user = await User.findOne({ email: email, password: password });

            if (user) {
                res.status(201).json({ 'message': 'User Logged In' });
            } else {
                throw new Error('Please enter valid credentials.');
            }

        } catch (e) {
            res.status(400).json({ error: e.message });
        }

    }
}