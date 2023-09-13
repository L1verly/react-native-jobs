import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();

  const data = [
    {
      employer_name: "SysMind",
      employer_logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/91983ed64e759f77cdbf",
      employer_website: "http://www.sysmind.com",
      employer_company_type: "Computer Services",
      job_publisher: "LinkedIn",
      job_id: "WFzzxW9onzkAAAAAAAAAAA==",
      job_employment_type: "FULLTIME",
      job_title: "React Developer",
      job_apply_link: "https://www.linkedin.com/jobs/view/react-developer-at-sysmind-3668353922",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.5902,
      job_description: "Job Description • Tech Skills - ReactJS, React Hooks, JavaScript, ES6, Typescript, HTML and CSS.Kubernetes & Docker, • Significant experience working with React web and mobile along with tools like Flux, Flow, Redux, etc. • Strong knowledge of React fundamentals such as Virtual DOM, component lifecycle, and component state • Have experience with Azure Cloud Stack, GCP or other cloud stacks. • Create front-end modules Experience building a responsive, cross-browser compatible and high-performance web application with maximum code reusability and efficiency. • Ability to develop functional, technical and user interface designs for an application that meets the defined requirements",
      job_is_remote: false,
      job_posted_at_timestamp: 1689831253,
      job_posted_at_datetime_utc: "2023-07-20T05:34:13.000Z",
      job_city: "Bentonville",
      job_state: "AR",
      job_country: "US",
      job_latitude: 36.372356,
      job_longitude: -94.21021,
      job_benefits: null,
      job_google_link: "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=WFzzxW9onzkAAAAAAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-08-19T05:38:39.000Z",
      job_offer_expiration_timestamp: 1692423519,
    },
    {
      employer_name: "Thoughtwave Software and Solutions",
      employer_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGizEdHRKWEkwyIG84qaLWbEpzLcQV49jj28Po&s=0",
      employer_website: null,
      employer_company_type: null,
      job_publisher: "LinkedIn",
      job_id: "3PWDM9Opq1cAAAAAAAAAAA==",
      job_employment_type: "FULLTIME",
      job_title: "REACT DEVELOPER",
      job_apply_link: "https://www.linkedin.com/jobs/view/react-developer-at-thoughtwave-software-and-solutions-3666491795",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.5829,
      job_description: "Role: React Developer Location: Charlotte, NC (onsite three days a week) Contract: 6-24 months to perm Must have: just 5 years’ experience and react.js experience, JavaScript, and html/css, that’s it! Client Job Description: • 5 years hands on experience (Analysis, design, development, testing and delivery of application software) for web applications with React Js expertise. • Strong knowledge on Reactjs, CSS and other UI tech stack like micro front end, cloud etc • Strong JavaScript proficiency • CSS, HTML, JavaScript expertise • Responsive design knowledge • UI/UX experience • Experience integrating front-end with back-end services • Build new, reusable React.js components and front-end libraries and optimize them for maximum performance • Customize and fix defects with existing React.js components • Translate mockups and wireframes into new user-facing features using React.js • Perform unit testing • Enhance the application’s front-end framework • Provide front end development and React.js subject matter expertise • Experience developing RESTful API services in an enterprise environment using .NET Core 6 / Java. • Experience with Scrum/Agile • Experience developing applications in a CI/CD pipeline using tools like Jenkins, GitHub Actions, or Gitlab. • Strong expertise in working with Node, WebPack and other tools related to React Front End Development _ _ _ Thanks & Regards, Suganya S / US IT RECRUITER Thought wave Software and Solutions 314 N. Lake St, Suite 6, Aurora IL 60506 Desk: 6303134033 Email:suganya@thoughtwavesoft.com LinkedIn: https://www.linkedin.com/in/suganya-s-873a8915a/",
      job_is_remote: false,
      job_posted_at_timestamp: 1689789507,
      job_posted_at_datetime_utc: "2023-07-19T17:58:27.000Z",
      job_city: null,
      job_state: null,
      job_country: "US",
      job_latitude: 37.09024,
      job_longitude: -95.71289,
      job_benefits: null,
      job_google_link: "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=3PWDM9Opq1cAAAAAAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-08-18T17:58:27.000Z",
      job_offer_expiration_timestamp: 1692381507,
    }
  ]
  const isLoading = false;
  const error = false
  // const { data, isLoading, error } = useFetch
  // ('search', {
  //     query: 'React developer',
  //     num_pages: 1
  // })

  // console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handelNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs