import transactionSchema from "../schemas/transactionSchema";

export default function validTransaction (req, res, next) {

    const transaction = req.body;

    const isValidTransaction = transactionSchema.validate(transaction);

    if (isValidTransaction.error) {
        
        return res.sendStatus(409);

    }

    next();

}
