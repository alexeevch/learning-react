import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 className="title" style={{textAlign: "center"}}>
                {title}
            </h1>
            {posts.map((post, index) => {
                return <PostItem key={post.id} post={post} number={index + 1}/>
            })}
        </div>
    );
};

export default PostList;