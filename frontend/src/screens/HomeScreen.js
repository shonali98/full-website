import data from '../data.js';

const HomeScreen={
    
    render:async ()=>{
        
        const response = await fetch("http://localhost5001/api/products",{
            headers:{
            'content-Type' :'application/json',
            },
        });
        if(!response|| !response.ok){
            return `<div>Eror in getting data</div>`;
        }
        const products = await response.json();
        
        return `
        <ul class="products" >
        ${products.map(
            (product) =>`
        <li>
            <div class="product">
                <a href="/#/product/${product._id}">
                    <img src="${product.image}" alt="${product.name}"/>
                </a>
                <div class="product-name">
                    <a href="/#/product/1">
                        ${product.name}
                    </a>
                </div>
                <div class="product-brand">
                    ${product.brand}   
                </div>
                <div class="Product-price">
                    $${product.price}
                </div>
                
            </div>
        
        </li>
        </li>

        `) .join('\n')}
    `   ;
        
    },
};

export default HomeScreen;