import nc from 'next-connect'
import db from '../../../utils/db'
import { validateEmail } from '../../../utils/validation';
import {User} from '../../../models/User'

const handler = nc();

handler.post(async(req, res) => {
    try {
        await db.connectDb();
        const {name, email, password} = req.body
        if(!name || !email || !password) {
            return res.status(400).json({message: "please fill in all details"})
        }
        if (!validateEmail(email)) {
            return res.status(400).json({ message: "Invalid email." });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "This email already exsits." });
        }
        if (password.length < 6) {
            return res
                .status(400)
                .json({ message: "Password must be atleast 6 characters." });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default handler;