В JavaScript мы _не должны_ явно указывать точку с запятой (`;`), однако движок JavaScript все равно добавляет их после операторов. Это называется **автоматической вставкой точек с запятой**. Например, оператором могут быть переменные или ключевые слова, такие как `throw`, `return`, `break` и т.д.

Здесь мы написали инструкцию `return` и другое значение `a + b` в новой строке. Однако, поскольку это новая линия, движок не знает, что это на самом деле значение, которое мы хотели бы вернуть. Вместо этого он автоматически добавляет точку с запятой после `return`. Вы можете увидеть это как:
