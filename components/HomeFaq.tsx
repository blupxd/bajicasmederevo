import { homeFaq } from "@/constants";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import { RevealText } from "./Reveal";

// The home page's questions: the heading on 4 columns, the answers on 7, and the same questions as FAQPage data
const HomeFaq = () => (
  <section className="section" id="pitanja" aria-labelledby="pitanja-h">
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: homeFaq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }}
    />
    <div className="wrap grid-12">
      <div className="col-span-12 lg:col-span-4">
        <div className="section-head">
          <p className="label">Pitanja</p>
          <h2 id="pitanja-h">
            <RevealText text="Česta pitanja o radovima" />
          </h2>
          <p>Odgovori na ono što nas investitori najčešće pitaju pre prvog obilaska.</p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        <Faq items={homeFaq} />
      </div>
    </div>
  </section>
);

export default HomeFaq;
