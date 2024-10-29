const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//registro
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'El usuario ya existe' });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new UserActivation({ username, password });
        await user.save();
        res.status(201).json({message: 'usuario registrado correctamente'});
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
};

//login
exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(401).json({ message: 'Credenciales incorrectas' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
};