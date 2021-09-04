import { Link, useHistory } from "react-router-dom";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Divider from "../components/Divider";
function SignIn() {
    const history = useHistory();
    return (
        <div className="p-6 w-full bg-gray-200 hover:shadow-md space-y-6 ">
            <h1 className="text-4xl text-center">SignIn</h1>
            <form className="space-y-6">
            <Input
                name="email"
                type="email"
                placeholder="Enter email address.."
                label="Email address"
                /* value={values.email}
                handleChange={handleChange} */
            />
            <div className="space-y-3">
                <Input
                    name="password"
                    type="password"
                    placeholder="Enter password.."
                    label="Password"
                   /*  value={values.password}
                    handleChange={handleChange} */
                />
                <div
                   /*  onClick={handlePassword} */
                    className="flex justify-end text-sm text-primary cursor-pointer"
                >
                    Forgot password?
                </div>
            </div>
                <Button
                    value="Sign In"
                    type="submit"
                    variant="primary"
                    /* action={handleSubmit} */
                    /* loading={loading} */
                    fullWidth
                />

            </form>
            <Divider text="or"/>
            <Button
                value="Continue with Google"
                type="submit"
                variant="frame"
               /*  action={handleGoogleSignIn}
                loading={googleLoading} */
                fullWidth
            />
            <div className="text-primary text-center">
                Want to become a member? <Link to="/sign-up">Sign Up</Link>
            </div>
        </div>
    )
}

export default SignIn
