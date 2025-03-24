<script setup>
import {computed, onBeforeUnmount, ref} from 'vue';
import {auth, db} from "@/firebase";
import {collection, addDoc, query, where, getDocs} from "firebase/firestore";
import router from "@/router";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {useClipboard} from '@vueuse/core'

const {copy} = useClipboard()

const dbPath = "short_links"

const uid = ref('')
const longLink = ref('')
const longLinkTitle = ref('')
const userLinks = ref(null)

const getAllLinksForUser = async () => {
  const q = query(collection(db, dbPath), where("owner", "==", uid.value));
  const querySnapshot = await getDocs(q);
  let userLinksList = []
  querySnapshot.forEach((doc) => {
    let link = {}
    link['id'] = doc.id
    link['data'] = doc.data()
    userLinksList.push(link)
  });
  userLinks.value = userLinksList
}

const baseUrl = computed(() => {
  return 'http://' + process.env.VUE_APP_URL +':' + process.env.VUE_APP_PORT + '/r/'
});

// const createShortLinkString = () => {
//   return longLink.value + process.env.USERNAME
// };

async function createShortLink() {
  const newLink = await addDoc(collection(db, dbPath), {
    owner: uid.value,
    link_title: longLinkTitle.value,
    url: longLink.value,
  });
  longLink.value = '';
  console.log(newLink)
  await getAllLinksForUser()
}

const listen = onAuthStateChanged(auth, function (user) {
  uid.value = user.uid
  if (uid.value && !userLinks.value) {
    getAllLinksForUser()
  }
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
    <div>
      <div class="columns is-centered">
        <div id="parent">
          <div class="right padded-bot">
            <button class="btn btn-large" @click="handleSignOut"> Logout</button>
          </div>
          <div class="center">
            <div class="padded">
              <input v-model="longLinkTitle" placeholder="Title"/>
            </div>
            <textarea
                rows="6"
                v-model="longLink"
                placeholder="Paste your link here"></textarea>
            <div class="padded">
              <button @click="createShortLink" class="btn">Create Short Link</button>
            </div>
          </div>
          <div class="padded">
            <p>Click on the link to copy</p>
          </div>
          <div v-for="l in userLinks"
               :key="l">
            <div>
              <h5 class="">{{ l.data.link_title }}</h5>
              <span class="">
                <button
                    class="btn-link "
                    @click="copy(baseUrl + l.id)">
                  {{ baseUrl + l.id }}
                </button>
              </span>
            </div>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>
.btn-link {
  background: none !important;
  border: none;
  padding: 0 !important;
  color: #069;
  cursor: pointer;
}

textarea {
  width: 100%;
  height: auto;
}

#parent {
  text-align: center;
  height: 400px;
  width: 600px;
}

.block {
  height: 100px;
  width: 200px;
  text-align: left;
}

.center {
  margin: auto;
}

.left {
  margin: auto auto auto 0;
}

.padded {
  padding: 24px;
}

.padded-bot {
  padding-bottom: 24px;
}

.right {
  margin: auto 0 auto auto;
}
</style>
