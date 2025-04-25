<script setup>

import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "@/firebase";
import { useRoute } from 'vue-router';
import { signInAnonymously } from "firebase/auth";
import router from "@/router";

const route = useRoute()
const id = route.params.id

const goToHome = () => {
  router.push('/')
}

const fetchAndOpen = async () => {
  const docRef = doc(db, "short_links", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    window.location.href = docSnap.data().url;
  } else {
    console.log("unknown source");
  }
}

const handleLogin = async () => {
  if (!auth.currentUser) {
    try {
      await signInAnonymously(auth)
          .then(async () => {
            await fetchAndOpen()
          })
          // eslint-disable-next-line no-unused-vars
          .catch((_) => {
            goToHome();
          });
    } catch (error) {
      goToHome();
    }
  }
  else if(auth.currentUser) {
    await fetchAndOpen()
  }
  else {
    goToHome();
  }
};

</script>

<template>
  <div>
    <p>Redirecting ... </p>
    <div class="center padded-bot">
      <button class="btn btn-large" @click="handleLogin">I'm human</button>
    </div>
  </div>
</template>
