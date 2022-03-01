import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

interface Props {
  className?: string;
}

const categories = [
  { name: "Living Space", route: "/" },
  { name: "Dining", route: "/" },
  { name: "Work Space", route: "/" },
  { name: "Bedroom", route: "/" },
  { name: "Lighting", route: "/" },
  { name: "Accessories", route: "/" },
  { name: "Rugs", route: "/" },
  { name: "Outdoor", route: "/" },
  { name: "On Sale", route: "/" },
  { name: "Custom Furniture", route: "/" },
];

const shopping = [
  { name: "Search", route: "/" },
  { name: "Wishlist", route: "/" },
  { name: "Sign In", route: "/" },
  { name: "Sign up", route: "/" },
];

const tips = [
  { name: "Design Tips", route: "/" },
  { name: "Care Instructions", route: "/" },
];

const store = [
  { name: "About Us", route: "/" },
  { name: "Privacy Policy", route: "/" },
  { name: "Careers", route: "/" },
  { name: "Contact Us", route: "/" },
];

const Footer: React.FC<Props> = ({ className, ...props }) => {
  return (
    <footer className={`${className} bg-red-700`} {...props}>
      <div className="px-[10px] py-10 text-white">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h2>JOIN OUR NEWSLETTER</h2>
            <Input label="Name" />
            <Input label="Email" />
            <Button className="bg-red-800 w-full">Sign Me Up</Button>
          </div>

          <div>
            <h2 className="mb-5">Categories</h2>
            <nav>
              <ul className="grid gap-6">
                {categories.map(({ name, route }) => (
                  <li>
                    <a href={route}>{name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="mb-5">Shopping</h2>
            <nav>
              <ul className="grid gap-6">
                {shopping.map(({ name, route }) => (
                  <li>
                    <a href={route}>{name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="mb-5">Tips &amp; Tricks</h2>
            <nav>
              <ul className="grid gap-6">
                {tips.map(({ name, route }) => (
                  <li>
                    <a href={route}>{name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="mb-5">Once a Tree Furniture</h2>
            <nav>
              <ul className="grid gap-5">
                {store.map(({ name, route }) => (
                  <li>
                    <a href={route}>{name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-red-800 px-[10px] py-5">COPYRIGHT &copy; ONCE A TREE FURNITURE</div>
    </footer>
  );
};

export default Footer;
