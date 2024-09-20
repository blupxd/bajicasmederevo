import React from "react";
import ServiceChanger from "./ServiceChanger";
import Animation1 from "./Animation1";

const Services = () => {
  return (
    <section id="services" className="h-full scroll-mt-10 mb-20 flex flex-col ">
      <div className="px-10 lg:px-20 pt-12 bg-[#1E1E1E] flex flex-col h-[34rem] md:h-[30rem]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-y-0 space-y-4 lg:space-x-10 text-white">
          <Animation1>
          <h1 className="text-xl sm:text-3xl xl:text-4xl xl:leading-[3rem] italic font-black">
            “Trudimo se da pružimo vrhunske građevinske usluge i rešenja koja
            osiguravaju najbolje rezultate.”
          </h1>
          </Animation1>
          <Animation1>
          <p className="sm:text-lg italic font-thin">
            Posvećeni smo vrhunskom kvalitetu i inovacijama, sa ciljem da
            zadovoljimo sve vaše građevinske potrebe i nadmašimo očekivanja kroz
            profesionalan i efikasan rad.
          </p>
          </Animation1>
        </div>
      </div>
      <ServiceChanger />
    </section>
  );
};

export default Services;
