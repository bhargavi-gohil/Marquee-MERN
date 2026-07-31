// JavaScript code to handle form data and connect with index.html + style.css

const form = document.querySelector('form');

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

    console.log('Form submitted:', data);

    const output = document.querySelector('#form-output');
    if (output) {
      output.textContent = JSON.stringify(data, null, 2);
      output.style.display = 'block';
    }

    const tableBody = document.querySelector('#table tbody');
    if (tableBody) {
      const row = document.createElement('tr');
      row.classList.add('product-row');

      const serialCell = document.createElement('td');
      serialCell.textContent = tableBody.children.length + 1;
      row.appendChild(serialCell);

      ['name', 'category', 'price', 'quantity'].forEach((key) => {
        const cell = document.createElement('td');
        cell.textContent = data[key] ?? '';
        cell.dataset.key = key;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    }

    form.classList.add('submitted');
    form.reset();
  });
}
