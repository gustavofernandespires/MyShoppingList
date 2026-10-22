import APIClient from "./utils/APIClient"

class CategoriesService {
  async listCategories() {
    return APIClient.get("/categories");
  }

  async getCategoryById(id) {
    return APIClient.get(`/categories/${id}`);
  }

  async createCategory(category) {
    return APIClient.post("/categories", {
      body: category,
    });
    
  }

  async updateCategory(id, category) {
    return APIClient.put(`/categories/${id}`, {
      body: category,
    });
  }

  async deleteCategory(id) {
    return APIClient.delete(`/categories/${id}`);
  }
}

export default new CategoriesService();
