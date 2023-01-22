<template lang="">
    <div>
        <FormPerso />
        <router-link to="/contact">Retour</router-link>

        <div class="cartes">
        <div v-for="personnage in contacts" :key="personnage.pseudo">
                <CartePerso :personnage="personnage"/>
        </div>
        </div>
    </div>
    
</template>
<script>
import FormPerso from "@/components/FormContact.vue"
import CartePerso from "@/components/CarteContact.vue"
export default {
    name: 'contactsView',
    components: {
        CartePerso,
        FormPerso,
    },
    computed: {
        contacts(){
            return this.$store.state.contacts
        }
    }
} 
</script>
<style lang="">
</style>