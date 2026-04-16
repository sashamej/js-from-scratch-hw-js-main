/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы
из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно,
она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements (array1, array2) {
	const result = [];
	
	for (let i = 0; i < array1.length; i ++) {
		const current = array1[i];
		
		if (array2.includes (current) && !result.includes (current)) {
			result.push (current);
		}
	}
	return result;
}

//const array1 = [1, 2, 3];
//const array2 = [2, 3, 4];
//console.log (findCommonElements (array1, array2));
