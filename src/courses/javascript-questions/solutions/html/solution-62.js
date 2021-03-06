module.exports = () => `Второй аргумент <code>JSON.stringify</code> - это <i>replacer</i>. Заменитель может быть либо функцией, либо массивом, и позволяет вам контролировать, что и как должны быть преобразованы в значения.

Если заменитель является <i>массивом</i>, только свойства, имена которых включены в массив, будут добавлены в строку JSON. В этом случае включаются только свойства с именами <code>"level"</code> и <code>"health"</code>, <code>"username"</code> исключается. <code>data</code> теперь равен <code>"{"level":19, "health":90}"</code>.

Если заменитель является <i>function</i>, эта функция вызывается для каждого свойства объекта, который вы преобразуете. Значение, возвращаемое из этой функции, будет значением свойства при добавлении в строку JSON. Если значение равно undefined, это свойство исключается из строки JSON.
`;