import { FaBaseballBall, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { Fa0 } from "react-icons/fa6";
import Link from "next/link";
import TeoricoColab from "@/components/TeoricoColab";


export default function InformePage() {
  return (
    <div className="pb-10">

      <div className="text-center text-BluePrimary pt-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-4">INFORME</h1>
        <span className="text-sm sm:text-lg md:text-xl xl:text-2xl font-light p-4">Analisis de aspectos relacionados con el basetball mediante el uso de tecnicas de programacion y principios de física.</span>
      </div>
      <div className="flex lg:flex-row flex-nowrap flex-col-reverse items-center lg:items-start justify-center text-BluePrimary">

        <div className="text-BluePrimary flex-1 mx-5 my-10 flex items-center justify-center flex-col flex-nowrap">
          <div className="text-sm sm:text-lg md:text-xl">
            <h2 className="text-3xl font-bold mb-3 ">MOTIVACIÓN</h2>
            <p>Nuestro interés en analizar los tiros libres en baloncesto surge de la curiosidad por comprender la probabilidad de encestar y la <span className="font-semibold">física detrás de este proceso</span>. Entonces, la motivación principal que tuvo el grupo para realizar este proyecto fue implementar un software que permita mejorar y asistir a los jugadores casuales o profesionales de basket. Para lograr determinar la mejor estrategia para realizar tiros al aro, utilizamos técnicas de simulación, para poder trackear el balón y obtener resultados de su trayectoria. A través de este enfoque, buscamos entender mejor los factores que afectan la precisión de un tiro libre en baloncesto y desarrollar estrategias efectivas basadas en <span className="font-semibold">principios físicos.</span></p>
          </div>

          <div className="text-sm sm:text-lg md:text-xl mt-5">
            <h2 className="text-3xl font-bold mb-3">INTRODUCCIÓN</h2>
            <p>Lo que estamos estudiando en el proyecto es la mejora en el tiro de basket, tomando en cuenta las <span className="font-semibold">ecuaciones de la cinemática</span>, y poniéndolas a prueba en dos partes:</p> <br />

            <p>
              una parte teórica donde se van a usar ejemplos puntuales y estudiar con las anteriores fórmulas dichas, reemplazando. Antes de explicar los conceptos implementados en el software de cinemática y dinámica, primero es importante conocer en sí estos conceptos.
            </p>
            <br />


            <p> <FaBaseballBall className="text-orange-700 inline mx-2" /> La <span className="font-semibold">cinemática</span> es el estudio de los movimientos que un objeto hace, sin importar las fuerzas involucradas. Por ejemplo, si estamos parados en una habitación, nosotros tenemos una <span className="font-semibold">posición</span>  actual (donde nos encontramos en el espacio), una <span className="font-semibold">velocidad</span> (qué tan rápido nos movemos de un lugar a otro de la habitación) y una <span className="font-semibold">aceleración</span> (cómo va variando nuestra velocidad, es decir, si estamos quietos y nos movemos, estaremos acelerando).</p> <br />
            <p>  <FaBaseballBall className="text-orange-700 inline mx-2" />La < span className="font-semibold">dinámica</span>  es el estudio de por qué se mueven las cosas, involucrando fuerzas. Por ejemplo, si estamos en esa misma habitación de la que hablamos recién y empujamos a otra persona que se encuentra en la misma, involucramos una <span className="font-semibold">fuerza</span> (el empujón en sí), la cual dependerá de la masa de la persona (una persona con mayor peso necesitará un empujón más fuerte) y la <span className="font-semibold">inercia</span> de la misma (si la persona que vamos a empujar ya estaba caminando, la tendencia de esta persona es seguir en movimiento y por lo tanto cambiar su dirección va a requerir de un empuje más fuerte).</p>
          </div>

          <div className="text-sm sm:text-lg md:text-xl mt-5">
            <h2 className="text-3xl font-bold mb-3">MATERIALES Y MÉTODOS</h2>
            <p className="font-semibold">Para la recolección de datos y análisis en este estudio sobre la precisión en los tiros al aro en baloncesto, se emplearon los siguientes materiales y métodos:</p>
            <ul className="m-2">
              <li className="flex flex-row flex-nowrap m-1"> <p> <FaBaseballBall className="text-orange-700 inline mx-2" />  <span className="font-semibold">Cámara de Video:</span> Se utilizó una cámara para grabar distintas sesiones de tiros en una cancha de baloncesto. Esto permitió obtener registros visuales detallados de la trayectoria de la pelota y la técnica de tiro de los integrantes del grupo.</p></li>
              <li className="flex flex-row flex-nowrap m-1"> <p> <FaBaseballBall className="text-orange-700 inline mx-2" />  <span className="font-semibold">Cinta Métrica:</span> Con el objetivo de medir con precisión las distancias desde las que se realizaron los tiros, se usó una cinta métrica. Esto aseguró que las posiciones fueran consistentes y exactas en cada intento.</p></li>
              <li className="flex flex-row flex-nowrap m-1"> <p> <FaBaseballBall className="text-orange-700 inline mx-2" />  <span className="font-semibold">Balón de Baloncesto Profesional:</span> Se utilizó un balón de baloncesto profesional. Esto ayudó a garantizar que los resultados fueran aplicables en contextos de juego real.</p></li>
              <li className="flex flex-row flex-nowrap m-1"> <p> <FaBaseballBall className="text-orange-700 inline mx-2" />  <span className="font-semibold">Tiros Repetidos:</span> Para mejorar la precisión de los cálculos y obtener datos más fiables, se realizaron múltiples tiros desde una posición fija. Esto permitió un análisis estadístico más robusto y una mejor comprensión de las variaciones en los tiros exitosos.</p></li>
            </ul>
            <p> Estos  <span className="font-semibold">materiales y métodos</span> se combinaron para crear un estudio detallado y preciso sobre la realización de tiros al aro en baloncesto, proporcionando datos valiosos para el análisis de la técnica y la precisión en el deporte.</p>
          </div>
        </div>
      </div>
      <div className="text-BluePrimary flex-1 my-10 flex items-center justify-center flex-col flex-nowrap">
        <div className="text-sm sm:text-lg md:text-xl flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-3">Analisis con Colaboratory </h2>
          <Link href="https://colab.research.google.com/drive/1WBHdcBLYBEVhQ494ADrgbU3bS3tHsyoJ#scrollTo=Tj3I1SU1yca-" className="text-blue-600 text-lg font-normal" >ver codigo fuente</Link>
        </div>
      </div>
        <div className="h-full w-full py-1 bg-slate-400">
          <TeoricoColab path="/teorico.html"/>
        </div>
        <div className="p-10">
      
      <div className="text-sm sm:text-lg md:text-xl mt-5 w-full flex  flex-col flex-nowrap items-center justify-center text-start ">
            <h2 className="text-3xl font-bold mb-3">Elementos para interactuar con GeoGebra</h2>
            <p className="">Realizamos una simulación gráfica que describe la situación de tiro libre al aro en el cual dado los datos de entrada: velocidad inicial, ángulo, y altura, simula el tiro de basket, simula el tiro al aro y se grafican los vectores velocidad, aceleración y posición.
</p>
            <span><Link href="https://www.geogebra.org/calculator/uj3nxmf4?embed" className="text-blue-500"> ver codigo fuente</Link></span>
       

        <iframe
          src="https://www.geogebra.org/calculator/uj3nxmf4?embed"
          width={800}
          height={600}
          
          frameBorder={0}
          style={{
            border: "1px solid #e4e4e4",
            borderRadius: "4px"
          }}
        ></iframe>
      </div>

    </div>
      <div>
        <div className="text-BluePrimary flex-1 mx-5 my-10 flex items-center justify-center flex-col flex-nowrap">
          <div className="text-sm sm:text-lg md:text-xl">
            <h2 className="text-3xl font-bold mb-3">CONCLUSIÓN</h2>
            <p>
              En nuestro proyecto, desarrollamos un software capaz de analizar el tiro libre de basket. Esto lo logramos a través de la captura y análisis de videos, hemos implementado un sistema de trackeo en Python que nos ha permitido examinar los aspectos cinemáticos del movimiento de la pelota y la situación de tiro libre al aro.
            </p>
            <p>
              Hasta el momento, nuestros análisis se centraron en la cinemática, logrando descomponer y entender la trayectoria de la pelota, su velocidad, aceleración y las distintas fases del tiro libre.
            </p>
            <p>
              Sin embargo, estamos en proceso del análisis dinámico, que abordará las fuerzas involucradas y cómo estas afectan el movimiento del balón. Específicamente, en la siguiente fase del proyecto, nos enfocaremos en los siguientes aspectos:
            </p>

            <h3 className="text-2xl font-bold mt-4">Energía Cinética y Potencial:</h3>
            <p>
              La energía cinética (Ek​) del balón se calculará usando la fórmula:
            </p>
            <pre className="bg-gray-100 p-2 rounded">Ek ​= ½.𝑚.𝑣<sup>2</sup></pre>
            <p>
              donde 𝑚 es la masa de la pelota y v es su velocidad.
            </p>
            <p>
              La energía potencial gravitatoria (Ep​) se determinará con:
            </p>
            <pre className="bg-gray-100 p-2 rounded">Ep ​= 𝑚.g.h</pre>
            <p>
              donde 𝑚 es la masa de la pelota, g es la aceleración debida a la gravedad y h es la altura del balón respecto a una referencia.
            </p>

            <h3 className="text-2xl font-bold mt-4">Impulso y Transferencia de Momento:</h3>
            <p>
              Analizaremos el impulso (𝐽) impartido al balón durante el tiro, utilizando:
            </p>
            <pre className="bg-gray-100 p-2 rounded">𝐽 = 𝐹.Δ𝑡</pre>
            <p>
              donde 𝐹 es la fuerza aplicada y Δ𝑡 es el tiempo de aplicación de dicha fuerza.
            </p>
            <p>
              Evaluaremos la transferencia de momento (Δp) mediante la relación:
            </p>
            <pre className="bg-gray-100 p-2 rounded">Δp = m.Δv</pre>
            <p>
              donde Δv es el cambio en la velocidad del balón.
            </p>

            <h3 className="text-2xl font-bold mt-4">Trabajo realizado por las fuerzas:</h3>
            <p>
              Calcularemos el trabajo (𝑊) realizado por las fuerzas sobre el balón utilizando:
            </p>
            <pre className="bg-gray-100 p-2 rounded">W = F.d.cos(θ)</pre>
            <p>
              donde F es la magnitud de la fuerza aplicada, 𝑑 es la distancia recorrida y θ es el ángulo entre la fuerza y la dirección del movimiento.
            </p>
            <p>
              Este componente es crucial para obtener una comprensión completa y detallada de la física detrás del tiro libre en el baloncesto.
            </p>
            <p>
              En resumen, los avances realizados hasta ahora destacan la efectividad de nuestro enfoque para el análisis cinemático y nos preparan para la siguiente fase del proyecto, en la cual integraremos el análisis dinámico para lograr una evaluación más exhaustiva del tiro libre de basket.
            </p>
            <div className="pt-10 text-center">
            <Link href={"/proyecto/recursos"} className="text-blue-400 ">Ver Anexo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
