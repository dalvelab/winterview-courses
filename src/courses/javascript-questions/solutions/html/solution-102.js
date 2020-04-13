module.exports = () => `С обещанием мы в основном говорим: "Я хочу выполнить эту функцию и откладываю ее, пока она выполняется, поскольку это может занять некоторое время". Только когда определенное значение разрешено (или отклонено), и когда стек вызовов пуст, я хочу использовать это значение.

Мы можем получить это значение с помощью ключевого слова <code>.then</code> и <code>await</code> в функции <code>async</code>. Хотя мы можем получить значение обещания с помощью <code>.then</code> и <code>await</code>, они работают немного по-разному.

В <code>firstFunction</code> мы (вроде) отложили функцию <code>myPromise</code> во время ее работы, но продолжили выполнение другого кода, в данном случае <code>console.log ('second')</code>. Затем функция разрешается строкой <code>I have resolved</code>, которая затем логируется после того, как она увидела, что стек вызовов пуст.

Используя ключевое слово <code>await</code> в <code>secondFunction</code>, мы буквально приостанавливаем выполнение асинхронной функции до тех пор, пока значение не будет разрешено до перехода на следующую строку.

Это означает, что мы ожидали разрешения <code>myPromise</code> со значением <code>I have resolved</code>, и только когда это произошло, мы перешли к следующей строке: <code>second</code> была выведена в консоль последней.
`;