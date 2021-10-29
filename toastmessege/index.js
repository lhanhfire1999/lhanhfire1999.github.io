const toast = ({ 
  title = "",
  message = "",
  type = "info",
  duration = 3000 
}) => {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    const icons = {
      success: 'fas fa-check-circle',
      info: 'fas fa-info-circle',
      warning: 'fas fa-exclamation-circle',
      error: 'fas fa-exclamation-circle',
    };
    // 
    const autoRemove = setTimeout(()=> {
      main.removeChild(toast);
    }, duration + 1000)

    toast.onclick = (e) => {
      console.log();
      if(e.target.closest('.toast__close')){
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }
    };

    const  icon = icons[type];
    const delay = (duration/1000).toFixed(2);

    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`

    toast.innerHTML = `
      <div class="toast__icon">
          <i class="${icon}"></i>
      </div>
      <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">${message}</p>
      </div>
      <div class="toast__close">
          <i class="fas fa-times"></i>
      </div>
    `;
    main.appendChild(toast);
  }
};

const showSuccessToast = () => {
  toast({
  title : 'Success',
  message : 'This is a success message',
  type :'success',
  duration : 2000,
});

}
const showErrorToast = () => {
  toast({
  title : 'Error',
  message : 'This is a error messege',
  type :'error',
  duration : 2000,
  });
}