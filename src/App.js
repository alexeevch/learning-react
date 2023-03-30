import React, {useState} from 'react';
import '../src/styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'JS - Язык програмирования'},
        {id: 2, title: 'JavaScript 2', body: 'JS - Язык програмирования 2'},
        {id: 3, title: 'JavaScript 3', body: 'JS - Язык програмирования 3'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
