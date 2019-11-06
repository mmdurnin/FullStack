import React from 'react';

class LoginUser extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.user

        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoUserLogin = this.demoUserLogin.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value} )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user).then(this.props.closeModal)
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
                    <ul>
                        {
                            this.props.errors.map((error, i) => {
                                return <li key={i}>{error}</li>
                            })
                        }
                    </ul>
                <form className="session-form-body" onSubmit={this.handleSubmit}>
                    <h1 className="session-form-title">Please Log In</h1>

                    <div className="session-form-input-login">
                        <label>
                            <input 
                            placeholder="Email"
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}/>
                        </label>
                    </div>

                    <br/><br/>

                    <div className="session-form-input-login">
                        <label>
                            <input 
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}/>
                        </label>
                    </div>

                    <br/><br/>

                    <input className="session-form-submit" type="submit" value="Login"/>
                    <br/><br/>
                    <button className="session-form-demo" onClick={this.demoUserLogin}>Login as Demo User</button>

                    <h5 className="form-switch">New to TableFor2? {this.props.otherForm}</h5>
                </form>
            </div>
        )
    }

}

export default LoginUser;