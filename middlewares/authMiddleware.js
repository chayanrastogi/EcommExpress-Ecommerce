import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
    try {
      const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET //fetching token from headers and verifying it with JWT_SECRET
      );
      req.user = decode;  //assigning the decoded token to req.user
      next();
    } catch (error) {
      console.log(error);
    }
  };

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access"
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Error in admin middleware",
            error
        })
    }
};