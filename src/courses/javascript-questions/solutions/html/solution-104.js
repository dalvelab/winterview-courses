module.exports = () => `Мы можем передать любой тип значения, которое мы хотим, в <code>Promise.resolve</code>, либо обещание, либо не обещание. Сам метод возвращает обещание с разрешенным значением. Если вы передадите обычную функцию, это будет разрешенное обещание с обычным значением. Если вы передадите обещание, это будет разрешенное обещание с разрешенным значением этого пройденного обещания.

В этом случае мы просто передали числовое значение <code>5</code>. Возвращается разрешенное обещание со значением <code>5</code>.
`;