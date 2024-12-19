document.addEventListener("DOMContentLoaded", () => {
    const demoButtons = document.querySelectorAll('.work__button');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalImg = modal.querySelector('.modal-img');

    if (demoButtons.length > 0 && modal && closeModal) {
        demoButtons.forEach(button => {
            button.addEventListener('click', () => {
                const personalCard = button.closest('.personal-card'); 
                if (personalCard) {
                    const title = personalCard.querySelector('.personal-title').textContent; 
                    const description = personalCard.querySelector('.description').textContent;
                    const imgSrc = personalCard.querySelector('.personal-img').src; 

                    modalTitle.textContent = title;
                    modalDescription.textContent = description;
                    modalImg.src = imgSrc;

                    modal.classList.add('open');
                }
            });
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('open');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    } else {
        console.error('Modal or required elements are missing. Check the HTML structure.');
    }
});