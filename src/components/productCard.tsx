/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Card,Button,Form} from 'react-bootstrap';
import {useState} from 'react';
import { supabase } from '../pages/supabaseClient';

export default function productCard(props :any){
    
    const product = props.product;
    const [editing,setEditing] = useState(false);
    const [name,setName]= useState(product.name);
    const [description,setDesc]= useState(product.description);
    const [color,setColor]= useState(product.color);

    async function updateProducts(){
        const { data, error } = await supabase
            .from("orders")
            .update({
              name:name,
              description:description,
              color:color,
            })
            .eq("id",product.id)
          if (error) throw error;
          window.location.reload();
    }
    async function deleteProducts(){
        const { data, error } = await supabase
            .from("orders")
            .delete()
            .eq("id",product.id)
          if (error) throw error;
          window.location.reload();
    }
    return(
        <>
        
        <Card style={{width:"18rem"}}>
            <Card.Body>
                {editing ==false ?
           <>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.color}</Card.Text>
            <Button variant='danger' onClick={()=> deleteProducts()}>Delete</Button>
            <Button variant='secondary' onClick={() => setEditing(true)}>Edit</Button>
            </>
            :
            <>
            <Form.Label>Product Name</Form.Label>
                    <Form.Control
                    type="text"
                    id="name"
                    defaultValue={product.name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                    type="text"
                    id="description"
                    defaultValue={product.description}
                    onChange={(e) => setDesc(e.target.value)}
                    />
                    <Form.Label>Color</Form.Label>
                    <br />
                    <Form.Control
                    type="color"
                    id="name"
                    defaultValue={product.color}
                    onChange={(e) => setColor(e.target.value)}
                    />
                    <br />
                    <Button onClick={() => updateProducts()}>Update Product</Button>

            {/* <Button size='sm'  onClick={() => setEditing(false)}>Submit</Button> */}
            </>
            }
            </Card.Body>
        </Card>
        </>
    );
} 