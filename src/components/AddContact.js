import React from 'react';
import './App.css'
class AddContact extends React.Component {
    state = {
        name : "",
        email : "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name : "" , email : ""})

    }
   render() {
    return (
        <div className='newcont'>
            <h2 className='addcont'>Add a new Contact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text"
                     name="name" placeholder="Name"
                     value={this.state.name}
                      onChange={(e) => this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" 
                    name="email" placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Mobile Number</label>
                    <input type="number" 
                    name="phone" placeholder="Phone Number"
                    value={this.state.phone}
                    onChange={(e) => this.setState({phone: e.target.value})}/>
                </div>
                <button className='btn'>Add +</button>
                <h3>Your Contacts</h3>
            </form>
        </div>
    );
   }
}
export default AddContact;



