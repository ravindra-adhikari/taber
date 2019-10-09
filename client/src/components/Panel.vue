<template>
<div class=" white elevation-4">
   <v-toolbar  dense flat dark color="primary" >
    <v-toolbar-title> {{title}} </v-toolbar-title>
    </v-toolbar>   
    <div class="pl-4 pr-4 pt-4 pb-2">
        <slot>
            No slot contain definded.
        </slot>
    </div> 
</div>
</template>

<script>
export default {
    props:[
        'title'
    ]

}
</script>

<style>

</style>