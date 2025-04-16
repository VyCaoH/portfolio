import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>

      {data.showCursor && <Cursor />}

      <div
        className={`container mx-auto my-10 px-4 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="w-full flex flex-col items-center">
            <div
              className={`w-full max-w-5xl ${
                theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } p-8 rounded-lg shadow`}
            >
              <h1 className="text-3xl font-bold text-center mb-6">
                My Resume (PDF)
              </h1>

              {/* Download Button */}
              <div className="text-center mb-6">
                <a
                  href="/CaoHoaiYenVy_Resume.pdf"
                  download
                  className="inline-block px-5 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition"
                >
                  Download Resume
                </a>
              </div>

              {/* PDF Viewer */}
              <div className="w-full h-[750px] border rounded-md overflow-hidden">
                <iframe
                  src="/CaoHoaiYenVy_Resume.pdf"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  title="CV PDF Viewer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
