import React from 'react'

const Result = ({data}) => {
  return (
    <div>
        <table>
           
            {data.map((item)=>(
                <tr key={item.id}>
                    <td>{item.Country}</td>
                    
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Result