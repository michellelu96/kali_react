


const required = value =>{
    if(!value){
        return(
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
}


const vName = value =>{
    if(value.length < 3){
        return(
            <div className="alert alert-danger" role="alert">
                Name must be more than 3 characters
            </div>
        )
    }
}

const vCategory = value =>{
    if(value.length < 3){
        return(
            <div className="alert alert-danger" role="alert">
               Must choose a category
            </div>
        )
    }
}

const vPrice = value =>{
    if(value < 1 ){
        return(
            <div className="alert alert-danger" role="alert">
                Price must be more than 1.00
            </div>
        )
    }
}

const vDescription = value =>{
    if(value.length < 10){
        return(
            <div className="alert alert-danger" role="alert">
                Description must be more than 10 characters
            </div>
        )
    }
}

const vImage = value =>{
    if(!value){
        return(
            <div className="alert alert-danger" role="alert">
                Must upload an Image
            </div>
        )
    }
}

export default class AddProduct extends Component{
    constructor(props){
        super(props);
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        this.state ={
            name:"",
            category:"",
            price: 0.0,
            description: "",
            image:"",
            successful: false,
            message:""
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeCategory(e){
        this.setState({
            category: e.target.value
        })
    }

    onChangePrice(e){
        this.setState({
            price: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeImage(e){
        this.setState({
            image: e.target.value
        })
    }

    handleAddProduct(e){
        e.preventDefault();

        this.setState({
            message:"",
            successful:false
        });

        this.form.validateAll();

        
    }
}