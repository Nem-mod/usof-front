import {Link} from "react-router-dom";
import {AuthorBox} from "../AuthorBox/AuthorBox";

export const PostPreview = ({post}) => {
    return (
        <div className={"h-full mt-4"}>
            <div className={"p-4 border-b-2 border-gray-700"}>
                <div className={"flex gap-4 justify-between"}>
                    <div>
                        <div className={"mb-3"}>
                            <Link
                                to={`/post/${post.id}`}
                                className={"text-white text-xl hover:text-blue-400"}
                            >
                                {post.title}
                            </Link>
                        </div>
                        <div className={"text-gray-500"}>{post.content.slice(0, 100)}</div>
                        <div className="flex w-full mt-4 mr-auto">
                            {post.postCategories.map((category) => {
                                return (
                                    <div
                                        key={category.id}
                                        className={
                                            "text-xs text-blue-800 bg-blue-200 p-1 mr-2 rounded hover:bg-blue-300"
                                        }
                                    >
                                        {category.title}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        {post.user && <AuthorBox userData={post.user}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}