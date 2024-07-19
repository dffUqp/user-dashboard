import { User } from 'shared/models';

const createUserData = (
  name: string,
  budget: number,
  score: number,
  posts: number,
  income: number,
): User => {
  return { name, budget, posts, score, income };
};

export { createUserData };
