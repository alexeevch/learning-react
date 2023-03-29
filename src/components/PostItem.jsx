import React from 'react';

const PostItem = () => {
    return (
        <div className="post">
            <div className="post__content">
                <div className="post__title">1. JavaScript</div>
                <div className="post__description">
                    JS - Язык программирования
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;