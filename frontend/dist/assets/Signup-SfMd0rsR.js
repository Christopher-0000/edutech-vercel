import{a as p,r as i,j as e,L as h}from"./index-DO2bWtde.js";import{u as g}from"./index.esm-Rxe82aX8.js";import{H as N,F as j,a as w}from"./Footer-OgDVtsFW.js";function F(){const x=p(),{register:t,handleSubmit:u,watch:n,formState:{errors:s}}=g(),[d,m]=i.useState(""),[o,f]=i.useState(!1),[l,a]=i.useState(null),b=async r=>{m("");try{await w.register({name:r.fullName,email:r.email,password:r.password,mobile:r.mobileNumber}),f(!0),setTimeout(()=>x("/"),1500)}catch(c){console.error("Signup error:",c),m(c.message||"Failed to create account. Please try again.")}};return n("password"),e.jsxs("div",{className:"bg-gradient-to-b from-[#f0f7fa] to-white flex flex-col min-h-screen",children:[e.jsx("style",{children:`
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

    .animate-slide-in-up {
      animation: slideInUp 0.6s ease-out forwards;
    }

    .animate-slide-in-left {
      animation: slideInLeft 0.6s ease-out forwards;
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

    .success-check {
      animation: scaleIn 0.5s ease-out;
    }
  `}),e.jsx(N,{}),e.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-12",children:e.jsx("div",{className:"w-full max-w-2xl",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#14627a]/5 to-[#1a9b8e]/5 rounded-3xl blur-xl opacity-60"}),e.jsxs("div",{className:"relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-[#e0f2f7] overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#14627a] via-[#1a9b8e] to-[#14627a]"}),e.jsxs("div",{className:"mb-10 animate-slide-in-left",children:[e.jsx("h1",{className:"font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[32px] md:text-[44px] text-[#14627a] leading-tight mb-4",children:"Join eduTech"}),e.jsx("div",{className:"w-12 h-1 bg-gradient-to-r from-[#14627a] to-[#1a9b8e] rounded-full mb-4"}),e.jsx("p",{className:"font-['Public_Sans:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#6d737a] leading-relaxed",children:"Start your learning journey today. Sign up and get access to 5000+ courses"})]}),d&&e.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-xl",children:e.jsx("p",{className:"font-['Public_Sans:Medium',sans-serif] text-red-700",children:d})}),o&&e.jsx("div",{className:"mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-scale-in",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold success-check",children:"✓"}),e.jsx("p",{className:"font-['Public_Sans:Medium',sans-serif] text-green-700",children:"Account created successfully! Redirecting..."})]})}),e.jsxs("form",{onSubmit:u(b),className:"space-y-6",children:[e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"fullName",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Full Name"]}),e.jsx("input",{type:"text",id:"fullName",...t("fullName",{required:"Full name is required"}),onFocus:()=>a("fullName"),onBlur:()=>a(null),className:`w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${l==="fullName"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} ${s.fullName?"border-red-500":""} focus:outline-none`,placeholder:"Enter your full name"}),s.fullName&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:s.fullName.message})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"email",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Email Address"]}),e.jsx("input",{type:"email",id:"email",...t("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}),onFocus:()=>a("email"),onBlur:()=>a(null),className:`w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${l==="email"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} ${s.email?"border-red-500":""} focus:outline-none`,placeholder:"Enter your email"}),s.email&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:s.email.message})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"mobileNumber",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Mobile Number"]}),e.jsx("input",{type:"tel",id:"mobileNumber",...t("mobileNumber",{required:"Mobile number is required",pattern:{value:/^[0-9]{10}$/,message:"Please enter a valid 10-digit mobile number"}}),onFocus:()=>a("mobileNumber"),onBlur:()=>a(null),className:`w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${l==="mobileNumber"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} ${s.mobileNumber?"border-red-500":""} focus:outline-none`,placeholder:"Enter your 10-digit mobile number"}),s.mobileNumber&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:s.mobileNumber.message})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"password",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Password"]}),e.jsx("input",{type:"password",id:"password",...t("password",{required:"Password is required",minLength:{value:6,message:"Password must be at least 6 characters"}}),onFocus:()=>a("password"),onBlur:()=>a(null),className:`w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${l==="password"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} ${s.password?"border-red-500":""} focus:outline-none`,placeholder:"Create a strong password (min. 6 characters)"}),s.password&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:s.password.message})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"confirmPassword",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Confirm Password"]}),e.jsx("input",{type:"password",id:"confirmPassword",...t("confirmPassword",{required:"Confirm password is required",validate:r=>{if(n("password")!==r)return"Passwords do not match"}}),onFocus:()=>a("confirmPassword"),onBlur:()=>a(null),className:`w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${l==="confirmPassword"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} ${s.confirmPassword?"border-red-500":""} focus:outline-none`,placeholder:"Confirm your password"}),s.confirmPassword&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:s.confirmPassword.message})]}),e.jsx("button",{type:"submit",disabled:o,className:"form-submit w-full bg-gradient-to-r from-[#14627a] to-[#0f4a5b] text-white px-6 py-4 rounded-xl font-['Public_Sans:SemiBold',sans-serif] text-[16px] hover:from-[#0f4a5b] hover:to-[#083a47] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg mt-8 disabled:opacity-75 cursor-pointer",children:o?"Account Created!":"Create Account"})]}),e.jsxs("div",{className:"my-8 flex items-center gap-4",children:[e.jsx("div",{className:"flex-1 h-px bg-gray-200"}),e.jsx("span",{className:"text-[#6d737a] text-sm",children:"Already have an account?"}),e.jsx("div",{className:"flex-1 h-px bg-gray-200"})]}),e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#6d737a]",children:e.jsx(h,{to:"/login",className:"font-['Public_Sans:SemiBold',sans-serif] text-[#14627a] hover:text-[#0f4a5b] transition-colors hover:underline",children:"Login to your account"})})})]})]})})}),e.jsx(j,{})]})}export{F as default};
