import axios from "axios";

export const fetchProducts = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const products = response.data;
        const categories = removeDuplicatesNames(products.map(product => product.category));
        return { response, categories }
    } catch (error) {
        console.error(error);
    }
};


function removeDuplicatesNames(categoryArray) {
    const category = [];
    categoryArray.forEach(element => {
        if (!category.includes(element)) {
            category.push(element)
        }
    });
    return category
}