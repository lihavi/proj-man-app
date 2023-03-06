import React, {useState} from "react";

 
 function LoginForm() {

    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch('https://your-user-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
       
      })
      .catch(error => console.error(error));
    };
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
  
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
export default LoginForm;
