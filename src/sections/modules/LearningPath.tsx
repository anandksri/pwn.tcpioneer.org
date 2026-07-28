import Container from "@/components/Container";

const path = [
  "Linux",
  "Networking",
  "Web Security",
  "OWASP",
  "Burp Suite",
  "CTF",
];

export default function LearningPath() {
  return (
    <section className="bg-[#09090B] py-24">

      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            Learning Path
          </span>

          <h2 className="mt-5 text-4xl font-black text-white">
            Follow the Recommended Journey
          </h2>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">

            {path.map((item, index) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-4 font-semibold text-white">
                  {item}
                </div>

                {index !== path.length - 1 && (
                  <span className="text-violet-500 text-2xl">→</span>
                )}

              </div>

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}