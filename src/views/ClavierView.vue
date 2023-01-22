<template>
    <div>
        <input type="text" v-model="phoneNumber" placeholder="Numéro composé">
        <span v-if="contactName">{{ contactName }}</span>
    <div>
        <button v-on:click="addNumber(1)">1</button>
        <button v-on:click="addNumber(2)">2</button>
        <button v-on:click="addNumber(3)">3</button>
    </div>
    <div>
        <button v-on:click="addNumber(4)">4</button>
        <button v-on:click="addNumber(5)">5</button>
        <button v-on:click="addNumber(6)">6</button>
    </div>
    <div>
        <button v-on:click="addNumber(7)">7</button>
        <button v-on:click="addNumber(8)">8</button>
        <button v-on:click="addNumber(9)">9</button>
    </div>
    <div>
        <button v-on:click="addNumber(0)">0</button>
    </div>
    <div>
        <button v-on:click="deleteNumber">Supprimer</button>
        <button v-on:click="makeCall">Appeler</button>
    </div>
    </div>
</template>
<script>

export default {
name: 'PhoneKeyboard',
data () {
    return {
    phoneNumber: '',
    }
    },
    methods: {
    addNumber (number) {
        this.phoneNumber += number
    },
    deleteNumber () {
        this.phoneNumber = this.phoneNumber.slice(0, -1)
    },
    }
}
</script>