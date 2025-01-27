const container = document.querySelector('.card-container');

// API ключ (dsf)
const accessKey = 'gd_mR6ZSGcgduQ7WdL5VB-euH2JivfyYhTmLtThN0ZI';

// Функция для получения случайных изображений
async function fetchImages() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=3`);
    const images = await response.json();

    images.forEach(image => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      const img = document.createElement('img');
      img.src = image.urls.small;  // URL изображения с Unsplash
      card.appendChild(img);

      const title = document.createElement('h2');
      title.innerText = "Проект";
      card.appendChild(title);

      const description = document.createElement('p');
      description.innerText = image.alt_description || "Описание проекта";
      card.appendChild(description);

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

// Загрузка изображений при загрузке страницы
fetchImages();
