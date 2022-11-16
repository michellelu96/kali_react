import http from "../http-common";

class ProductService{
    getAll(){
        return http.get("/products");
    }

    getOne(id){
        return http.get('/products/${id}')
    }

    create(data){
        return http.post("/products/add",data)
    }

    update(id, data){
        return http.post('/products/update/${id}',data);
    }

    delete(id){
        return http.delete('/products/delete/${id}');
    }


}

export default new ProductService();