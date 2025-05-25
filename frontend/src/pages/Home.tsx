import { FaUserEdit } from "react-icons/fa"
import Navbar from "../components/Navbar"
import { TiUserDelete } from "react-icons/ti"
import { UserForm } from "./user/UserForm"

const Home = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center  text-gray-200 ">
            <Navbar />
            <div className="w-full">
                <UserForm onSubmit={() => { }} isSaving={false} isUpdating={false} isDeleting={false} />
                <button className=" text-gray-900 border border-[#222222] py-2 px-6 gap-2 rounded inline-flex items-center m-3">
                    <span>
                        Add New User
                    </span>
                </button>
                <div className="container mx-auto">
                    <div className="overflow-x-auto rounded-lg shadow">
                        <table className="w-full text-sm text-left  text-gray-200">
                            {/* HEADER */}
                            <thead className="text-xs uppercase border-b border-green-500 bg-[#222222]">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Image</th>

                                    <th scope="col" className="px-6 py-3">
                                        <button className="flex items-center">
                                            Name
                                            <svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </button>
                                    </th>
                                    <th scope="col" className="px-6 py-3">Role</th>
                                    <th scope="col" className="px-6 py-3">Tasks</th>
                                    <th scope="col" className="px-6 py-3">Action</th>

                                </tr>
                            </thead>
                            {/* BODY */}
                            <tbody>
                                <tr className="bg-[#222222] border-b  border-green-500 ">
                                    <td className="px-6 py-4">
                                        <img src="/jane.jpg" alt="Abhiraj" className="w-15 h-15 rounded-full" />
                                    </td>
                                    <td className="px-6 py-4">Abhiraj K</td>
                                    <td className="px-6 py-4">Developer</td>
                                    <td className="px-6 py-4 text-green-500">View Tasks (6) </td>
                                    <td className="px-6 py-4 flex items-center space-x-4 gap-3">
                                        <FaUserEdit size={30} color="#0D92F4" />
                                        <TiUserDelete size={30} color="red" />
                                    </td>
                                </tr>
                                <tr className="bg-[#222222] border-b border-green-500 ">
                                    <td className="px-6 py-4">
                                        <img src="/john.jpg" alt="John" className="w-15 h-15 rounded-full" />
                                    </td>
                                    <td className="px-6 py-4">John Doe</td>
                                    <td className="px-6 py-4">Designer</td>
                                    <td className="px-6 py-4 text-green-500">View Tasks (10)</td>
                                    <td className="px-6 py-4 flex items-center space-x-4 gap-3">
                                        <FaUserEdit size={35} color="#0D92F4" />
                                        <TiUserDelete size={35} color="red" />
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                        {/* PAGENATION */}
                        <div className="flex items-center justify-between p-4 bg-[222222]">
                            <button className="px-3 py-1  bg-gray-900 rounded">Previous</button>
                            <span className="text-sm  text-gray-900">Page 1 of 10</span>
                            <button className="px-3 py-1  bg-gray-900 rounded">Next</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
