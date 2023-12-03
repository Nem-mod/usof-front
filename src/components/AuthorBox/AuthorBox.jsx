import {getFilePath} from "../../sourceRootDir";
import baseUserLogo from "../../source/user.png";
import {Link} from "react-router-dom";

export const AuthorBox = ({userData: user}) => {

    return (
        <div className={"p-2 border-2 border-gray-700 text-gray-400"}>
            <Link to={`/user/${user.id}`}>
                <div className={"flex gap-2"}>
                    <div>
                        <img src={user.profile_picture_url ? `${getFilePath}/${user.profile_picture_url}` : baseUserLogo}
                             alt="userLogo"
                             className={"w-12 h-12"}
                        />
                    </div>
                    <div>
                        {`${user.fname} ${user.lname}`}
                    </div>
                </div>
            </Link>
        </div>
    )
}