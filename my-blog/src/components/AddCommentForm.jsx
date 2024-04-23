import React, { useState } from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();

    const addComment = async () => {
        const token = user && (await user.getIdToken());
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText,
        }, {
            headers,
        });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    };

    return (
        <div id="add-comment-form" className="mt-6 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 border-b-2 border-gray-300 mt-2  p-2 shadow-md rounded-md inline-block">Add a Comment</h3>
            {user && <p className="text-gray-700">You are posting as {user.email}</p>}
            <div className="flex flex-col items-center">
                <textarea
                    className="border border-gray-300 rounded-lg p-2 mt-2 w-2/4 text-center"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows="4"
                    placeholder="Enter your comment here..."
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-2 rounded-lg shadow-md"
                    onClick={addComment}
                    disabled={!commentText.trim()}
                >
                    Add Comment
                </button>
            </div>
        </div>
    );
};

export default AddCommentForm;
