import {AuthorBox} from "../AuthorBox/AuthorBox";
import {RatingBox} from "../RetingBox/RatingBox";

export const Post = ({postData, answers}) => {
    return (
        <div className={"text-white"}>
            <div className={"border-b-2 border-gray-800"}>
                <div className={"flex w-full justify-between"}>
                    <div className={"pb-4 text-3xl"}>{postData.title}</div>
                    <div>
                        <ul className={"flex"}>
                            {postData.postCategories &&
                                postData.postCategories.map((e) => (
                                    <li
                                        key={e.id}
                                        className={
                                            "text-md text-blue-800 bg-blue-300 p-1 mr-2 rounded hover:bg-blue-400"
                                        }
                                    >
                                        {e.title}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className={"flex justify-between mb-3"}>
                    <div className={"mb-3 text-gray-400"}>
                        <span className={""}>Answers: {answers} </span>
                        <span className={""}>
            Created at:{" "}
                            {new Date(postData?.createdAt).toLocaleTimeString("en-US")}
          </span>
                        <span className={"ml-1"}>
            Modified at:{" "}
                            {new Date(postData?.updatedAt).toLocaleTimeString("en-US")}
          </span>
                    </div>
                    <div className={"w-48"}>
                        <AuthorBox userData={postData.user}/>
                    </div>
                </div>
            </div>
            <div className={"flex mt-8"}>
                <RatingBox rating={postData.rating} entityId={postData.id} entityType={"post"}/>

                <div className={"text-xl text-gray-400"}>
                    {postData?.content} Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Illo provident quod velit. Aliquam explicabo numquam
                    sequi unde. A aliquid, aperiam asperiores beatae consequuntur corporis
                    deleniti fugit iusto laborum magnam nam numquam omnis placeat
                    quibusdam quos, rem repellat repellendus sed, sit vitae? Animi
                    deleniti dolor dolorem hic id inventore, libero modi nam nisi numquam,
                    odit optio, perspiciatis quis quisquam suscipit temporibus voluptatum?
                    Accusamus accusantium amet animi architecto autem commodi,
                    consequuntur corporis, cum dicta dolore dolorem esse eum excepturi
                    iure libero nam natus neque nesciunt nobis nostrum officiis pariatur
                    porro quis quos recusandae reiciendis repellendus rerum saepe
                    similique sint sit veritatis voluptatum.
                </div>
            </div>
        </div>
    );
};
