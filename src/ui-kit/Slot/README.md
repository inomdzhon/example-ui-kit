# Slot

## Описание

Вдохновился реализацией слотов в

- Web Components ([пример](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots))
- svelte.dev ([пример](https://svelte.dev/examples#slots))
- vuejs (#1 [пример](https://ru.vuejs.org/v2/guide/components-slots.html), #2 [код](https://github.com/vuejs/vue/blob/4d4d22a3f6017c46d08b67afe46af43027b06629/src/core/instance/render-helpers/resolve-slots.js))

Пока есть два черновых способа реализации слотов в React.

Через нативный атрибут `slot` (см. [useHooks](useSlot.tsx)) и через подкомпоненты (см. [withSlot](withSlot.tsx)).

У каждого есть свои преимущества и недостатки (TODO таблица с плюсами и минусами).

|     | `slot` | `*.Slot` |
| --- | ------ | -------- |
|     |        |          |
|     |        |          |

## Вопросы
- Какие дополнительные возможности могут понадобиться?
