import { CourseData, Course } from '@/types/course';
import { scratchIleBaslangic } from './scratch-ile-baslangic';
import { pythonIleKodlama } from './python-ile-kodlama';
import { pythonBasic } from './python-basic';
import { pythonPro } from './python-pro';
import { webGelistirme } from './web-gelistirme';
import { tinkercad } from './tinkercad';
import { kodu } from './kodu';
import { gimp } from './gimp';
import { dijitalTasarimGiris } from './dijital-tasarim-giris';
import { dijitalTasarimPro } from './dijital-tasarim-pro';

export const courses: CourseData = {
  'scratch-ile-baslangic': scratchIleBaslangic,
  'python-ile-kodlama': pythonIleKodlama,
  'python-basic': pythonBasic,
  'python-pro': pythonPro,
  'web-gelistirme': webGelistirme,
  'tinkercad': tinkercad,
  'kodu': kodu,
  'gimp': gimp,
  'dijital-tasarim-giris': dijitalTasarimGiris,
  'dijital-tasarim-pro': dijitalTasarimPro,
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
    'python-basic',
    'python-pro',
    'tinkercad',
    'kodu',
    'gimp',
    'web-gelistirme',
    'dijital-tasarim-giris',
    'dijital-tasarim-pro'
  ];
};

// Export individual courses for easy access
export { 
  scratchIleBaslangic, 
  pythonIleKodlama, 
  pythonBasic, 
  pythonPro, 
  webGelistirme, 
  tinkercad, 
  kodu, 
  gimp, 
  dijitalTasarimGiris, 
  dijitalTasarimPro 
}; 