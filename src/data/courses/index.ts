import { CourseData, Course } from '@/types/course';
import { scratchIleBaslangic } from './scratch-ile-baslangic';
import { pythonIleKodlama } from './python-ile-kodlama';
import { webGelistirme } from './web-gelistirme';
import { tinkercad } from './tinkercad';
import { kodu } from './kodu';
import { gimp } from './gimp';

export const courses: CourseData = {
  'scratch-ile-baslangic': scratchIleBaslangic,
  'python-ile-kodlama': pythonIleKodlama,
  'web-gelistirme': webGelistirme,
  'tinkercad': tinkercad,
  'kodu': kodu,
  'gimp': gimp,
};

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses[slug];
};

export const getAllCourses = (): Course[] => {
  return Object.values(courses);
};

export const getCourseNames = (): string[] => {
  return Object.keys(courses);
};

// İleride eklenecek kurslar için placeholder'lar
export const getCourseSlugs = () => {
  return [
    'scratch-ile-baslangic',
    'python-ile-kodlama',
    'tinkercad',
    'kodu',
    'gimp',
    'web-gelistirme'
  ];
};

// Export individual courses for easy access
export { scratchIleBaslangic, pythonIleKodlama, webGelistirme, tinkercad, kodu, gimp }; 