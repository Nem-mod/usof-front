import {useEffect, useState} from "react";
import axios from "../../axios/axios";
import {data} from "autoprefixer";
import {AuthorBox} from "../../components/AuthorBox/AuthorBox";

export const UsersPage = () => {
    const [userList, setUserList] = useState();
    useEffect(() => {
        const fetchUsers = async () => {
            const {data} = await axios.get(`users`)
            setUserList(data.data);
        }

        fetchUsers().catch(e => console.log(e));
    }, [])
    return (
        <div className={"flex gap-4"}>
            {userList && userList.map(e => <AuthorBox key={e.id} userData={e}/>)}
        </div>
    )
}