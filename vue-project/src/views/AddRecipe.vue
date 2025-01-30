<template>
  <div class="add-recipe">
    <h1>Add a New Recipe</h1>
    <form @submit.prevent="submitRecipe">
      <label for="name">Recipe Name:</label>
      <input id="name" v-model="newRecipe.name" class="form-input" />

      <label for="details">Details:</label>
      <textarea id="details" v-model="newRecipe.details" class="form-textarea"></textarea>

      <label for="products">Products:</label>
      <textarea id="products" v-model="newRecipe.products" class="form-textarea"></textarea>

      <label for="image">Image URL:</label>
      <input id="image" v-model="newRecipe.image" class="form-input" />

      <button type="submit" class="btn-primary">Add Recipe</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newRecipe: {
        name: "",
        details: "",
        products: "", // ✅ Добавлено поле products
        image: "",
      },
    };
  },
  methods: {
    submitRecipe() {
      this.$emit("add-recipe", this.newRecipe);
      this.newRecipe = { name: "", details: "", products: "", image: "" };
    },
  },
};
</script>


<style scoped>
.add-recipe {
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-top: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}

.btn-primary {
  background: #5a67d8;
  color: white;
  font-weight: bold;
  padding: 0.7rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #434190;
}
</style>

