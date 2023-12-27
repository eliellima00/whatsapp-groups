import CardSection from "@/src/components/cardSection";
import CategoriesBar from "@/src/components/categoriesBar";
import Header from "@/src/components/header";

export default function Page() {
  return (
    <main className="flex h-screen w-screen flex-col bg-white container mx-auto">
      <Header />
      <section className="bg-orange-500 h-full px-16">
        <CategoriesBar></CategoriesBar>

        <CardSection></CardSection>
      </section>
    </main>
  );
}
