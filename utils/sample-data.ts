import { User } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User = { 
  id: 1,
  firstname: 'Fabian',
  lastname: 'Facinou',
  age: 21,
  school: 'EFREI',
  country: 'France',
  birthday: new Date('22-01-1999'),
  role: 'Front end developer at @Mhirba',
  technologies: ["React", "React Native", "NextJS", "TailwindCSS"]
}
