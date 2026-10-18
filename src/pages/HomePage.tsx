import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { featuredProjects, expertiseAreas } from '../data/mockData';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-bg-dark text-text-primary-dark">
      <Header />
      <main className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Section 1 - Hero */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-text-primary-dark">Beyond Technology. Driven by Curiosity.</h1>
            <p className="text-lg text-text-secondary mb-8">AlbeeTech adalah ruang digital untuk mengeksplorasi teknologi, membangun karya nyata, dan berbagi pengetahuan.</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-accent text-text-primary-light font-medium rounded-lg hover:bg-accent-dark transition">Jelajahi Portofolio</button>
              <button className="px-6 py-3 border border-border-dark font-medium rounded-lg hover:border-text-secondary transition">Kenali Founder</button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/src/assets/images/hero_portrait_founder_1792340192305.jpg" alt="Very Setiawan" className="w-full h-auto" />
          </div>
        </section>

        {/* Section 2 - Featured Portfolio */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Selected Work. Real Impact.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-xs text-text-secondary mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{project.summary}</p>
                  <a href="#" className="text-accent text-sm font-medium hover:underline">View Details</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 - Meet the Founder */}
        <section className="bg-surface-dark border border-border-dark rounded-2xl p-12 mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Mind Behind AlbeeTech.</h2>
            <p className="text-text-secondary mb-6">Very Setiawan, Founder & Creator of AlbeeTech. Passionate about cybersecurity, networking, and educational technology.</p>
            <button className="px-6 py-3 border border-border-dark font-medium rounded-lg hover:border-text-secondary transition">Full Bio</button>
          </div>
          <img src="/src/assets/images/hero_portrait_founder_1792340192305.jpg" alt="Very Setiawan" className="rounded-2xl w-full h-auto" />
        </section>

        {/* Section 4 - Expertise */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12">What We Explore.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="bg-surface-dark border border-border-dark rounded-xl p-8">
                <h3 className="text-lg font-bold mb-2">{area.title}</h3>
                <p className="text-sm text-text-secondary">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};
