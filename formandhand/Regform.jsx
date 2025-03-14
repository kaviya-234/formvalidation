import React from 'react'
import { useState } from 'react'
// import the css file
import './Regform.css';


export const Regform = () => {
    const[user,setUser]=useState({
        name:"kaviya",
        age:20,
        gender:"female",
        marrital:false,
        country:"india",
        bio:"write something about yourself",
    });
    function handler(e) {
        const name=e.target.name;
        // console.log(name);
        const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
        setUser({...user,[name]:value});
    }

  return (
    <>
        <h1>Regform form </h1>
        <table>
            <tbody>
                <tr>
                    <td>name: </td>
                    <td>{user.name} </td>
                </tr>
                <tr>
                    <td>age: </td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>gender:</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>marital status:</td>
                    <td>{user.marrital?"married":"unmarried"}</td>
                </tr>
                <tr>
                    <td>country: </td>
                    <td>{user.country} </td>
                </tr>
                <tr>
                    <td>job:</td>
                    <td>{user.bio}</td>
                </tr>
                
            </tbody>
        </table>

        {/* fill the form and show the details on top */}
        <form>
            <label htmlFor="">full name
            <input type="text" onChange={handler} name="name" placeholder='full name' value={user.name}/>
            </label>
            <label htmlFor="">age
            <input type="number" onChange={handler} name="age" placeholder='age' value={user.age}/>
            </label>
            <div className='gender'>
                <label htmlFor="gender">
                <input type="radio" onChange={handler}  name="gender" id='male' checked={user.gender == "male"} value="male"/>male
                </label>
                <label htmlFor="gender">
                <input type="radio" onChange={handler}  name="gender" id='female' checked={user.gender == "female"} value="female"/>female
                </label>
            </div>
            <label htmlFor="married">
                <input type="checkbox" onChange={handler}  name="marrital" id="married"  checked={user.marrital} />
                ismarried
            </label>
            <div>
                    <label htmlFor="country">select country</label>
                    <select name="country" id="country"  onChange={handler} name="country"> 
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
            </div>
            <textarea onChange={handler} name="bio" id="bio" cels="30" rows="5" placeholder='writing about you' value={user.bio}></textarea>


        </form>
        
        
    </>
  )
}
