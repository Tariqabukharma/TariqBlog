import "./index.css";
import Service from "./Service";
function Services() {
  return (
    <>
      <h2>Our Services</h2>
      <div className="services">
        <Service
          name="Informative Articles"
          description="Our blog website provides a vast collection of informative articles on various topics, ensuring you stay updated and well-informed. Explore thought-provoking content, gain insights, and expand your knowledge"
        />
        <Service
          name="Engaging Community"
          description="Join our vibrant community of readers and writers. Engage in discussions, share your thoughts, and connect with like-minded individuals. Our blog website fosters a supportive environment for networking and collaboration."
        />

        <Service
          name="Expert Opinions"
          description="Benefit from the expertise of industry professionals and subject matter experts. Our blog website offers access to thought leaders who share their insights, opinions, and expertise through in-depth articles, interviews, and guest contributions."
        />
      </div>
    </>
  );
}
export default Services;
