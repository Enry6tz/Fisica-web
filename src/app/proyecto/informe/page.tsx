import { FaBaseballBall, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { Fa0 } from "react-icons/fa6";
import Link from "next/link";
import TeoricoColab from "@/components/TeoricoColab";
import { LiaBasketballBallSolid } from "react-icons/lia";

export default function InformePage() {
  return (
    <div className="pb-10">
      <div className="text-center text-BluePrimary pt-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-4">INFORME</h1>
        <span className="text-sm sm:text-lg md:text-xl xl:text-2xl font-light p-4">
          Análisis de aspectos relacionados con el básquet mediante el uso de técnicas de programación y principios de física.
        </span>
      </div>
      <div className="flex lg:flex-row flex-nowrap flex-col-reverse items-center lg:items-start justify-center text-BluePrimary">
        <div className="text-BluePrimary flex-1 mx-5 my-10 flex items-center justify-center flex-col flex-nowrap">
          <div className="text-sm sm:text-lg md:text-xl">
            <h2 className="text-3xl font-bold mb-3">RESUMEN</h2>
            <p>
              Este informe presenta un análisis detallado del lanzamiento de baloncesto desde la línea de tiro libre, enfocándose en los principios de la cinemática, dinámica y energía. El objetivo del proyecto es, por un lado, aplicar fórmulas y principios físicos para predecir el comportamiento de la pelota, y por otro, utilizar videos para rastrear la trayectoria de la pelota y comparar los resultados teóricos con los datos experimentales. Se grabaron videos de lanzamientos y, mediante un programa en Python, se rastreó la posición de la pelota y se predijo el éxito del tiro. Los resultados obtenidos muestran cómo las leyes de la física pueden predecir con precisión la trayectoria de la pelota, y se identifican y analizan las discrepancias entre los resultados teóricos y prácticos. Este informe no solo proporciona una comprensión teórica detallada de los principios físicos involucrados en un lanzamiento de baloncesto (tiro oblicuo), sino que también demuestra su aplicación práctica, sirviendo como una guía comprensiva para la intersección entre física y deporte.
            </p>
          </div>

          <div className="text-sm sm:text-lg md:text-xl mt-5">
            <h2 className="text-3xl font-bold mb-3">INTRODUCCIÓN</h2>
            <p>
              El baloncesto es un deporte en el que se combinan habilidades técnicas y principios físicos fundamentales. En este proyecto, nos hemos propuesto analizar los componentes físicos de un lanzamiento desde la línea de tiro libre, utilizando conceptos de cinemática, dinámica y energía. Este análisis no solo nos permite comprender mejor los factores que determinan el éxito de un tiro, sino también medir y predecir estos factores con precisión.
            </p>
            <br />
            <p>
              <LiaBasketballBallSolid className="text-orange-700 inline mx-2" />
              En la <span className="font-semibold">cinemática</span>, estudiamos el movimiento de la pelota sin tener en cuenta las fuerzas que lo causan, describiendo su trayectoria desde que abandona la mano del jugador hasta que llega al aro. Para esto, hemos utilizado ecuaciones de movimiento que nos permiten calcular variables críticas como la velocidad inicial, el ángulo de lanzamiento y el tiempo de vuelo.
            </p>
            <br />
            <p>
              <LiaBasketballBallSolid className="text-orange-700 inline mx-2" />
              La <span className="font-semibold">dinámica</span> se enfoca en las fuerzas que actúan sobre la pelota durante su trayectoria. Aplicando la segunda ley de Newton, analizamos fuerzas como la gravedad, la resistencia del aire y la fuerza inicial ejercida por el jugador influyen en el movimiento de la pelota. Este análisis nos brinda una comprensión profunda de cómo las fuerzas modulan la trayectoria de la pelota y cómo las pequeñas variaciones en estas fuerzas pueden alterar significativamente el resultado del tiro.
            </p>
            <br />
            <p>
              <LiaBasketballBallSolid className="text-orange-700 inline mx-2" />
              El análisis <span className="font-semibold">energético</span> nos permite examinar la conservación y transformación de la energía a lo largo del vuelo de la pelota. Calculando la energía cinética y potencial en diferentes puntos de la trayectoria, podemos visualizar las transiciones energéticas que ocurren y determinar los puntos de máxima y mínima energía, por otra parte, se calculó el coeficiente de restitución dejando una pelota caer desde el reposo, así obtener una mejor apreciación sobre la conservación de la energía.
            </p>
            <br />
            <p>
              Para validar nuestros análisis teóricos, hemos implementado un enfoque práctico que incluye la grabación de videos de lanzamientos y el uso de un programa en Python para rastrear la posición de la pelota en cada fotograma. Este programa, además de realizar el seguimiento, predice si el tiro será exitoso basándose en la trayectoria calculada. Los datos obtenidos se comparan con los resultados teóricos, permitiendo identificar y analizar las discrepancias.
            </p>
            <br />
            <p>
              Este informe está estructurado en tres secciones principales: cinemática, dinámica y análisis energético del tiro. Cada sección presenta los fundamentos teóricos y los resultados obtenidos a partir de cálculos y simulaciones. También se discuten los errores experimentales y se realiza una comparación detallada entre los resultados teóricos y prácticos, evaluando la efectividad de nuestras predicciones y comprendiendo mejor las limitaciones de nuestro enfoque.
            </p>
          </div>

          <div className="text-sm sm:text-lg md:text-xl mt-5">
            <h2 className="text-3xl font-bold mb-3">MATERIALES Y MÉTODOS</h2>
            <p>
              Para este proyecto, se eligió trabajar con un sistema de coordenadas cartesianas (X e Y) para analizar la trayectoria de la pelota. Los materiales utilizados y las condiciones de medición son los siguientes:
            </p>
            <ul className="m-2">
              <li className="flex flex-row flex-nowrap m-1">
                <p>
                  <LiaBasketballBallSolid className="text-orange-700 inline mx-2" /> Distancia del tirador al aro: 4,40 metros.
                </p>
              </li>
              <li className="flex flex-row flex-nowrap m-1">
                <p>
                  <LiaBasketballBallSolid className="text-orange-700 inline mx-2" /> Altura del aro: 3 metros.
                </p>
              </li>
              <li className="flex flex-row flex-nowrap m-1">
                <p>
                  <LiaBasketballBallSolid className="text-orange-700 inline mx-2" /> Altura de liberación de la pelota: 2,20 metros.
                </p>
              </li>
              <li className="flex flex-row flex-nowrap m-1">
                <p>
                  <LiaBasketballBallSolid className="text-orange-700 inline mx-2" /> Ubicación de la cámara: entre el tirador y el aro, a una distancia de 7,5 metros.
                </p>
              </li>
              <li className="flex flex-row flex-nowrap m-1">
                <p>
                  <LiaBasketballBallSolid className="text-orange-700 inline mx-2" /> Altura de la cámara: 1,5 metros.
                </p>
              </li>
              <li className="flex flex-row flex-nowrap m-1">
                <p>
                  <LiaBasketballBallSolid className="text-orange-700 inline mx-2" /> Pelota de baloncesto: masa de 0,625 kg.
                </p>
              </li>
              <li className="flex flex-row flex-nowrap m-1">
                <p>
                  <LiaBasketballBallSolid className="text-orange-700 inline mx-2" /> Programación: Lenguaje Python para procesamiento de video y análisis de datos.
                </p>
              </li>
            </ul>
            <br />
            <p>El procedimiento seguido fue el siguiente:</p>
            <ol className="m-2 list-decimal list-inside">
              <li className="m-1">
                <p className="font-semibold">Grabación de Videos:</p>
                <ul className="list-disc list-inside ml-5">
                  <li className="m-1">Se realizaron múltiples tiros al aro desde la línea de tiro libre, asegurando que las condiciones de lanzamiento fueran consistentes.</li>
                  <li className="m-1">Los videos fueron grabados con una cámara ubicada a 7,5 metros de distancia del tirador y a una altura de 1,5 metros.</li>
                </ul>
              </li>
              <li className="m-1">
                <p className="font-semibold">Selección de Videos:</p>
                <ul className="list-disc list-inside ml-5">
                  <li className="m-1">Los videos grabados fueron revisados y se seleccionaron aquellos que mostraban claramente la trayectoria completa de la pelota.</li>
                  <li className="m-1">Los videos seleccionados fueron recortados para enfocarse únicamente en el momento del lanzamiento y la trayectoria de la pelota hasta el aro.</li>
                </ul>
              </li>
              <li className="m-1">
                <p className="font-semibold">Edición de Videos:</p>
                <ul className="list-disc list-inside ml-5">
                  <li className="m-1">Los videos seleccionados fueron editados para saturar los colores, facilitando la identificación del color naranja de la pelota.</li>
                </ul>
              </li>
              <li className="m-1">
                <p className="font-semibold">Procesamiento de Video con Python:</p>
                <ul className="list-disc list-inside ml-5">
                  <li className="m-1">Se desarrolló un programa en Python para rastrear la posición de la pelota en cada cuadro del video.</li>
                  <li className="m-1">El programa utiliza técnicas de procesamiento de imágenes para identificar la pelota en cada fotograma y extraer sus coordenadas (X e Y).</li>
                  <li className="m-1">Los datos de posición de la pelota se exportaron a un archivo CSV para su posterior análisis.</li>
                </ul>
              </li>
              <li className="m-1">
                <p className="font-semibold">Análisis Teórico y Práctico:</p>
                <ul className="list-disc list-inside ml-5">
                  <li className="m-1">Se aplicaron ecuaciones de cinemática, dinámica y energía para predecir la trayectoria de la pelota, calculando variables como velocidad inicial, ángulo de lanzamiento y energía.</li>
                  <li className="m-1">Los datos experimentales obtenidos del rastreo de la pelota se compararon con los resultados teóricos.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <div className="text-BluePrimary flex-1 mx-5 my-10 flex items-center justify-center flex-col flex-nowrap">
          <div className="text-sm sm:text-lg md:text-xl">
            <h2 className="text-3xl font-bold mb-3">CONCLUSIÓN</h2>
            <p>
              En nuestro proyecto, desarrollamos un software capaz de analizar el tiro libre de baloncesto. Esto lo logramos a través de la captura y análisis de videos, hemos implementado un sistema de trackeo en Python que nos ha permitido examinar los aspectos cinemáticos del movimiento de la pelota y la situación de tiro libre al aro.
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
            <p>donde 𝑚 es la masa de la pelota y v es su velocidad.</p>
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
              En resumen, los avances realizados hasta ahora destacan la efectividad de nuestro enfoque para el análisis cinemático y nos preparan para la siguiente fase del proyecto, en la cual integraremos el análisis dinámico para lograr una evaluación más exhaustiva del tiro libre de baloncesto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}