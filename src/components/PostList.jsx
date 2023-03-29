import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    return (
        <div>
            <h1 className="title" style={{textAlign: "center"}}>Список постов</h1>
            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostList;