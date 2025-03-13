import { Link } from '@chakra-ui/react'

export type Company = 'BurganBank' | 'GarantiBBVA' | 'GlobalMaximum'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  BurganBank: {
    name: 'Burgan Bank',
    longName: 'Burgan Bank. Global Bank',
    subDetail: 'Kuwait Based. Global Bank',
    url: 'https://www2.deloitte.com/',
    position: 'AI Executive',
    duration: 'January 2025 - Present',
    logo: {
      light: '/worked_at_logos/burganbank/burgan-logo-b.png',
      dark: '/worked_at_logos/burganbank/burgan-logo-w.png',
    },
    roles: [
      <>
       Led the development and deployment of advanced AI solutions focused on LLM and chatbot projects, 
       while actively performing LLMOps tasks such as model optimization, monitoring, and deployment
       for scalability and seamless operations.
      </>,
      <>
        Implemented guard mechanisms and led feature development to enhance model reliability and system integrity, ensuring robust AI solutions at a{' '}
        <Link
          aria-label="Burgan Bank"
          href="https://www.burgan.com.tr/"
          target="_blank"
          rel="noreferrer"
        >
          Burgan Bank.
        </Link>
      </>,
      <>
        Bridged business and IT units by translating requirements into actionable tasks, 
        managing team performance, and aligning AI initiatives with organizational goals.

      </>,
    ],
  },
  GarantiBBVA: {
    name: 'Garanti BBVA',
    longName: 'Garanti BBVA',
    subDetail: 'Spain Based. Global Bank',
    url: 'https://www.garantibbva.com.tr/',
    position: 'Senior Data Scientist',
    duration: 'March 2022 - Jan 2025',
    logo: {
      light: '/worked_at_logos/Garantibbva/Garanti-bbva-b.png',
      dark: '/worked_at_logos/Garantibbva/Garanti-bbva-w.png',
    },
    roles: [
      <>
        Built ML pipelines and performed data manipulation using Python for advanced analytics and modeling tasks.
      </>,
      <>
        Developed NPS performance analysis using customer comments, implemented customer problem classification models, 
        and conducted social media analysis for competitive firms.
      </>,
      <>
        Designed DWH data modeling, created batch learning churn systems, 
        and built AI models to optimize commission/fee structures.
      </>,
      <>
        Delivered CRM analytics, including segmentation, cohort analysis, churn prediction, customer lifetime value forecasting,
        and investment prediction reports with actionable KPIs..
      </>,
      <>
        Created machine learning and AI models, including CNNs with hyperparameter tuning (Optuna, Grid Search), 
        and developed campaign classification models while preparing datasets using PL-SQL and T-SQL.
      </>,
    ],
  },
  GlobalMaximum: {
    name: 'GlobalMaximum',
    longName: 'GlobalMaximum',
    subDetail: 'formerly IVP Global Inc.',
    url: 'https://GlobalMaximum.com/',
    position: 'Junior Data Scientist',
    duration: 'Sep 2021 - Apr 2022',
    logo: {
      light: '/worked_at_logos/globalmaximum/GlobalMaximum-b.png',
      dark: '/worked_at_logos/globalmaximum/GlobalMaximum-w.png',
    },
    roles: [
      <>
        Developed a Twitter Raffle Campaign / Contest Bot called Camps with
        statistics similar to Facebook Ads.
      </>,
      <>
        In 2019 got promoted as Senior Software Engineer and worked with Cryto
        Exchange, Smart Contracts and other APIs using several techs such as
        NodeJS, .NET Core and React.
      </>,
      <>
        Create highly scalable Japanese e-commerce sites. Most notable clients
        were TV Tokyo, Layla EC using .NET.
      </>,
      <>
        Hired at 2016, Undergone Japanese language training first. Shortly
        after, worked with in-house .NET MVC Framework called ERS.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.BurganBank,
  Experiences.GarantiBBVA,
  Experiences.GlobalMaximum,
]
