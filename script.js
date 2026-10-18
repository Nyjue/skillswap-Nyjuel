const form = document.getElementById("swap-form");
const swapList = document.getElementById("swap-list");
const emptyMessage = document.getElementById("empty-message");

let swaps = [];

function renderSwaps() {
  swapList.innerHTML = "";

  emptyMessage.style.display = swaps.length === 0 ? "block" : "none";

  swaps.forEach((swap, index) => {
    const card = document.createElement("div");
    card.className = "swap-card";

    const title = document.createElement("h3");
    title.textContent = swap.name;

    const offer = document.createElement("p");
    offer.textContent = "Can teach: " + swap.offer;

    const want = document.createElement("p");
    want.textContent = "Wants to learn: " + swap.want;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => {
      swaps.splice(index, 1);
      renderSwaps();
    });

    card.append(title, offer, want, deleteBtn);
    swapList.appendChild(card);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const offer = document.getElementById("offer").value.trim();
  const want = document.getElementById("want").value.trim();

  if (!name || !offer || !want) {
    return;
  }

  swaps.push({ name, offer, want });
  renderSwaps();
  form.reset();
});

renderSwaps();