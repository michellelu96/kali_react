import http from "../httpCommon";

class ProductService{
    getAll(){
        return http.get("/product");
    }

    getOne(id){
        return http.get(`/product/${id}`)
    }

    update(id, data){
        return http.post(`/product/update/${id}`,data);
    }

    delete(id){
        return http.delete(`/product/delete/${id}`);
    }

    create(name,image,price,description,category){
        return http.post("/product/add", {
            name,
            image,
            price,
            description,
            category
        });
    }

}

export default new ProductService();