import  { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Box } from '@mui/material';
import { Todo } from "../models/Todo"

const CreateTodo = () => {
    const [formData,setFormData] = useState<Todo>({
        taskName: '',
        userName: '',
        email: '',
        contact: 0
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: name === 'contact' ? Number(value) : value
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
          taskName: '',
          userName: '',
          email: '',
          contact: 0
        });
      };
      
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
    <Paper elevation={3} style={{ padding: '2rem' }}>
      <Typography variant="h5" gutterBottom>
        Add Todo
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Task Name"
            variant="outlined"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="User Name"
            variant="outlined"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Contact"
            variant="outlined"
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            fullWidth
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            fullWidth
          >
            Add Todo
          </Button>
        </Box>
      </form>
    </Paper>
  </Container>
  )
}

export default CreateTodo;