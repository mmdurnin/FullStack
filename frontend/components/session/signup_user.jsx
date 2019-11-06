import React from 'react';

class SignupUser extends React.Component{
    constructor(props){
        super(props)

        this.state=this.props.user
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => {
            this.setState( {[field]: e.currentTarget.value} )
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(this.props.closeModal);
    }

    render(){
        return(
            <div className="form-front">
                    <ul>
                        {
                            this.props.errors.map((error, i) => {
                                return <li key={i}>{error}</li>
                            })
                        }
                    </ul>
                <form className="session-form-body" onSubmit={this.handleSubmit}>
                    <h1 className="session-form-title">Welcome to TableFor2!</h1>
                    
                    <div className="session-form-input-signup">
                        <label>
                            <input
                            placeholder="What name do you go by? *" 
                            type="text"
                            value={this.state.name}
                            onChange={this.update("name")}
                            />
                        </label>
                    </div>

                    <br/><br/>

                    <div className="session-form-input-signup">
                        <label>
                            <input
                            placeholder="Email Address *" 
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            />
                        </label>
                    </div>

                    <br/><br/>

                    <div className="session-form-input-signup">
                        <label>
                            <input 
                            placeholder="Password *"
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            />
                        </label>
                    </div>

                    <br/><br/>
                    
                    <input className="session-form-submit" type="submit" value="Create Account"/>
                    <h5 className="form-switch">Already have an account? {this.props.otherForm}</h5>
                </form>
            </div>
        )
    }

}


export default SignupUser;