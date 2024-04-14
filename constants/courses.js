import { images, COLORS } from "../constants"

const themeColors = [ COLORS.progress, COLORS.warm, COLORS.primary, COLORS.darkPrimary]



const courses = [
    {
        id: 1,
        title: "Data Analytics",
        image: images.dataAnalytics,
        category: "Statistics",
        color: themeColors[0],
        progress: 65
    },
    {
        id: 2,
        title: "Algebra",
        image: images.algebra,
        category: "Mathematics",
        color: themeColors[1],
        progress: 50
    },
    {
        id: 3,
        title: "Data Analytics",
        image: images.dataAnalytics,
        category: "Statistics",
        color: themeColors[Math.floor(Math.random() * themeColors.length )],
        progress: 40
    },
    {
        id: 4,
        title: "Algebra",
        image: images.algebra,
        category: "Mathematics",
        color: themeColors[Math.floor(Math.random() * themeColors.length )],
        progress: 90
    },
]

export default courses