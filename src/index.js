import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Markdown from 'marked-react';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

class MyPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "# Welcome to my React Markdown Previewer! ## This is a sub-heading... ### And here's some other cool stuff:"
      
    };
    
    
    this.handleChange = this.handleChange.bind(this);

  }
  
  
  handleChange(event) {
       this.setState({
       value: event.target.value
    });
  }
  
   
  render() {
    
    const preview = this.state.value

    const MarkdownComponent = (preview) => {
      return <Markdown>{preview}</Markdown>;
    };
    
    return (
       <form style={{
        position: 'absolute', left: '50%', top: '25%',
        transform: 'translate(-50%, -50%)'
    }}>
      <div>
        <label>Editor
          <div>{'\n'}</div>
         <textarea rows='15' cols='50'  id ="editor" value = {this.state.value} onChange = {this.handleChange}/>
        </label>   
        </div>
        
  <label>Preview
   
         <p id ="preview">{MarkdownComponent(preview)}</p>
         </label>                   
        </form>
    );
  }
}

ReactDOM.render(<MyPreviewer />,
document.getElementById("root"))



