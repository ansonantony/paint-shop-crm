/* eslint-disable @typescript-eslint/no-unused-vars */
import SideBar from "../components/sidebar";
//import CustomerForm from "../components/CustomerForm"; 
import ProductCard from "../components/productCard";
import {useState,useEffect} from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import { supabase } from './supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';

//to be more secure use .env
export default function Orders(){
    const [name,setName]= useState("");
    const [description,setDesc]= useState("");
    const [color,setColor]= useState("");
    const [orders,setOrders]= useState([""]);
    console.log(name);
    console.log(description);
    console.log(color);

    useEffect(()=>{
        getProducts();
    },[]
    )
    async function getProducts() {
          const { data, error } = await supabase
            .from("orders")
            .select("*")
            .limit(10)
          if (error) throw error;
          if (data != null) {
            setOrders(data); // [product1,product2,product3]
          }
        }
    async function createProducts() {
          const { data, error } = await supabase
            .from("orders")
            .insert({
              name:name,
              description:description,
              color:color,
            })
            .single()
          if (error) throw error;
          window.location.reload();
        }
        console.log(orders);

    return(
        <>
        
        <SideBar/>
        
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h3>Create Order for Database</h3>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                    type="text"
                    id="description"
                    onChange={(e) => setDesc(e.target.value)}
                    />
                    <Form.Label>Color</Form.Label>
                    <br />
                    <Form.Control
                    type="color"
                    id="name"
                    width={100}
                    onChange={(e) => setColor(e.target.value)}
                    />
                    <br />
                    <Button onClick={()=> createProducts()}>Create Product</Button>
                </Col>
            </Row>
            <hr />
            <h3>Current Items in Database</h3>
            <Row xs={1} lg={3} className="g-4">
                {orders.map((product)=>(
                <Col>
                    <ProductCard product = {product}/> {/* product = {product} */}
                 </Col>
                ))}
                
            
            </Row>
        </Container>
        </>
    );
                }