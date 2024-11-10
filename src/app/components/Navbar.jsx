"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import UserLogo from "../../assets/logo/user_logo.png";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Service",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const handleOnClick = () => {
    router.push("/about")
  };

  return (
    <div>
      <nav className="flex justify-between items-center bg-slate-200 py-6 md:px-20">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Next <span className="text-cyan-800">Hero</span>
          </h1>
        </Link>
        <ul className="flex justify-center  items-center gap-8">
          {links?.map((link) => (
            // eslint-disable-next-line react/jsx-key
            <li className="text-xl font-bold">
              <Link
                className={`${
                  pathName === link.path
                    ? "text-cyan-800 bg-gray-300 px-5 py-2 duration-500 rounded-md"
                    : "text-purple-800"
                }`}
                key={link.path}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button
            onClick={handleOnClick}
            className="text-purple-800 text-xl font-bold px-5 py-2 rounded-md hover:bg-gray-300 transition-colors duration-700"
          >
            Login
          </button>
          <Image src={UserLogo} alt="user logo" width={40} height={40} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
