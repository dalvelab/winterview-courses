Для `sarah` мы не использовали ключевое слово `new`. Использование `new` приводит к созданию нового объекта. Но без `new` он указывает на **глобальный объект**!

Мы указали, что `this.firstName` равно `"Sarah"` и `this.lastName` равно `"Smith"`. На самом деле мы определили `global.firstName = 'Sarah'` и `global.lastName = 'Smith'`. `sarah` осталась `undefined`, поскольку мы не возвращаем значение из функции `Person`.
