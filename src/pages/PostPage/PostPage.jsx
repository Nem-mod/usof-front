import {Post} from "../../components/Post/Post";
import {Comment} from "../../components/Comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchComments, fetchPost, fetchUpdatePost} from "../../store/slices/post";
import {CommentForm} from "../../components/Forms/CommentForm";
import {useParams} from "react-router-dom";
import {PostForm} from "../../components/Forms/PostForm";

export const PostPage = () => {
    const {id} = useParams();
    const {post, comments} = useSelector(state => state.post);
    const {data: user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [postIsEditing, setPostIsEditing] = useState(false)
    useEffect(() => {
        dispatch(fetchPost({id: id}));
        dispatch(fetchComments({id: id}));
    }, []);
    const handleEditPost = (data) => {
        dispatch(fetchUpdatePost({
            id: id || 0,
            ...data
        }));
        // setPostIsEditing(false);
    }
    return (
        <div>
            {!postIsEditing
                && post.data
                && comments.rows
                && (
                    <>
                        <Post postData={post.data} answers={comments.count}/>
                        {post?.data.author === user?.id && (
                            <button className={"base_button"} onClick={() => setPostIsEditing(true)}>Edit</button>
                        )}

                        {comments?.rows.map((comment) => (
                            <Comment key={comment.id} comment={comment}/>))}
                        <div className={"mt-8"}>
                            <CommentForm postId={post.data.id}/>
                        </div>
                    </>
                )
            }

            {postIsEditing && <PostForm handleSubmitCallBack={handleEditPost} prevTitle={post?.data.title}
                                        prevContent={post?.data.content}
                                        prevCategory={post?.data.postCategories[0].id}/>}
        </div>
    )
}