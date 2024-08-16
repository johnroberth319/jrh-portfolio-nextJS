import React, { useState, useEffect } from "react";
const { Prism: SyntaxHighlighter } = require("react-syntax-highlighter");
const {
  vscDarkPlus,
} = require("react-syntax-highlighter/dist/cjs/styles/prism");

interface GitHubCodePreviewProps {
  repoUrl: string;
  filePath: string; // Assuming you pass the file path as a separate prop
  language: string;
}

const GitHubCodePreview = ({ repoUrl, filePath, language }: GitHubCodePreviewProps) => {
  const [code, setCode] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true); // Default to collapsed
  const MAX_HEIGHT = "500px"; // Example height, adjust as needed

  useEffect(() => {
    // Extracting owner and repo from the repoUrl
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      const owner = match[1];
      const repo = match[2];

      // Construct the API URL
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

      // Fetch code from GitHub API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.content) {
            const content = Buffer.from(data.content, "base64").toString(
              "utf-8"
            ); // Decoding Base64 using Buffer
            setCode(content);
          }
        })
        .catch(console.error); // Handle errors appropriately
    }
  }, [repoUrl, filePath]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLongLines={true}
        customStyle={{
          maxHeight: isCollapsed ? MAX_HEIGHT : "none",
          overflowY: isCollapsed ? "auto" : "initial",
          overflowX: "hidden",
          border: "4px solid grey",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div
          onClick={toggleCollapse}
          className="fixed bottom-10 left-20 bg-gray-700 dark:bg-slate-200 text-white dark:text-black p-2.5 px-6 rounded-lg text-md font-semibold 
            border-2 border-solid border-transparent flex items-center z-10 m-4 cursor-pointer"
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </div>
      </div>
    </div>
  );
};

export default GitHubCodePreview;
