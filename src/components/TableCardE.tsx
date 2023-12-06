/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Table,Button,Form} from 'react-bootstrap';
import {useState} from 'react';
import { supabase } from '../pages/supabaseClient';

export default function TableCard(props :any){
    
    const product = props.product;
    const [editing,setEditing] = useState(false);
    const [name,setName]= useState(product.name);
    const [gender,setGender]= useState(product.gender);
    const [age,setAge]= useState(product.age);
    const [salary,setSalary]= useState(product.salary);

    async function updateProducts(){
        const { data, error } = await supabase
            .from("employees")
            .update({
              name:name,
              gender:gender,
              age:age,
            })
            .eq("id",product.id)
          if (error) throw error;
          window.location.reload();
    }
    async function deleteProducts(){
        const { data, error } = await supabase
            .from("employees")
            .delete()
            .eq("id",product.id)
          if (error) throw error;
          window.location.reload();
    }
    return(
        <>
        
        
                {editing ==false ?
           <>
            <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.gender}</td>
          <td>{product.dob}</td>
          <td>{product.salary}</td>
          
          <td>  <Button variant='danger' onClick={()=> deleteProducts()}>Delete</Button></td>
          <td> <Button variant='secondary' onClick={() => setEditing(true)}>Edit</Button></td>
            </tr>
            </>
            :
            <>
            <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                    type="text"
                    id="name"
                    defaultValue={product.name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Label> Gender</Form.Label>
                    <Form.Control
                    type="text"
                    id="gender"
                    defaultValue={product.gender}
                    onChange={(e) => setGender(e.target.value)}
                    />
                    <Form.Label>Age</Form.Label>
                    <br />
                    <Form.Control
                    type="date"
                    id="dob"
                    defaultValue={product.age}
                    onChange={(e) => setAge(e.target.value)}
                    />
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                    type="number"
                    id="name"
                    defaultValue={product.name}
                    onChange={(e) => setSalary(e.target.value)}
                    />
                    <br />
                    <Button onClick={() => updateProducts()}>Update Employee</Button>

            {/* <Button size='sm'  onClick={() => setEditing(false)}>Submit</Button> */}
            </>
            }
            
        </>
    );
} 