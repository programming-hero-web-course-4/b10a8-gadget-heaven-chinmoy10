import { toast } from "react-toastify";

const getStoredProductList = () => {
  const storedListStr = localStorage.getItem("product-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};



const addStoredProductList = (product) => {
  const storedProduct = getStoredProductList();
  const isProductExist = storedProduct.find((p) => p.id == product.id);
  if (isProductExist) return toast.error("Already Exist This Product", {
    position: "top-center",
    autoClose: 800,
    theme: "colored",
    });
  storedProduct.push(product);
  const storedListStr = JSON.stringify(storedProduct);
  localStorage.setItem("product-list", storedListStr);
  toast.success("Successfully Added In Cart", {
    position: "top-center",
    autoClose: 800,
    theme: "colored",
    });
};

const removeStoredProduct = (id) => {
  const storedProduct = getStoredProductList();
  const remainingProduct = storedProduct.filter((product) => product.id != id);
  localStorage.setItem("product-list", JSON.stringify(remainingProduct));
  toast.success("Remove Successfully From Cart", {
    position: "top-center",
    autoClose: 800,
    theme: "colored",
    });
};

// wishlist

const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addWishProductList = (product) => {
  const storedWishProduct = getStoredWishList();
  const isWishProductExist = storedWishProduct.find((p) => p.id == product.id);
  if (isWishProductExist) return toast.error("Already Exist This Product", {
    position: "top-center",
    autoClose: 800,
    theme: "colored",
    });
    storedWishProduct.push(product);
    const storedListStr = JSON.stringify(storedWishProduct);
    localStorage.setItem("wish-list", storedListStr);
    toast.success("Successfully Added In Wishlist", {
        position: "top-center",
        autoClose: 800,
        theme: "colored",
        });
};

const removeStoredWishProduct = (id) => {
  const storedWishProduct = getStoredProductList();
  const remainingWishProduct = storedWishProduct.filter(
    (product) => product.id != id
  );
  localStorage.setItem("wish-list", JSON.stringify(remainingWishProduct));
  toast.success("Remove Successfully From Favorite", {
    position: "top-center",
    autoClose: 800,
    theme: "colored",
    });
};



export {
  getStoredProductList,
  addStoredProductList,
  removeStoredProduct,
  getStoredWishList,
  addWishProductList,
  removeStoredWishProduct
};
