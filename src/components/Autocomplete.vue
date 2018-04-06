<template>
    <div @keydown.enter.prevent.stop="sendQuery" @keydown.tab.prevent.stop="selectFirstCommand">
        <input type="text" class="sy-search-input" v-model="query" :placeholder="placeholder"
               @keydown="canShowFiltered = true"/>
        <transition-group v-show="canShowFiltered" name="fade" tag="ul" class="sy-results">
            <li v-for="item in filtered" :key="item.command" @click="selectCommand(item.command)">
                <span>
                    <strong>{{ item.command }}</strong>
                    <small>{{ item.helper }}</small>
                </span>
            </li>
        </transition-group>
        <!--<p v-show="isEmpty">Sorry, but there is no such command :( </p>-->
    </div>
</template>

<script>
    export default {
        name: 'Autocomplete',
        props: {
            source: {
                type: Array,
                required: true,
            },
            filterKey: {
                type: String,
                required: true,
            },
            startAt: {
                type: Number,
                default: 3
            },
            placeholder: {
                type: String,
                default: '',
            },
        },
        methods: {
            fetchItems() {
                this.items = this.source;
            },
            reset() {
                this.query = '';
            },
            sendQuery(event) {
                this.$emit('sendCommand', this.query);
                this.query = '';
                this.canShowFiltered = false;
            },
            selectCommand(command) {
                this.query = command;
                this.canShowFiltered = false;
            },
            selectFirstCommand() {
                if (this.query.length && this.filtered[0].command.length > this.query.length) {
                    this.query = this.filtered[0].command;
                }
            }
        },
        data() {
            return {
                items: [],
                query: '',
                canShowFiltered: false,
            };
        },
        mounted() {
            this.fetchItems();
        },
        computed: {
            filtered() {
                if (this.query.length >= this.startAt) {
                    return this.items.filter(item => {
                        if(item[this.filterKey]) {
                            return item[this.filterKey]
                                .toLowerCase()
                                .includes(this.query.split(' ')[0].toLowerCase());
                        } else {
                            console.error(`Key '${this.filterKey}' doesn't exist on object!`, item);
                        }
                    })
                }
            },
            isEmpty() {
                return this.filtered && this.filtered.length < 1;
            }
        },
    }
</script>

<style>
    .sy-search-input {
        width: 100%;
        padding: 1.5em 1em;
        font-size: 1em;
        outline: 0;
        border: 5px solid #41B883;
    }
    .sy-results {
        margin: 0;
        padding: 0;
        text-align: left;
        position: relative;
    }
    .sy-results li {
        background: rgba(53, 73, 94, 0.3);
        margin: 0;
        padding: 1em;
        list-style: none;
        width: 100%;
        border-bottom: 1px solid #394E62;
        transition: ease-in-out 0.5s;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
