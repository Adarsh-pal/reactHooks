import React ,{useState} from 'react'
import Form from './Form';
import Output from './Output';

function View () {
    
    const [view , setView] = useState(true);
    const [res , setRes] = useState({});

    return (
        <div>
            { view && <Form  set={{setView, setRes }} />}
            {!view && <Output response={res}/>}
        </div>
    )
}

export default View;