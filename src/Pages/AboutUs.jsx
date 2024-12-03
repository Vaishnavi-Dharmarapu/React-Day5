import React from 'react'
const AboutUs=()=> {
    const person={
        p_name:'Vaish',
        p_email:'vaish@yahoo.com',
        p_dob:'9-10-2003',
        p_status:'working',
        p_hobby:'reading',
        p_address:{
            addressline:'pinkcity',
            pincode:500074,
            landmark:'rgv school',
        },
        p_companyname:'abc',
        p_employmenttype:'fulltime'
    }
  return (

    <div>
        <h1>Persons Information</h1>
        <table cellSpacing='0' border='4' cellPadding='10'>
            <tr>
                <td>Person Name</td>
                <td> {person.p_name}</td>
            </tr>
            <tr>
                <td> Person Email</td>
                <td>{person.p_email}</td>

            </tr>
            <tr>
                <td>Person Status</td>
                <td>{person.p_status}</td>
            </tr>
            <tr>
                <td>Person Company</td>
                <td>{person.p_companyname}</td>
            </tr>
            </table>
    </div>
  )
}

export default AboutUs