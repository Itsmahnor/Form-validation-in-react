import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return ( 
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[70vw] md:w-[40vw] lg:w-[30vw]">
        <h2 className="text-center text-3xl font-semibold text-blue-700 mb-8">Contact Us</h2>
        <Form>
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label className="text-gray-700 font-medium">Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Form.Text className="text-gray-500 text-sm">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className="text-gray-700 font-medium">Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Group>

          <Form.Group className="flex items-center mb-6" controlId="formBasicCheckbox">
            <Form.Check 
              type="checkbox" 
              label="Check me out" 
              className="text-gray-700"
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition duration-300"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
