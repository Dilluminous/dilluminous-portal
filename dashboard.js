function loadModule(module) {
  const container = document.getElementById('moduleContainer');
  container.innerHTML = ""; // Clear previous content

  if (module === 'tasks') {
    container.innerHTML = `
      <h3>🛠 Project & Task Tracker</h3>
      <form onsubmit="saveTask(event)">
        <input type="text" id="projectName" placeholder="Project Name" required />
        <textarea id="taskDetails" placeholder="Task Details" required></textarea>
        <button type="submit">Submit Task</button>
      </form>
    `;
  }

  else if (module === 'quote') {
    container.innerHTML = `
      <h3>💰 Markup Calculator</h3>
      <form onsubmit="calculateQuote(event)">
        <input type="number" id="cost" placeholder="Landed Cost (GHS)" required />
        <input type="number" id="markup" placeholder="Markup %" required />
        <button type="submit">Calculate</button>
      </form>
      <p id="quoteResult"></p>
    `;
  }

  else if (module === 'supplier') {
    container.innerHTML = `
      <h3>🧾 Supplier Quote Generator</h3>
      <form onsubmit="generateQuoteRequest(event)">
        <input type="text" id="supplierName" placeholder="Supplier Name" required />
        <input type="text" id="itemDesc" placeholder="Item Description" required />
        <input type="number" id="quantity" placeholder="Quantity" required />
        <input type="text" id="delivery" placeholder="Delivery Location / Terms" />
        <textarea id="notes" placeholder="Notes / Specifications"></textarea>
        <button type="submit">Generate Quote Message</button>
      </form>
      <pre id="quoteOutput"></pre>
    `;
  }

  else if (module === 'records') {
    container.innerHTML = `
      <h3>📁 Upload Procurement Record</h3>
      <input type="file" id="uploadFile" />
      <p>Feature: Backend upload support coming soon</p>
    `;
  }

  else if (module === 'logout') {
    window.location.href = "index.html";
  }
}

function calculateQuote(e) {
  e.preventDefault();
  const cost = parseFloat(document.getElementById('cost').value);
  const markup = parseFloat(document.getElementById('markup').value);
  const result = cost + (cost * markup / 100);
  document.getElementById('quoteResult').innerText = `Quote Price: GHS ${result.toFixed(2)}`;
}

function saveTask(e) {
  e.preventDefault();
  const project = document.getElementById('projectName').value;
  const task = document.getElementById('taskDetails').value;
  alert(`Task for project "${project}" saved!`);
}

function generateQuoteRequest(e) {
  e.preventDefault();
  const name = document.getElementById('supplierName').value;
  const item = document.getElementById('itemDesc').value;
  const qty = document.getElementById('quantity').value;
  const delivery = document.getElementById('delivery').value || 'As soon as possible';
  const notes = document.getElementById('notes').value || 'Please advise availability and lead time.';

  const message = `
Dear ${name},

Kindly provide a quotation for the following:

- Item: ${item}
- Quantity: ${qty}
- Delivery: ${delivery}

Notes: ${notes}

Thank you,
Dilluminous Ltd.
  `;
  document.getElementById('quoteOutput').innerText = message;
}
