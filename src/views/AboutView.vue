<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="box">
            <h1 class="title has-text-centered">About Our App</h1>

            <div class="content">
              <p class="has-text-centered mb-5">
                <span class="icon is-large">
                  <i class="fas fa-info-circle fa-2x"></i>
                </span>
              </p>

              <p>Welcome to our application! This web app was created on:</p>

              <p class="has-text-centered is-size-4 has-text-weight-bold my-5">
                {{ creationDate }}
              </p>

              <div class="block">
                <p>This application was built with:</p>
                <ul>
                  <li>Vue.js - Progressive JavaScript Framework</li>
                  <li>Bulma CSS - Modern CSS framework</li>
                  <li>Font Awesome - Icon library</li>
                </ul>
              </div>

              <div class="has-text-centered mt-5">
                <button @click="goBack" class="button is-info">
                  <span class="icon">
                    <i class="fas fa-arrow-left"></i>
                  </span>
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

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      creationDate: new Date()
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
}
</script>
