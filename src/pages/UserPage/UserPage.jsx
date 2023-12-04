import button from "../../components/Buttons/Button";
import {getFilePath} from "../../sourceRootDir";
import baseUserLogo from "../../source/user.png";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../axios/axios";
import {PostPreview} from "../../components/PostPreview/PostPreview";
import {UserAvatar} from "../../components/UserAvatar/UserAvatar";
import {useSelector} from "react-redux";
import {AccountForm} from "../../components/Forms/AccountForm";

export const UserPage = () => {
    const {data: authUser} = useSelector(state => state.auth)
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const checkIsUsersPage = Boolean(user?.id === authUser?.id);
    useEffect(() => {
        const fetchUser = async () => {
            const {data} = await axios.get(`users/${id}`)
            setUser(data);
        }

        fetchUser().catch(e => console.log(e));
    }, [])
    return (
        <div>
            {user && (
                <>
                    <div className="flex gap-4">
                        <UserAvatar profilePicture={user?.profile_picture_url} isEditable={checkIsUsersPage}/>
                        <div>
                            <div className={"mt-4 text-4xl text-white"}>{user.fname} {user.lname}</div>
                            <div className={"mt-2 text-xl text-gray-500"}>{user.email}</div>
                            <div className={"text-white text-xl"}>
                                Rating: {user.rating}
                            </div>
                        </div>
                    </div>
                    <div className={"mt-8"}>
                        <AccountForm/>
                    </div>
                </>

            )}

            <div className={"mt-6"}>
                <div className={"text-white text-3xl"}>Recent posts</div>
                <div>
                    {user && user.last_posts && user.last_posts.map(e => <PostPreview key={e.id} post={e}/>)}
                </div>
            </div>
        </div>
    )
}