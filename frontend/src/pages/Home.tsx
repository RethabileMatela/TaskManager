import Navbar from "../components/Navbar"
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
        const [,setUserData] = useState<IUserTable[]>([]);

        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:9000/api/users/');
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
                <div className="w-full mt-20">
                    <div className="container mx-auto">
                        <div className="overflow-x-auto rounded-lg shadow">
                            <div className="text-black font-bold">
                                <Users />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };



export default Home
