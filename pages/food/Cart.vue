<template>
    <div class="card list-group">
    <h3 class="text-center">Cart</h3>
    <ul class="list-group">

        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="badge"><h7>Image</h7></span>
            <span class="badge"><h7>Name</h7></span>
            <span class="badge"><h7>price</h7></span>
            <span class="badge"><h7>Remove</h7></span>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(service,id) in services" :key="service.id">
                <span class="badge">
                    <img v-bind:src="service.img" class="card-img-top" alt="...">
                </span>
            <span class="badge">{{ service.title }}</span>
            <span class="badge">{{ service.price }} $</span>
            <span>
                    <button @click="removeItem(service)" class="btn btn-xs btn-danger">X</button>
                </span>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
            Total
            <span class="badge">{{total}} $</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <router-link :to="{ path: '/food/order_food'}">
                <button class="btn btn-sm btn-secondary">Checkout</button>
            </router-link>
        </li>

    </ul>
</div>
</template>

<script>
    export default {
        name: "Cart",
        props:['services'],
        data(){
            return{

            }
        },
        computed: {
            total(){
                var result = 0;
                this.services.forEach(service => {
                    result += parseFloat(service.price)
                });
                return result;
            }
        },
        methods:{
            removeItem(service){
                this.services.splice(service,1)
            }
        }

    }
</script>

<style scoped>

</style>