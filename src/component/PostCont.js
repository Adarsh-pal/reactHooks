import React , {useState} from 'react'
import View from './View'


const initialHeading = "Create Post : "

export const headingContext = React.createContext(initialHeading);

function PostCont() {

    const [heading, setHeading]  = useState(initialHeading);

  return (
    <div className='post'>
        <headingContext.Provider value={setHeading}>
            <h1>{heading}</h1>
            <View />
        </headingContext.Provider>
        
    </div>
  )
}

export default PostCont