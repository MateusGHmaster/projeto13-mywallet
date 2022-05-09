import loginSchema from "../schemas/loginSchema.js";

export default function validLogin (req, res, next) {

    const login = req.body;

    const isValidLogin = loginSchema.validate(login);

    if (isValidLogin.error) {

        return res.sendStatus(409);

    }

    next();

}