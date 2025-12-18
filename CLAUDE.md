# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server with hot reload (opens browser automatically)

# Build
npm run build        # Production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
```

## Architecture

This is a quiz game application built with Quasar Framework v2 and Vue 3.

**Key technologies:**
- Vue 3 with Composition API (`<script setup>`)
- Quasar UI components
- Pinia for state management
- Vue Router with hash mode

**Project structure:**
- `src/data/quizzes/` - Quiz JSON files and manifest
- `src/components/quiz/` - Quiz UI components (questions, progress, results)
- `src/components/animations/` - Celebration animations (confetti)
- `src/composables/` - Reusable composition functions
- `src/stores/` - Pinia stores (quiz state, user progress)
- `src/pages/` - Route-level page components
- `src/layouts/` - Page layouts

**Adding new quizzes:**
1. Create a JSON file in `src/data/quizzes/` (see `animals.json` for format)
2. Add an entry to `src/data/quizzes/index.js` manifest

**Quiz JSON format:**
```json
{
  "id": "quiz-id",
  "title": "Quiz Title",
  "description": "Description",
  "icon": "material-icon-name",
  "category": "Category",
  "coverColor": "#hex-color",
  "questions": [
    {
      "type": "multiple-choice",
      "question": "Question text?",
      "options": [
        { "id": "a", "text": "Answer", "isCorrect": true },
        { "id": "b", "text": "Answer", "isCorrect": false }
      ],
      "explanation": "Explanation shown after answering",
      "points": 10
    },
    {
      "type": "true-false",
      "question": "Statement",
      "correctAnswer": true,
      "explanation": "Explanation",
      "points": 10
    }
  ]
}
```

**Conventions:**
- Use Quasar components (prefixed with `q-`) for UI elements
- Import via aliases: `src/`, `layouts/`, `pages/`, `components/`
- ESLint uses flat config format (`eslint.config.js`)
