import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(
    bullets ? bullets.split(",") : []
  );

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 mt-10 space-y-10">
      {/* CV Display Section */}
      <div className="w-full max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-4">My Resume</h2>

        {/* Download Button */}
        <a
          href="/CaoHoaiYenVy_Resume.pdf"
          download
          className="inline-block mb-6 px-5 py-2 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700 transition"
        >
          Download resume (PDF)
        </a>

        {/* Embedded PDF */}
        <div className="w-full h-[700px] border shadow rounded-lg overflow-hidden">
          <iframe
            src="/CaoHoaiYenVy_Resume.pdf"
            width="100%"
            height="100%"
            title="Vy Cao's Resume"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Optional Resume Summary Section (if needed) */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between mt-10">
        <div className="w-full md:w-2/5 mb-4 md:mb-0">
          <h2 className="text-xl font-medium">{dates}</h2>
          <h3 className="text-sm opacity-50">{type}</h3>
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="text-lg font-bold">{position}</h2>
          {bulletsLocal && bulletsLocal.length > 0 && (
            <ul className="list-disc list-inside">
              {bulletsLocal.map((bullet, index) => (
                <li key={index} className="text-sm my-1 opacity-70">
                  {bullet.trim()}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectResume;
