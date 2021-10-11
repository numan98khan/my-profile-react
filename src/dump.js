import React,{useState,useEffect} from 'react';
import Header from './Header'
import './App.css';

import Dashboard from './Dashboard';

import './App.css';
import Axios from 'axios'

function App() {  
  
  const [comments,setComments]=useState([])
  useEffect(() => {
    fetchComments();
  }, [])
  useEffect(() => {
    console.log(comments)
  }, [comments])

  const fetchComments = async()=>{

    // POST request using axios with set headers
    const article = { title: 'React POST Request Example' };
    // const headers = { 
    //     'Authorization': 'Bearer my-token',
    //     'My-Custom-Header': 'foobar'
    // };

    const headers = {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "upgrade-insecure-requests": "1",
    }

    // http://127.0.0.1:5000/
    // const api_endpoint = "http://127.0.0.1:5000/"
    const api_endpoint = "https://backpoint.azurewebsites.net/"

    Axios.post(api_endpoint, article, { headers })
        .then(response => {
          console.log(response);
        })
        // .then(response => this.setState({ articleId: response.data.id }));
    
    // Simple POST request with a JSON body using axios
    // const article = { title: 'React POST Request Example' };
    // axios.post('https://reqres.in/api/articles', article)
    //     .then(response => this.setState({ articleId: response.data.id }));

    // const response=await Axios('https://backpoint.azurewebsites.net/');
    
    // console.log(response.data)

    // setComments(response.data)    
  }

  

  return (
    <div className="container">

      <Header></Header>
      {
        <form>
          <label>
            Name:
            <br/>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      }

      {/* <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
