<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>
    <tbody>
        <tr><td colspan="3"><span style="font-weight:bold;">Formato</span>: Guía de Práctica de Laboratorio</td></tr>
        <tr><td><span style="font-weight:bold;">Aprobación</span>:  2022/03/01</td><td><span style="font-weight:bold;">Código</span>: GUIA-PRLB-001</td><td><span style="font-weight:bold;">Página</span>: 1</td></tr>
    </tbody>
</table>
</div>

<div>

<div align="center">
<span style="font-weight:bold;">INFORME DE LABORATORIO</span><br />
<span>(formato estudiante)</span>
</div>

<table>
<theader>
<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
<tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 2</td></tr>
<tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">JavaScript</td></tr>
<tr>
<td>NÚMERO DE PRÁCTICA:</td><td>02</td><td>AÑO LECTIVO:</td><td>2022 A</td><td>NRO. SEMESTRE:</td><td>III</td>
</tr>
<tr>
<td>FECHA DE PRESENTACIÓN:</td><td>9/05/2022</td><td>HORA DE PRESENTACIÓN:</td><td colspan="3">11:50</td>
</tr>
<tr><td colspan="3">INTEGRANTE(s):
<ul>
<li>Chaisa/Fernández, Anthony Leonel - achaisa@unsa.edu.pe</li>
<li>Moroccoire/Pacompia, Anthony Marcos - amoroccoire@unsa.edu.pe</li>
<li>Diaz/Portilla, Carlo Rodrigo - cdiazpor@unsa.edu.pe</li>
<li>Ticona/Hareth, Anthony Joaquín - aticonaha@unsa.edu.pe</li>
<li>Almonte/Cuba, Axel Frank - aalmontecu@unsa.edu.pe</li>
</ul>
</td>
<td>NOTA:</td><td colspan="2"></td>
</<tr>
<tr><td colspan="6">DOCENTE(s):
<ul>
<li>Richart Smith Escobedo Quispe - rescobedoq@unsa.edu.pe</li>
</ul>
</td>
</<tr>
</tbody>
</table>

<table>
<theader>
<tr><th>Solución y resultados</th></tr>
</theader>
<tbody>
  <tr><td>I. SOLUCIÓN DE EJERCICIOS/PROBLEMAS
      <pre>
1. Cada integrante creó una rama con el nombre de su usuario GitHub.
                <img src="./labImg/branches.jpeg">
2. Se repartió un problema para cada uno y se trabajó en las ramas personales.
    <img src="./labImg/AnthonyMTH.jpeg">
    <img src="./labImg/CarloDiazP.jpeg">
    <img src="./labImg/ianthony4.jpeg">
    <img src="./labImg/amoroccoire.jpeg">
    <img src="./labImg/AxelAlmonteCuba.jpeg">

3. Se hizo merge a todas las ramas
<img src="./labImg/mergedBranches.jpeg">
4. Links videos FlipGrid personales
<li><a href="https://flipgrid.com/76bd853b">Carlo Rodrigo Diaz Portilla</a></li>
<li><a href="https://flipgrid.com/s/nXC1_L4_Bj3j">Anthony Marcos Moroccoire Pacompia</a></li>
<li><a href="https://flipgrid.com/7e13fc5e">Anthony Leonel Chaisa Fernández</a></li>
<li><a href="https://flipgrid.com/b763cb09">Anthony Joaquín Ticona Hareth</a></li>
<li><a href="https://flipgrid.com/s/hEeGnVkjoXsC ">Axel Frank Almonte Cuba - Parte 1</a></li>
<li><a href="https://flipgrid.com/s/jX6UR2CP62R-">Axel Frank Almonte Cuba - Parte 2</a></li>
      </pre>

    
  </td></tr>

  <tr><td>II. SOLUCIÓN DEL CUESTIONARIO
      <pre>¿Cómo se pueden resolver los warnings?
1. Unexpected let: Se puede solucionar eliminando la palabra clave "let"
2. Expected ";" and instead saw "}": Debemos agregar un ";" al final del return
3. Expected "+=1" and instead saw "++": Modificaremos el incremento del for "++" 
por la sugerencia "+=1"</pre>
      <pre>¿Se puede modificar la solución usando map? ¿Cómo?<br>
Podemos primero iniciar un arreglo con "n" número de elementos random con ayuda de Math.random()
 y luego hacer un map a todos esos elementos de la siguiente manera      
        
        function arrayGenerator(n, min, max){
	        let a = []; 
	        for(let x = 0; x < n; x++){
		        a.push(Math.random());
	        }
	        return a.map(function(n){return Math.ceil(n * (max - min) + min)});
        }
</pre></td></tr>            
  <tr><td>III.CONCLUSIONES 
      <pre>
<li>El uso de javascript es idóneo para añadir funcionamientos, procesos,
diversas características a un sitio web.</li>
<li>Hay infinidad de posibilidades con todo lo que nos brinda el uso de 
Javascript en nuestras páginas web, pudiendo diseñar grandes páginas 
funcionales, como las vemos hoy en día.</li>
<li>Javascript es un lenguaje de programación ambiguo y práctico, tal como lo
demuestra la flexibilidad de las variables, el funcionamiento de las funciones, etc.</li></pre>
    </td></tr>
</tbody>
</table>

<table>
<theader>
<tr><th>RETROALIMENTACIÓN GENERAL
    </th></tr>
</theader>
<tbody>
<tr><td>
    <pre>                                                                   </pre>
    <pre>                                                                   </pre>
    </td></tr>
</tbody>
</table>
    
</div>    
<p><b>REFERENCIAS Y BIBLIOGRAFÍA</b></p>
<ul>
    <li>Javascript tutorial. https://www.w3schools.com/javascript/default.asp, 2021.</li>
    <li>Loiane Groner. Learning JavaScript Data Structures and Algorithms: Write complex and powerful</li>
    <li>Validador HTML - https://validator.w3.org/</li>
    <li>Validador CSS - https://jigsaw.w3.org/css-validator/</li>
</ul>
