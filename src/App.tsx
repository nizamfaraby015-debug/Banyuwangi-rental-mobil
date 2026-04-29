import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  CheckCircle2,
  Star,
  MessageCircle,
  Globe,
  X,
} from "lucide-react";
import { useState, useMemo } from "react";

const WA_NUMBER = "6282342400230";

const handleWA = (carName = "Mobil Premium") => {
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      `Saya ingin sewa mobil ${carName}`
    )}`,
    "_blank"
  );
};

const translations = {
  en: {
    heroSub: "Luxury & Performance Car Rentals",
    heroDesc: "Drive elite vehicles for business, travel, or special moments.",
    viewCars: "View Our Cars",
    getQuote: "Get a Quote",
    selectBrand: "Select Brand",
    priceRange: "Price Range",
    vehicleType: "Vehicle Type",
    search: "Search",
    ourLuxuryCars: "Our Luxury Cars",
    limitedUnits: "Limited Units Available",
    onlyLeft: "Only {num} left",
    perDay: "/ day",
    bookNow: "Book Now",
    aboutUs: "About Us",
    aboutTitle: "Luxury. Performance. Trust.",
    aboutDesc: "PREMIUM AUTO RENT - A company created out of passion for the automotive industry, offering a fleet of premium vehicles to fulfill your dreams of driving luxury cars in Banyuwangi.",
    feature1Title: "Premium Fleet Only",
    feature1Desc: "We only add the top-tier vehicles to our collection.",
    feature2Title: "Fully Insured",
    feature2Desc: "Well-maintained and comprehensively insured for your peace of mind.",
    feature3Title: "Flexible Rental Options",
    feature3Desc: "Self-drive or with an elite chauffeur service.",
    ctaTitle: "Ready to Drive Premium?",
    ctaDesc: "Book your luxury car today and elevate your journey in Banyuwangi.",
    bookNowWa: "👉 Book Now via WhatsApp",
    premiumVehicles: "Premium Vehicles",
    premiumVehiclesDesc: "Well-maintained luxury cars",
    reviewsDesc: "Trusted by 500+ clients",
    allBrands: "All Brands",
    allPrices: "All Prices",
    allTypes: "All Types",
    under500k: "Under 500k",
    above500k: "500k and above",
    noCarsFound: "No cars found for your search criteria.",
    viewDetails: "View Details",
    features: "Features",
    specifications: "Specifications",
    availability: "Availability",
    available: "Available Now",
    close: "Close",
  },
  id: {
    heroSub: "Sewa Mobil Mewah & Performa Tinggi",
    heroDesc: "Kendarai kendaraan elit untuk bisnis, perjalanan, atau momen spesial.",
    viewCars: "Lihat Mobil Kami",
    getQuote: "Dapatkan Penawaran",
    selectBrand: "Pilih Merek",
    priceRange: "Rentang Harga",
    vehicleType: "Tipe Kendaraan",
    search: "Cari",
    ourLuxuryCars: "Koleksi Mobil Mewah Kami",
    limitedUnits: "Unit Terbatas",
    onlyLeft: "Sisa {num} unit",
    perDay: "/ hari",
    bookNow: "Pesan Sekarang",
    aboutUs: "Tentang Kami",
    aboutTitle: "Kemewahan. Performa. Kepercayaan.",
    aboutDesc: "PREMIUM AUTO RENT - Perusahaan yang diciptakan dari passion pada industri otomotif, menawarkan armada kendaraan premium untuk mewujudkan impian Anda mengendarai mobil mewah di Banyuwangi.",
    feature1Title: "Hanya Armada Premium",
    feature1Desc: "Kami hanya menambahkan kendaraan tingkat atas ke dalam koleksi kami.",
    feature2Title: "Asuransi Penuh",
    feature2Desc: "Terawat dengan baik dan diasuransikan secara komprehensif untuk ketenangan pikiran Anda.",
    feature3Title: "Opsi Sewa Fleksibel",
    feature3Desc: "Sewa mobil lepas kunci atau dengan layanan supir elit.",
    ctaTitle: "Siap Mengemudi Mewah?",
    ctaDesc: "Pesan mobil mewah Anda hari ini dan tingkatkan perjalanan Anda di Banyuwangi.",
    bookNowWa: "👉 Pesan via WhatsApp",
    premiumVehicles: "Kendaraan Premium",
    premiumVehiclesDesc: "Sewa mobil mewah terawat",
    reviewsDesc: "Dipercaya oleh 500+ klien",
    allBrands: "Semua Merek",
    allPrices: "Semua Harga",
    allTypes: "Semua Tipe",
    under500k: "Di bawah 500rb",
    above500k: "500rb ke atas",
    noCarsFound: "Mobil tidak ditemukan untuk kriteria pencarian Anda.",
    viewDetails: "Lihat Detail",
    features: "Fitur",
    specifications: "Spesifikasi",
    availability: "Ketersediaan",
    available: "Tersedia Sekarang",
    close: "Tutup",
  }
};

type Lang = "en" | "id";

const cars = [
  {
    name: "Toyota Fortuner VRZ",
    price: "1.200.000",
    priceNum: 1200000,
    image: "./fortuner-1.webp",
    specs: "Automatic • Diesel • 7 Seats",
    brand: "Toyota",
    type: "SUV",
    features: ["Leather Seats", "Bluetooth Audio", "360 Camera", "Premium Audio", "Keyless Entry"]
  },
  {
    name: "Daihatsu Xenia",
    price: "400.000",
    priceNum: 400000,
    image: "./xenia.jpeg",
    specs: "Automatic • Petrol • 7 Seats",
    brand: "Daihatsu",
    type: "MPV",
    features: ["Spacious Interior", "Bluetooth Audio", "Rear Camera", "AC Double Blower", "Keyless Entry"]
  },
  {
    name: "Honda Brio",
    price: "350.000",
    priceNum: 350000,
    image: "./brio.jpg",
    specs: "Automatic • Petrol • 5 Seats",
    brand: "Honda",
    type: "Hatchback",
    features: ["Compact Design", "Bluetooth Audio", "Rear Camera", "Fuel Efficient", "Keyless Entry"]
  },
  {
    name: "Pajero Sport",
    price: "1.200.000",
    priceNum: 1200000,
    image: "./pajero.jpg",
    specs: "Automatic • Diesel • 7 Seats",
    brand: "Mitsubishi",
    type: "SUV",
    features: ["Leather Seats", "Bluetooth Audio", "360 Camera", "Sunroof", "Keyless Entry"]
  },
  {
    name: "Innova Reborn",
    price: "800.000",
    priceNum: 800000,
    image: "./innova.png",
    specs: "Automatic • Diesel • 7 Seats",
    brand: "Toyota",
    type: "MPV",
    features: ["Captain Seats", "Bluetooth Audio", "Rear Camera", "Premium Comfort", "Keyless Entry"]
  },
  {
    name: "Toyota Avanza",
    price: "400.000",
    priceNum: 400000,
    image: "./avanza-veloz.webp",
    specs: "Automatic • Petrol • 7 Seats",
    brand: "Toyota",
    type: "MPV",
    features: ["Spacious Interior", "Bluetooth Audio", "Rear Camera", "AC Double Blower", "Keyless Entry"]
  },
];

export default function App() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [lang, setLang] = useState<Lang>("id");
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);
  const t = translations[lang];

  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  
  const [appliedFilters, setAppliedFilters] = useState({ brand: "all", price: "all", type: "all" });

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (appliedFilters.brand !== "all" && car.brand !== appliedFilters.brand) return false;
      if (appliedFilters.type !== "all" && car.type !== appliedFilters.type) return false;
      if (appliedFilters.price === "under500k" && car.priceNum >= 500000) return false;
      if (appliedFilters.price === "above500k" && car.priceNum < 500000) return false;
      return true;
    });
  }, [appliedFilters]);

  const handleSearch = () => {
    setAppliedFilters({ brand: selectedBrand, price: selectedPrice, type: selectedType });
    document.getElementById("cars")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(l => l === "id" ? "en" : "id");

  return (
    <div className="min-h-screen bg-dark-bg text-text-soft font-sans overflow-x-hidden">
      {/* --- LANG SWITCHER --- */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur text-white/80 hover:bg-white/10 hover:text-white transition-all text-sm font-medium"
        >
          <Globe className="w-4 h-4" />
          {lang === "id" ? "ID" : "EN"}
        </button>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-32">
        {/* Background Image: White car from behind on a dark cinematic road */}
        <div className="absolute inset-0 z-0">
          <img
            src="./hero-bg.png"
            alt="Premium Car Rental Banyuwangi background"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              bgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setBgLoaded(true)}
          />
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-transparent to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col justify-center h-full"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xl md:text-3xl lg:text-4xl font-semibold mb-4 text-shadow-sm">
            Banyuwangi
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-normal tracking-wide mb-2 text-shadow-sm leading-tight">
            PREMIUM AUTO RENT
          </h1>
          <h2 className="text-xl md:text-3xl text-white/90 font-light mb-6 tracking-wide">
            {t.heroSub}
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base mb-10">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                document
                  .getElementById("cars")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-3 rounded text-gold border border-gold hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300 font-medium tracking-wider"
            >
              {t.viewCars}
            </button>
            <button
              onClick={() => handleWA("untuk quote harga")}
              className="w-full sm:w-auto px-8 py-3 rounded bg-gold text-black hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 font-medium tracking-wider"
            >
              {t.getQuote}
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- SEARCH BAR SECTION --- */}
      <section className="relative z-20 -mt-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-xl p-2 md:p-3 flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between"
        >
          <div className="relative flex-1 w-full border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full h-full px-4 py-3 bg-transparent text-white/90 text-sm appearance-none cursor-pointer outline-none"
            >
              <option value="all" className="bg-dark-sec text-white">{t.selectBrand} ({t.allBrands})</option>
              {Array.from(new Set(cars.map(c => c.brand))).map(b => (
                <option key={b} value={b} className="bg-dark-sec text-white">{b}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
          </div>
          
          <div className="relative flex-1 w-full border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full h-full px-4 py-3 bg-transparent text-white/90 text-sm appearance-none cursor-pointer outline-none"
            >
              <option value="all" className="bg-dark-sec text-white">{t.priceRange} ({t.allPrices})</option>
              <option value="under500k" className="bg-dark-sec text-white">{t.under500k}</option>
              <option value="above500k" className="bg-dark-sec text-white">{t.above500k}</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
          </div>
          
          <div className="relative flex-1 w-full border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full h-full px-4 py-3 bg-transparent text-white/90 text-sm appearance-none cursor-pointer outline-none"
            >
              <option value="all" className="bg-dark-sec text-white">{t.vehicleType} ({t.allTypes})</option>
              {Array.from(new Set(cars.map(c => c.type))).map(b => (
                <option key={b} value={b} className="bg-dark-sec text-white">{b}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
          </div>
          
          <button
            onClick={handleSearch}
            className="w-full md:w-auto px-10 py-3 bg-gold text-black rounded-lg hover:bg-gold-hover hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 font-medium"
          >
            {t.search}
          </button>
        </motion.div>
      </section>

      {/* --- OUR LUXURY CARS SECTION --- */}
      <section id="cars" className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-gold mb-4">
            {t.ourLuxuryCars}
          </h2>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-3 py-1 rounded-full text-xs text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
            {t.limitedUnits}
          </div>
        </motion.div>

        {filteredCars.length === 0 ? (
          <div className="text-center py-20 text-white/50">
            {t.noCarsFound}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCars.map((car, index) => (
                <motion.div
                  key={car.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel group rounded-xl overflow-hidden glass-panel-hover"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur pb-px px-2 rounded text-[10px] text-white/80 border border-white/10 uppercase tracking-widest">
                      {t.onlyLeft.replace("{num}", String(Math.floor(Math.random() * 3) + 1))}
                    </div>
                    <img
                      src={car.image}
                      alt={car.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-sec via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl text-white font-semibold mb-2">
                      {car.name}
                    </h3>
                    <div className="text-gold font-serif text-lg mb-3">
                      Rp {car.price} <span className="text-sm text-white/50 font-sans">{t.perDay}</span>
                    </div>
                    <p className="text-xs text-white/50 mb-6 uppercase tracking-widest flex items-center justify-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/30"></span>
                      {car.specs}
                      <span className="w-1 h-1 rounded-full bg-white/30"></span>
                    </p>
                    <div className="flex gap-2 w-full">
                      <button
                        onClick={() => setSelectedCar(car)}
                        className="flex-1 py-2.5 rounded border border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-medium text-sm"
                      >
                        {t.viewDetails}
                      </button>
                      <button
                        onClick={() => handleWA(car.name)}
                        className="flex-1 py-2.5 rounded border border-gold/50 text-gold hover:bg-gold hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm"
                      >
                        <MessageCircle className="w-4 h-4" /> {t.bookNow}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="relative py-24 border-y border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop"
            alt="Forest road"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/90 to-dark-bg/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-gold uppercase tracking-widest text-sm mb-4">
              {t.aboutUs}
            </p>
            <h2 className="font-serif text-4xl text-white mb-6 leading-tight">
              {t.aboutTitle}
            </h2>
            <p className="text-white/60 leading-relaxed max-w-lg">
              {t.aboutDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-6"
          >
            <div className="flex gap-4 items-start pb-6 border-b border-white/10">
              <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white text-lg font-medium mb-1">
                  {t.feature1Title}
                </h4>
                <p className="text-white/50 text-sm">
                  {t.feature1Desc}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start pb-6 border-b border-white/10">
              <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white text-lg font-medium mb-1">
                  {t.feature2Title}
                </h4>
                <p className="text-white/50 text-sm">
                  {t.feature2Desc}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white text-lg font-medium mb-1">
                  {t.feature3Title}
                </h4>
                <p className="text-white/50 text-sm">
                  {t.feature3Desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            {t.ctaDesc}
          </p>
          <button
            onClick={() => handleWA()}
            className="px-10 py-4 bg-gold text-black rounded-lg hover:bg-gold-hover hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] transition-all duration-300 font-medium text-lg inline-flex items-center gap-2"
          >
            {t.bookNowWa}
          </button>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/50 text-sm text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold">
                <span>🚗</span>
              </div>
              <div>
                <strong className="block text-white">{t.premiumVehicles}</strong>
                {t.premiumVehiclesDesc}
              </div>
            </div>
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold">
                <Star className="w-5 h-5 fill-gold" />
              </div>
              <div>
                <strong className="block text-white">5-Star Reviews</strong>
                {t.reviewsDesc}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-dark-sec py-8 px-4 text-center border-t border-white/5">
        <p className="text-white/30 text-sm">
          &copy; {new Date().getFullYear()} Banyuwangi Premium Auto Rent. All
          rights reserved.
        </p>
      </footer>

      {/* --- FLOATING WA BUTTON --- */}
      <button
        onClick={() => handleWA()}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
        <MessageCircle className="w-6 h-6 relative z-10" />
      </button>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
              onClick={() => setSelectedCar(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="glass-panel w-full max-w-3xl rounded-2xl overflow-hidden relative z-10 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white transition-colors backdrop-blur border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 overflow-y-auto">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8">
                    <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-1">{selectedCar.brand}</p>
                    <h3 className="text-white font-serif text-3xl sm:text-4xl">{selectedCar.name}</h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col gap-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <div className="text-white/50 text-xs uppercase tracking-widest mb-1">{t.vehicleType}</div>
                      <div className="text-gold font-medium">{selectedCar.type}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <div className="text-white/50 text-xs uppercase tracking-widest mb-1">{t.priceRange}</div>
                      <div className="text-gold font-medium">Rp {selectedCar.price}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center md:col-span-2">
                      <div className="text-white/50 text-xs uppercase tracking-widest mb-1">{t.specifications}</div>
                      <div className="text-white/80 font-medium text-sm">{selectedCar.specs}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-gold" />
                      {t.features}
                    </h4>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                      {selectedCar.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">{t.availability}</div>
                      <div className="text-gold text-sm">{t.available}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-dark-bg/90 backdrop-blur shrink-0 grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedCar(null)}
                  className="py-3 rounded border border-white/20 text-white hover:bg-white/10 transition-all font-medium"
                >
                  {t.close}
                </button>
                <button
                  onClick={() => handleWA(selectedCar.name)}
                  className="py-3 rounded bg-gold text-black hover:bg-gold-hover hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all flex justify-center items-center gap-2 font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.bookNow}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
