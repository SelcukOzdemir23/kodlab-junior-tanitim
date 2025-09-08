export interface CurriculumWeek {
  week: number;
  title: string;
  topics: string[];
  project: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export interface StudentProject {
  id: number;
  title: string;
  student: string;
  age: number;
  description: string;
  githubUrl: string;
  image: string;
  technologies: string[];
}

export interface Testimonial {
  id: number;
  parentName: string;
  location: string;
  childName: string;
  childAge: number;
  rating: number;
  comment: string;
  course: string;
  avatar: string;
}

export interface Course {
  title: string;
  description: string;
  ageRange: string;
  duration: string;
  level: string;
  maxStudents: string;
  rating?: string;
  reviewCount?: string;
  features: string[];
  curriculum: CurriculumWeek[];
  achievements: Achievement[];
  studentProjects: StudentProject[];
  testimonials: Testimonial[];
}

export interface CourseData {
  [key: string]: Course;
} 