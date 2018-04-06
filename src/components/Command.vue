<template>
    <div>
        <input v-bind:style="{ width: windowWidth }"/>
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
</style>
