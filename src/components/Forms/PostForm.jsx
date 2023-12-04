import {useEffect, useState} from "react";
import axios from "../../axios/axios";

export const PostForm = ({handleSubmitCallBack, prevTitle, prevContent, prevCategory}) => {
    const [categories, setCategories] = useState([])

    const [title, setTitle] = useState(prevTitle);
    const [content, setContent] = useState(prevContent);
    const [selectedCategory, setSelectedCategory ] = useState(prevCategory);

    useEffect(() => {
        axios.get("/categories/").then(response => {
            setCategories(response.data);
        })
    }, [])

    const handleSubmit = async (e) => {
        handleSubmitCallBack({
            title: title,
            content: content,
            categories: [
                {id: selectedCategory}
            ]
        });
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div>
                <label htmlFor="post" className={"text-xl text-white"}>
                    Title
                </label>
                <div className={"mt-2 text-md text-gray-400"}>
                    Be specific and imagine you’re asking a question to another person.
                </div>
                <input
                    id="post"
                    type="text"
                    className={"base_input mt-4"}
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    required
                />
            </div>
            <div className={"mt-4"}>
                <label htmlFor="content" className="text-xl text-white">
                    What are the details of your problem?
                </label>
                <div className={"mt-2 text-md text-gray-400"}>
                    Add up to 5 tags to describe what your question is about. Start typing
                    to see suggestions.
                </div>
                <div
                    className="w-full mt-4 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <textarea
                id="content"
                rows="4"
                className="w-full px-0 text-md text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a post here..."
                onChange={(e) => setContent(e.target.value)}
                value={content}
                required
            ></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600"></div>
                </div>
            </div>
            <div className={"mt-8"}>
                <label htmlFor="content" className="text-xl text-white">
                    Tags
                </label>
                <div className={"mt-2 text-md text-gray-400"}>
                    Add up to 5 tags to describe what your question is about. Start typing
                    to see suggestions.
                </div>
                <div className={"mt-4"}>
                    <select
                        id="categories"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={e => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                        required
                    >
                        <option value={null}></option>
                        {categories.count > 0 && categories.rows.map(e => (
                            <option key={e.id} value={e.id}>{e.title}</option>
                        ))}

                    </select>
                </div>
            </div>
            <div className={"mt-4"}>
                <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                    Post comment
                </button>
            </div>
        </form>

    )
}