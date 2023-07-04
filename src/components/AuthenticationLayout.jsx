import { Outlet } from "react-router-dom"
import Discussion from "../assets/svg/discussion.svg"
import Logo from "../assets/svg/logo.svg"
export default function AuthenticationLayout() {
  return (
    <main className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-[55%]  relative flex-col bg-purple-100 text-primary text-center pt-6 font-righteous">
        <p className="">Nice to see You again</p>
        <p className="text-[3rem] font-[700]">Welcome back</p>
        <div className="relative h-[80%] mt-auto self-center">
            <img src={Discussion} alt="" width={"450"} height={"auto"}/>
        </div>
      </div>
      <div className="lg:w-[45%] w-full py-4 px-4 lg:px-8 flex flex-col">
        <div className="flex items-center font-righteous mb-4">
            <img src={Logo} alt="" width={"50"} height={"50"}/>
          <span className="text-[1.5rem]">Apex Insights</span>
        </div>
        <Outlet />
        <p className="font-righteous mt-auto text-primary text-center text-sm">Developed by Anderson</p>
      </div>
    </main>
  )
}
