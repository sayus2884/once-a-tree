import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Button from "../components/Button/Button";

const PageName: NextPage = () => {
  return (
    <div>
      <div className="grid">
        <section className="grid lg:grid-cols-2 lg:rtl lg:relative">
          <div className="relative h-[300px] sm:h-[500px] lg:h-screen">
            <Image src="/images/customize.jpg" layout="fill" objectFit="cover" />
          </div>

          <div className="flex flex-col gap-8 sm:gap-12 bg-ocean-500 text-white page-px py-10 sm:py-20 ltr">
            <div>
              <h2 className="title mb-3">To Each Their Own</h2>
              <p className="font-light max-w-[370px]">
                We customize furniture that fit your taste and personality.
              </p>
            </div>
            <Button className="w-fit" solid>
              Inquire Now
            </Button>
          </div>

          <div className="lg:ltr lg:absolute lg:bottom-[100px]">
            <p className="page-px py-10 sm:py-20 bg-white lg:max-w-[65%] lg:shadow">
              For over 40 Years, Once A Tree Furniture has been committed to creating unique,
              livable spaces that are designed with you in mind. Your experience is what matters and
              we understand that even the smallest of details need to be considered. We are
              committed to innovating our products, developing relationships, and pushing the
              boundaries of what it means to be a full-service brand. We are dedicated to making
              your vision come to life.
            </p>
          </div>
        </section>

        <section className="grid lg:grid-cols-2">
          <div className="relative h-[300px] sm:h-[500px] lg:h-[750px]">
            <Image src="/images/livingroom.jpg" layout="fill" objectFit="cover" />
          </div>

          <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 page-px py-10 sm:py-20">
            <h2 className="title text-center">Custom Built in Vancouver</h2>
            <p>
              Whether you&apos;re looking for a custom-built, heirloom quality piece for your living
              room, bedroom, dining room, office or more, our made-in-Vancouver STUDIO Collection
              offers custom furniture solutions for all your home and living needs. Featuring solid
              wood construction, your choice of wood and finish, as well as custom sizing available,
              we can help bring your dream home to life.
            </p>
            <Button className="w-fit place-self-center" solid>
              Shop Our Studio Collection
            </Button>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 lg:rtl">
          <div className="relative h-[300px] sm:h-[500px] lg:h-[750px]">
            <Image src="/images/outdoor.jpg" layout="fill" objectFit="cover" />
          </div>

          <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 bg-ocean-500 text-white page-px py-10 sm:py-20 ltr">
            <h2 className="title text-center">Brands We Carry</h2>
            <p className="font-light">
              Don&apos;t see what you like? We partner with select brands that stand for the same
              things we do! We can custom-order in a wide selection of colours and fabrics. Our
              staff is here to offer you the best possible service, selections, quality and value.
              We will help you chose unique pieces to create spaces to be truly lived in.
            </p>
            <Button className="w-fit place-self-center" solid>
              Checkout Our Partners' Items
            </Button>
          </div>
        </section>

        <section className="grid lg:grid-cols-2">
          <div className="relative h-[300px] sm:h-[500px] lg:h-[750px]">
            <Image src="/images/person.jpg" layout="fill" objectFit="cover" />
          </div>

          <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 page-px py-10 sm:py-20">
            <h2 className="title text-center">Let&apos;s Build Your Custom Furniture</h2>
            <p>
              Please fill out our Contact Us form and one of our customer service representatives
              will get back to you within 1-2 business days.
            </p>
            <Button className="w-fit place-self-center" solid>
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageName;
