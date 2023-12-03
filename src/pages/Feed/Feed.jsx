import {Link, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/slices/posts";
import {PostPreview} from "../../components/PostPreview/PostPreview";
import {Pagination} from "../../components/Pagination/Pagination";

export const Feed = () => {
    const {data, status} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);

    const size = searchParams.get("size") || 5;
    useEffect(() => {
        dispatch(fetchPosts({
            page: currentPage,
            size: size
        }));
    }, [currentPage])

    const handlePage = (page) => {
        setCurrentPage(page)
    }

    return (
        <div>
            {status === "loaded" && data && (
                <>
                    <div className={"flex justify-between text-2xl text-white font-bold "}>
                        <h1 className={"mr-2"}>ALL QUESTIONS</h1>
                        <Link to={"/createpost"} className={"base_button"}>
                            Create question
                        </Link>
                    </div>
                    {data && data.elements.map(e => <PostPreview key={e.id} post={e}/>)}

                    <div className={"w-full flex justify-center mt-10"}>
                        <Pagination currentPage={currentPage} totalPages={data.totalPages} paginationRange={2}
                                    onChange={handlePage}/>
                    </div>
                </>
            )}

        </div>
    )
}