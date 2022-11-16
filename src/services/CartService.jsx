import http from "../http-common";

class CartService{
    getAll(){
        return http.get("/cart");
    }

    addToCart(){
        return http.post("/cart/add");
    }

    updateItem(id){
        return http.put("/cart/update/${id}");
    }

    deleteItem(id){
        return http.delete('/cart/delete/${id}');
    }
}

export default CartService;