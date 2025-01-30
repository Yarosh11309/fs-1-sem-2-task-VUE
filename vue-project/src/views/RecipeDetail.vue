<template>
  <div class="recipe-detail">
    <div class="recipe-content">
      <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />
      <div class="recipe-details">
        <h1>{{ recipe.name }}</h1>
        <p><strong>Details:</strong> {{ recipe.details }}</p>
        <p><strong>Products:</strong> {{ recipe.products }}</p> <!-- ✅ Теперь отображается -->
      </div>
    </div>
    <router-link to="/" class="back-link">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {
        id: this.$route.params.id,
        name: this.$route.query.name || "Unknown Recipe",
        details: this.$route.query.details || "No details available.",
        products: this.$route.query.products || "No products listed.", // ✅ Теперь products корректно передаётся
        image: this.$route.query.image || "https://via.placeholder.com/300",
      },
    };
  },
};
</script>



<style scoped>
.recipe-details {
  max-width: 600px; /* Ограничиваем ширину */
  word-wrap: break-word; /* Переносим длинные слова */
  overflow-wrap: break-word;
}

.recipe-textarea {
  max-width: 100%;
  width: 100%;
  min-height: 100px; /* Минимальная высота */
  max-height: 300px; /* Ограничиваем высоту */
  overflow-y: auto; /* Добавляем прокрутку, если контент длинный */
  resize: vertical; /* Разрешаем изменение размера только по вертикали */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}


.recipe-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.recipe-details {
  text-align: left;
  max-width: 500px;
  padding-top: 1rem;
}

.recipe-details h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #5a67d8;
}

.recipe-details p {
  font-size: 1.1rem;
  line-height: 1.5;
}

.back-link {
  display: inline-block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}
</style>

