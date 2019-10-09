<template>
    <v-layout >
    <v-content>
        <v-flex sm6 offset-xs3 >    
            <panel title= "Songs"> </panel>
            <Songs />
        </v-flex>
    </v-content>
    </v-layout>
</template>

<script>
import Songs from '@/components/Songs'
import Panel from '@/components/Panel'
export default {
    name:'songs',
    components:{
        Songs,
        Panel
    }

}
</script>

<style>

</style>