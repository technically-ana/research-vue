<script setup>
import {onBeforeUnmount, reactive, ref} from 'vue';
import {auth, db} from "@/firebase";
import {collection, addDoc, query, where, getDocs} from "firebase/firestore";
import router from "@/router";
import {onAuthStateChanged, signOut} from "firebase/auth";


const dbPath = "short_links"

const uid = ref('')
const longLink = ref('')
const longLinkTitle = ref('')
const userLinks = reactive({allLinks: []})

async function getAllLinksForUser() {
  const q = query(collection(db, dbPath), where("owner", "==", uid.value));
  const querySnapshot = await getDocs(q);
  let userLinksList = []
  querySnapshot.forEach((doc) => {
    let link = {}
    link['id'] = doc.id
    link['data'] = doc.data()
    userLinksList.push(link)
  });
  userLinks.allLinks = userLinksList
}

async function createShortLink() {
  const newLink = await addDoc(collection(db, dbPath), {
    owner: uid.value,
    link_title: longLinkTitle.value,
    long_url: longLink.value,
    short_url: longLink.value,
    clicks: 0,
  });
  longLink.value = '';
  console.log(newLink)
  await getAllLinksForUser()
}

const listen = onAuthStateChanged(auth, function (user) {
  uid.value = user.uid
  if (!user) {
    router.push('/')
  }
});

const handleSignOut = () => {
  signOut(auth)
  router.push('/')
}

onBeforeUnmount(async () => {
  listen()
});

</script>

<template>

  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-9">
          <div>
            <div>
              <span><button @click="handleSignOut"> Logout </button></span>
              <p>this is dashboard!</p>
              <p>You are logged in as user {{ uid }}</p>
              <div>
                <div>
                  <input v-model="longLinkTitle" placeholder="Title"/>
                </div>
                <textarea v-model="longLink" placeholder="Paste your link here"></textarea>
                <button @click="createShortLink" class="btn">Create New Short Link</button>
              </div>
              <p>{{ userLinks.allLinks }}</p>
              <div v-for="l in userLinks.allLinks"
                   :key="l">
                <p>{{ l.id }}</p>
                <p>{{ l.data.link_title }} : {{ l.data.short_url }} : clicked {{ l.data.clicks }} times.</p>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>
