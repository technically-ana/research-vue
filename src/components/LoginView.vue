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
        if (this.email === 'user@example.com' && this.password === 'password') {
          // Success - redirect or store auth token
          console.log('Login successful');
          this.$router.push('/dashboard');
        } else {
          // Failed login
          this.errorMessage = 'Invalid email or password';
        }
        this.isLoading = false;
      }, 1000);
    }
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

            <!-- Logo -->
            <div class="has-text-centered mb-5">
              <figure class="image is-96x96 is-inline-block">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Logo" class="is-rounded">
              </figure>
            </div>

            <!-- Login Form -->
            <form @submit.prevent="handleLogin">
              <!-- Email Field -->
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
                <div class="control">
                  <button
                      class="button is-primary is-fullwidth"
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

          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.hero-body {
  align-items: center;
  justify-content: center;
}
</style>
