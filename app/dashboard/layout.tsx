// "use client";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
// import { useRouter } from "next/router";

const links = [
  {
    name: "home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "statistics",
    path: "/dashboard/statistics",
    icon: <BsBarChart />,
  },
  {
    name: "profile",
    path: "/dashboard/profile",
    icon: <FaUser />,
  },
];

function DashboardLayout({ children }: { children: React.ReactNode }) {
  // const router = useRouter();
  // const currentPath = router.pathname;
  return (
    <div className="bg-slate-200 h-full absolute w-full">
      <div className="h-56 bg-primary absolute w-full px-5 pt-2">
        <div>
          <div className="mb-3 flex justify-between text-white">
            <div className="flex gap-10 items-center">
              <h1 className="font-bold text-white font-serif text-lg mobile:max-sm:hidden">
                Xpence<span className="text-gray-500">Dairy</span>
              </h1>
              <p>Monday 16/11/2023</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>john doe</p>
              <div className="h-8 w-8 bg-white items-center rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white relative h-[90vh] w-[10vw] p-2 mobile:max-md:hidden">
              <div className="flex flex-col items-center gap-5">
                {links.map((link, index) => (
                  <Link
                    className={
                      "flex flex-col text-dark items-center border bottom-1 w-[100%] h-[5rem] justify-center rounded hover:bg-primary hover:text-white"
                    }
                    href={link.path}
                    key={index}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-white fixed bottom-0 w-full md:hidden p-5">
        {links.map((link, index) => (
          <Link href={link.path} className="text-dark font-[50px]" key={index}>
            {link.icon}
            {/* {link.name} */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardLayout;
