import {useEffect, useState} from "react";
import axios from "../../axios/axios";
import {useDispatch} from "react-redux";
import {fetchCreatePost} from "../../store/slices/post";
import {useNavigate} from "react-router-dom";
import {PostForm} from "../../components/Forms/PostForm";

export const PostCreatePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createPost = async (data) => {
        dispatch(fetchCreatePost(
            data
        ));
        navigate("/");
    };
    return (
        <div>
            <PostForm handleSubmitCallBack={createPost}/>
        </div>
    );
};
