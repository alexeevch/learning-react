import React, {useState} from 'react';
import '../src/styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: "JS - Язык програмирования"},
        {id: 2, title: 'JavaScript 2', body: "JS - Язык програмирования 2"},
        {id: 3, title: 'JavaScript 3', body: "JS - Язык програмирования 3"},
    ]);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const addNewPost = (e) => {
        e.preventDefault();
        
        const newPost = {
            id: Date.now(),
            title,
            body,
        }

        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    placeholder="Заголовок"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <MyInput
                    placeholder="Описание"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <MyButton onClick={addNewPost}>Создать</MyButton>
            </form>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
