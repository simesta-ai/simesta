import { images, COLORS } from "../constants"

const themeColors = [ COLORS.progress, COLORS.warm, COLORS.primary, COLORS.darkPrimary]

export const courseDetails = {
    id: 1,
    title: "Data Analytics",
    description: `Unleash the power of data! This course equips you with data wrangling, analysis, and visualization skills. Learn to gather, clean, and interpret information to uncover hidden trends and make data-driven decisions. Explore tools like Excel and SQL to transform raw data into insights for marketing, finance, and more.`,
    category: "Mathematics",
    completed: 70,
    topics: [
      {
        id: 1,
        name: "Data analytics with Python",
        lectures: [
          {
            id: 1,
            name: "Introduction to Data Analysis",
            videos: ["https://youtube.com"],
            lectureText: "You are now learning intro to data analytics",
          },
          {
            id: 2,
            name: "Tools for Data Analysis",
            videos: ["https://youtube.com"],
            lectureText: "You are now learning tools for data analytics",
          },
        ],
      },
      {
        id: 2,
        name: "Data analytics with R",
        lectures: [
          {
            id: 1,
            name: "Introduction to Data Analysis",
            videos: ["https://youtube.com"],
            lectureText: "You are now learning intro to data analytics",
          },
          {
            id: 2,
            name: "Tools for Data Analysis",
            videos: ["https://youtube.com"],
            lectureText: "You are now learning tools for data analytics",
          },
        ],
      },
    ],
    
    image: images.dataAnalytics,
    notes: "",
    type: "created",
    difficulty: "beginner",
    extimatedCompletionTime: "6 weeks",
  };



const courses = [
    {
        id: 1,
        title: "Data Analytics",
        image: images.dataAnalytics,
        category: "Statistics",
        color: COLORS.primary,
        progress: 65
    },
    {
        id: 2,
        title: "Algebra",
        image: images.algebra,
        category: "Mathematics",
        color: COLORS.primary,
        progress: 50
    },
    {
        id: 3,
        title: "Data Analytics",
        image: images.dataAnalytics,
        category: "Statistics",
        color: COLORS.primary,
        progress: 40
    },
    {
        id: 4,
        title: "Algebra",
        image: images.algebra,
        category: "Mathematics",
        color: COLORS.primary,
        progress: 90
    },
]

export default courses