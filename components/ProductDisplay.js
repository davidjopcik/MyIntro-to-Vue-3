app.component('product-display', {
props: {
  premium: {
    type: Boolean,
    required: true
  }
},
    template:
     /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>

          <p>Shipping: {{ shipping }}</p>

          <product-details :details="details"></product-details>

          
          <!-- solution -->
          <ul>
            <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
          </ul>
          <!-- solution -->
          <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
            class="color-circle" :style="{backgroundColor: variant.color} ">
          </div>

          <button class="button" @click="addToCart()" :class="{disableButton: !inStock}" :disabled="!inStock">Add to
            cart</button>
          <button class="button" v-on:click="removeFromCart()" :class="{disableButton: !inStock}" :disabled="!inStock">Remove</button>


        </div>
      </div>
    </div>` ,

    data() {
        return {
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
        shipping() {
          if (this.premium) {
            return 'Free'
          }
          return "2,99"
        }

    }


})