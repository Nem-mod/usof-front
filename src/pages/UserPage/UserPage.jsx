import button from "../../components/Buttons/Button";
import {getFilePath} from "../../sourceRootDir";
import baseUserLogo from "../../source/user.png";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../axios/axios";
import {PostPreview} from "../../components/PostPreview/PostPreview";

export const UserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            const {data} = await axios.get(`users/${id}`)
            setUser(data);
            console.log(user.last_posts)
        }

        fetchUser().catch(e => console.log(e));
    }, [])
    return (
        <div>
            {user && (

                <div className="flex gap-4">
                    <div className={"w-40 h-40 rounded-full relative"}>

                        <div className={"flex justify-center items-center"}>
                            <img src={user.profile_picture_url ? `${getFilePath}/${user.profile_picture_url}` : baseUserLogo}
                                 alt="logo" className={"w-40 h-40 rounded-full"}/>
                        </div>
                    </div>
                    <div>
                        <div className={"mt-4 text-4xl text-white"}>{user.fname} {user.lname}</div>
                        <div className={"mt-2 text-xl text-gray-500"}>{user.email}</div>
                        <div className={"text-white text-xl"}>
                            Rating: {user.rating}
                        </div>
                    </div>

                </div>
            )}
            <div className={"mt-6"}>
                <div className={"text-white text-3xl"}>Recent posts</div>
                <div>
                    {user && user.last_posts && user.last_posts.map(e => <PostPreview post={e}/>)}
                </div>
            </div>
        </div>
    )
}