// "use client";

// import { useEffect, useState } from "react";

// const TodayDate = () => {
//   const [today, setToday] = useState("");

//   useEffect(() => {
//     const updateDate = () => {
//       setToday(
//         new Date().toLocaleDateString("bn-BD", {
//           weekday: "long",
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })
//       );
//     };

//     updateDate();

//     const timer = setInterval(updateDate, 60000);

//     return () => clearInterval(timer);
//   }, []);

//   return <>{today || "তারিখ লোড হচ্ছে..."}</>;
// };

// export default TodayDate;

function TodayDate() {
  const today = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return today;
}
export default TodayDate;