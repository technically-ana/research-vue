<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <div>
            <h1 class="title has-text-centered">You have finished the survey, thanks!</h1>

              <div class="has-text-centered mt-5">
                <button @click="goBack" class="btn">
                  <span>Exit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'FinishedSurveyView',
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
