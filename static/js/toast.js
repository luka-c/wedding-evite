globalThis.showToast = function (message, type = 0) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");

  toast.classList.add("toast");

  if (type === 0) toast.classList.add("success");
  if (type === 1) toast.classList.add("error");
  if (type === 2) toast.classList.add("info");

  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(1rem)";

    toast.addEventListener("transitionend", () => toast.remove());
  }, 3000);
};
