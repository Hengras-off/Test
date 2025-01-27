const projects = [
  { title: "Проект 1", img: "your-image1.jpg", description: "Описание проекта 1" },
  { title: "Проект 2", img: "your-image2.jpg", description: "Описание проекта 2" },
  { title: "Проект 3", img: "your-image3.jpg", description: "Описание проекта 3" },
];

const container = document.querySelector('.card-container');

projects.forEach(project => {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const img = document.createElement('img');
  img.src = project.img;
  card.appendChild(img);

  const title = document.createElement('h2');
  title.innerText = project.title;
  card.appendChild(title);

  const description = document.createElement('p');
  description.innerText = project.description;
  card.appendChild(description);

  container.appendChild(card);
});
