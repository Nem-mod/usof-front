import {Post} from "../../components/Post/Post";
import {Comment} from "../../components/Comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchComments, fetchPost} from "../../store/slices/post";
import {CommentForm} from "../../components/Forms/CommentForm";
import {useParams} from "react-router-dom";

export const PostPage = () => {
    const {id} = useParams()
    const {post, comments} = useSelector(state => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost({id: id}));
        dispatch(fetchComments({id: id}));
    }, []);
    return (
        <div>
            {post.data
                && comments.rows
                && (
                    <>
                        <Post postData={post.data} answers={comments.count}/>
                        {comments?.rows.map((comment) => (
                            <Comment key={comment.id} comment={comment}/>))}
                        <div className={"mt-8"}>
                            <CommentForm postId={post.data.id}/>
                        </div>
                    </>
                )
            }
        </div>
    )
}