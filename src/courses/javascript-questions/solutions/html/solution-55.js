module.exports = () => `Мы можем удалить свойства из объектов, используя ключевое слово <code>delete</code>, также в прототипе. Удаляя свойство в прототипе, оно больше не доступно в цепочке прототипов. В этом случае функция <code>bark</code> больше не доступна в прототипе после<code>delete Dog.prototype.bark</code>, но мы все еще пытаемся получить к ней доступ.

Когда мы пытаемся вызвать что-то, что не является функцией, выдается <code>TypeError</code>. В этом случае <code>TypeError: pet.bark не является функцией</code>, поскольку<code> pet.bark</code> является <code>undefined</code>.
`;