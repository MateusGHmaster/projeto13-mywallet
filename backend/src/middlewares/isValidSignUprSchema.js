import signUpSchema from "../schemas/signUpSchema";

export default function validSignUp (req, res, next) {

    const signup = req.body;

    const isValidSignUp = signUpSchema.validate(signup);

    if (isValidSignUp.error) {

        return res.sendStatus(409);

    }

    next();

}