// "use client";
// export async function getServerSideProps() {
//   const data = await fetch("http://localhost/s.josn");
//   const jsonData = await data.json();

//   return {
//     props: {
//       data: jsonData, // Pass data to the component
//     },
//   };
// }

// "use client";

// import { useState } from "react";

// export default function View() {
//   // State to track which question is open
//   const [open, setOpen] = useState(null);

//   // Toggle question handler
//   const toggleAnswer = (id: any) => {
//     setOpen(open === id ? null : id); // Open or close the answer
//   };

//   return (
//     <div className="h-screen bg-[#F2F4FF]">
//       <section className="mx-auto max-w-5xl py-10 sm:py-20">
//         <div className="flex flex-col items-center justify-center gap-y-2 py-5">
//           <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
//             Frequently asked questions
//           </h2>
//           <p className="text-lg font-medium text-slate-700/70">
//             Questions related to web hosting
//           </p>
//         </div>
//         <div className="w-full px-7 py-4 md:px-10 xl:px-2">
//           <div className="mx-auto w-full max-w-5xl rounded-lg border border-slate-400/20 bg-white">
//             {faqData.map((faq, index) => (
//               <div key={index} className="border-b border-[#0A071B]/10">
//                 <button
//                   className="question-btn flex w-full items-start justify-between gap-x-5 rounded-lg p-5 text-left text-lg font-bold text-slate-800 focus:outline-none"
//                   onClick={() => toggleAnswer(index)}
//                 >
//                   <span>{faq.question}</span>
//                   <svg
//                     stroke="currentColor"
//                     fill="currentColor"
//                     strokeWidth="0"
//                     viewBox="0 0 24 24"
//                     className={`mt-1.5 h-5 w-5 flex-shrink-0 text-[#5B5675] transition-transform md:mt-0 ${
//                       open === index ? "rotate-180" : ""
//                     }`}
//                     height="1em"
//                     width="1em"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
//                   </svg>
//                 </button>
//                 <div
//                   className={`answer px-5 pb-5 pt-2 text-sm font-medium text-[#343E3A] lg:text-base ${
//                     open === index ? "block" : "hidden"
//                   }`}
//                 >
//                   {faq.answer}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Example data array
// const faqData = [
//   {
//     question: "What types of hosting plans do you offer?",
//     answer:
//       "We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans.",
//   },
// ];
