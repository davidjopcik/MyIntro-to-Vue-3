app.component( 'product-description', {

    template:
        /*html*/
    `
    
     <div> {{ description }}</div> 
     <div> {{ aboutProduct }}</div> 
    
    `,

    data(){
        return{
            description: 'This is a product description',
            aboutProduct: 'Product is maded in China and you can buy this amazing Socks.'
        }
    }

})