import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Input from '../components/Input';
import Button from '../components/Button';
import Divider from '../components/Divider';
function Signup() {
    const history = useHistory();
    return (
        <div className="p-6 w-full bg-gray-200 hover:shadow-md space-y-6 ">
            <h1 className="text-4xl text-center">Sign Up</h1>
            <form className="space-y-6">
                <Input
                name="email"
                type="email"
                label="Email address"
                /* value={values.email}
                handleChange={handleChange} */
                />
                <Input
                name="password"
                type="password"
                label="Password"
                /* value={values.password}
                handleChange={handleChange} */
                />
                {/* {error && <div className="text-red-600">{error}</div>} */}
                <Button
                value="Sign Up"
                type="submit"
                variant="primary"
                /* action={handleSubmit}
                loading={loading} */
                fullWidth
                />
        </form>
        <Divider text="or" />
        <div className="text-primary text-center">
            Already have an account? <Link to="/sign-in">Sign In</Link>
        </div>
        </div>
    )
}

export default Signup
