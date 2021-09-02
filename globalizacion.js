const d = document;


/*Nav */

const $navBtn = d.querySelectorAll(".nav-btn p"),
$navBtnDiv = d.querySelectorAll(".nav-btn"),
$container = d.querySelectorAll(".container");

let selected = undefined;

$container[0].classList.add("visible")
$navBtn[0].classList.add("color-naranja");

d.addEventListener("click", e => {
  $navBtn.forEach((el , index) => {
    if (e.target === el || e.target === $navBtnDiv[index]) {
      if (selected !== undefined) {
        $container[selected].classList.remove("visible");
      }
        $navBtn.forEach(element => {
        element.classList.remove("color-naranja");
      });
      el.classList.add("color-naranja");
      selected = index;
      $container[index].classList.add("visible")
    }
  })
})

/*Tercer ejercicio */

const palabras = ["Primera ventaja", "Segunda ventaja", "Tercera ventaja"],
palabrasSignificado = ["La globalización permite una inversión en capital en las industrias de varios países que difícilmente serían capaces de costear una infraestructura ideal para un crecimiento económico sustancialmente positivo, lo cual permite a los países subdesarrollados tener un desarrollo gracias a la inversión extranjera.", "Gracias al proceso de globalización que ha tenido el mundo desde el final de la guerra fría, 'en los últimos 25 años, más de 1000 millones de personas lograron salir de la pobreza extrema, y actualmente la tasa mundial de pobreza es la más baja de que se tenga registro' (Banco Mundial, 2018), lo cual ha tenido un especial impacto en las regiones con niveles de pobreza más altos, como lo son Latinoamérica o África.", "La apertura económica hace que haya una mayor competencia entre las empresas que buscan dominar un determinado mercado, por lo que hay una mayor innovación y los productos tienen un menor costo para los consumidores finales."],
$selectorSignificado = d.querySelectorAll(".palabra p"),
$selectorSignificadoDiv = d.querySelectorAll(".palabra"),
$significadosTitulo = d.querySelector(".significado-titulo"),
$significadosTexto = d.querySelector(".significado-texto");

d.addEventListener("click", e => {
  $selectorSignificado.forEach((el, index) => {
    if(e.target === el || e.target === $selectorSignificadoDiv[index]){
      $significadosTitulo.textContent = palabras[index];
      $significadosTexto.textContent = palabrasSignificado[index];
      $selectorSignificado.forEach(element => {
        element.classList.remove("color-naranja");
      });
      el.classList.add("color-naranja");
    }
  });
})


const palabras1 = ["Primera desventaja", "Segunda desventaja", "Tercera desventaja"],
palabrasSignificado1 = ["La apertura económica podría perjudicar a las empresas locales que son incapaces de competir contra las grandes multinacionales extranjeras, lo cual puede conllevar a una pérdida de empleos en un lapso de tiempo inmediato.", "Hay una gran influencia en la política por parte de las grandes multinacionales, lo cual en un punto podría llegar a ser perjudicial para los habitantes de un determinado país.", "Hay una inmensa pérdida de identidad nacional, ya que se comienzan a interiorizar tradiciones y formas de pensar de otros países, lo que, a largo plazo, podría incluso significar la pérdida total de algunas culturas."],
$selectorSignificado1 = d.querySelectorAll(".palabra1 p"),
$selectorSignificadoDiv1 = d.querySelectorAll(".palabra1"),
$significadosTitulo1 = d.querySelector(".significado1-titulo"),
$significadosTexto1 = d.querySelector(".significado1-texto");

d.addEventListener("click", e => {
  $selectorSignificado1.forEach((el, index) => {
    if(e.target === el || e.target === $selectorSignificadoDiv1[index]){
      $significadosTitulo1.textContent = palabras1[index];
      $significadosTexto1.textContent = palabrasSignificado1[index];
      $selectorSignificado1.forEach(element => {
        element.classList.remove("color-naranja");
      });
      el.classList.add("color-naranja");
    }
  });
})


const palabras2 = ["Globalización Económica", "Globalización Cultural", "Globalización Tecnológica", "Globalización De Los Mercados", "Globalización De La Información", "Globalización Empresarial"],
palabrasSignificado2 = ["Va de la mano con el sistema capitalista liberal, que defiende que la economía debe ser espontanea y en libertad, de forma que no se deben imponer barreras a la libre asociación con fines económicos.", "Busca generar una cultura más homogenea, de forma que, para bien o para mal, las personas adopten culturas distintas, ya sea en la música, la gastronomía, la moda etc.", "Busca que, con la cooperación internacional, haya una mayor innovación en el sector tecnológico, ya sea con la importación de esta clase de productos o con la investigación de la misma.", "Busca eliminar las barreras impuestas al comercio internacional, tales como los aranceles a mercancía extranjera, con la finalidad de impulsar la competencia y generar una mayor expansión del mercado internacional.", "Durante los últimos años, las tecnologías de la información y la comunicación han presentado un notable crecimiento, lo cual ha permitido una unificación global en la comunicación, ya sea para tener llamadas con personas del otro lado del mundo o para ver recetas en YouTube.", "Es el proceso mediante el cual las empresas buscan una mayor unidad, con el fin de aumentar la productividad y la innovación."],
$selectorSignificado2 = d.querySelectorAll(".palabra2 p"),
$selectorSignificadoDiv2 = d.querySelectorAll(".palabra2"),
$significadosTitulo2 = d.querySelector(".significado2-titulo"),
$significadosTexto2 = d.querySelector(".significado2-texto");

d.addEventListener("click", e => {
  $selectorSignificado2.forEach((el, index) => {
    if(e.target === el || e.target === $selectorSignificadoDiv2[index]){
      $significadosTitulo2.textContent = palabras2[index];
      $significadosTexto2.textContent = palabrasSignificado2[index];
      $selectorSignificado2.forEach(element => {
        element.classList.remove("color-naranja");
      });
      el.classList.add("color-naranja");
    }
  });
})


/*Cuarto ejercicio */

const topPaises = ["Argentina", "El Salvador", "Ecuador", "Panamá", "Uruguay", "Colombia", "Brasil", "México", "Perú", "Chile"],
topPaisesDescripciones = ["El país con mayor deuda pública, con el equivalente de casi el 42% del PIB nominal es Argentina. Esta, además, ha tenido una gran inflación durante los últimos años", "Este pequeño país no sólo es de los más inseguros de la región, sino que es el segundo con mayor deuda externa con el equivalente al 33.2% de su PIB nominal", "Ecuador sigue de cerca al Salvador con casi un tercio de su PIB en deuda externa", "Panamá, a pesar de ser considerado el mayor paraíso fiscal de Latam y tener el canal de Panamá, se encuentra en esta lista con un 31.6% de su PIB nominal en deuda pública", "Uruguay ha experimentado un crecimiento relativamente estable y tiene una clase media marcada. Sin embargo, en su deuda externa, se distancia en tan sólo un 0.2%  de Panamá", "Nuestro país no se queda atrás en la lista, y aunque no alcanza los niveles de Argentina o el Salvador, aún tiene una deuda externa del 16.8% del PIB nominal", "Brasil es uno de los países más desiguales de la región, además de ser uno de los más grandes del mundo. Su deuda externa es del 9.8% de su PIB", "México tiene una economía fuerte, aunque durante su historia ha tenido algunos problemas económicos que lo llevan a situarse en el octavo puesto", "Perú ha sido uno de los países más afectados por la pandemia, lo que sumado a la deuda externa del 7.5% de su PIB que tenía acumulada lo ha afectado mucho", "Chile, a pesar de ser considerado uno de los países con mayor libertad económica del mundo, está en esta lista con una deuda externa del 5.3% de su PIB"],
$selectorPaises = d.querySelectorAll(".numero p"),
$selectorPaisesDiv = d.querySelectorAll(".numero"),
$paisesTitulo = d.querySelector(".paises-titulo"),
$paisesTexto = d.querySelector(".paises-texto");

d.addEventListener("click", e => {
  $selectorPaises.forEach((el, index) => {
    if(e.target === el || e.target === $selectorPaisesDiv[index]){
      $paisesTitulo.textContent = topPaises[index];
      $paisesTexto.textContent = topPaisesDescripciones[index];
      $selectorPaises.forEach(element => {
        element.classList.remove("color-naranja");
      });
      el.classList.add("color-naranja");
    }
  });
})
