<script setup>
import {auth} from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { defineProps, ref } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
// const route = useRoute()
// const props = defineProps({
//   email: String,
//   password: String,
//   isLoading: Boolean,
//   errorMessage: String
// });
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');
const newUser = ref(true);
// const handleAnonymousLogin = async () => {
//   await signInAnonymously(auth);
// };

const handleLogin = async () => {

  isLoading.value = true;
  errorMessage.value = '';
  try {
    if (newUser.value) {
      await createUserWithEmailAndPassword(auth, email.value, password.value).then((userCredential) =>
          sendEmailVerification(userCredential.user))

    } else {
      await signInWithEmailAndPassword(auth, email.value, password.value)
          // .then((userCredential) =>
          //     console.log(userCredential.user)
          // )
    }
  } catch (error) {
    errorMessage.value = error.message;
  }
  isLoading.value = false;
};

function goToAbout() {
  router.push({ name: 'about' })
}

// function goToSurvey() {
//   router.push({ name: 'about' })
// }

// const toggleNewUser = () => {
//   newUser.value = !newUser.value;
// };

// const handleLoginOld = async () => {
//   isLoading.value = true;
//   errorMessage.value = '';
//
//   setTimeout(() => {
    // Example validation - would be handled by your actual auth system
    // if (props.email === 'u@e.com' && props.password === 'p') {
    //   console.log('Login successful');
    //   this.$router.push('/survey');
    // } else {
    //   if (props.email === 'a@e.com' && props.password === 'p') {
    //     console.log('Login successful');
    //     this.$router.push('/dashboard');
    //   } else {
    //     if (props.email === 'uu@e.com' && props.password.value === 'p') {
    //       console.log('Login successful');
    //       props.$router.push('/finished');
    //     } else {
    //       props.errorMessage = 'Invalid email or password';
    //     }
    //   }
    // }
    // isLoading.value = false;
  // }, 1000);
// }

    // goToAbout() {
    //   this.$router.push('/about')
    // },
// }
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-4">
          <div>
            <h1 class="title has-text-centered">Login</h1>

            <div v-if="newUser">
              <a href="#" @click="newUser = false">Returning User?</a>
            </div>

            <div v-else>
              <a href="#" @click="newUser = true">New user?</a>
            </div>
            <div class="has-text-centered mt-5 btn-container">
                <button @click="goToAbout" class="btn">About</button>
            </div>

<!--            <div>-->
<!--              <button-->
<!--                  @click="handleAnonymousLogin"-->
<!--                  class="btn">-->
<!--                Sign in anonymously-->
<!--              </button>-->
<!--            </div>-->
            <form @submit.prevent="handleLogin">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                      v-model="email"
                      class="input"
                      type="email"
                      placeholder="youremail@example.com"
                      required
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                      v-model="password"
                      class="input"
                      type="password"
                      placeholder="********"
                      required
                  >
                </div>
              </div>

              <div class="field">
                <div class="control has-text-centered mt-5 btn-container">
                  <button
                      class="btn btn-large"
                      :class="{'is-loading': isLoading}"
                      type="submit"
                  >
                    {{ newUser ? 'Sign Up' : 'Login'}}
                  </button>
                </div>
              </div>


              <div class="has-text-centered mt-5" v-if="isLoading === true">
                <div>
                  <p>
                    Loading ...
                  </p>
                </div>
              </div>


              <div v-if="errorMessage" class="notification is-danger is-light mt-4">
                {{ errorMessage }}
              </div>
            </form>

            <div class="has-text-centered mt-5 btn-container">
              <button @click="goToAbout" class="btn">About</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>

</style>
