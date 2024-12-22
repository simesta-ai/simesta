import { createAsyncThunk } from "@reduxjs/toolkit";

const useFetchCourse = async (courseId, userId, accessToken) => {
  const res = await fetch(
    `https://simesta-server.onrender.com/api/courses/${courseId}/users/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const apiRes = await res.json();
  if (!apiRes.success) {
    return data.message;
  }
  return apiRes.data;
};

export const fetchCourseDetails = createAsyncThunk(
  "activeCourse/fetchCourseDetails",
  useFetchCourse
);

export default useFetchCourse;
