import {AuthorBox} from "../AuthorBox/AuthorBox";
import {RatingBox} from "../RetingBox/RatingBox";

export const Comment = ({comment}) => {
    return (
        <div key={comment.id} className={"mt-8 border-t-2 border-gray-800"}>
            <div className={"mt-2"}>
                <AuthorBox userData={comment.user}/>
            </div>
            <div className={"mt-5 pl-2 flex text-center"}>
                <RatingBox rating={comment.rating} entityId={comment.id} entityType={"comment"}/>

                <div className={"text-md text-gray-400"}>{comment.content}</div>
            </div>
        </div>
    );
};
