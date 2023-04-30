import axios from "axios";


export const fetchProducts = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_API_URL + "/products");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


export const getCategory = async () => {
    const categoryData = await fetchProducts();
    const categories = await removeDuplicatesNames(categoryData.map(singleCategory => singleCategory.category));
    return categories
}

function removeDuplicatesNames(categoryArray) {
    const category = [];
    categoryArray.forEach(element => {
        if (!category.includes(element)) {
            category.push(element)
        }
    });
    return category
}

