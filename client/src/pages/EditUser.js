import React, { useEffect, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "",
    });

    const { data } = useQuery("userData123", async () => {
        const response = await axios.get(`http://localhost:5000/user/${id}`);
        const data = await response.data;

        setUser({
            name: data?.name,
            email: data?.email,
            gender: data?.gender,
        });
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
            const useredit = await axios.patch(
                `http://localhost:5000/user/${id}`,
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
                <h1 className="text-xl font-medium">Edit User</h1>
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
                        value={user?.name}
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
                        value={user?.email}
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
                        value={user?.gender}
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

export default EditUser;
