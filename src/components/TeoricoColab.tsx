'use client'
export const TeoricoColab = () => {
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
      <iframe
        title="TeoricoColab"
        src="/Teorico.html" // La ruta a tu archivo HTML
        
        scrolling="yes"
        ></iframe>
    </div>
  );
};

export default TeoricoColab;