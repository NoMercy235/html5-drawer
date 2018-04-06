<template>
    <div>
        <sy-autocomplete
            :source="data"
            placeholder="Please type your command..."
            filter-key="command"
            :start-at="2"
            v-bind:style="{ width: windowWidth }"
        >
        </sy-autocomplete>
    </div>
</template>

<script>
    import Autocomplete from './Autocomplete'

    export default {
        name: 'Command',
        data() {
            return {
                data: [{ command: 'test' }, { command: 'alice' }, { command: 'Alex' }, ],
            };
        },
        computed: {
            windowWidth: () => (window.innerWidth - 4) + 'px',
        },
        components: {
            'sy-autocomplete': Autocomplete,
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
