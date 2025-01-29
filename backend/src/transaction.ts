import fs from 'fs';
import path from 'path';

const saveDir = "save";
const saveFile = 'data.json';

export interface TransactionData {
  company: string,
  product: string,
  date: string,
  amount: string,
  category: string,
  type: string,
}

export interface TransactionAbstract {
  transactions: TransactionData[],
  transactionTotal: number,
}

let data: TransactionAbstract = {
  transactions: [],
  transactionTotal: 0,
}

export interface ErrorObject {
  error: string,
}

export interface EmptyObject {
}

export const transactionRetrieval = (): TransactionData[] => {
  load();
  return data.transactions;
};

export const transactionCreate = (transaction: TransactionData): void => {
  try {
    load();
    data.transactions.push(transaction);
    data.transactionTotal++;
    console.log(data);
    save();
  } catch (error) {
    console.error('Failed to create transaction:', error);
  }
};


const validateTransaction = (transaction: TransactionData): ErrorObject | EmptyObject => {
  const category: string = transaction.category;
  if (category !== "Food/Beverage" ||
      category !== "Travel" ||
      category !== "Entertainment" ||
      category !== "Lifestyle" ||
      category !== "Household" ||
      category !== "Education" ||
      category !== "Misc."
  ) {
    return { error: "Incorrect Category Given" };
  }
  return {};
}

export const load = (): void => {
  try {
    console.log((path.join(saveDir, saveFile)).toString());
    data = JSON.parse(fs.readFileSync(path.join(saveDir, saveFile)).toString());
    console.log('loaded');
  } catch {
    console.log('failed read');
  }
};

export const save = (): void => {
  try {
    fs.writeFileSync(path.join(saveDir, saveFile), JSON.stringify(data, null, 2));
  } catch {
    fs.mkdirSync(saveDir);
    fs.writeFileSync(path.join(saveDir, saveFile), JSON.stringify(data, null, 2));
  }
  console.log('saved');
};