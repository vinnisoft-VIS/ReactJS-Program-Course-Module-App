import OutLine from 'presentation/OutLine/OutLine'
import Program from './presentation/Programs/Programs'
import Courses from './presentation/Courses/Courses'
import CourseInformation from './presentation/CourseInformation/CourseInformation'
import ResourceManager from './presentation/Resources/ResourceManager'
import CoursePlanner from './presentation/CoursePlanner/CoursePlanner'
import { ReactComponent as myCourseIcon } from './assets/img/brand/mycourse.svg'
import { ReactComponent as resourceManagerIcon } from './assets/img/brand/resource.svg'
import { ReactComponent as outlineIcon } from './assets/img/brand/outline.svg'
import { ReactComponent as contentContentIcon } from './assets/img/brand/content.svg'
import { ReactComponent as syllabusIcon } from './assets/img/brand/syllabus.svg'
import { ReactComponent as courseInformationIcon } from './assets/img/brand/bookinformation.svg'
import { ReactComponent as coursePlannerIcon } from './assets/img/brand/coursePlanner.svg'
import { ReactComponent as courseScriptIcon } from './assets/img/brand/course-script.svg'

const routes = [
  {
    path: '/programs',
    name: 'Program',
    component: Program,
    layout: '/user',
    show: false,
  },
  {
    path: '/courses',
    name: 'My Courses',
    icon: myCourseIcon,
    component: Courses,
    layout: '/user',
    show: true,
    title: true,
  },
  {
    path: '/course-information',
    name: 'Course Information',
    icon: courseInformationIcon,
    component: CourseInformation,
    layout: '/user',
    show: true,
  },
  {
    path: '/resource-manager',
    name: 'Resource Manager',
    icon: resourceManagerIcon,
    component: ResourceManager,
    layout: '/user',
    show: true,
  },
  {
    path: '/course-planner',
    name: 'Course Planner',
    icon: coursePlannerIcon,
    component: CoursePlanner,
    layout: '/user',
    show: true,
  },
  {
    path: '/reports',
    name: 'Reports',
    icon: outlineIcon,
    component: OutLine,
    layout: '/user',
    submenu: [
      {
        path: '/reports/outline',
        name: 'Course Outline',
        icon: coursePlannerIcon,
        component: CoursePlanner,
        layout: '/user',
        show: true,
      },
      {
        path: '/',
        name: 'Resource Report',
        icon: coursePlannerIcon,
        component: CoursePlanner,
        layout: '/user',
        disabled: true,
        show: true,
      },
    ],
    show: true,
    disabled: false,
  },
  {
    path: '',
    name: 'Course Content',
    icon: contentContentIcon,
    layout: '',
    show: true,
    disabled: true,
  },
  {
    path: '',
    name: 'Course Script',
    icon: courseScriptIcon,
    layout: '',
    show: true,
    disabled: true,
  },
  {
    path: '',
    name: 'Syllabus Master',
    icon: syllabusIcon,
    layout: '',
    show: true,
    disabled: true,
  },
  {
    path: '',
    name: 'Rubric Master',
    icon: syllabusIcon,
    layout: '',
    show: true,
    disabled: true,
  },
]
export default routes
