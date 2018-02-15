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

const getDataAction = (data) => {
    return {
        type: "GET_DATA",
        data : data
    }
};

const PLPActions = {
    getAllProducts : () => {
        return (dispatch) => {
            fetch("products.json")
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    dispatch (getDataAction(data));
                });
        }
    }
};


export default PLPActions;