<template>
  <div id="app">
    <HeaderComponent 
      :isDeleteMode="isDeleteMode" 
      @toggle-delete-mode="toggleDeleteMode" 
    />
    <router-view
      :recipes="recipes"
      :isDeleteMode="isDeleteMode"
      @add-recipe="addRecipe"
      @delete-recipe="deleteRecipe"
    />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      recipes: [
        
      ],
      isDeleteMode: false, // Флаг, указывающий на режим удаления
    };
  },
  methods: {
    addRecipe(newRecipe) {
      const nextId = this.recipes.length + 1;
      this.recipes.push({
        id: nextId,
        name: newRecipe.name,
        details: newRecipe.details,
        products: newRecipe.products,
        image: newRecipe.image || "https://via.placeholder.com/100",
      });
    },
    deleteRecipe(recipeId) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId); // Удаляем рецепт по ID
    },
    toggleDeleteMode() {
      this.isDeleteMode = !this.isDeleteMode; // Переключаем режим удаления
    },
  },
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f9f9f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
}

</style>
