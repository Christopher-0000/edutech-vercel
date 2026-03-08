import{a as g,r,j as e,L as x}from"./index-DO2bWtde.js";import{u as j}from"./index.esm-Rxe82aX8.js";import{H as w,F as N,a as y}from"./Footer-OgDVtsFW.js";function k(){const f=g(),{register:o,handleSubmit:u,formState:{errors:s}}=j({defaultValues:{email:"",password:""}}),[n,a]=r.useState(null),[i,b]=r.useState(!1),[d,p]=r.useState(!1),[c,m]=r.useState(""),h=async t=>{m("");try{const l=await y.login({email:t.email,password:t.password});d&&localStorage.setItem("rememberMe","true"),b(!0),setTimeout(()=>f("/"),1500)}catch(l){console.error("Login error:",l),m(l.message||"Invalid email or password. Please try again.")}};return e.jsxs("div",{className:"bg-gradient-to-b from-[#f0f7fa] to-white flex flex-col min-h-screen",children:[e.jsx("style",{children:`
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
    .form-submit { animation: slideInUp 0.6s ease-out forwards; animation-delay: 0.4s; opacity: 0; }

    .success-check {
      animation: scaleIn 0.5s ease-out;
    }
  `}),e.jsx(w,{}),e.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-12",children:e.jsx("div",{className:"w-full max-w-2xl",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#14627a]/5 to-[#1a9b8e]/5 rounded-3xl blur-xl opacity-60"}),e.jsxs("div",{className:"relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-[#e0f2f7] overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#14627a] via-[#1a9b8e] to-[#14627a]"}),e.jsxs("div",{className:"mb-10 animate-slide-in-left",children:[e.jsx("h1",{className:"font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[32px] md:text-[44px] text-[#14627a] leading-tight mb-4",children:"Welcome Back"}),e.jsx("div",{className:"w-12 h-1 bg-gradient-to-r from-[#14627a] to-[#1a9b8e] rounded-full mb-4"}),e.jsx("p",{className:"font-['Public_Sans:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#6d737a] leading-relaxed",children:"Login to access your courses and continue learning with eduTech"})]}),c&&e.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-xl",children:e.jsx("p",{className:"font-['Public_Sans:Medium',sans-serif] text-red-700",children:c})}),i&&e.jsx("div",{className:"mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-scale-in",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold success-check",children:"✓"}),e.jsx("p",{className:"font-['Public_Sans:Medium',sans-serif] text-green-700",children:"Login successful! Redirecting..."})]})}),e.jsxs("form",{onSubmit:u(h),className:"space-y-6",children:[e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"email",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Email Address"]}),e.jsx("input",{type:"email",id:"email",...o("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}),onFocus:()=>a("email"),onBlur:()=>a(null),className:`w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${n==="email"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} ${s.email?"border-red-500":""} focus:outline-none`,placeholder:"Enter your email"}),s.email&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:s.email.message})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{htmlFor:"password",className:"block font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#1b1d1f] mb-3",children:[e.jsx("span",{className:"text-[#d91e63]",children:"*"})," Password"]}),e.jsx("input",{type:"password",id:"password",...o("password",{required:"Password is required",minLength:{value:6,message:"Password must be at least 6 characters"}}),onFocus:()=>a("password"),onBlur:()=>a(null),className:`w-full px-5 py-4 border-2 rounded-xl font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] transition-all duration-300 ${n==="password"?"border-[#14627a] bg-[#f0f9fc]":"border-[#e7e9eb] bg-white hover:border-[#14627a]/50"} ${s.password?"border-red-500":""} focus:outline-none`,placeholder:"Enter your password"}),s.password&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:s.password.message})]}),e.jsxs("div",{className:"form-field flex items-center justify-between",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:t=>p(t.target.checked),className:"w-5 h-5 text-[#14627a] border-2 border-[#e7e9eb] rounded-md focus:ring-[#14627a] cursor-pointer"}),e.jsx("span",{className:"font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]",children:"Remember me"})]}),e.jsx(x,{to:"/forgot-password",className:"font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#14627a] hover:text-[#0f4a5b] transition-colors",children:"Forgot Password?"})]}),e.jsx("button",{type:"submit",disabled:i,className:"form-submit w-full bg-gradient-to-r from-[#14627a] to-[#0f4a5b] text-white px-6 py-4 rounded-xl font-['Public_Sans:SemiBold',sans-serif] text-[16px] hover:from-[#0f4a5b] hover:to-[#083a47] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg mt-8 disabled:opacity-75 cursor-pointer",children:i?"Login Successful!":"Login"})]}),e.jsxs("div",{className:"my-8 flex items-center gap-4",children:[e.jsx("div",{className:"flex-1 h-px bg-gray-200"}),e.jsx("span",{className:"text-[#6d737a] text-sm",children:"Or"}),e.jsx("div",{className:"flex-1 h-px bg-gray-200"})]}),e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#6d737a]",children:["Don't have an account?"," ",e.jsx(x,{to:"/signup",className:"font-['Public_Sans:SemiBold',sans-serif] text-[#14627a] hover:text-[#0f4a5b] transition-colors hover:underline",children:"Create one now"})]})}),e.jsxs("div",{className:"mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl",children:[e.jsx("p",{className:"font-['Public_Sans:SemiBold',sans-serif] text-[13px] text-blue-900 mb-2",children:"Demo Credentials:"}),e.jsxs("p",{className:"font-['Public_Sans:Regular',sans-serif] text-[12px] text-blue-800",children:[e.jsx("strong",{children:"Student:"})," any-email@example.com",e.jsx("br",{}),e.jsx("strong",{children:"Admin:"})," admin@edutech.com"]})]})]})]})})}),e.jsx(N,{})]})}export{k as default};
