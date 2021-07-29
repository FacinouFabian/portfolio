// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  firstname: string;
  lastname: string;
  age: number;
  school: string;
  country: string;
  birthday: Date;
  role: string;
  technologies: string[];
};
