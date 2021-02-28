import UserModel from '../model/user';
import { hashPassword, comparePassword } from '../utility/hash';

const register = (req, res) => new Promise(async (reslove, reject) => {
    console.log("reqqqq", req.body)
    let { email, password } = req.body;
    const userData = await UserModel.findOne({ email: email, isDeleted });
    if (!userObj) {
        const userObj = new UserModel({
            email: email,
        });
        userObj['password'] = await hashPassword(password);
        const saveUser = await userObj.save();
        if (saveUser) {
            reslove(res.status(200).send(saveUser));
        } else {
            reject(res.status(400).send(e));
        }
    } else {
        reslove(res.status(201).send(userData, message: "user allready present"));
    }
})
const login = (req, res) => new Promise(async (reslove, reject) => {
    console.log("reqqqq", req.body)
    let { email, password } = req.body;
    let query = {
        email: email
    };
    const userData = await UserModel.findOne(query);

    if (userData) {
        let match = await comparePassword(password, userData.password);
        if (match) {
            reslove(res.status(200).send(userData));
        } else {
            reject(res.status(400).send({ message: "invaild credentials" }));
        }
    } else {
        reject(res.status(400).send(e));
    }
})


export default {
    register,
    login
}