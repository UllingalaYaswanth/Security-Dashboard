// import React, { useState } from 'react'


// function Members() {

//   const [questions,setQuestions] =useState(
//     [
//       "how are you ?",
//       "what are you doing?",
//       "How ca i help ?"
//     ]
//   );
//   return (
//     <div className='flex justify-center items-center'>
//       <div className='bg-white p-6'>
//       <h1 className='text-2xl font-semibold'>Frequently Asked Questions</h1>
//         <div className='gap-4 mt-5 grid items-center'>
//           {
//             questions.map((question,index) => (
//               <div className='bg-gray-200 rounded-xl p-2' key={index}>
//                 {question}
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default Members



import React, { useState } from 'react'


function Members() {

  const [questions,setQuestions] =useState(
    [
      "What should I do if ",
      "What is the pricing of LobeChat?",
      "Does LobeChat support speech synthesis and speech recognition?",
      "Is LobeChat free?",
      "Does LobeChat support local language models?",
      "What should I do if I encounter psvswd r",
      "What is the pricing of LobeChat?",
      "Does LobeChat support speech synthesis and speech recognition?",
      "Is LobeChat free?",
      "Does LobeChat support local language models?","What should I do if I encounter pr",
      "What is the pricing of LobeChat?",
      "Does LobeChat support speech synthesis and speech recognition?",
      "Is LobeChat free?",
      "Does LobeChat support local language models?",
    ]
  );
  return (
    <div className=''>
      <div className='flex-wrap max-w-2xl hidden md:flex p-4 gap-2 mx-auto items-center'>
        <h1 className='w-full text-2xl font-semibold mb-3'>Frequently Asked Questions</h1>
        {
          questions.map((question,index) =>(
            
            <div key={index} className='p-2 bg-gray-200 rounded-xl flex-shrink-0'>
             <p className='font-medium text-gray-600'>{question}</p>
              </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default Members
