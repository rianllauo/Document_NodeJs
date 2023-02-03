import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();
            const userPost = await axios.post(
                "http://localhost:5000/user",
                user
            );

            setUser({
                name: "",
                email: "",
                gender: "",
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    });

    console.log(user);

    return (
        <div className="max-w-screen-sm mx-auto mt-12">
            <div className="mb-3">
                <h1 className="text-xl font-medium">Add user</h1>
            </div>
            <form
                onSubmit={(e) => handleSubmit.mutate(e)}
                className="flex flex-col gap-4"
            >
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Name" />
                    </div>
                    <TextInput
                        id="email1"
                        name="name"
                        type="text"
                        placeholder="name"
                        required={true}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Email" />
                    </div>
                    <TextInput
                        id="email1"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required={true}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Gender" />
                    </div>
                    <TextInput
                        id="email1"
                        name="gender"
                        type="text"
                        placeholder="Gender"
                        required={true}
                        onChange={handleChange}
                    />
                </div>

                <button
                    className="px-5 py-1.5 rounded bg-blue-500 text-white text-sm"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddUser;
