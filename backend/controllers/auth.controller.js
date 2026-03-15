import {User} from "../model/usersTable.js"
import bcrypt from "bcrypt" 
export const registerUser = async (req ,res)=>{
    try {
        const {fullname , email , password , role} = req.body

        if (!fullname || !email || !password) {
            return res.status(400).json({message : "All fildes are required"})
        }

        const user = User.findOne({email})
        if (user) {
            res.status(400).jsom({message : "emmaile uniqe"})
        }

        const passwordHash = await bcrypt.hash(password , 10)

        const newUser = User.create({
            fullname,
            email,
            password : passwordHash,
            role : rile?role:"user"
        })
    } catch (error) {
        
    }
}