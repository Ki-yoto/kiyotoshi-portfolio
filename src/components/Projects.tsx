import { projects } from "../../data/portfolio";

export const Projects = () => {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold">Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-600 whitespace-pre-line">
              {project.description}
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ボタン */}
            <div className="mt-6 flex gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                アプリを見る
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  GitHubを見る
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
