import React from 'react'


function Output(props) {
    // console.log(props.response.data," check");

    const data = Object.entries(props.response.data);
    console.log(props);
    console.log(data);


    // const result = props.response.data.map( entity =>  <tr>
    //     <td>{entity[0]}</td>
    //     <td>{entity[1]}</td>
    // </tr>)
    // const result = props.response.data.((k) => {
    //     console.log(k);
    // })

    // console.log(result)

  return (
    
    <div>
        <table>
            {
                result
            }
        </table>
    </div>
  )
}

export default Output