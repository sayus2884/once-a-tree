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
    <footer className={`${className} bg-ocean-500 text-white`} {...props}>
      <div className="page-px py-10 lg:py-20 max-w-content">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-20">
          <div className="flex flex-col gap-5 md:col-span-2 lg:row-span-2">
            <h2 className="text-xl tracking-wide">JOIN OUR NEWSLETTER</h2>
            <p className="font-light">
              Be the first to hear about new arrivals, designer collections and exclusive offers.
            </p>
            <Input label="Name" />
            <Input label="Email" />
            <Button className="w-full" solid>
              Sign Me Up
            </Button>
          </div>

          <div className="md:row-span-2">
            <h2 className="mb-5 text-xl tracking-wide">Categories</h2>
            <nav>
              <ul className="grid gap-6 font-light">
                {categories.map(({ name, route }, i) => (
                  <li key={i}>
                    <a href={route}>{name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="mb-5 text-xl tracking-wide">Shopping</h2>
            <nav>
              <ul className="grid gap-6 font-light">
                {shopping.map(({ name, route }, i) => (
                  <li key={i}>
                    <a href={route}>{name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-5 text-xl tracking-wide">Tips &amp; Tricks</h2>
            <nav>
              <ul className="grid gap-6 font-light">
                {tips.map(({ name, route }, i) => (
                  <li key={i}>
                    <a href={route}>{name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-5 text-xl tracking-wide">Once a Tree Furniture</h2>
            <nav>
              <ul className="grid gap-6 font-light">
                {store.map(({ name, route }, i) => (
                  <li key={i}>
                    <a href={route}>{name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-ocean-600 page-px py-5 text-sm tracking-wider font-light lg:text-center uppercase">
        Copyright &copy; Once A Tree Furniture
      </div>
    </footer>
  );
};

export default Footer;
