const useFetchCourse = async (courseId) => {
    const res = await fetch(
      `http://192.168.179.93:3000/users/course/${courseId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: true,
      }
    );
    const data = await res.json();
    return data;
  };

export default useFetchCourse