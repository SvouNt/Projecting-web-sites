import { grades, passScore } from './constants.js';
import { calculateAverage } from './avgscore.js';
import { findTopStudent } from './topscore.js';
import { filterFailed } from './failed.js';
import { addLetterGrade } from './lettergrade.js';

console.log( 'Средний балл группы: ', calculateAverage(grades), '\n' )
console.log( 'Лучший студент: ', findTopStudent(grades), '\n' )
console.log( 'Список должников: ', filterFailed(grades, passScore), '\n' )
console.log( 'Итоговый массив с буквенными оценками: \n', addLetterGrade(grades) )