import Container from "@/components/Container";

const categories = [
  "All",
  "Linux",
  "Networking",
  "Web",
  "Windows",
  "Active Directory",
  "Cloud",
  "Mobile",
  "Forensics",
  "OSINT",
  "Cryptography",
];

export default function Categories() {
  return (
    <section className="bg-[#09090B] py-8">

      <Container>

        <div className="flex flex-wrap items-center gap-3">

          {categories.map((category, index) => (

            <button
              key={category}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "border-violet-500 bg-violet-600 text-white"
                  : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-violet-500 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </Container>

    </section>
  );
}