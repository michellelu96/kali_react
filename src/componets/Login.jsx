import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/authService";

import { withRouter } from '../common/with-router';
import { Component } from "react";

const required = value =>{
    if(!value){
        return(
            <div className= "alert alert-danger" role ="alert">
            This field is required!
            </div>
        )
    }
}

class Login extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message:""
        };
    }

    onChangeUsername(e)  {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e)  {
        this.setState({
            password: e.target.value
        });
    } 

    handleLogin(e){
        e.preventDefault();

        this.setState({
            message:"",
            loading:true
        });

        this.form.validateAll();

        if(this.checkBtn.context._errors.length === 0){
            AuthService.login(this.state.username, this.state.password).then(
                () = > {
                    this.props.router.navigate("/profile");
                    window.location.reload();
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
        }else{
            this.setState({
                loading:false
            });
        }
    }

    render(){
        return(
            <div className="col-md-12">
                <div className="card card-container">
                    
                </div>
            </div>
        )
    }
}

