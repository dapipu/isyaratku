const packages = [
  {
    name: "STARTER",
    price: "$750",
    description: "Perfect for small projects",
    features: [
      "3 Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
    ],
  },
  {
    name: "GROWTH",
    price: "$1350",
    description: "Ideal for growing businesses",
    popular: true,
    features: [
      "Up to 7 Pages",
      "Custom Design",
      "SEO Optimization",
      "Speed Optimization",
      "30 Days Support",
    ],
  },
  {
    name: "PREMIUM",
    price: "$2200",
    description: "Full service ready to scale",
    features: [
      "Up to 15 Pages",
      "Advanced Features",
      "E-Commerce Ready",
      "Priority Support",
      "60 Days Support",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#edf7ff] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">

          {/* LEFT */}
          <div>
            <p className="text-sm font-bold tracking-wide text-[#1769e0]">
              SERVICES & PACKAGES
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#10213d]">
              Simple Packages.
            </h2>

            <p className="mt-1 text-4xl font-normal italic text-[#1769e0]">
              Big Impact.
            </p>

            <div className="mt-3 h-1 w-32 -rotate-2 bg-[#ffc400]" />

            <p className="mt-6 max-w-xs text-sm leading-6 text-slate-600">
              Flexible solutions for businesses
              at every stage.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`relative rounded-2xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  item.popular
                    ? "border-2 border-[#ffc400]"
                    : "border border-slate-100"
                }`}
              >

                {item.popular && (
                  <div className="absolute left-0 right-0 top-0 rounded-t-xl bg-[#ffc400] py-2 text-center text-xs font-bold text-[#10213d]">
                    ★ MOST POPULAR
                  </div>
                )}

                <div className={item.popular ? "pt-7" : ""}>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-bold ${
                        item.popular
                          ? "text-[#e5aa00]"
                          : "text-[#1769e0]"
                      }`}
                    >
                      {item.name}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf5ff] text-[#1769e0]">
                      ✦
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-extrabold text-[#10213d]">
                    {item.price}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500">
                    {item.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm text-slate-700"
                      >
                        <span className="font-bold text-[#1769e0]">
                          ✓
                        </span>

                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-bold transition ${
                      item.popular
                        ? "bg-[#ffc400] hover:bg-[#ffd43d]"
                        : "border border-slate-300 hover:border-[#1769e0] hover:text-[#1769e0]"
                    }`}
                  >
                    Get Started
                  </button>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}