const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            // solution
            sizes: ['S', 'M', 'L', 'XL'],
            // solution
            variants: [
              { id: 2234, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity: 50 },
              { id: 2235, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 0},
              { id: 2235, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 1},
            ]
            
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart > 0){
                this.cart -= 1
            }
        }, 
        updateVariant(index){
            this.selectedVariant = index
            console.log(this.inStock);
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },

    }

})
