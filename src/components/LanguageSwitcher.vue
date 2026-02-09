<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Languages } from 'lucide-vue-next';

const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ru' : 'en';
  localStorage.setItem('lang', locale.value);
};
</script>

<template>
  <button @click="toggleLanguage" class="btn-outline" style="padding: 0.5rem 1rem;">
    <Languages :size="18" />
    <span>{{ locale.toUpperCase() }}</span>
  </button>
</template>
