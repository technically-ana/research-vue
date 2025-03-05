<template>
  <div class="survey-container">
    <h1 class="survey-title">User Survey</h1>

    <form @submit.prevent="submitSurvey" class="survey-form">
      <!-- Single Answer Question -->
      <div class="survey-question">
        <h3>{{ questions[0].text }}</h3>
        <div class="radio-group">
          <label
              v-for="option in questions[0].options"
              :key="option"
              class="radio-label"
          >
            <input
                type="radio"
                :name="questions[0].id"
                :value="option"
                v-model="responses[questions[0].id]"
            />
            {{ option }}
          </label>
        </div>
      </div>

      <!-- Multi-Choice Question -->
      <div class="survey-question">
        <h3>{{ questions[1].text }}</h3>
        <div class="checkbox-group">
          <label
              v-for="option in questions[1].options"
              :key="option"
              class="checkbox-label"
          >
            <input
                type="checkbox"
                :value="option"
                v-model="responses[questions[1].id]"
            />
            {{ option }}
          </label>
        </div>
      </div>

      <!-- Text Reply Question -->
      <div class="survey-question">
        <h3>{{ questions[2].text }}</h3>
        <textarea
            :name="questions[2].id"
            v-model="responses[questions[2].id]"
            rows="4"
            class="text-input"
            placeholder="Enter your response here"
        ></textarea>
      </div>
      <div class="has-text-centered mt-5">
        <button @click="goBack" class="button is-info">
                  <span class="icon">
                    <i class="fas fa-arrow-left"></i>
                  </span>
          <span>Back</span>
        </button>
      </div>

      <button type="submit" class="submit-button">Submit Survey</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SurveyView',
  data() {
    return {
      questions: [
        {
          id: 'q1',
          text: 'What is your preferred method of communication?',
          type: 'single',
          options: ['Email', 'Phone', 'Text Message', 'Mail']
        },
        {
          id: 'q2',
          text: 'Which technologies are you familiar with? (Select all that apply)',
          type: 'multi',
          options: ['Vue.js', 'React', 'Angular', 'Svelte', 'Node.js']
        },
        {
          id: 'q3',
          text: 'Please provide additional comments or feedback:',
          type: 'text'
        }
      ],
      responses: {}
    }
  },
  methods: {
    submitSurvey() {
      // Placeholder for Firebase submission
      console.log('Survey Responses:', this.responses);

      // Here you would typically send the responses to Firebase
      // For example:
      // this.sendToFirebase(this.responses);
    },
    goBack() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.survey-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.survey-title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.survey-question {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.radio-group, .checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.radio-label, .checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
}

.text-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>