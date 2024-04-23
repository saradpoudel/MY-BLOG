const CommentsList = ({ comments }) => (
    <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 border-b-2 border-gray-300 mt-2  p-2 shadow-md rounded-md">Comments:</h3>


        {/*  {Array.isArray(comments) && comments.length > 0 ? ( */}
        <ul className="space-y-4 flex flex-col">
            {/*  {comments.map((comment, index) => ( */}
            <li /* key={index} */ className="bg-gray-100 p-4 rounded-lg shadow-md m-auto">
                <p className="text-gray-800">{/* {comment.text} */}lorem50sdjbkkkkkkkkkkkk kk egribvr </p>
                <p className="text-gray-600 font-bold mt-2"> {/* {comment.postedBy} */}By: <span className="text-red-500">sarad </span></p>
            </li>
            <li /* key={index} */ className="bg-gray-100 p-4 rounded-lg shadow-md m-auto">
                <p className="text-gray-800">{/* {comment.text} */}lorem50</p>
                <p className="text-gray-600 font-bold mt-2"> {/* {comment.postedBy} */} sarad poudel</p>
            </li>
            {/* ))} */}
        </ul>
        {/* ) : (
            <p className="text-gray-800">No comments available.</p>
        )} */}
    </div>
);

export default CommentsList;
