const CommentsList = ({ comments }) => (
    <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 border-b-2 border-gray-300 mt-2  p-2 shadow-md rounded-md  bg-slate-300">Comments:</h3>


        {Array.isArray(comments) && comments.length > 0 ? (
            <ul className="space-y-4 flex flex-col">
                {comments.map((comment, index) => (
                    <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md m-auto">
                        <p className="text-gray-800">{comment.text}</p>
                        <p className="text-gray-600 font-bold mt-2">By: <span className="text-red-500">{comment.postedBy}</span></p>
                    </li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-800">No comments available.</p>
        )}
    </div>
);

export default CommentsList;
