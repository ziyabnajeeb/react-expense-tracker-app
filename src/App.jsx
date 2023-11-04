import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './App.scss';

const App = () => {
  return (
    <Container>
      <Row className='mt-3'>
        <Col sm={6} className='mx-auto'>
          <Form>
            <Form.Group className='mb-3' controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control type='text' placeholder='Enter Description' />
              <Form.Text className='text-muted'>We'll never share your description with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='amount'>
              <Form.Label>Amount</Form.Label>
              <Form.Control type='number' placeholder='Amount' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label='Select Category'>
                <option>All</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
