<template>
    <div>
        <input class="sy-input" v-bind:style="{ width: windowWidth }"/>
    </div>
</template>

<script>
    export default {
        name: 'Command',
        data() {
            return {
            };
        },
        computed: {
            windowWidth: () => (window.innerWidth - 4) + 'px',
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .sy-input {
       position: absolute;
       bottom: 0;
       left: 0;
       right: 0;
       overflow: hidden;
   }
</style>
