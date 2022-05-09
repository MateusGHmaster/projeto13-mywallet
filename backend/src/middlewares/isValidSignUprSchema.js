import signUpSchema from "../schemas/signUpSchema.js";

export function validSignUp (req, res, next) {

    const user = req.body;

    const isValidSignUp = signUpSchema.validate(user);

    if (isValidSignUp.error) {

        return res.sendStatus(409);

    }

    next();

}