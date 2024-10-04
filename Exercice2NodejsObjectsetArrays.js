// Création de l'objet student
let student = {
    name: "Marie",
    age: 20,
    courses: []
};

// Modification de la propriété age
student.age = 21;

// Ajout de la propriété grade
student.grade = "A";

// Ajout des éléments dans le tableau courses
student.courses.push("Math", "Physics", "Chemistry");

// Trouver l'index de "Physics" dans courses
let physicsIndex = student.courses.indexOf("Physics");

// Créer un nouveau tableau avec les deux premiers éléments de courses
let firstTwoCourses = student.courses.slice(0, 2);

// Affichage des résultats
console.log("Objet student modifié :", student);
console.log("Index de 'Physics' :", physicsIndex);
console.log("Nouveau tableau avec slice :", firstTwoCourses);
