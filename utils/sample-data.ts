import { User } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: User = {
  firstname: "Fabian",
  lastname: "Facinou",
  age: 22,
  school: "EFREI",
  country: "France",
  birthday: new Date("22-01-1999"),
  role: "Full stack developer at @Mhirba",
  technologies: ["React", "React Native", "NextJS", "TailwindCSS", "PrismaDB"],
};
