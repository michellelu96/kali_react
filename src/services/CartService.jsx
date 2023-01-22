import http from "../httpCommon";

class CartService{
    getAll(){
        return http.get("/cart");
    }

    addToCart(id){
        return http.post(`/cart/add/${id}`);
    }

    updateItem(id,data){
        return http.put(`/cart/update/${id}`,data);
    }

    deleteItem(id){
        return http.delete(`cart/delete/${id}`);
    }
}

export default new CartService;