
document.addEventListener("DOMContentLoaded", () => {
    const videoPreview = document.querySelector(".project-video-preview");
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeModal = document.getElementById("closeModal");

    // Show modal on video click
    videoPreview.addEventListener("click", () => {
        modal.style.display = "flex";
        document.body.classList.add("modal-open");
        modalVideo.play(); // Automatically play the video in the modal
    });

    // Close modal on button click
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        modalVideo.pause(); // Pause the video when modal is closed
        modalVideo.currentTime = 0; // Reset video to the beginning
    });

    // Optional: Close modal on outside click
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
    });
});
