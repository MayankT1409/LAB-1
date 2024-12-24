//array product
const product = [
    { productName: "Laptop", price: 60000, quantity: 1 },
    { productName: "Phone", price: 50000, quantity: 2 },
    { productName: "Headphone", price: 2000, quantity: 2 }
]


//fucntion to add the product in the array
const addProduct = (product, new_product) => {
    product.push(new_product)
}

addProduct(product, { productName: "Book", price: 500, quantity: 3 })

console.log(product)


//function to calculate the total price of all product
const calculateTotal = (product) => {
    return product.reduce((total, product) => total + product.price * product.quantity, 0)
}

console.log(calculateTotal(product))

//fucntion to remove the element from the array by its name
const removeProduct = (product_name) => {
    const index = product.findIndex((product) => product.productName === product_name)
    if (index !== -1) {
        product.splice(index, 1)
    }
}

removeProduct("Laptop")
console.log(product)


//display all the product by using the destructuring
const productDetail = () => {
    product.forEach(({ productName, price, quantity }) => {
        console.log(`Product: ${productName}, Price: ${price}, Quantity: ${quantity}`);
    });
};

productDetail()

//display all the product by using the template literals
product.forEach(product => {
    console.log(`Product : ${product.productName} , Price : ${product.price} , Quantity : ${product.quantity}`)
})