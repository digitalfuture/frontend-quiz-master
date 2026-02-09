<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';

const isDark = ref(true);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const updateTheme = () => {
  const root = document.documentElement;
  if (isDark.value) {
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    isDark.value = false;
  } else {
    isDark.value = true;
  }
  updateTheme();
});
</script>

<template>
  <button @click="toggleTheme" class="btn-icon" :title="isDark ? 'Switch to Light' : 'Switch to Dark'">
    <Sun v-if="isDark" :size="20" />
    <Moon v-else :size="20" />
  </button>
</template>
