import React from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
function Profile() {
    return (
        <div className="space-y-10">
            <div className="flex  space-x-10 items-end">
                <h1 className="text-4xl">Profile</h1>
            </div>
            <main className="flex flex-col">
                <section className="bg-white text-primary p-10 rounded-xl space-y-4">
                    <form className="w-full max-w-lg space-y-4">
                    <Input
                        name="email"
                        type="email"
                        label="Email"
                        /* value={values.email}
                        handleChange={handleChange} */
                    /> 
                    <Button
                        value="Save"
                        type="submit"
                        /* action={handleSubmit}
                        loading={loading} */
                        fullWidth
                        variant="primary"
                    />
                    </form>
                </section>
            </main>
           
        </div>
    )
}

export default Profile
