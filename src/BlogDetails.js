import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams()  
    const { data:blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id) 
    const history = useHistory()
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return ( 
        <div>
            {isPending && <div> Loading...</div>}
            { error && <div>{ error }</div>}
            {blog && (
                <div>
                    <h3>{ blog.title }</h3>
                    <p>{ blog.author}</p>
                    <p>{ blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails
