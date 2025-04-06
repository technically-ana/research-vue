<template>
  <section class="section">
    <div>
      <div class="columns is-centered">
        <div class="column is-6">
          <div>
            <h1 class="title has-text-centered">Application SecuReVue</h1>

            <div class="content">

              <p>This application was created on 7th of April, 2025. For educational purpose.</p>


              <div class="has-text-centered mt-5">
                <button @click="goToLogin" class="btn">
                  <span>Back</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import router from "@/router";

function goToLogin() {
  router.push({ name: 'home' })
}
</script>
