const data = {
    "products" : [
        {
            "sku": 1231234,
            "image": "",
            "name": "arrow",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "polo",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "levis",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "US polo",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "Indian Terran",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "UCB",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "arrow",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        },
        {
            "sku": 1231234,
            "image": "",
            "name": "UCB",
            "category": "shirt",
            "price": 400,
            "availableQuantity": 4,
            "desc": "Here is the description"
        }

    ]
};

const searchAction = (data) => {
    return {
        type: "GET_DATA_SEARCH",
        data : data
    }
};

const getDataAction = (data) => {
    return {
        type: "GET_DATA",
        data : data
    }
};

let cacheData = {

};

const PLPActions = {
    getAllProducts : () => {
        return (dispatch) => {
            fetch("products.json")
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    cacheData =  data;
                    dispatch (getDataAction(data));
                });
        }
    },
    searchProducts : (key) => {
        return (dispatch) => {
                let searchData = [...cacheData.products];
                if(key!==""){
                    searchData =  searchData.filter(item =>{
                        return (item.name.indexOf(key) >= 0)
                    });
                }
               
                    dispatch (searchAction({products:searchData}));
                
        }
    }
};


export default PLPActions;