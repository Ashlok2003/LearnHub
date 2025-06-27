import { z } from 'zod';

export const courseLevel = [
  'Beginner',
  'Intermediate',
  'Advanced',
] as const;

export const courseStatus = [
  'Draft',
  'Published',
  'Archived',
] as const;

export const courseCategories = [
  'Web Development',
  'Android Development',
  'iOS Development',
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Blockchain',
  'Cloud Computing',
  'Cybersecurity',
  'Game Development',
  'Graphic Design',
  'Human-Computer Interaction',
  'Information Systems',
  'Information Technology',
  'Internet of Things',
  'IT Project Management',
  'Mobile App Development',
  'Network Security',
  'Quality Assurance',
  'Software Architecture',
  'Software Engineering',
  'Software Testing',
  'User Experience (UX)',
  'User Interface (UI)',
  'Virtual Reality',
  'Web Design',
  'Other',
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(100, { message: 'Title must not exceed 100 characters' }),

  description: z.string().min(10, {
    message: 'Description must be at least 10 characters long',
  }),

  fileKey: z.string().min(1, { message: 'A file must be uploaded' }),

  price: z.coerce
    .number()
    .min(1, { message: 'Price must be at least $1' }),

  duration: z.coerce
    .number()
    .min(1, { message: 'Duration must be at least 1 hour' })
    .max(500, { message: 'Duration must not exceed 500 hours' }),

  level: z.enum(courseLevel, {
    errorMap: () => ({
      message: 'Please select a valid course level',
    }),
  }),

  category: z.enum(courseCategories, {
    message: 'Category is required',
  }),

  smallDescription: z
    .string()
    .min(3, {
      message: 'Small description must be at least 3 characters',
    })
    .max(200, {
      message: 'Small description must not exceed 200 characters',
    }),

  slug: z
    .string()
    .min(3, { message: 'Slug must be at least 3 characters long' }),

  status: z.enum(courseStatus, {
    errorMap: () => ({ message: 'Please select a valid status' }),
  }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
