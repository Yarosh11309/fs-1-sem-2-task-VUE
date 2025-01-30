import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddRecipe from '@/views/AddRecipe.vue';
import RecipeDetail from '@/views/RecipeDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddRecipe },
  { path: '/recipe/:id', component: RecipeDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


