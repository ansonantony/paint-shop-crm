/* eslint-disable @typescript-eslint/no-unused-vars */
import SideBar from "../components/sidebar";
//import CustomerForm from "../components/CustomerForm"; 
import TableCardE from "../components/TableCardE";
import {useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button,Table} from 'react-bootstrap';
import { supabase } from './supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableCard from "../components/TableCard";

//to be more secure use .env
export default function Employee(){
    const [name,setName]= useState("");
    const [gender,setGender]= useState("");
    const [dob,setDob]= useState("");
    const [salary,setSalary]= useState("");

    const [employees,setemployees]= useState([""]);
    console.log(name);
    console.log(gender);
    console.log(dob);

    useEffect(()=>{
        getProducts();
    },[]
    )
    async function getProducts() {
          const { data, error } = await supabase
            .from("employees")
            .select("*")
            .limit(10)
          if (error) throw error;
          if (data != null) {
            setemployees(data); // [product1,product2,product3]
          }
        }
    async function createProducts() {
          const { data, error } = await supabase
            .from("employees")
            .insert({
              name:name,
              gender:gender,
              dob:dob,
              salary:salary,
            })
            .single()
          if (error) throw error;
          window.location.reload();
        }
        console.log(employees);

    return(
        <>
        
        <SideBar/>
        
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h3>Employee Database</h3>
                    
                    <br></br>
                    
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Label>Gender</Form.Label>
                    <br />
                    {/* <Form.Control
                    type="text"
                    id="description"
                    onChange={(e) => setDesc(e.target.value)}
                    /> */}
                   
            <Form.Check
            inline
            label="Male"
            name="group1"
            type='radio'
            onChange={(e) => setGender("Male")}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type='radio'
            onChange={(e) => setGender("Female")}
            id={`inline-radio-2`}
          />
                    <Form.Label>dob</Form.Label>
                    <br />
                    <Form.Control
                    type="date"
                    id="name"
                    width={100}
                    onChange={(e) => setDob(e.target.value)}
                    />
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                    type="number"
                    id="name"
                    onChange={(e) => setSalary(e.target.value)}
                    />
                    <br />
                    <Button onClick={()=> createProducts()}>Create Database</Button>
                </Col>
            </Row>
            <hr />
            <h3>Current Items in Database</h3>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>CID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        
        {employees.map((product)=>(
            <TableCardE product={product}/>
          ))}
        
        
      </tbody>
    </Table>
        </Container>
        </>
    );
                }