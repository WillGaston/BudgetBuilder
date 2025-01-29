export async function createTransaction(product: string, company: string, category: string, date: string, amount: string, type: string) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  
  try {
    const response = await fetch(`${backendUrl}/v1/transaction/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product: product, company: company, category: category, date: date, amount: amount, type: type }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response}`);
    }

    const data = await response.json();
    fetchTransactionData();
    console.log('Transaction Created:', data);
    return data;
  } catch (error) {
    console.error('Failed to create transaction:', error);
  }
}

async function getData() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  
  try {
    const response = await fetch(`${backendUrl}/v1/transaction/retrieve`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response}`);
    }

    const data = await response.json();;
    return data;
  } catch (error) {
    console.error('Failed to create transaction:', error);
  }
}

let data = [];

export async function fetchTransactionData() {
  data = await getData();
}

fetchTransactionData();

export { data };