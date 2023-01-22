<template>
    <div>
        <h1>Contacts</h1>
        <router-link to="/ajouter">Ajouter</router-link>

        <div class="cartes">
        <div v-for="personnage in contacts" :key="personnage.pseudo">
                <CartePerso :personnage="personnage"/>
        </div>
        </div>
    </div>
</template>  
<script>
    import CartePerso from "@/components/CarteContact.vue"
export default {
    name: 'contactsView',
    components: {
        CartePerso,
    },
    computed: {
        contacts(){
            return this.$store.state.contacts
        }
    }
} 
</script>
<style scoped>

</style>