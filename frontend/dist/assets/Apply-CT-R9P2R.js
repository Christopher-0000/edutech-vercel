import{a as h,r as l,j as e}from"./index-DO2bWtde.js";import{H as g,F as v}from"./Footer-OgDVtsFW.js";function w(){const i=h(),[t,d]=l.useState({name:"",email:"",phoneNumber:"",educationLevel:"",course:""}),[o,s]=l.useState(null),[r,c]=l.useState(!1),m=[{id:1,name:"Web Development"},{id:2,name:"IoT (Internet of Things)"},{id:3,name:"Game Development"},{id:4,name:"Machine Learning"},{id:5,name:"Mobile App Development"},{id:6,name:"Cloud Computing"}],u=["High School","Bachelor's Degree","Master's Degree","PhD","Other"],n=a=>{const{name:f,value:x}=a.target;d(b=>({...b,[f]:x}))},p=a=>{a.preventDefault(),localStorage.setItem("applicantName",t.name),localStorage.setItem("applicantEmail",t.email),localStorage.setItem("applicantPhone",t.phoneNumber),localStorage.setItem("applicantEducation",t.educationLevel),localStorage.setItem("applicantCourse",t.course),c(!0),setTimeout(()=>i("/"),1500)};return e.jsxs("div",{className:"bg-gradient-to-b from-[#f0f7fa] to-white flex flex-col min-h-screen",children:[e.jsx("style",{children:`
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    .animate-slide-in-up {
      animation: slideInUp 0.6s ease-out forwards;
    }

    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }

    .animate-slide-in-left {
      animation: slideInLeft 0.6s ease-out forwards;
    }

    .animate-scale-in {
      animation: scaleIn 0.5s ease-out forwards;
    }

    .form-field {
      animation: slideInUp 0.6s ease-out forwards;
    }

    .form-field:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
    .form-field:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
    .form-field:nth-child(3) { animation-delay: 0.3s; opacity: 0; }
    .form-field:nth-child(4) { animation-delay: 0.4s; opacity: 0; }
    .form-field:nth-child(5) { animation-delay: 0.5s; opacity: 0; }
    .form-submit { animation: slideInUp 0.6s ease-out forwards; animation-delay: 0.6s; opacity: 0; }

    .form-input:focus {
      box-shadow: 0 0 0 3px rgba(20, 98, 122, 0.1);
    }

    .success-check {
      animation: scaleIn 0.5s ease-out;
    }
  `}),e.jsx(g,{}),e.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-12",children:e.jsx("div",{className:"w-full max-w-3xl",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#14627a]/5 to-[#1a9b8e]/5 rounded-3xl blur-xl opacity-60"}),e.jsxs("div",{className:"relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-[#e0f2f7] overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#14627a] via-[#1a9b8e] to-[#14627a]"}),e.jsxs("div",{className:"mb-10 animate-slide-in-left",children:[e.jsx("h1",{className:"font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[32px] md:text-[44px] text-[#14627a] leading-tight mb-4",children:"Course Application"}),e.jsx("div",{className:"w-12 h-1 bg-gradient-to-r from-[#14627a] to-[#1a9b8e] rounded-full mb-4"}),e.jsx("p",{className:"font-['Public_Sans:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#6d737a] leading-relaxed",children:"Take the first step towards your learning journey. Fill out the form below to apply for your desired course."})]}),r&&e.jsx("div",{className:"mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-scale-in",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold success-check",children:"✓"}),e.jsx("p",{className:"font-['Public_Sans:Medium',sans-serif] text-green-700",children:"Application submitted successfully! Redirecting..."})]})}),e.jsxs("form",{onSubmit:p,className:"space-y-6",children:[e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"name",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Full Name"]}),e.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:n,onFocus:()=>s("name"),onBlur:()=>s(null),required:!0,className:`form-input w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${o==="name"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} focus:outline-none`,placeholder:"Enter your full name"})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"email",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Email Address"]}),e.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:n,onFocus:()=>s("email"),onBlur:()=>s(null),required:!0,className:`form-input w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${o==="email"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} focus:outline-none`,placeholder:"Enter your email"})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"phoneNumber",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Phone Number"]}),e.jsx("input",{type:"tel",id:"phoneNumber",name:"phoneNumber",value:t.phoneNumber,onChange:n,onFocus:()=>s("phoneNumber"),onBlur:()=>s(null),required:!0,className:`form-input w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${o==="phoneNumber"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} focus:outline-none`,placeholder:"Enter your phone number"})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"educationLevel",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Education Level"]}),e.jsxs("select",{id:"educationLevel",name:"educationLevel",value:t.educationLevel,onChange:n,onFocus:()=>s("educationLevel"),onBlur:()=>s(null),required:!0,className:`form-input w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 appearance-none bg-white cursor-pointer ${o==="educationLevel"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} focus:outline-none`,style:{backgroundImage:`url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2314627a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 1rem center",backgroundSize:"1.5em 1.5em",paddingRight:"2.5rem"},children:[e.jsx("option",{value:"",children:"Select your education level"}),u.map(a=>e.jsx("option",{value:a,children:a},a))]})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"course",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Select Course"]}),e.jsxs("select",{id:"course",name:"course",value:t.course,onChange:n,onFocus:()=>s("course"),onBlur:()=>s(null),required:!0,className:`form-input w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 appearance-none bg-white cursor-pointer ${o==="course"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} focus:outline-none`,style:{backgroundImage:`url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2314627a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 1rem center",backgroundSize:"1.5em 1.5em",paddingRight:"2.5rem"},children:[e.jsx("option",{value:"",children:"Choose a course to apply"}),m.map(a=>e.jsx("option",{value:a.name,children:a.name},a.id))]})]}),e.jsx("button",{type:"submit",disabled:r,className:"form-submit w-full bg-gradient-to-r from-[#14627a] to-[#0f4a5b] text-white px-6 py-4 rounded-xl font-['Public_Sans:SemiBold',sans-serif] text-[16px] hover:from-[#0f4a5b] hover:to-[#083a47] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg mt-8 disabled:opacity-75 cursor-pointer",children:r?"Application Submitted!":"Submit Application"})]}),e.jsx("div",{className:"mt-8 p-5 bg-gradient-to-r from-[#14627a]/5 to-[#1a9b8e]/5 border border-[#14627a]/20 rounded-xl",children:e.jsx("p",{className:"font-['Public_Sans:Regular',sans-serif] text-[13px] md:text-[14px] text-[#6d737a]",children:"ℹ️ Please fill out all fields accurately. Your application will be reviewed within 2-3 business days."})})]})]})})}),e.jsx(v,{})]})}export{w as default};
