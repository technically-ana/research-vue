<template>
  <div class="dashboard-container">
    <div class="summary-section">
      <div class="summary-title">Column Averages</div>
      <div class="summary-grid">
        <div
            v-for="(avg, index) in columnAverages"
            :key="index"
            class="summary-cell"
        >
          <span class="summary-label">Column {{ index + 1 }}</span>
          <span class="summary-value">{{ avg.toFixed(2) }}</span>
        </div>
      </div>
    </div>

    <div class="matrix-section">
      <div class="matrix-title">Data Matrix</div>
      <div class="matrix-grid">
        <div
            v-for="(row, rowIndex) in matrix"
            :key="rowIndex"
            class="matrix-row"
        >
          <input
              v-for="(cell, colIndex) in row"
              :key="colIndex"
              type="number"
              v-model.number="matrix[rowIndex][colIndex]"
              @input="calculateColumnAverages"
              class="matrix-cell"
          />
        </div>
      </div>
    </div>

    <div class="matrix-summary">
      <div class="total-summary">
        <span>Total Sum: {{ totalSum }}</span>
        <span>Total Average: {{ totalAverage.toFixed(2) }}</span>
      </div>
    </div>
  </div>
  <div class="has-text-centered mt-5">
    <button @click="goBack" class="button is-info">
                  <span class="icon">
                    <i class="fas fa-arrow-left"></i>
                  </span>
      <span>Back</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      matrix: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      columnAverages: [0, 0, 0]
    }
  },
  computed: {
    totalSum() {
      return this.matrix.flat().reduce((sum, value) => sum + value, 0);
    },
    totalAverage() {
      const flatMatrix = this.matrix.flat();
      return flatMatrix.reduce((sum, value) => sum + value, 0) / flatMatrix.length;
    }
  },
  methods: {
    calculateColumnAverages() {
      this.columnAverages = this.matrix[0].map((_, colIndex) => {
        const columnValues = this.matrix.map(row => row[colIndex]);
        return columnValues.reduce((sum, value) => sum + value, 0) / columnValues.length;
      });
    },
    randomizeMatrix() {
      this.matrix = this.matrix.map(row =>
          row.map(() => Math.floor(Math.random() * 100))
      );
      this.calculateColumnAverages();
    },
    goBack() {
      this.$router.push('/');
    }
  },
  mounted() {
    // Optional: Initialize with some random data
    this.randomizeMatrix();
  }
}
</script>

<style scoped>
.dashboard-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.summary-section {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.summary-title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.summary-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
}

.summary-label {
  font-size: 0.8em;
  color: #666;
}

.summary-value {
  font-weight: bold;
  font-size: 1.2em;
}

.matrix-section {
  margin-bottom: 20px;
}

.matrix-title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.matrix-grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
}

.matrix-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.matrix-cell {
  width: 100%;
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.matrix-summary {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  justify-content: space-around;
}

.total-summary {
  display: flex;
  gap: 20px;
}
</style>