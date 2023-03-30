import React from 'react';

const PostItem = ({post}) => {
    return (
        <div className="post">
            <div className="post__content">
                <div className="post__title">
                    {post.id}. {post.title}
                </div>
                <div className="post__body">
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;