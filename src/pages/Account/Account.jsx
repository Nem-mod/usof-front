import {useDispatch, useSelector} from "react-redux";
import baseUserLogo from "../../source/user.png"
import {useEffect, useState} from "react";

export const Account = () => {
    const dispatch = useDispatch();
    const {data: user} = useSelector(state => state.auth)

    const [preview, setPreview] = useState();
    const [selectedFile, setSelectedFile] = useState();

    useEffect(() => {
        if(!selectedFile)
            return

        const objUrl = URL.createObjectURL(selectedFile);
        setPreview(objUrl)
        return () => URL.revokeObjectURL(objUrl)
    }, [selectedFile])
    const handleChangeAvatar = async (e) => {
        if(e.target.files.length === 1)
            setSelectedFile(e.target.files[0]);
    }
    return (
        <div>
            {user && (

                <div className="flex gap-4">
                    <div className={"w-40 h-40 rounded-full relative"}>
                        <div className={"w-12 h-12 absolute p-2 bg-gray-800 rounded text-white border-2 border-gray-700 bottom-0"}>
                            Edit
                            <input type={"file"} className={"w-12 h-12 opacity-0 absolute top-0 left-0"} onChange={handleChangeAvatar}/>
                        </div>
                        <div className={"flex justify-center items-center"}>
                            <img src={preview || baseUserLogo} alt="logo" className={"w-40 h-40 rounded-full"}/>
                        </div>
                    </div>
                    <div>
                        <div className={"mt-4 text-4xl text-white"}>{user.fname} {user.lname}</div>
                        <div className={"mt-2 text-xl text-gray-500"}>{user.email}</div>
                    </div>
                </div>
            )}

        </div>
    )
}