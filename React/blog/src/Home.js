//import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://192.168.245.132:8000/blogs');
    //[
    //{ title: 'First', body: '1st story', author: 'Mario', id: 1 },
    //{ title: 'Second', body: '2nd story', author: 'Luigi', id: 2 },
    //{ title: 'Third', body: '3rd story', author: 'Mario', id: 3 }
    //]
    //let name = 'mario';
    //const [name, setName] = useState('mario');
    //const [age, setAge] = useState(25);

    //const handleClick = () => {
        //setName('luigi');
        //setAge(30);
        //console.log(`Hello, ninjas ${name}`);
    //};
    //const handleClickAgain = (name, e) => console.log(`Hello, ${name} ${e.target}`, e.target);
    //const handleDelete = (id) => {
        //const newBlogs = blogs.filter(blog => blog.id !== id);
        //setBlogs(newBlogs);
    //}

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All blogs" /> } {/* blogs &&: check that we fetched blogs */}
            { /* <button onClick={() => setName('luigi')}>change me</button>
                blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} handleDelete={handleDelete} title="Mario's blogs" />
                <br />
                <h2>Home</h2>
                <button onClick={handleClick}>Click me!</button>
                <p>{name} is {age} years old.</p>
                <button onClick={(e) => handleClickAgain('mario', e)}>Click me again!</button>
            */ }
        </div>
    );
}

export default Home;
