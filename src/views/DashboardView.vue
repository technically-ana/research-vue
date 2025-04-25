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
const errorMessage = ref('')

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

function isValidURL(url) {
  try {
    const u = new URL(url);
    return ['https:'].includes(u.protocol);
  } catch {
    return false;
  }
}

function validateUrl() {
  const valid = isValidURL(longLink.value)

  if(valid) {
    errorMessage.value = ''
  }
  else errorMessage.value = "The link is incorrect or insecure"
}

const baseUrl = computed(() => {
  return process.env.VUE_APP_URL + 'r/'
});


async function createShortLink() {
  await addDoc(collection(db, dbPath), {
    owner: uid.value,
    link_title: longLinkTitle.value,
    url: longLink.value,
  });
  longLink.value = '';
  await getAllLinksForUser()
}

const listen = onAuthStateChanged(auth, function (user) {
  if (!user) {
    router.push('/')
  }
  if (user && !userLinks.value) {
    uid.value = user.uid
    getAllLinksForUser()
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
      <div class="columns center">
        <div id="parent">
          <div class="center padded-bot">
            <button class="btn btn-large" @click="handleSignOut"> Log out</button>
          </div>
          <div >
            <div class="center padded">
              <input v-model="longLinkTitle" placeholder="Title"/>
            </div>
            <textarea
                rows="6"
                v-model="longLink"
                @input="validateUrl"
                placeholder="Paste your link here"></textarea>
            <div class="padded">
              <button @click="createShortLink" :disabled="errorMessage !== ''" class="btn">Create Short Link</button>
            </div>
          </div>
          <div v-if="errorMessage !== ''" class="padded" >
            <p style="color: #e84545">{{ errorMessage }}</p>
          </div>
          <div v-else class="padded">
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

</style>
