import { Text, View } from 'react-native'
import React from 'react'
import { Skeleton } from "moti/skeleton";

import styles from "../../styles/containers/loaders.style"

const CourseLoader = ({ children }) => {
  return (
    <Skeleton>
      {}
    </Skeleton>
  )
}

export default CourseLoader

