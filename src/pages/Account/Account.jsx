import {useDispatch, useSelector} from "react-redux";
import baseUserLogo from "../../source/user.png"
import {useEffect, useState} from "react";
import {getFilePath} from "../../sourceRootDir";
import {fetchUpdateAvatar} from "../../store/slices/auth";
import {AccountForm} from "../../components/Forms/AccountForm";
import button from "../../components/Buttons/Button";

export const Account = () => {
    const dispatch = useDispatch();
    const {data: user} = useSelector(state => state.auth)

    const [preview, setPreview] = useState();
    const [selectedFile, setSelectedFile] = useState();

    useEffect(() => {
        if (!selectedFile)
            return

        const objUrl = URL.createObjectURL(selectedFile);
        setPreview(objUrl)
        return () => URL.revokeObjectURL(objUrl)
    }, [selectedFile]);

    const handlePreviewAvatar = async (e) => {
        if (e.target.files.length === 1)
            setSelectedFile(e.target.files[0]);
    }

    const handleChangeAvatar = async (e) => {
        // console.log(selectedFile, preview);
        dispatch(fetchUpdateAvatar(selectedFile));
        setPreview(null);
    }

    return (
        <div>
            {user && (

                <div className="flex gap-4">
                    <div className={"w-40 h-40 rounded-full relative"}>
                        <div
                            className={`${!preview ? "bg-gray-800 text-center text-white border-2 border-gray-700" : "base_button"} absolute p-2 bottom-0  rounded`}>
                            {!preview
                                ? (
                                    <>
                                        Edit
                                        <input type={"file"} className={"w-full h-full opacity-0 absolute top-0 left-0"}
                                               onChange={handlePreviewAvatar}/>
                                    </>

                                )
                                : (
                                    <>
                                        Save
                                        <button className={"w-full h-full opacity-0 absolute top-0 left-0"} onClick={handleChangeAvatar}></button>
                                    </>
                                )
                            }
                        </div>
                        <div className={"flex justify-center items-center"}>
                            <img src={preview || (user.profile_picture_url ? `${getFilePath}/${user.profile_picture_url}` : baseUserLogo)}
                                 alt="logo" className={"w-40 h-40 rounded-full"}/>
                        </div>
                    </div>
                    <div>
                        <div className={"mt-4 text-4xl text-white"}>{user.fname} {user.lname}</div>
                        <div className={"mt-2 text-xl text-gray-500"}>{user.email}</div>
                    </div>
                </div>
            )}

            <div className={"mt-8"}>
                 <AccountForm/>
            </div>
        </div>
    )
}