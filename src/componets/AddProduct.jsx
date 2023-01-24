import CategoryService from "../services/categoryService"
import ProductService from "../services/ProductService"



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

        let categories = CategoryService.getCategories();
        let options = [];
        for(let i = 0; i < categories.length; i++) options.push(categories(i));
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

        if(this.checkBtn.context._errors.length === 0){
            ProductService.create(
                this.state.name,
                this.state.image,
                this.state.price,
                this.state.description,
                this.state.category
            ).then(
                response =>{
                    this.setState({
                        message:response.data.message,
                        successful:true
                    })
                }, error =>{
                    const resMessage = 
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                    this.setState({
                        loading:false,
                        message:resMessage
                    });
                }
            )
        }
        
    }

    render(){
        return(
            <div className="col-md-12 d-flex justify-content-center">
                <div className="card card-container" style={{width: '18rem'}}>
                    <Form onSubmit={this.handleAddProduct} ref={c =>{this.form = c}}>
                        {!this.state.successful &&(
                            <div>
                                <div className="form-group">
                                    <label htmlFor="name"> Product Name:</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                        validations ={[required,vName]}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="image"> Product Image:</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="image"
                                        value={this.state.image}
                                        onChange={this.onChangeImage}
                                        validations ={[required,vImage]}/>
                                </div>

                                
                                <div className="form-group">
                                    <label htmlFor="price"> Product Price:</label>
                                    <Input
                                        type="number"
                                        min="1.00"
                                        className="form-control"
                                        name="price"
                                        value={this.state.price}
                                        onChange={this.onChangePrice}
                                        validations ={[required,vPrice]}/>
                                </div>

                                
                                <div className="form-group">
                                    <label htmlFor="image"> Product Description:</label>
                                    <textarea
                                        cols="10" 
                                        rows="10"
                                        className="form-control"
                                        name="name"
                                        value={this.state.description}
                                        onChange={this.onChangeDescription}
                                        validations ={[required,vDescription]}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category"> Product Category:</label>
                                    <select>
                                        {options.map(option =>(
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price"> Product Price:</label>
                                    <Input
                                        type="number"
                                        min="1.00"
                                        className="form-control"
                                        name="price"
                                        value={this.state.price}
                                        onChange={this.onChangePrice}
                                        validations ={[required,vPrice]}/>
                                </div>
                            </div>
                        )}
                    </Form>
                </div>

            </div>
        )
    }
}