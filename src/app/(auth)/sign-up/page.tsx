import UserAuth from "@/src/components/login and sign up";
import { FC } from "react";
 

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex items-center justify-center my-16">
     <UserAuth />
    </div>
  );
};

export default page;
