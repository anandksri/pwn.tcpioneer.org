import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/modules/Hero";
import ModulesExplorer from "@/sections/modules/ModulesExplorer";
import PageWrapper from "@/components/PageWrapper";
import { listPublishedModules } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function ModulesPage() {
  let modules: Awaited<ReturnType<typeof listPublishedModules>> = [];
  let error = false;

  try {
    modules = await listPublishedModules();
  } catch {
    error = true;
  }

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main>
          <Hero />
          <ModulesExplorer modules={modules} error={error} />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
