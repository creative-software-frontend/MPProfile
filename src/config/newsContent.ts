import { siteConfig } from './siteConfig'

export interface NewsItem {
    id?: number
    slug?: string
    title?: {
        en: string
        bn: string
    }
    excerpt?: {
        en: string
        bn: string
    }
    content?: {
        en: string
        bn: string
    }
    image?: string
    category: {
        en: string
        bn: string
    }
    date?: string
    author?: {
        en: string
        bn: string
    }
    views?: number
    featured?: boolean
}

export const newsContent: NewsItem[] = [
    {
        id: 1,
        slug: 'community-health-camp-2024',
        title: {
            en: 'Free Health Camp Benefits Over 500 People in Ward 3',
            bn: 'ওয়ার্ড ৩ এ বিনামূল্যে স্বাস্থ্য ক্যাম্পে ৫০০ এর বেশি মানুষ উপকৃত'
        },
        excerpt: {
            en: 'A free health camp organized by Nazrul Islam Azad provided medical services to over 500 residents, including free medicines and consultations.',
            bn: 'নজরুল ইসলাম আজাদের আয়োজনে বিনামূল্যে স্বাস্থ্য ক্যাম্পে ৫০০ এর বেশি বাসিন্দা চিকিৎসা সেবা পেয়েছেন, সাথে বিনামূল্যে ওষুধ ও পরামর্শ।'
        },
        content: {
            en: 'A comprehensive free health camp was organized in Ward 3 under the initiative of Nazrul Islam Azad. The camp featured specialist doctors from various fields including medicine, pediatrics, gynecology, and cardiology. Over 500 patients received free consultations and medicines. Free diagnostic tests including blood sugar, blood pressure, and ECG were also provided. The camp was particularly beneficial for elderly patients who have difficulty traveling to city hospitals. Local residents expressed their gratitude for this initiative, highlighting the importance of accessible healthcare services in rural areas. The event was supported by local volunteers and medical professionals who dedicated their time for this noble cause. Free medicines worth approximately 2 lakh taka were distributed among the patients. Follow-up camps are being planned in other wards based on the success of this event.',
            bn: 'নজরুল ইসলাম আজাদের উদ্যোগে ওয়ার্ড ৩ এ একটি ব্যাপক বিনামূল্যে স্বাস্থ্য ক্যাম্প অনুষ্ঠিত হয়েছে। মেডিসিন, শিশু, গাইনোকোলজি ও কার্ডিওলজি সহ বিভিন্ন বিভাগের বিশেষজ্ঞ ডাক্তাররা এই ক্যাম্পে অংশগ্রহণ করেন। ৫০০ এর বেশি রোগী বিনামূল্যে পরামর্শ ও ওষুধ পেয়েছেন। বিনামূল্যে ব্লাড সুগার, ব্লাড প্রেসার ও ইসিজি পরীক্ষাও করা হয়েছে। এই ক্যাম্পটি বিশেষ করে বয়স্ক রোগীদের জন্য উপকারী ছিল যাদের শহরের হাসপাতালে যেতে সমস্যা হয়। স্থানীয় বাসিন্দারা এই উদ্যোগের জন্য কৃতজ্ঞতা প্রকাশ করেছেন এবং গ্রামীণ এলাকায় সহজলভ্য স্বাস্থ্যসেবার গুরুত্ব তুলে ধরেছেন। স্থানীয় স্বেচ্ছাসেবক ও চিকিৎসকরা এই মহৎ কাজে তাদের সময় দিয়ে সহযোগিতা করেছেন। প্রায় ২ লক্ষ টাকার বিনামূল্যে ওষুধ রোগীদের মধ্যে বিতরণ করা হয়েছে। এই ইভেন্টের সাফল্যের ভিত্তিতে অন্যান্য ওয়ার্ডেও ক্যাম্পের পরিকল্পনা করা হচ্ছে।'
        },
        image: '/images/news/health-camp.jpg',
        category: {
            en: 'Healthcare',
            bn: 'স্বাস্থ্যসেবা'
        },
        date: '2024-02-28',
        author: {
            en: 'News Desk',
            bn: 'নিউজ ডেস্ক'
        },
        views: 1250,
        featured: true
    },
    {
        id: 2,
        slug: 'new-school-inauguration',
        title: {
            en: 'New School Building Inaugurated in Ward 5',
            bn: 'ওয়ার্ড ৫ এ নতুন স্কুল ভবন উদ্বোধন'
        },
        excerpt: {
            en: 'A modern 10-room school building was inaugurated to provide better education facilities for 500+ students.',
            bn: '৫০০+ শিক্ষার্থীর জন্য উন্নত শিক্ষা সুবিধা নিশ্চিত করতে ১০ কক্ষ বিশিষ্ট আধুনিক স্কুল ভবন উদ্বোধন করা হয়েছে।'
        },
        content: {
            en: 'A new school building with 10 modern classrooms, a library, and a science lab was inaugurated in Ward 5. The facility will accommodate over 500 students from primary to secondary level. The building includes separate common rooms for boys and girls, a playground, and a canteen. Local residents and students celebrated the inauguration with a cultural program. The new facility aims to reduce the student-teacher ratio and provide better learning environment. Smart boards and modern teaching aids have been installed in each classroom. The project was completed within 8 months at a cost of 2 crore taka. Education experts believe this will significantly improve the quality of education in the area. Evening adult education classes are also being planned to promote lifelong learning.',
            bn: 'ওয়ার্ড ৫ এ ১০টি আধুনিক শ্রেণীকক্ষ, একটি লাইব্রেরি ও একটি বিজ্ঞান ল্যাব সম্বলিত নতুন স্কুল ভবন উদ্বোধন করা হয়েছে। এই সুবিধাটি প্রাথমিক থেকে মাধ্যমিক স্তরের ৫০০ এর বেশি শিক্ষার্থীকে স্থান দেবে। ভবনটিতে ছেলে ও মেয়েদের জন্য আলাদা কমন রুম, একটি খেলার মাঠ ও একটি ক্যান্টিন রয়েছে। স্থানীয় বাসিন্দা ও শিক্ষার্থীরা সাংস্কৃতিক অনুষ্ঠানের মাধ্যমে উদ্বোধন উদযাপন করে। নতুন সুবিধাটি শিক্ষক-শিক্ষার্থী অনুপাত কমানো এবং উন্নত শিক্ষার পরিবেশ প্রদানের লক্ষ্য নিয়েছে। প্রতিটি শ্রেণীকক্ষে স্মার্ট বোর্ড ও আধুনিক শিক্ষা উপকরণ স্থাপন করা হয়েছে। প্রকল্পটি ৮ মাসের মধ্যে ২ কোটি টাকা ব্যয়ে সম্পন্ন হয়েছে। শিক্ষাবিদরা বিশ্বাস করেন এটি এলাকার শিক্ষার মান উল্লেখযোগ্যভাবে উন্নত করবে। সন্ধ্যায় প্রাপ্তবয়স্ক শিক্ষা ক্লাসেরও পরিকল্পনা করা হচ্ছে।'
        },
        image: '/images/news/school-inauguration.jpg',
        category: {
            en: 'Education',
            bn: 'শিক্ষা'
        },
        date: '2024-02-25',
        author: {
            en: 'Education Desk',
            bn: 'শিক্ষা ডেস্ক'
        },
        views: 890
    },
    {
        id: 3,
        slug: 'road-development-project',
        title: {
            en: '5km Road Development Project Launched',
            bn: '৫ কিমি সড়ক উন্নয়ন প্রকল্প চালু'
        },
        excerpt: {
            en: 'A major road development project covering 5 kilometers of rural roads has been launched to improve connectivity.',
            bn: 'সংযোগ উন্নত করতে ৫ কিলোমিটার গ্রামীণ সড়ক covering একটি বড় সড়ক উন্নয়ন প্রকল্প চালু করা হয়েছে।'
        },
        content: {
            en: 'A comprehensive road development project covering 5 kilometers of rural roads has been launched in the constituency. The project includes widening of roads, drainage system installation, and street lighting. Three major villages will be connected through this project, benefiting over 10,000 residents. Local farmers will particularly benefit from improved access to markets. The project is expected to be completed within 6 months at a cost of 3.5 crore taka. Modern engineering techniques are being employed to ensure durability. The roads will be built with concrete to withstand heavy vehicle movement. Local contractors have been engaged to create employment opportunities. Regular monitoring meetings are being held to ensure quality and timely completion.',
            bn: 'নির্বাচনী এলাকায় ৫ কিলোমিটার গ্রামীণ সড়ক covering একটি ব্যাপক সড়ক উন্নয়ন প্রকল্প চালু করা হয়েছে। প্রকল্পটিতে রাস্তা প্রশস্তকরণ, নিষ্কাশন ব্যবস্থা স্থাপন ও স্ট্রিট লাইটিং অন্তর্ভুক্ত রয়েছে। তিনটি বড় গ্রাম এই প্রকল্পের মাধ্যমে সংযুক্ত হবে, যা ১০,০০০ এর বেশি বাসিন্দা উপকৃত হবে। স্থানীয় কৃষকরা বাজারে সহজ প্রবেশের মাধ্যমে বিশেষভাবে উপকৃত হবেন। প্রকল্পটি ৬ মাসের মধ্যে ৩.৫ কোটি টাকা ব্যয়ে সম্পন্ন হবে বলে আশা করা হচ্ছে। স্থায়িত্ব নিশ্চিত করতে আধুনিক প্রকৌশল কৌশল ব্যবহার করা হচ্ছে। রাস্তাগুলো কংক্রিট দিয়ে তৈরি করা হবে যাতে ভারী যান চলাচল সহ্য করতে পারে। কর্মসংস্থানের সুযোগ তৈরি করতে স্থানীয় ঠিকাদারদের নিযুক্ত করা হয়েছে। গুণমান ও সময়মত সম্পন্ন নিশ্চিত করতে নিয়মিত পর্যবেক্ষণ সভা অনুষ্ঠিত হচ্ছে।'
        },
        image: '/images/news/road-project.jpg',
        category: {
            en: 'Infrastructure',
            bn: 'অবকাঠামো'
        },
        date: '2024-02-20',
        author: {
            en: 'Infrastructure Desk',
            bn: 'অবকাঠামো ডেস্ক'
        },
        views: 675
    },
    {
        id: 4,
        slug: 'youth-employment-fair',
        title: {
            en: 'Job Fair Creates 200+ Employment Opportunities',
            bn: 'চাকরি মেলায় ২০০+ কর্মসংস্থানের সুযোগ সৃষ্টি'
        },
        excerpt: {
            en: 'A job fair organized for local youth resulted in over 200 job offers from various companies.',
            bn: 'স্থানীয় যুবকদের জন্য আয়োজিত চাকরি মেলায় বিভিন্ন কোম্পানি থেকে ২০০ এর বেশি চাকরির প্রস্তাব এসেছে।'
        },
        content: {
            en: 'A massive job fair was organized for unemployed youth of the constituency. Over 30 companies from different sectors participated in the fair. More than 200 candidates received job offers on the spot. Skill development workshops were also conducted during the fair. The event was part of a larger initiative to reduce unemployment in the area. IT companies, manufacturing firms, and service sectors participated. Special arrangements were made for female candidates. Follow-up interviews are scheduled for next week. This initiative has brought hope to many young job seekers in the area.',
            bn: 'নির্বাচনী এলাকার বেকার যুবকদের জন্য একটি বিশাল চাকরি মেলার আয়োজন করা হয়েছিল। বিভিন্ন খাতের ৩০ টিরও বেশি কোম্পানি মেলায় অংশগ্রহণ করে। ২০০ এর বেশি প্রার্থী স্পটে চাকরির প্রস্তাব পেয়েছেন। মেলার সময় দক্ষতা উন্নয়ন কর্মশালাও পরিচালিত হয়েছিল। এলাকায় বেকারত্ব কমাতে এটি একটি বৃহত্তর উদ্যোগের অংশ ছিল। আইটি কোম্পানি, উত্পাদন প্রতিষ্ঠান ও সেবা খাত অংশগ্রহণ করে। মহিলা প্রার্থীদের জন্য বিশেষ ব্যবস্থা করা হয়েছিল। পরবর্তী সপ্তাহে ফলো-আপ ইন্টারভিউ নির্ধারিত হয়েছে। এই উদ্যোগ এলাকার অনেক তরুণ চাকরি প্রার্থীর জন্য আশা নিয়ে এসেছে।'
        },
        image: '/images/news/job-fair.jpg',
        category: {
            en: 'Employment',
            bn: 'কর্মসংস্থান'
        },
        date: '2024-02-18',
        author: {
            en: 'Employment Desk',
            bn: 'কর্মসংস্থান ডেস্ক'
        },
        views: 1100,
        featured: true
    },
    {
        id: 5,
        slug: 'anti-drug-rally',
        title: {
            en: 'Anti-Drug Rally Draws Thousands of Participants',
            bn: 'মাদকবিরোধী র্যালিতে হাজারো অংশগ্রহণকারী'
        },
        excerpt: {
            en: 'A massive anti-drug rally organized by local youth groups saw participation from thousands of residents.',
            bn: 'স্থানীয় যুব গোষ্ঠী আয়োজিত বিশাল মাদকবিরোধী র্যালিতে হাজারো বাসিন্দা অংশগ্রহণ করে।'
        },
        content: {
            en: 'A large-scale anti-drug rally was organized with support from local administration. Thousands of residents, including students, teachers, and social workers, participated in the rally. The rally started from the local school ground and concluded at the central Shaheed Minar. Participants carried banners and placards with anti-drug messages. Several cultural programs were organized to spread awareness about the dangers of drug abuse. Local celebrities and community leaders addressed the gathering. The event received extensive media coverage and has sparked a conversation about drug prevention in the community. Follow-up awareness programs are being planned in schools and colleges.',
            bn: 'স্থানীয় প্রশাসনের সহায়তায় একটি বড় আকারের মাদকবিরোধী র্যালি অনুষ্ঠিত হয়েছিল। শিক্ষার্থী, শিক্ষক ও সমাজকর্মী সহ হাজারো বাসিন্দা র্যালিতে অংশগ্রহণ করেন। র্যালিটি স্থানীয় স্কুল মাঠ থেকে শুরু হয়ে কেন্দ্রীয় শহীদ মিনারে গিয়ে শেষ হয়। অংশগ্রহণকারীরা মাদকবিরোধী বার্তা সম্বলিত ব্যানার ও প্ল্যাকার্ড বহন করে। মাদকাসক্তির বিপদ সম্পর্কে সচেতনতা ছড়াতে বেশ কয়েকটি সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়। স্থানীয় সেলিব্রিটি ও কমিউনিটি নেতারা সমাবেশে বক্তব্য রাখেন। ইভেন্টটি ব্যাপক গণমাধ্যম কভারেজ পেয়েছে এবং সম্প্রদায়ে মাদক প্রতিরোধ সম্পর্কে একটি আলোচনা শুরু করেছে। স্কুল ও কলেজে ফলো-আপ সচেতনতা কর্মসূচির পরিকল্পনা করা হচ্ছে।'
        },
        image: '/images/news/anti-drug.jpg',
        category: {
            en: 'Social',
            bn: 'সামাজিক'
        },
        date: '2024-02-15',
        author: {
            en: 'Social Desk',
            bn: 'সামাজিক ডেস্ক'
        },
        views: 2450,
        featured: true
    },
    {
        id: 6,
        slug: 'womens-empowerment-workshop',
        title: {
            en: 'Women Empowerment Workshop Empowers 300 Women',
            bn: 'নারী ক্ষমতায়ন কর্মশালায় ৩০০ নারী প্রশিক্ষিত'
        },
        excerpt: {
            en: 'A three-day workshop on women empowerment and skill development benefited 300 women from rural areas.',
            bn: 'নারী ক্ষমতায়ন ও দক্ষতা উন্নয়নের তিন দিনের কর্মশালায় গ্রামীণ এলাকার ৩০০ নারী উপকৃত হয়েছেন।'
        },
        content: {
            en: 'A three-day women empowerment workshop focusing on skills, leadership, and entrepreneurship...',
            bn: 'নারী ক্ষমতায়ন ও দক্ষতা উন্নয়ন বিষয়ক তিন দিনের কর্মশালায় নেতৃত্ব ও উদ্যোক্তা দক্ষতা নিয়ে আলোচনা করা হয়...'
        },
        image: '/images/news/women-workshop.jpg',
        category: {
            en: 'Women Development',
            bn: 'নারী উন্নয়ন'
        },
        date: '2024-02-10',
        author: {
            en: 'Women Desk',
            bn: 'নারী ডেস্ক'
        },
        views: 780
    }
]