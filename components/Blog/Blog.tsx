import BlogDisplayCard from "../BlogDisplayCard/BlogDisplayCard";
import StrokedTitle from "../StrokedTitle/StrokedTitle";

import styles from "./Blog.module.scss";

export default function Blog() {
  return (
    <section className={styles.section}>
      <StrokedTitle title="Read Our News" />
      <div className={styles.sectionNews}>
        <BlogDisplayCard
          imagePath="https://assets.website-files.com/61a3ad3365af7a7bfde3e595/61a3ad3365af7a77bbe3e59a_blog-main-1.jpg"
          title="Don't destroy greenery and don't spoil scenery"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        />
        <BlogDisplayCard
          imagePath="https://assets.website-files.com/61a3ad3365af7a7bfde3e595/61a3ad3365af7a0eaae3e59f_blog-main-2.jpg"
          title="Is climate change happening faster than expected?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        />
        <BlogDisplayCard
          imagePath="https://assets.website-files.com/61a3ad3365af7a7bfde3e595/61a3ad3365af7a12f7e3e5a1_blog-main-3.jpg"
          title="Top 10 facts about wind farms you didn't know"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        />
        <BlogDisplayCard
          imagePath="https://assets.website-files.com/61a3ad3365af7a7bfde3e595/61a3ad3365af7a2bb6e3e5a3_blog-main-4.jpg"
          title="Our goal is to make water available for everyone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        />
      </div>
    </section>
  );
}
