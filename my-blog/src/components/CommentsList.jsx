const CommentsList = ({ comments }) => (
    <>
        <h3>Comments:</h3>
        {
            Array.isArray(comments) ? (
                comments.map(comment => (
                    <div className="comment" key={comment.postedBy + ':' + comment.text}>
                        <h4>{comment.postedBy}</h4>
                        <p>{comment.text}</p>
                    </div>
                ))
            ) : (
                <p>No comments available.</p>
            )
        }
    </>
);

export default CommentsList;
