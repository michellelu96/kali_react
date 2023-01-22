


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