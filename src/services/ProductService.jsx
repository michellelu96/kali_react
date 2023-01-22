import http from "../httpCommon";

class ProductService{
    getAll(){
        return http.get("/product");
    }

    getOne(id){
        return http.get(`/product/${id}`)
    }

    create(data){
        return http.post(`/product/add`,data)
    }

    update(id, data){
        return http.post(`/product/update/${id}`,data);
    }

    delete(id){
        return http.delete(`/product/delete/${id}`);
    }


}

export default new ProductService();