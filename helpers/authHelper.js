import bcrypt from "bcrypt";

export const hashPassword = async(password) => {   //hashpassword
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}

export const comparePassword = async(password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);  //compare password with hashed password
}