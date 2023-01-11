import { Form } from "react-router-dom";

const required = value =>{
    if(!value){
        return(
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
}

const vEmail = value =>{
    if(!isEmail(value)){
        return(
            <div className="alert alert-danger" role="alert">
                This is not a valid email
            </div>
        );
    }
}

const vUsername = value => {
    if(value.length < 3 || value.length > 20){
        return(
            <div className="alert alert-danger" role="alert">
                Username must be between 3 and 20 characters
            </div>
        )
    }
}

const vPassword = value =>{
    if(value.length < 6 || value.length > 40){
        return(
        <div className="alert alert-danger" role="alert">
            Password must be between 6 and 40 characters
        </div>
        )
    }
}

const vFirstName = value =>{
    if(value.length < 2 || value.length > 20){
        return(
            <div className="alert alert-danger" role="alert">
                First name must be between 2 and 20 characters
            </div>
        )
    }
}

const vLastName = value =>{
    if(value.length < 2 || value.length > 20){
        return(
            <div className="alert alert-danger" role="alert">
                Last name must be between 2 and 20 characters
            </div>
        )
    }
}

const vPhoneNumber = value =>{
    if(value.length != 10){
        return(
            <div className="alert alert-danger" role="alert">
                Phone number must be 10 numbers
            </div>
        )
    }
}

export default class Register extends Component{
    constructor(props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName  = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);

        this.state = {
            username:"",
            email:"",
            password:"",
            firstName:"",
            lastName:"",
            phoneNumber:"",
            successful: false,
            message:""
        }
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            lastName:e.target.value
        })
    }

    onChangePhoneNumber(e){
        this.setState({
            phoneNumber: e.target.value
        })
    }

    handleRegister(e){
        e.preventDefault();

        this.setState({
            message:"",
            successful:false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.username,
                this.state.email,
                this.state.password,
                this.state.firstName,
                this.state.lastName,
                this.state.phoneNumber
            ).then(
                response =>{
                    this.setState({
                        message:response.data.message,
                        successful:true
                    });
                },
                error => {
                    const resMessage = 
                    (error.reponse &&
                        error.reponse.data &&
                        error.repsonse.data.message) ||
                    error.message ||
                    error.toString();

                    this.setState({
                        loading:false,
                        message:resMessage
                    });
                }
            );
        }
    }

    render(){
        return(
       <div className="col-md-12">
        <div className="card card-container">
            <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile img-card"/>

            <Form
            onSubmit={this.handleRegister}
            ref={c =>{
                this.form = c;
            }}
            >
                {!this.state.successful &&(
                    <div>

                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                                validations={[required,vFirstName]}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                                validations={[required,vLastName]}/>
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.onChangePhoneNumber}
                                validations={[required,vPhoneNumber]}/>
                        </div>


                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required,vUsername]}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                validations={[required,vEmail]}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required,vPassword]}/>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Sign Up</button>
                        </div>
                    </div> 
                )}

                {this.state.message &&(
                    <div className="form-group">
                        <div
                        className={
                            this.state.successful
                            ? "alert alert-sucessful"
                            : "alert alert-danger"
                        }
                        role="alert">
                            {this.state.message}
                        </div>
                    </div>
                )}
                <CheckButton 
                    style={{display:"none"}}
                    ref={c =>{
                        this.checkBtn = c
                    }}
                />
            </Form>
        </div>
       </div> 
       )
    }
}