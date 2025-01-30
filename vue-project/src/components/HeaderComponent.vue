<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Recipe</router-link>
      <button @click="toggleDeleteMode" class="delete-mode-btn">
        {{ isDeleteMode ? "Exit Delete Mode" : "Delete Recipes" }}
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    isDeleteMode: Boolean,
  },
  methods: {
    toggleDeleteMode() {
      this.$emit("toggle-delete-mode");
    },
  },
};
</script>

<style scoped>
header {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  margin: 10px;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  color: white;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.3s;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.delete-mode-btn {
  background: #ff4d4d;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
}

.delete-mode-btn:hover {
  background: #ff1a1a;
}
</style>
