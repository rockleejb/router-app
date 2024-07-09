export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export const products: Product[] = [
  {
    description:
      "A collection of components that compose declaratively with your app",
    name: "React Router",
    id: 1,
    price: 8,
  },
  {
    description: "A library that helps manage state through your app",
    name: "React Redux",
    id: 2,
    price: 12,
  },
  {
    description: "A library that helps you implement robust forms",
    name: "React Hook Form",
    id: 3,
    price: 9,
  },
  {
    description: "A library that helps you interact with a REST API",
    name: "React Apollo",
    id: 4,
    price: 10,
  },
  {
    description: "A library that provides utility CSS classes",
    name: "Tailwind CSS",
    id: 5,
    price: 7,
  },
];
