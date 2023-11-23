import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/slices/posts";

export const Feed = () => {
    const { posts } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [])
    return (
        <div>
            <div className={"flex justify-between text-2xl text-white font-bold"}>
                <h1 className={"mr-2"}>ALL QUESTIONS</h1>
                <Link to={"/createpost"} className={"base_button"}>
                    Create question
                </Link>
            </div>
            {posts.data && (
                <div className={"h-full mt-4"}>
                    {posts.data.elements.map((e) => {
                        return (
                            <div key={e.id} className={"p-4 border-b-2 border-gray-700"}>
                                <div className={"mb-3"}>
                                    <Link
                                        to={`/post/${e.id}`}
                                        className={"text-white text-xl hover:text-blue-400"}
                                    >
                                        {e.title}
                                    </Link>
                                </div>
                                <div className={"text-gray-500"}>{e.content.slice(0, 100)}</div>
                                <div className="flex w-full mt-4 mr-auto">
                                    {e.postCategories.map((category) => {
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
                        );
                    })}
                </div>
            ) }
        </div>
    )
}