import Image from "next/image";
import data from "@/data/team";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Behance,
} from "@/declarations/icons";
import Link from "next/link";
function Team() {
  return (
    <section className="team section-padding pt-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Team</span>
              <h2 className="fw-600 d-rotate wow">
                <span className="rotate-text">
                  Meet our <span className="fw-200">legends.</span>
                </span>
              </h2>
            </div>
            <div className="ml-auto vi-more flex items-center">
              <Link
                href="/page-team"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>Join us</span>
              </Link>
              <ArrowUpRight className="w-5 h-5 ml-4" />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 mb-8">
              <div className="item md-mb50 group">
                <div className="img relative aspect-[3/4] overflow-hidden rounded-[32px]">
                  <Image
                    src={item.img}
                    alt={`${item.name} - ${item.subName}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="fz-12 text-primary font-bold uppercase tracking-widest">
                      {item.subName}
                    </span>
                    <h6 className="fz-18 text-white font-black uppercase italic tracking-tighter">
                      {item.name}
                    </h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <Link
                      href="#0"
                      className="hover:text-primary transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#0"
                      className="hover:text-primary transition-colors"
                    >
                      <Behance className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#0"
                      className="hover:text-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
