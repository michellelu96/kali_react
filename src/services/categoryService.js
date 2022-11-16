import http from "../http-common";

class CategoryService{
    getAll(){
        return http.get("/category")
    }

    createCategory(){
        return http.get("/category/create")
    }

    updateCategory(id){
        return http.get("/category/update/${id}")
    }

    deleteCategory(id){
        return http.get("/category/delete/${id}")
    }
}

export default CategoryService;