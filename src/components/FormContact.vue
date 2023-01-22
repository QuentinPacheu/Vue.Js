<template lang="">
    <div>
        <h1>Contacts</h1>
    </div>
    <form @submit.prevent="ajoutPerso">
            <input type="text" placeholder="Nom" v-model="formPerso.pseudo">
            <input type="number" placeholder="Numéro de Telephone" v-model="formPerso.numero">
            <button>Ajouter</button>
    </form>
</template>
<script>
export default {
    name: 'FormPerso',
    props: ['contacts'],
    data(){
        return {
            error: false,
            formPerso: {
                pseudo: '',
                numero: null
            },
        }
    },
    methods: {
                ajoutPerso() {
                    if(this.formPerso.pseudo == "" || this.formPerso.numero == null ) return

                    this.$store.commit('ajoutPerso', this.formPerso)
                }
            }
}

</script>
<style>
    form {
        background-color: #42b983;
        width: 50vw;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
    }

    input {
        padding: 10px;
        border-radius: 10px;
        border: none;
    }

    button {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #2c3e50;
        color: white;
        font-weight: bold;
    }
</style>