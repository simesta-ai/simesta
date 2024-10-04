
import { createAsyncThunk } from "@reduxjs/toolkit";

const useFetchCourse = async (courseId, accessToken) => {
  const res = await fetch(`https://truelearn-production.up.railway.app/courses/${courseId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: `Auth-token=${accessToken}`,
    },
  });

  const data = await res.json();
  if (!data.data) {
    return data.message;
  }
  return data.data;
};

export const fetchCourseDetails = createAsyncThunk(
  "activeCourse/fetchCourseDetails",
  useFetchCourse
);

export default useFetchCourse;
