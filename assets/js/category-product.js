// categoria possui varios produtos
class Category {
    constructor (id, name){
        this.name = name;
        this.id = id;
        this.products = [];
    }
}

class Product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService{
    constructor(){
        this.categories = [];
        this.nextCategoryId = 0;
    }

    AddCategory(name){
        const id = this.nextCategoryId++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}