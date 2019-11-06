import React from 'react';

class SignupUser extends React.Component{
    constructor(props){
        super(props)

        this.state=this.props.user
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoUserLogin = this.demoUserLogin.bind(this)
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

    demoUserLogin(e) {
        e.preventDefault();
        const demoUser = { 
                email: "demo@user.com", 
                password: "demoPassword123"
        };
        this.props.login(demoUser).then(this.props.closeModal);
    }

    render(){
        return(
            <div className="form-front">
                <form className="session-form-body" onSubmit={this.handleSubmit}>
                    <h1 className="session-form-title">Welcome to TableFor2!</h1>

                    <div className="session-form-input">
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

                    <div className="session-form-input">
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

                    <div className="session-form-input">
                        <label>
                            <input 
                            placeholder="Password *"
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            />
                        </label>
                    </div>

                    <br/>
                        <ul className="session-errors">
                            {
                                this.props.errors.map((error, i) => {
                                    return <li key={i}>{error}</li>
                                })
                            }
                        </ul>
                    <br/>
                    
                    <input className="session-form-submit" type="submit" value="Create Account"/>
                    <br />
                    <div className="session-form-subtext">Don't want to complete the form?</div>
                    <br/>
                    <button className="session-form-demo" onClick={this.demoUserLogin}>Login as Demo User</button>

                    <h5 className="form-switch">Already have an account? {this.props.otherForm}</h5>
                </form>
            </div>
        )
    }

}


export default SignupUser;