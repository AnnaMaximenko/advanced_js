/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, 
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
 
Необходимо: 
1. Создать Map объект, который будет использоваться для хранения соответствия 
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные 
студентом.
*/

const lessonsTeacher = new Map();
lessonsTeacher
  .set("математика", "смирнов")
  .set("литература", "ленин")
  .set("англ.яз", "петрова");
const studentLessons = new Map();

const ivan = {
  name: "Иван",
};

const ivansLessons = new Set();
ivansLessons.add("литература");
ivansLessons.add("англ.яз");

studentLessons.set(ivan, ivansLessons);
// Преподаватель по Математике: Смирнов.
// console.log(`Преподаватель по математике: ${lessonsTeacher.get("математика")}`);
// Уроки Ивана: Математика, История.
console.log(`Уроки Ивана: ${Array.from(studentLessons.get(ivan)).join(", ")}`);
