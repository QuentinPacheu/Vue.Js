<template>
    <div v-for="journal in journals" :key="journal.pseudo">
        <h2> {{ journal.pseudo }} </h2>
        <h2> {{ journal.numero }} </h2>
    </div>
</template>

<script>
export default {
    name:'HistoriqueViews',
    computed: {
        journals() {
            return this.$store.state.journals
        },
    },
}
</script>
<style lang="">
    
</style>