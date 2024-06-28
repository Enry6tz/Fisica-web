"use client"
import { useEffect, useState } from 'react';


interface Props {
  path: string
}

export const TeoricoColab = ({path}:Props) => {
  const [htmlFilePath, setHtmlFilePath] = useState('');
  
  useEffect(() => {
    const fullPath = path; // Ruta relativa al archivo HTML dentro de la carpeta "components"
    
    setHtmlFilePath(fullPath);
  }, []);

  return (
    <div className="colab-embed-container">
      <style jsx>{`
        .colab-embed-container {
          position: relative;
          width: 100%;
          padding-top: 90.25%; /* Proporción 16:9 para un video responsivo */
        }
        .colab-embed-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
      {htmlFilePath && (
        <iframe
          title="TeoricoColab"
          src={htmlFilePath}
          scrolling="yes"
        ></iframe>
      )}
    </div>
  );
};

export default TeoricoColab;
