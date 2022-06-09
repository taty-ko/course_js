"use strict";

//Рекурсия - это процесс, когда функция вызывает сама себя.

//Функция возведения в степень.

//Функция с циклом
/* function pow (x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
        // result = x * result;
    }
    return result;
} */

/* //Функция с рекурсией
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

pow(2, 1);
pow(2, 2);
pow(2, 3);
pow(2, 4);
console.log(pow(2, 9));//512 */

// База рекурсии - наш Х, который возвращается. 
// Шаг рекурсии 
// Глубина рекурсии - количество вложенностей.

//Функция с циклом. Без Реккурсии.
/* let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [ {
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgressByIteration (data) {
    let totalProgress = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                totalProgress += course[i].progress;
            }

        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    totalProgress += subCourse[i].progress;
                }
            }
        }
    } 

    return totalProgress / students;
}

console.log(getTotalProgressByIteration(students));
 */


//Функция с Рекурсией.
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [ {
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByRecursion(data) {
    
    if (Array.isArray(data)) {
       let total = 0;


        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1]; 
        }

        return total;
    }

}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);