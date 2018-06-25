<template>
	<div>
        <h2><strong>{{product[0].name}}</strong></h2>
        <router-link to="/products">Back to Products</router-link>
        <img :src="product[0].image">
        <p>{{product[0].description}}</p>
        <strong>{{product[0].price}}</strong>
        <div><button>Add to Cart</button></div>
    </div>
</template>

<script>
	export default{
		name: 'product',
        data(){
            return{
                product: {}
            }
        },
        created(){
            $.getJSON(`https://hplussport.com/api/products/id/${this.$route.params.id}`)
                .done(data => {this.product = data; console.log(this.product)})
        }
	};
	
</script>

<style scoped>
    img {
        width: 700px;
        height: 700px;
    }
   
</style>         