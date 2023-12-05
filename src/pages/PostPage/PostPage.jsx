import {Post} from "../../components/Post/Post";
import {Comment} from "../../components/Comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchComments, fetchPost, fetchUpdatePost} from "../../store/slices/post";
import {CommentForm} from "../../components/Forms/CommentForm";
import {useNavigate, useParams} from "react-router-dom";
import {PostForm} from "../../components/Forms/PostForm";
import axios from "../../axios/axios";

export const PostPage = () => {
    const navigate = useNavigate();
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
    const handleDeletePost = async () => {
        await axios.delete(`posts/${id}`);
        navigate("/")
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
                            <div className={"mt-4"}>
                                <button className={"base_button"} onClick={() => setPostIsEditing(true)}>Edit</button>
                                <button className={"base_button bg-red-500 focus:none"} onClick={handleDeletePost} >Delete</button>
                            </div>
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
                                        prevCategory={post?.data.postCategories[0]?.id}/>}
        </div>
    )
}