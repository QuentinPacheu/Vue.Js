<template>
    <div>
        <h2>{{ personnage.pseudo }}</h2>
        <span>{{ personnage.numero }}</span>
        <button @click="ajoutHistorique">Appeler</button>
    </div>
</template>
<script>
export default {
    name: 'CartePerso',
    props: [
        'personnage'
    ],
    methods: {
        ajoutHistorique() {
            console.log(this.contact);
            this.$store.commit('ajoutHistorique', this.contact)
            
        }
    },
}
</script>
<style scoped>
</style>