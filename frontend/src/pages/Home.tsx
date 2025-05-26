import { FaUserEdit } from "react-icons/fa"
import Navbar from "../components/Navbar"
import { TiUserDelete } from "react-icons/ti"
import { Users } from "./user/Users"
import { useState, useEffect } from "react";




    interface IUserTable {
        id: number;
        name: string;
        role: string;
        tasks: number;
        image: string;
    }

    const Home = () => {
        const [userData, setUserData] = useState<IUserTable[]>([]);

        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:9000/api/users');
                const data: IUserTable[] = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        useEffect(() => {
            fetchUserData();
        }, []);

        return (
            <div className="w-full h-screen flex flex-col items-center justify-center text-gray-200">
                <Navbar />
                <div className="mt-96"></div>
                <div className="w-full mt-28">
                    <div className="container mx-auto">
                        <div className="overflow-x-auto rounded-lg shadow">
                            <p className="text-black font-bold">
                                <Users />
                                BACK TO FRONT TEST :
                            </p>

                            <table className="w-full text-sm text-left text-gray-200">
                                <thead className="text-xs uppercase border-b border-green-500 bg-[#222222]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Image</th>
                                        <th scope="col" className="px-6 py-3">Name</th>
                                        <th scope="col" className="px-6 py-3">Role</th>
                                        <th scope="col" className="px-6 py-3">Tasks</th>
                                        <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map(user => (
                                        <tr key={user.id} className="bg-[#222222] border-b border-b-[#414141]">
                                            <td className="px-6 py-4">
                                                <img src={user.image} alt={user.name} className="w-15 h-15 rounded-full" />
                                            </td>
                                            <td className="px-6 py-4 text-amber-300">{user.name}</td>
                                            <td className="px-6 py-4">{user.role}</td>
                                            <td className="px-6 py-4 text-green-500">View Tasks ({user.tasks})</td>
                                            <td className="px-6 py-4 flex items-center space-x-4 gap-3">
                                                <FaUserEdit size={30} color="#0D92F4" />
                                                <TiUserDelete size={30} color="red" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex items-center justify-between p-4 bg-[222222]">
                                <button className="px-3 py-1 bg-gray-900 rounded">Previous</button>
                                <span className="text-sm text-gray-900">Page 1 of 10</span>
                                <button className="px-3 py-1 bg-gray-900 rounded">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };



export default Home
