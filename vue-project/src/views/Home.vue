<template>
  <div class="home">
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <router-link 
          :to="{
            path: '/recipe/' + recipe.id,
            query: {
              name: recipe.name,
              details: recipe.details,
              image: recipe.image,
              products: recipe.products
            }
          }"
          class="recipe-card"
        >
          <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />
          <span class="recipe-name">{{ recipe.name }}</span>
        </router-link>
        <button v-if="isDeleteMode" @click="$emit('delete-recipe', recipe.id)" class="delete-btn">✖</button>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  props: ["recipes", "isDeleteMode"], // Получаем флаг удаления и список рецептов от App.vue
  methods: {
    deleteRecipe(recipeId) {
      this.$emit("delete-recipe", recipeId); // Отправляем событие удаления рецепта
    },
  },
};
</script>

<style coped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

li {
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
}

.recipe-card {
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  padding: 1rem;
  color: #333;
  transition: background 0.3s ease;
}

.recipe-card:hover {
  background: rgba(90, 103, 216, 0.1);
}

.recipe-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 8px;
}

.recipe-name {
  font-size: 1.2rem;
  font-weight: bold;
  flex-grow: 1;
}

.delete-btn {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.delete-btn:hover {
  background-color: #ff1a1a;
}
</style>
