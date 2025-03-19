<script setup>
import LoginView from "@/views/LoginView.vue";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "@/firebase";
import {onBeforeUnmount, ref} from "vue";


const isLoggedIn = ref(false)

const listen = onAuthStateChanged(auth, (firebaseUser) => updateValues(firebaseUser))


function updateValues(firebaseUser) {
  isLoggedIn.value = !!firebaseUser;
}

onBeforeUnmount(async () => {
  listen()
});

</script>

<template>
  <p>Welcome</p>
    <LoginView v-if="!isLoggedIn" />
</template>

<style scoped>

</style>