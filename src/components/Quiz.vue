<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { questions } from '../data/questions';
import { ChevronRight, CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-vue-next';

const { t, locale } = useI18n();

const currentQuestionIndex = ref(-1); // -1 is start screen
const selectedOptionId = ref<string | null>(null);
const isAnswered = ref(false);
const score = ref(0);
const quizCompleted = ref(false);

const currentQuestion = computed(() => questions[currentQuestionIndex.value]);

const startQuiz = () => {
  currentQuestionIndex.value = 0;
  score.value = 0;
  quizCompleted.value = false;
  isAnswered.value = false;
  selectedOptionId.value = null;
};

const selectOption = (id: string) => {
  if (isAnswered.value) return;
  selectedOptionId.value = id;
};

const checkAnswer = () => {
  if (!selectedOptionId.value || isAnswered.value || !currentQuestion.value) return;
  
  isAnswered.value = true;
  if (selectedOptionId.value === currentQuestion.value.correctOptionId) {
    score.value++;
  }
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++;
    selectedOptionId.value = null;
    isAnswered.value = false;
  } else {
    quizCompleted.value = true;
  }
};

const restartQuiz = () => {
  startQuiz();
};

const getLocalizedText = (textObj: { en: string, ru: string }) => {
  return textObj[locale.value as 'en' | 'ru'];
};
</script>

<template>
  <div class="quiz-wrapper">
    <!-- Start Screen -->
    <Transition name="fade" mode="out-in">
      <div v-if="currentQuestionIndex === -1" class="glass-card start-screen">
        <Trophy :size="64" class="icon-accent" />
        <h1>{{ t('title') }}</h1>
        <p class="subtitle">{{ t('welcome') }}</p>
        <button @click="startQuiz" class="btn-primary">
          {{ t('start') }}
          <ChevronRight :size="20" />
        </button>
      </div>

      <!-- Result Screen -->
      <div v-else-if="quizCompleted" class="glass-card result-screen">
        <div class="result-header">
          <Trophy :size="64" class="icon-accent" />
          <h1>{{ t('congrats') }}</h1>
        </div>
        <div class="score-display">
          <span class="score-label">{{ t('score') }}</span>
          <span class="score-value">{{ score }} / {{ questions.length }}</span>
        </div>
        <p>{{ t('resultText') }}</p>
        <button @click="restartQuiz" class="btn-primary">
          <RotateCcw :size="20" />
          {{ t('restart') }}
        </button>
      </div>

      <!-- Question Screen -->
      <div v-else-if="currentQuestion" class="glass-card question-card">
        <div class="quiz-header">
          <span class="category-badge">{{ currentQuestion.category }}</span>
          <span class="progress-info">{{ t('progress', { current: currentQuestionIndex + 1, total: questions.length }) }}</span>
        </div>

        <h2 class="question-text">{{ getLocalizedText(currentQuestion.question) }}</h2>

        <div class="options-list">
          <button 
            v-for="option in currentQuestion.options" 
            :key="option.id"
            @click="selectOption(option.id)"
            class="option-btn"
            :class="{
              'selected': selectedOptionId === option.id,
              'correct': isAnswered && option.id === currentQuestion.correctOptionId,
              'incorrect': isAnswered && selectedOptionId === option.id && option.id !== currentQuestion.correctOptionId,
              'disabled': isAnswered
            }"
          >
            <span class="option-label">{{ option.id.toUpperCase() }}</span>
            <span class="option-text">{{ getLocalizedText(option.text) }}</span>
            <div class="status-icon" v-if="isAnswered">
              <CheckCircle2 v-if="option.id === currentQuestion.correctOptionId" :size="20" class="text-correct" />
              <XCircle v-else-if="selectedOptionId === option.id" :size="20" class="text-incorrect" />
            </div>
          </button>
        </div>

        <div class="quiz-footer">
          <Transition name="fade">
            <div v-if="isAnswered" class="feedback">
              <span v-if="selectedOptionId === currentQuestion.correctOptionId" class="text-correct">
                <CheckCircle2 :size="18" /> {{ t('correct') }}
              </span>
              <span v-else class="text-incorrect">
                <XCircle :size="18" /> {{ t('incorrect') }}
              </span>
            </div>
          </Transition>

          <button 
            v-if="!isAnswered" 
            @click="checkAnswer" 
            class="btn-primary" 
            :disabled="!selectedOptionId"
          >
            {{ t('check') }}
          </button>
          <button v-else @click="nextQuestion" class="btn-primary">
            {{ currentQuestionIndex === questions.length - 1 ? t('finish') : t('next') }}
            <ChevronRight :size="20" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.quiz-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-screen, .result-screen {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  h1 {
    font-size: 3rem; // Increased from 2.5rem
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
}

.icon-accent {
  color: var(--primary-color);
  filter: drop-shadow(0 0 10px var(--primary-color));
  margin-bottom: 1rem;
}

.question-card {
  width: 100%;
  position: relative;
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.category-badge {
  background: var(--option-bg);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--secondary-color);
  border: 1px solid var(--border-color);
}

.progress-info {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.question-text {
  margin-bottom: 2rem;
  font-size: 1.75rem;
  line-height: 1.4;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.option-btn {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 1.25rem;
  background: var(--option-bg);
  border: 2px solid transparent;
  border-radius: 16px;
  width: 100%;
  transition: all var(--transition-fast);
  gap: 1rem;
  color: var(--option-text, var(--text-color));

  &:hover:not(.disabled) {
    background: var(--option-hover);
    transform: translateX(5px);
  }

  &.selected {
    border-color: var(--primary-color);
    background: var(--surface-color);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
  }

  &.correct {
    background: var(--correct-bg);
    border-color: var(--correct-text);
    color: var(--correct-text);
  }

  &.incorrect {
    background: var(--incorrect-bg);
    border-color: var(--incorrect-text);
    color: var(--incorrect-text);
  }

  &.disabled {
    cursor: default;
  }
}

.option-label {
  font-weight: 700;
  background: var(--surface-color);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 0.9rem;
}

.option-text {
  flex: 1;
  font-weight: 600;
  font-size: 1.2rem;
}

.quiz-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
}

.feedback {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.score-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
}

.score-label {
  font-size: 1.1rem;
  color: var(--text-muted);
}

.score-value {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--primary-color);
}

.text-correct {
  color: #10b981;
}

.text-incorrect {
  color: #ef4444;
}
</style>
