import { Text, View, Pressable, Image, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useRef, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import styles from '../styles/components/dashboardSearch.style'
import AntDesign from '@expo/vector-icons/AntDesign';

import { SearchScreenContext } from '../context/SearchScreenContext';

import { images, COLORS, DARKMODECOLORS } from '../constants'

const categories = [
    {
        id: 1,
        name: "Courses",
        icon: images.programming
    },
    {
        id: 2,
        name: "Lectures",
        icon: images.physics
    },
    {
        id: 3,
        name: "Recommended",
        icon: images.chemistry
    },
    {
        id: 4,
        name: "Questions",
        icon: images.maths
    }
]

const coursesResults = [
    {
        id: 1,
        title: "Introduction to Programming",
        description: "Learn the basics of programming",
        image: "https://res.cloudinary.com/di1uklizr/image/upload/v1733242722/course-images/u4vjmgomxipkvtqwajhy.png"
    },
    {
        id: 2,
        title: "Introduction to Physics",
        description: "Learn the basics of physics",
        image: "https://res.cloudinary.com/di1uklizr/image/upload/v1733242722/course-images/u4vjmgomxipkvtqwajhy.png"
    },
    {
        id: 3,
        title: "Introduction to Chemistry",
        description: "Learn the basics of chemistry",
        image: "https://res.cloudinary.com/di1uklizr/image/upload/v1733242722/course-images/u4vjmgomxipkvtqwajhy.png"
    },
    {
        id: 4,
        title: "Introduction to Mathematics",
        description: "Learn the basics of mathematics",
        image: "https://res.cloudinary.com/di1uklizr/image/upload/v1733242722/course-images/u4vjmgomxipkvtqwajhy.png"
    }
]


const Category = ({ cat }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Pressable style={[styles.category, styles[theme].category]}>
            {cat.icon}
            <Text style={[styles.categoryText, styles[theme].categoryText]}>{cat.name}</Text>
        </Pressable>
    )
}

const CourseResult = ({ course }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Pressable style={[styles.courseResultCon, styles[theme].courseResultCon]}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            <View style={styles.courseResultsDetails}>
                <Text style={[styles.courseTitle, styles[theme].courseTitle]}>{course.title}</Text>
                <Text style={[styles.courseDesc, styles[theme].courseDesc]}>{course.description}</Text>
            </View>
        </Pressable>
    )
}

const SearchResultsScreen = () => {
    const inputRef = useRef(null);
    const { theme } = useContext(ThemeContext)
    const { displaySearch, setDisplaySearch } = useContext(SearchScreenContext)
    useEffect(() => {
        // Automatically focus the input field when the screen is loaded
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (
        <View style={[styles.searchMainContainer, styles[theme].searchMainContainer]}>
            <Pressable style={[styles.container, styles[theme].container]}>
                <View style={styles.searchButton}>
                    <TouchableOpacity onPress={() => setDisplaySearch(false)} style={{
                        backgroundColor: theme === "light" ? COLORS.grey : DARKMODECOLORS.dark,
                        padding: 5,
                        borderRadius: 10
                    }}>
                        <AntDesign name="arrowleft" size={20} color={
                            theme === "light" ? COLORS.dark : DARKMODECOLORS.light
                        } />
                    </TouchableOpacity>
                    <Image
                        source={images.colouredLogo2D}
                        resizeMode="contain"
                        style={styles.searchLogo}
                    />
                    <TextInput
                        ref={inputRef}
                        placeholder="Search or Ask Simesta AI"
                        style={[styles.searchField, styles[theme].searchField]}
                        placeholderTextColor={
                            theme === "light" ? COLORS.dark : DARKMODECOLORS.miniDarkGrey
                        }
                        selectionColor={
                            theme === "light" ? COLORS.dark : DARKMODECOLORS.light
                        }
                    />


                </View>
            </Pressable>
            <View style={[styles.categoryContainer, styles[theme].categoryContainer]}>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Category cat={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ columnGap: 10 }}
                    scrollEnabled={true}
                    horizontal
                />
            </View>
            <ScrollView>
                <Text style={[styles.categoryText, styles[theme].categoryText]}>Courses</Text>
                {coursesResults.map((course) => {
                    return <CourseResult key={course.id} course={course} />
                })}
            </ScrollView>

        </View>
    )
}

export default SearchResultsScreen

