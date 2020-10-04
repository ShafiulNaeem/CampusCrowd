<template>
    <div>
        <CommonHeader :headerinfo="headerinfo"/>
        <div class="blog">
            
        </div>
    </div>
</template>

<script>
import CommonHeader from '~/components/user/CommonHeader'
export default {
     layout: "userloged",
     components: { CommonHeader },
     data(){
         return{
             headerinfo : { title:'Wellcome to our Blog', description:'Here u can find our all Blog Posts'}

         }
     }
}
</script>

<style>

</style>

