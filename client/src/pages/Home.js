import { useQuery } from "react-query";
import axios from "axios";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const Home = () => {
    const { data: dataUser, refetch } = useQuery("dataUsers", async () => {
        const response = await axios.get("http://localhost:5000/users");
        const data = response.data;
        return data;
    });

    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:5000/user/${id}`);
        refetch();
    };

    return (
        <div className="max-w-screen-md mx-auto mt-12">
            <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">User List</h3>
                <Link to={"/add-user"}>
                    <button className="px-5 py-1.5 rounded bg-blue-500 text-white text-sm">
                        Add User
                    </button>
                </Link>
            </div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>No</Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Gender</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Delete</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {dataUser?.map((item, index) => (
                        <Table.Row
                            key={item._id}
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.email}</Table.Cell>
                            <Table.Cell>{item.gender}</Table.Cell>
                            <Table.Cell>
                                <Link
                                    to={`/edit-user/${item._id}`}
                                    className="font-medium text-green-600 hover:underline dark:text-blue-500"
                                >
                                    Edit
                                </Link>
                            </Table.Cell>
                            <Table.Cell>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="font-medium text-red-600 hover:underline dark:text-blue-500"
                                >
                                    Delete
                                </button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default Home;
