import { createUserData } from 'shared/lib';
import { User } from 'shared/models';

const userRows = [
  createUserData('Alice', 5000, 1500, 34, 2000),
  createUserData('Bob', 7000, 2000, 67, 1300),
  createUserData('Charlie', 3000, 1200, 15, 1400),
  createUserData('David', 6500, 1800, 43, 5500),
  createUserData('Eve', 8000, 2200, 89, 3500),
  createUserData('Frank', 5500, 1750, 56, 500),
  createUserData('Grace', 4000, 1600, 45, 3000),
  createUserData('Hank', 7500, 2100, 72, 1200),
  createUserData('Ivy', 6000, 1900, 60, 1005),
  createUserData('Jack', 3500, 1400, 30, 2205),
  createUserData('Karen', 4500, 1650, 40, 2220),
  createUserData('Leo', 5200, 1820, 53, 1030),
  createUserData('Mona', 4800, 1750, 48, 3000),
  createUserData('Nina', 7300, 2100, 70, 3100),
  createUserData('Oscar', 6200, 2000, 65, 2050),
  createUserData('Paul', 5700, 1900, 55, 2700),
];

type CardInformationItem = {
  key: keyof User;
  title: string;
  dollarSign?: boolean;
  isPercent?: boolean;
};

const cardInformation: CardInformationItem[] = [
  { key: 'budget', title: 'Total budget', dollarSign: true },
  { key: 'score', title: 'Total score' },
  { key: 'posts', title: 'Total post' },
  { key: 'income', title: 'Total income' },
];

const yAxisData = {
  budget: {
    label: 'Budget',
    data: [5000, 7000, 3000, 6500, 8000, 5500],
  },
  score: {
    label: 'Score',
    data: [1500, 2000, 1200, 1800, 2200, 1750],
  },
  posts: {
    label: 'Posts',
    data: [34, 67, 15, 43, 89, 56],
  },
  income: {
    label: 'Income',
    data: [2000, 1300, 1400, 5500, 3500, 500],
  },
};

export { yAxisData, cardInformation, userRows };
