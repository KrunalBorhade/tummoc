const User = require('../models/user')
const bcrypt = require('bcryptjs');


const Login = async function (data) {
    try {
        const user_detail = await User.findOne({ email: data.email })
        if (user_detail) {
            const isMatch = bcrypt.compareSync(data.password, user_detail.password);
            if (isMatch) {
                return user_detail;
            }
            else {
                return false;
            }
        }
        else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = Login