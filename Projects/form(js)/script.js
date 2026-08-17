// JavaScript code to handle form data

const form = document.querySelector('form');
const key = 'products';

const getStoredProducts = () => {
  try {
    const savedProducts = JSON.parse(localStorage.getItem(key));
    return Array.isArray(savedProducts) ? savedProducts : [];
  } catch {
    // return [];
  }
};
// add 
const saveProducts = (products) => {
  localStorage.setItem(key, JSON.stringify(products));

  const output = document.querySelector('#form-output');
  if (output) {
    output.textContent = localStorage.getItem(key);
    output.style.display = 'block';
  }
};

const renderProducts = () => {
  const tableBody = document.querySelector('#table tbody');
  if (!tableBody) return;

  const products = getStoredProducts();
  tableBody.innerHTML = '';

  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.classList.add('product-row');

    const serialCell = document.createElement('td');
    serialCell.textContent = index + 1;
    row.appendChild(serialCell);

    ['name', 'category', 'price', 'quantity'].forEach((key) => {
      const cell = document.createElement('td');
      cell.textContent = product[key] ?? '';
      cell.dataset.key = key;
      row.appendChild(cell);
    });

    // Remove Button function
    const actionCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', () => {
      const currentProducts = getStoredProducts();
      currentProducts.splice(index, 1);
      saveProducts(currentProducts);
      console.log('Removed product:', product);
      renderProducts();
    });
    actionCell.appendChild(removeButton);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
};

if (form) {
  form.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const products = getStoredProducts();
    products.push(data);

    saveProducts(products);
    renderProducts();

    localStorage.setItem('lastSub', JSON.stringify(data));
    form.classList.add('submitted');

    form.reset();
  });
}

renderProducts();
