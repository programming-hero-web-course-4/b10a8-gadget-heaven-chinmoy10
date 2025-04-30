const GadgetsCategories = () => {
    return (
        <div>
            <h1 className="font-bold text-4xl text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-1">
                    <div className="grid grid-cols-1 bg-blue-200">
                    Category
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>Product</div>
                    <div>Product</div>
                    <div>Product</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetsCategories;