import React, { useState, useEffect } from "react";

const Records = () => {
    const [users, setUsers] = useState([])

    const getuser = async () => {
        const res = await fetch('/getUsers')
        setUsers(await res.json())
       
    }
    useEffect(() => {
        getuser()
    })


    return <>
        {users.map((data) => 
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="col">Name</th>
                            <th className="col">Email</th>
                            <th className="col">Word</th>
                            <th className="col">Phone</th>
                        </tr>
                    </thead>
                  
                   <tbody>
                      <td>{data.Name}</td>
                      <td>{data.Email}</td>
                      <td>{data.Work}</td>
                      <td>{data.Phone}</td>
                   </tbody>
                 </table>
            </div>

          
    )}
    </>
}
export default Records