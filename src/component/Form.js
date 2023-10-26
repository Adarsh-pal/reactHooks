import React , {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import { headingContext } from './PostCont';

function Form(props) {
    
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState(1);
    const [body, setBody] = useState('');

    const setHeading = useContext(headingContext);

    useEffect(() => {

        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,
            body,
            userId
        })

        .then(res => {
            if(title !== ''){
                setHeading('Post Created Successfully!')
                props.set.setRes(res);
                props.set.setView(false);
                
            }
        })

        .catch(err => {
            
        })

    } , [userId] )

  return (
    
    <form> 
        <label>Title </label><br />
        <input type='text' value={title} onChange={ e => setTitle(e.target.value)}/><br />
        <label>Body </label><br />
        <textarea value={body} onChange={ e => setBody(e.target.value)}></textarea><br />
        <button type='submit' onClick={ e => {
            
            e.preventDefault();
            setUserId(prevVal => prevVal + 1)
        }}>Post</button>
    </form>
    
  )
}

export default Form