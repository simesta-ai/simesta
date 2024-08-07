const useFetchCourse = async (courseId) => {
    const res = await fetch(
      `http://192.168.129.93:3000/users/course/${courseId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    return data;
  };

export default useFetchCourse