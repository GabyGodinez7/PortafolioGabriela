let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante de Ingeniería Industrial con gusto en aprender sobre programación y ciencia...')
  .pauseFor(200)
  .deleteChars(10)
  .start();
