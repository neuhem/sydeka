import Link from "next/link";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About Sydeka</h1>
          <p>
            Democratizing world-class education through AI-powered learning experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">ACCESS</div>
              <h3>Accessible Education</h3>
              <p>Making high-quality education available to everyone, regardless of location or background.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">ADAPT</div>
              <h3>Adaptive Learning</h3>
              <p>Personalized learning paths that adapt to your pace, style, and goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">INNOV</div>
              <h3>Innovation</h3>
              <p>Cutting-edge AI technology to enhance the learning experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">COMM</div>
              <h3>Community</h3>
              <p>Building a global community of learners and educators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="ai-section">
        <div className="ai-content">
          <div className="ai-text">
            <h2>Our Story</h2>
            <p>
              Inspired by the vision of making university-level education accessible to all,
              Sydeka was founded on the belief that learning should be personalized, engaging,
              and available to everyone.
            </p>
            <p>
              We combine the best of human expertise with AI technology to create learning
              experiences that adapt to each student's unique needs and learning style.
            </p>
          </div>
          <div className="ai-image">
            LEARN
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Join Us?</h2>
          <p>Start your learning journey with Sydeka today.</p>
          <Link href="/lessons" className="btn btn-primary btn-large">
            Explore Lessons
          </Link>
        </div>
      </section>
    </div>
  );
} 