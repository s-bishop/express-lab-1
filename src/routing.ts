import express from "express";
import cart from "./cart-items";

const routes = express.Router();


routes.get("/cart-items", (req, res) => {
    // let maxPrice = req.query.maxPrice;
    // let prefix = req.query.prefix;
    // let pageSize = req.query.pageSize;
    //     //or deconstruct

    let {maxPrice, prefix, pageSize} = req.query;
    
    let filteredCart = cart;

    if (maxPrice) {
        filteredCart = filteredCart.filter(item => item.price <= Number(maxPrice));
    }

    if (pageSize) {
        filteredCart = filteredCart.slice(0, Number(pageSize));
    }

    if (prefix) {
        filteredCart = filteredCart.filter(item => item.product.startsWith(prefix as string));
    }

    res.status(200)
    res.json(filteredCart);
});

routes.get("/cart-items/:id", (req, res) => {
    let id: number = Number(req.params.id);

    let foundItem = cart.find(item => item.id === id)

    if(foundItem) {
        res.status(200)
        res.json(foundItem);
    }else{
        res.status(404)
        res.json(`ID ${id} Not Found`)
    }
});



//post
let uniqueId = cart.length + 1; //6

routes.post("/cart-items", (req, res) => {

    const newItem = req.body;
    newItem.id = uniqueId;
    uniqueId++;

    cart.push(newItem);
    res.status(201);
    res.json(newItem);

})

routes.put("/cart-items/:id", (req, res) => {
    let newItem = req.body;

    let id: number = Number(req.params.id);

    let foundIndex = cart.findIndex(item => item.id === id)

    cart[foundIndex] = newItem;
     
    res.status(200);
    res.json(newItem);

})


routes.delete("/cart-items/:id", (req, res) => {
    let id: number = Number(req.params.id);

let foundIndex = cart.findIndex(item => item.id === id)

cart.splice(foundIndex, 1);

res.sendStatus(204);

})

export default routes;