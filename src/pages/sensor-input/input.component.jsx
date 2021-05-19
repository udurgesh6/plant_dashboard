import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Input() {


    const [input, setInput] = useState({
        Pune: 0,
        Nagpur:0
    })


    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput => {
           return {
               ...prevInput,
               [name]:value
           }
        })
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input);
    }
    return (
        <div>
            <h1>Input here</h1>
            <Form>

            <Form.Row className="align-items-center">

                <Col xs="auto" className="my-1">
                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                        Temperature
                    </Form.Label>

                    <Form.Control value={input.Pune} onChange={handleChange} placeholder="Pune" />
                    
                    <Form.Control value={input.Nagpur} onChange={handleChange} placeholder="Nagpur" />
                </Col>
                
                <Col xs="auto" className="my-1" onClick={handleClick}>
                    <Button type="submit">Submit</Button>
                </Col>
            </Form.Row>

            </Form>
        </div>
    )
}

export default Input;
