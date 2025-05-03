const getStoredProductList = () => {
    const storedListStr = localStorage.getItem("product-list");
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
};

const addStoredProductList = (id) => {
    const storedProduct = getStoredProductList();
    if(storedProduct.includes(id)){
        alert("already exist this product");
    }else{
        storedProduct.push(id);
        const storedListStr = JSON.stringify(storedProduct);
        localStorage.setItem("product-list", storedListStr);
        alert("successfully product added");
    }
}

const removeStoredProduct = (id) => {
    const storedProduct = getStoredProductList();
    const remainingProduct = storedProduct.filter(product => product.id != id)
    localStorage.setItem("product-list", JSON.stringify(remainingProduct));
    alert("remove successfully");
}

export {getStoredProductList, addStoredProductList, removeStoredProduct}