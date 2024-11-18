// Performance Line Chart for Monthly Returns
const performanceCtx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(performanceCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Returns ($)',
      data: [10000, 12000, 9000, 13000, 15000, 14000, 16000, 17500, 16000, 17000, 18000, 19000],
      borderColor: '#8a2be2',
      backgroundColor: 'rgba(138, 43, 226, 0.1)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});


// Get elements
const depositButton = document.getElementById('deposits');
const withdrawButton = document.getElementById('withdrawals');
const depositModal = document.getElementById('depositModal');
const withdrawModal = document.getElementById('withdrawModal');
const closeDeposit = document.getElementById('closeDeposit');
const closeWithdraw = document.getElementById('closeWithdraw');

// Open the deposit modal
depositButton.addEventListener('click', () => {
  depositModal.style.display = 'block';
});

// Open the withdraw modal
withdrawButton.addEventListener('click', () => {
  withdrawModal.style.display = 'block';
});

// Close the deposit modal
closeDeposit.addEventListener('click', () => {
  depositModal.style.display = 'none';
});

// Close the withdraw modal
closeWithdraw.addEventListener('click', () => {
  withdrawModal.style.display = 'none';
});

// Close modals if clicking outside of the content
window.addEventListener('click', (event) => {
  if (event.target === depositModal) {
    depositModal.style.display = 'none';
  }
  if (event.target === withdrawModal) {
    withdrawModal.style.display = 'none';
  }
});


// Elements for payment method selection
const confirmDepositButton = document.getElementById('confirmDepositButton');
const paymentMethodModal = document.getElementById('paymentDetailsModal');
const closePaymentMethod = document.getElementById('closePaymentDetails');

// Show payment method modal when "Confirm Deposit" is clicked
confirmDepositButton.addEventListener('click', () => {
    depositModal.style.display = 'none';  // Hide the deposit modal
    paymentMethodModal.style.display = 'block';  // Show payment method modal
});

// Close the payment method modal
closePaymentMethod.addEventListener('click', () => {
    paymentMethodModal.style.display = 'none';
});

// Close modals if clicking outside of the content
window.addEventListener('click', (event) => {
    if (event.target === depositModal) {
        depositModal.style.display = 'none';
    }
    if (event.target === withdrawModal) {
        withdrawModal.style.display = 'none';
    }
    if (event.target === paymentDetailsModal) {
        paymentDetailsModal.style.display = 'none';
    }
});

// Elements
const paymentDetailsModal = document.getElementById('paymentDetailsModal');
const closePaymentDetails = document.getElementById('closePaymentDetails');
const amountInput = document.querySelector('.modal-input');
const amountDisplay = document.getElementById('amountDisplay');
const chargeDisplay = document.getElementById('chargeDisplay');
const payableDisplay = document.getElementById('payableDisplay');
const conversionRateDisplay = document.getElementById('conversionRateDisplay');
const btcEquivalentDisplay = document.getElementById('btcEquivalentDisplay');
const conversionRate = 3.4e-5;  // Example conversion rate (1 USD = 3.4E-5 BTC)

// Open payment details modal and calculate values
confirmDepositButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value) || 0;
    const charge = 0;
    const payable = amount + charge;
    const btcEquivalent = payable * conversionRate;

    // Set values in the modal
    amountDisplay.textContent = `${amount.toFixed(2)} $`;
    chargeDisplay.textContent = `${charge.toFixed(2)} $`;
    payableDisplay.textContent = `${payable.toFixed(2)} $`;
    conversionRateDisplay.textContent = `1 USD = ${conversionRate} BTC`;
    btcEquivalentDisplay.textContent = `${btcEquivalent.toFixed(5)} BTC`;

    // Close deposit modal and open payment details modal
    depositModal.style.display = 'none';
    paymentDetailsModal.style.display = 'block';
});

// Close payment details modal
closePaymentDetails.addEventListener('click', () => {
    paymentDetailsModal.style.display = 'none';
});

// Close modals if clicking outside of the content
window.addEventListener('click', (event) => {
    if (event.target === paymentDetailsModal) {
        paymentDetailsModal.style.display = '';
    }
});

// Get elements

// Confirm Deposit Button Event
confirmDepositButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);

    // Check if the amount is valid
    if (amountInput.checkValidity() && amount >= 10 && amount <= 1000000) {
        // Hide deposit modal and show payment details modal
        depositModal.style.display = 'none';
        paymentDetailsModal.style.display = 'block';

        // Update payment details modal with the entered amount
        document.getElementById('amountDisplay').textContent = `${amount.toFixed(2)} $`;
        // (Further calculations for charge, payable, and BTC equivalent would go here)
    } else {
        // If validation fails, display an alert or error message
    }
});

closeDeposit.addEventListener('click', () => {
  console.log('Close button clicked');
  depositModal.style.display = 'none';
  amountInput.value = ''; // Reset the input field
});

confirmDepositButton.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  console.log('Amount entered:', amount);

  // Check if the amount meets all conditions
  if (amountInput.checkValidity() && amount >= 10 && amount <= 1000000) {
      console.log('Amount is valid. Proceeding to payment details.');

      // Hide deposit modal and show payment details modal
      depositModal.style.display = 'none';
      paymentDetailsModal.style.display = 'block';

      // Update payment details modal with the entered amount
      document.getElementById('amountDisplay').textContent = `${amount.toFixed(2)} $`;
      // (Further calculations for charge, payable, and BTC equivalent would go here)
  } else {
      console.log('Invalid amount. Showing alert and focusing input.');
      
      // Reset the input field focus
      amountInput.focus(); 
  }
});

// Close Button Event to Reset Input
closeDeposit.addEventListener('click', () => {
  depositModal.style.display = 'none';
  amountInput.value = ''; // Reset the input field
});

// Optional: Also reset if clicking outside the modal
window.addEventListener('click', (event) => {
  if (event.target === depositModal) {
      depositModal.style.display = 'none';
      amountInput.value = ''; // Reset the input field
  }
});

// Elements for Payment Instructions Modal
const payNowButton = document.getElementById('payNowButton');
const paymentInstructionsModal = document.getElementById('paymentInstructionsModal');
const closePaymentInstructions = document.getElementById('closePaymentInstructions');
const doneButton = document.getElementById('doneButton');

// Show payment instructions modal when "Pay Now" is clicked
payNowButton.addEventListener('click', () => {
    paymentDetailsModal.style.display = 'none';  // Hide the payment details modal
    paymentInstructionsModal.style.display = 'block';  // Show payment instructions modal
});

// Close the payment instructions modal
closePaymentInstructions.addEventListener('click', () => {
    paymentInstructionsModal.style.display = 'none';
});

// Close the payment details modal
closePaymentDetails.addEventListener('click', () => {
    paymentDetailsModal.style.display = 'none';
});

// Done Button Event to close the payment instructions modal
doneButton.addEventListener('click', () => {
    paymentInstructionsModal.style.display = 'none';
});

// Close modals if clicking outside of the content
window.addEventListener('click', (event) => {
    if (event.target === paymentInstructionsModal) {
        paymentInstructionsModal.style.display = 'none';
    }
    if (event.target === paymentDetailsModal) {
        paymentDetailsModal.style.display = 'none';
    }
});

const paymentMessage = document.getElementById('paymentMessage');

// Show payment instructions modal with a dynamic message
payNowButton.addEventListener('click', () => {
    // Retrieve the amount entered in USD from the payment details modal
    const amount = parseFloat(document.getElementById('amountDisplay').textContent);

    // Calculate the BTC equivalent
    const btcAmount = (amount * conversionRate).toFixed(6);

    // Create the dynamic message
    const message = `You have requested to deposit ${amount} USD. Please pay ${btcAmount} BTC for a successful payment.`;

    // Display the dynamic message with sliding animation
    paymentMessage.innerHTML = `<p>${message}</p>`;

    // Hide the payment details modal and show payment instructions modal
    paymentDetailsModal.style.display = 'none';
    paymentInstructionsModal.style.display = 'block';
});

// Close the payment instructions modal
closePaymentInstructions.addEventListener('click', () => {
    paymentInstructionsModal.style.display = 'none';
});

// Close the payment details modal
closePaymentDetails.addEventListener('click', () => {
    paymentDetailsModal.style.display = 'none';
});

// Done Button Event to close the payment instructions modal
doneButton.addEventListener('click', () => {
    paymentInstructionsModal.style.display = 'none';
});

// Close modals if clicking outside of the content
window.addEventListener('click', (event) => {
    if (event.target === paymentInstructionsModal) {
        paymentInstructionsModal.style.display = 'none';
    }
    if (event.target === paymentDetailsModal) {
        paymentDetailsModal.style.display = 'none';
    }
});

// Array to store transaction history
let transactionHistory = [];

// Elements for displaying transaction history in the sidebar
const transactionHistoryList = document.getElementById('transactionHistoryList');

// Confirm Deposit Button Event
confirmDepositButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    
    // Check if the amount is valid
    if (amountInput.checkValidity() && amount >= 10 && amount <= 1000000) {
        // Calculate transaction details
        const charge = 0;  // Assuming no charge for simplicity
        const payable = amount + charge;
        const btcEquivalent = (payable * conversionRate).toFixed(6);
        const timestamp = new Date().toLocaleString();

        // Hide deposit modal and show payment details modal
        depositModal.style.display = 'none';
        paymentDetailsModal.style.display = 'block';

        // Display transaction details in payment details modal
        amountDisplay.textContent = `${amount.toFixed(2)} $`;
        document.getElementById('chargeDisplay').textContent = `${charge.toFixed(2)} $`;
        document.getElementById('payableDisplay').textContent = `${payable.toFixed(2)} $`;
        document.getElementById('conversionRateDisplay').textContent = `1 USD = ${conversionRate} BTC`;
        document.getElementById('btcEquivalentDisplay').textContent = `${btcEquivalent} BTC`;

        // Add transaction to history
        transactionHistory.push({
            date: timestamp,
            amount: amount.toFixed(2),
            charge: charge.toFixed(2),
            payable: payable.toFixed(2),
            btcEquivalent: btcEquivalent
        });

        // Update transaction history display in sidebar
        updateTransactionHistory();
    } else {
        alert("Please enter a valid amount between $10 and $1,000,000.");
        amountInput.focus();
    }
});

// Function to update the transaction history display
function updateTransactionHistory() {
    // Clear existing entries
    transactionHistoryList.innerHTML = '';

    // Loop through transaction history and create list items
    transactionHistory.forEach((transaction) => {
        const listItem = document.createElement('li');
        
        listItem.innerHTML = `
            <strong>Date:</strong> ${transaction.date} <br>
            <strong>Amount:</strong> ${transaction.amount} USD <br>
            <strong>BTC:</strong> ${transaction.btcEquivalent} BTC
        `;

        transactionHistoryList.appendChild(listItem);
    });
}

// Close Payment Details Modal
document.getElementById('closePaymentDetails').addEventListener('click', () => {
    paymentDetailsModal.style.display = 'none';
});

// Get the elements
const logoutIcon = document.getElementById('logout');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle dropdown menu visibility on click
logoutIcon.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Hide the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!logoutIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});


// Toggle Navbar for Small Screens
const navbarToggle = document.getElementById('navbarToggle');
const navbar = document.getElementById('navbar');

navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});



fetch('fetch_transactions.php') // Replace with the actual path to your PHP file
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch transactions');
        }
        return response.json();
    })
    .then(data => {
        const transactionList = document.getElementById('transactionList'); // Assume this is the container for transactions
        transactionList.innerHTML = ''; // Clear previous data

        data.forEach(transaction => {
            const status = transaction.status === 'Approved' ? 'Approved' : 'Pending';
            const transactionItem = document.createElement('li');
            transactionItem.textContent = `Transaction #${transaction.transaction_id}: $${transaction.amount} - ${status} on ${transaction.date}`;
            transactionList.appendChild(transactionItem);
        });
    })
    .catch(error => {
        console.error('Error fetching transactions:', error);
    });
