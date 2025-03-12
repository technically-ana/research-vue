<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      isLoading: false,
      errorMessage: ''
    }
  },
  methods: {
    handleLogin() {
      this.isLoading = true;
      this.errorMessage = '';

      // Simulate API call
      setTimeout(() => {
        // Example validation - would be handled by your actual auth system
        if (this.email === 'u@e.com' && this.password === 'p') {
          console.log('Login successful');
          this.$router.push('/survey');
        } else {
          if (this.email === 'a@e.com' && this.password === 'p') {
            console.log('Login successful');
            this.$router.push('/dashboard');
          } else {
            if (this.email === 'uu@e.com' && this.password === 'p') {
              console.log('Login successful');
              this.$router.push('/finished');
            } else {
              this.errorMessage = 'Invalid email or password';
            }
          }
        }
        this.isLoading = false;
      }, 1000);
    },

    goToAbout() {
      this.$router.push('/about')
    },
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-4">
          <div class="box">
            <h1 class="title has-text-centered">Login</h1>

            <form @submit.prevent="handleLogin">
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                      v-model="email"
                      class="input"
                      type="email"
                      placeholder="youremail@example.com"
                      required
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              <!-- Password Field -->
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                      v-model="password"
                      class="input"
                      type="password"
                      placeholder="********"
                      required
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="field">
                <div class="control has-text-centered mt-5 btn-container">
                  <button
                      class="btn btn-large"
                      :class="{'is-loading': isLoading}"
                      type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>

              <!-- Error Message -->
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
