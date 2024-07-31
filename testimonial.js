async function fetchTestimonials() {
    try {
      const response = await fetch('testimonials.json');
      const data = await response.json();
      renderTestimonials(data.testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  }

  function renderTestimonials(testimonials) {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = '';

    testimonials.forEach((testimonial, index) => {
      const testimonialElement = document.createElement('div');
      testimonialElement.className = 'col-3';
      
      testimonialElement.innerHTML = `
        <i class="fas fa-quote-left"></i>
        <p>"${testimonial.text}"</p>
        <div class="star-rating">
          ${Array.from({ length: 5 }, (_, i) => `
            <input type="radio" id="star${i+1}-${index}" name="rating${index}" value="${i+1}" ${testimonial.rating === i+1 ? 'checked' : ''}>
            <label for="star${i+1}-${index}" title="${i+1} stars">☆</label>
          `).join('')}
        </div>
        <img src="${testimonial.image}" alt="${testimonial.name}">
        <h3>${testimonial.name}</h3>
      `;

      container.appendChild(testimonialElement);
    });
  }

  document.addEventListener('DOMContentLoaded', fetchTestimonials);