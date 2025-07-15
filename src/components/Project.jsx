import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {/* top row */}
      <div
        className="flex flex-wrap items-center justify-between py-10 space-y-8 sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* title + tech tags */}
        <div>
          <p className="text-2xl font-semibold text-white">{title}</p>
          <div className="mt-2 flex flex-wrap gap-4 text-sand">
            {tags.map((tag) => (
              <span key={tag.id} className="flex items-center gap-1">
                <img src={tag.path} alt={tag.name} className="h-4 w-4" />
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-4">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-royal px-3 py-1 text-sm font-medium text-white hover:bg-royal/80 transition-colors"
            >
              GitHub ↗
            </a>
          )}
          <button
            onClick={() => setShowDetails(true)}
            className="flex items-center gap-1 text-sand hover:text-white transition-colors"
          >
            Read More
            <img src="assets/arrow-right.svg" alt="" className="w-5" />
          </button>
        </div>
      </div>

      {/* separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {/* modal */}
      {showDetails && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default Project;
