import http from "../httpCSommon";

class CategoryService{
    getAll(){
        return http.get(`/category`)
    }

    createCategory(){
        return http.post(`/category/create`)
    }

    updateCategory(id){
        return http.get(`/category/update/${id}`)
    }

    deleteCategory(id){
        return http.get(`/category/delete/${id}`)
    }
}

export default CategoryService;