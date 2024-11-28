import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    date_start: '',
    date_due: '',
    status: 'pending'
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleCreateTask = async () => { 
    try { 
      await createTask(newTask); 
      fetchTasks(); 
      setNewTask({ name: '', description: '', date_start: '', date_due: '', status: 'pending' }); 
    } catch (error) { 
      console.error('Error creating task:', error); 
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await updateTask(id, updatedTask);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const categorizeTasks = () => {
    const pending = tasks.filter(task => task.status === 'pending' && new Date(task.date_due) >= new Date());
    const completed = tasks.filter(task => task.status === 'completed');
    const overdue = tasks.filter(task => task.status === 'pending' && new Date(task.date_due) < new Date());
    return { pending, completed, overdue };
  };

  const { pending, completed, overdue } = categorizeTasks();

  return (
    <Container className="mt-5 text-center bg-black text-white">
      <h1>To-Do List</h1>
      <Form className="mb-4">
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Task Name"
              name="name"
              value={newTask.name}
              onChange={handleInputChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="date"
              name="date_start"
              value={newTask.date_start}
              onChange={handleInputChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="date"
              name="date_due"
              value={newTask.date_due}
              onChange={handleInputChange}
            />
          </Col>
          <Col>
            <Button onClick={handleCreateTask}>Create Task</Button>
          </Col>
        </Row>
      </Form>

      <h3>Pending Tasks</h3>
      <Row>
        {pending.map(task => (
          <Col key={task.id} md={6} className="mb-4 mx-auto">
            <Card className="border-radius">
              <Card.Body>
                <Card.Title>{task.name}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text>Start Date: {task.date_start}</Card.Text>
                <Card.Text>Due Date: {task.date_due}</Card.Text>
                <Button variant="warning" onClick={() => handleUpdateTask(task.id, { ...task, status: 'completed' })}>Complete</Button>
                <Button variant="danger" onClick={() => handleDeleteTask(task.id)} className="ml-2">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3>Completed Tasks</h3>
      <Row>
        {completed.map(task => (
          <Col key={task.id} md={6} className="mb-4 mx-auto">
            <Card className="border-radius">
              <Card.Body>
                <Card.Title>{task.name}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text>Start Date: {task.date_start}</Card.Text>
                <Card.Text>Due Date: {task.date_due}</Card.Text>
                <Card.Text>Finished Date: {task.date_finished}</Card.Text>
                <Button variant="danger" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3>Overdue Tasks</h3>
      <Row>
        {overdue.map(task => (
          <Col key={task.id} md={6} className="mb-4 mx-auto">
            <Card className="border-radius" rounded>
              <Card.Body>
                <Card.Title>{task.name}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text>Start Date: {task.date_start}</Card.Text>
                <Card.Text>Due Date: {task.date_due}</Card.Text>
                <Button variant="warning" onClick={() => handleUpdateTask(task.id, { ...task, status: 'completed' })}>Complete</Button>
                <Button variant="danger" onClick={() => handleDeleteTask(task.id)} className="ml-2">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TodoList;
