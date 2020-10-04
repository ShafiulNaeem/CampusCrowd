<template>
    <div>
         <CommonHeader :headerinfo="headerinfo"/>
        <div class="confess">
            
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
             headerinfo : { title:'What!Confession', description:'Spared Love and Enjoy World'}

         }
         }

}
</script>

<style>

</style>

