import arrowTop from "../../source/arrow-top.svg"
import arrowBot from "../../source/arrow-bot.svg"
import axios from "../../axios/axios";
import {useState} from "react";

export const RatingBox = ({entityType, entityId, rating}) => {
    const [newrating, setNewRating] = useState(rating);
    const [isEdited, setIsEdited] = useState();
    const handleLike = (type) => {
        return async () => {
            if (isEdited == type)
                return;
            setIsEdited(type)
            await axios.post(`posts/${entityId}/like`, {
                type,
                entityType
            }).catch(e => console.log(e));
            if (type === "like")
                setNewRating(prevState => ++prevState);
            else
                setNewRating(prevState => --prevState);
        }
    }
    return (
        <div className={"mb-auto"}>

            <div className={"flex flex-col justify-center items-center gap-2 w-24"}>
                <div onClick={handleLike("like")}>
                    <img src={arrowTop} alt="like" className={"w-8 h-6 cursor-pointer"}/>
                </div>
                <div className={"text-xl text-white"}>{newrating}</div>
                <div onClick={handleLike("dislike")}>
                    <img src={arrowBot} alt="like" className={"w-8 h-6 cursor-pointer"}/>
                </div>
            </div>
        </div>
    )
}