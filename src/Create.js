import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify(blog)}
        )
        .then(() => {
            console.log('Success')
            setIsPending(false)
        })
        //history.go(-1)
        history.push('/')
    }

    return ( 
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>BLog title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ></input>
                <label>BLog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario" >Mario</option>
                    <option value="Umut" >Umut</option>
                </select>
                { !isPending && <button>Add</button>}
                { isPending && <button>Adding blog..</button>}
            </form>
        </div>
     );
}
 
export default Create;