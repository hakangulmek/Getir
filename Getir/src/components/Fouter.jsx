import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

function Fouter() {
  return (
    <div>
      <div className="bg-white mt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 pt-10">
            <section className="grid gap-y-4">
              <h6 className="text-lg text-primnary-brand-color">
                Getir'i İndirin
              </h6>
              <nav className="grid gap-4">
                <a href="#">
                  <img
                    src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                    alt=""
                  />
                </a>
              </nav>
            </section>
            <section>
              <h6 className="text-lg text-primnary-brand-color">
                Getir'i Keşfedin
              </h6>
              <span className="grid gap-3 mt-3 text-gray-500 text-sm font-semibold">
                <h6>Hakkımızda</h6>
                <h6>Kariyer</h6>
                <h6>Teknoloji Kariyerleri</h6>
                <h6>İletişim</h6>
                <h6>Sosyal Sorumluluk Projeleri</h6>
                <h6>Basın Bültenleri</h6>
              </span>
            </section>
            <section>
              <h6 className="text-lg text-primnary-brand-color">
                Yardıma mı ihtiyacınız var?
              </h6>
              <span className="grid gap-3 mt-3 text-gray-500 text-sm font-semibold">
                <h6>Sıkça Sorulan Sorular</h6>
                <h6>Kişisel Verilerin Korunması</h6>
                <h6>Gizlilik politikası</h6>
                <h6>Kullanım Koşulları</h6>
                <h6>Çerez Politikası</h6>
                <h6>İşlem Rehberi</h6>
              </span>
            </section>
            <section>
              <h6 className="text-lg text-primnary-brand-color">
                İş Ortağımız Olun
              </h6>
              <span className="grid gap-3 mt-3 text-gray-500 text-sm font-semibold">
                <h6>Bayimiz Olun</h6>
                <h6>Deponu Kirala</h6>
                <h6>GetirYemek Restoranı Ol</h6>
                <h6>GetirÇarşı İşletmesi Ol</h6>
                <h6>Zincir Restoranlar</h6>
              </span>
            </section>
          </div>
          <div className="flex justify-between items-center border-t border-gray-100 mt-6 py-6">
            <div className="text-xs text-gray-700 flex gap-x-8">
              © 2024 Getir
              <a href="#" className="text-primnary-brand-color hover:underline">
                Bilgi Toplumu Hizmetleri
              </a>
            </div>
            <div></div>
            <nav className="flex gap-x-3">
              <a
                href="#"
                className="w-8 h-8 rounded-lg text-gray-500 transition-colors  hover:bg-primnary-brand-color hover:bg-opacity-80 hover:text-primnary-brand-color flex items-center justify-center"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg text-gray-500 transition-colors  hover:bg-primnary-brand-color hover:bg-opacity-80 hover:text-primnary-brand-color flex items-center justify-center"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg text-gray-500 transition-colors  hover:bg-primnary-brand-color hover:bg-opacity-80 hover:text-primnary-brand-color flex items-center justify-center"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="h-8 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100"
              >
                <BiGlobe size={18} />
                Türkçe (TR)
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fouter;
