export const getJourneyContent = (language: 'en' | 'bn') => {
  const content = {
    en: {
      title: "Long Journey with the People of Narayanganj-2",
      subtitle: "Milestones & Achievements",
      
      timeline: [
        {
          year: "2014",
          points: [
            "Elected as Member of Parliament",
            "Development of rural infrastructure",
            "Education sector reform initiatives",
            "Healthcare expansion programs",
            "Community development projects"
          ]
        },
        {
          year: "2018",
          points: [
            "Re-elected with historic mandate",
            "Bridge construction projects",
            "New educational institutions established",
            "Health camp initiatives",
            "Women empowerment programs"
          ]
        },
        {
          year: "2026",
          points: [
            "Third consecutive term",
            "Digital transformation projects",
            "Modern healthcare facilities",
            "Youth skill development",
            "Sustainable development goals"
          ]
        }
      ]
    },
    bn: {
      title: "নারায়ণগঞ্জ-৩ এর মানুষের সাথে দীর্ঘ পথচলা",
      subtitle: "মাইলফলক ও অর্জন",
      
      timeline: [
        {
          year: "২০১৪",
          points: [
            "সংসদ সদস্য হিসেবে নির্বাচিত",
            "গ্রামীণ অবকাঠামো উন্নয়ন",
            "শিক্ষা খাতে সংস্কার উদ্যোগ",
            "স্বাস্থ্যসেবা সম্প্রসারণ কর্মসূচি",
            "কমিউনিটি উন্নয়ন প্রকল্প"
          ]
        },
        {
          year: "২০১৮",
          points: [
            "ঐতিহাসিক ম্যান্ডেটে পুনঃনির্বাচিত",
            "সেতু নির্মাণ প্রকল্প", 
            "নতুন শিক্ষা প্রতিষ্ঠান স্থাপন",
            "স্বাস্থ্য ক্যাম্পের উদ্যোগ",
            "নারী ক্ষমতায়ন কর্মসূচি"
          ]
        },
        {
          year: "২০২৬",
          points: [
            "প্রথমবার মেয়াদ",
            "ডিজিটাল রূপান্তর প্রকল্প",
            "আধুনিক স্বাস্থ্যসেবা সুবিধা",
            "যুব দক্ষতা উন্নয়ন",
            "টেকসই উন্নয়ন লক্ষ্যমাত্রা"
          ]
        }
      ]
    }
  }

  return content[language]
}