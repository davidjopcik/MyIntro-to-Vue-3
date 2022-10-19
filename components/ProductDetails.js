app.component('product-details', {

    template:
        /*html*/
        `
        <div>
        <div>
    <ul>
            <li v-for="detail in details"> {{ detail }}</li>
            
          </ul>
          </div>
          </div>`,
    data() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester'],
        }
    },
})