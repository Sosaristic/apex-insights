import { Link } from "react-router-dom";
import Twitter from "../assets/svg/twitter.svg"
import Facebook from "../assets/svg/facebook.svg"
import Google from "../assets/svg/google.svg"

export default function ThirdPartyAuth() {
  return (
    <div className="mt-4">
      <div className="flex items-center text-primary">
        <span className="min-w-[30%] min-h-[1px] flex-1 bg-primary"></span>
        Or Sign In With <span className="min-w-[30%] min-h-[1px] flex-1 bg-primary"></span>
      </div>
      <div className="flex justify-center gap-4 lg:gap-8 mt-4">
        <div>
          <Link href={"#"}>
            <img src={Google} alt="" height={"30"} width={"30"}/>
          </Link>
        </div>
        <div>
          <Link href={"#"}>
          <img src={Facebook} alt="" height={"30"} width={"30"}/>
          </Link>
        </div>
        <div>
          <Link href={"#"}>
          <img src={Twitter} alt="" height={"30"} width={"30"}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
