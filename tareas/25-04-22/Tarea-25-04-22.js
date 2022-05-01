let peliculas = [
    {titulo:"Doctor Strange en el Multiverso de la locura", genero:"Acción", anio:"2022", sinopsis:"El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora su equipo debe enfrentarse a una amenaza enorme."},
    {titulo:"El Diario de una Pasión", genero:"Romance", anio:"2004", sinopsis:"En un hogar de retiro un hombre le lee a una mujer, que sufre de Alzheimer, la historia de dos jóvenes de distintas clases sociales que se enamoraron durante la convulsionada década del 40, y de cómo fueron separados por terceros, y por la guerra."},
    {titulo:"Esperando la carroza", genero:"Comedia", anio:"1985", sinopsis:"La confusión invade a una familia luego de que Mamá Cora, una anciana de 80 años, desaparece. Aunque algunos creen que ha muerto, nada es tan sencillo como parece."},
  ];
  function cartelera(){
    peliculas.forEach( function(pelicula) {
        document.write(
          `<strong>--------Cartelera--------</strong><br />`
        );
        document.write(`<b>Título:</b> ${pelicula.titulo}<br />`);
        document.write(`<b>Género:</b> ${pelicula.genero}<br />`);
        document.write(`<b>Año:</b> ${pelicula.anio}<br />`);
        document.write(`<b>Sinópsis:</b> ${pelicula.sinopsis}<br />`);
    });
  };
  cartelera()