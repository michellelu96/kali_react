
const required = value =>{
    if(!value){
        return(
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
}

const email = value =>{
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
        
    }
}