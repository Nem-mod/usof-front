import button from "../Buttons/Button";
import {getFilePath} from "../../sourceRootDir";
import baseUserLogo from "../../source/user.png";
import {useEffect, useState} from "react";
import {fetchUpdateAvatar} from "../../store/slices/auth";
import {useDispatch} from "react-redux";

export const UserAvatar = ({profilePicture, isEditable}) => {
    const dispatch = useDispatch();
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
        <div className={"w-40 h-40 rounded-full relative"}>
            {isEditable && (
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
                                <button className={"w-full h-full opacity-0 absolute top-0 left-0"}
                                        onClick={handleChangeAvatar}></button>
                            </>
                        )
                    }
                </div>
            )}
            <div className={"flex justify-center items-center"}>
                <img
                    src={preview || (profilePicture ? `${getFilePath}/${profilePicture}` : baseUserLogo)}
                    alt="logo" className={"w-40 h-40 rounded-full"}/>
            </div>
        </div>
    )
}