# Numeros complejos

Definición de un numero complejo.

Para empezar a hablar de numeros complejos primero hay que definir a la
unidad imaginaria. $$\sqrt{-1} = i$$ Todos los numeros de la forma $bi$
donde $b \in \mathbb{R}$ son numeros puramente imaginarios.

Un numero complejo es la suma entre un numero real y uno imaginario y se
suelen llamar $z$ tal que: $$z=a+bi$$ Con $a \in \mathbb{R}$,
$b \in \mathbb{R}$ y $z \in \mathbb{C}$\

Representación geometrica en el plano complejo

Los complejos pueden representarse en un plano mediante pares ordenados
de numeros reales, esto se debe al isomorfismo que tiene
$(\mathbb{C},+)$ con $(\mathbb{R}^{2},+)$ por lo tanto pueden
representarse como vectores.

![image](../../../Imagenes/Superior/Complejos/Complejos01.PNG)

## Igualdad

La igualdad entre numeros complejos se define asi:
$$z_1 = a+bi \hspace{5pt}\wedge\hspace{5pt} z_2=c+di$$
$$z_1 = z_2 \Leftrightarrow a = c \hspace{5pt}\wedge\hspace{5pt} b = d$$

## Modulo

Geometricamente es el modulo del vector asociado a $z$.
$$|z| = \sqrt{a^{2}+b^{2}}$$

## Adición

$$
z = z_1 +z_2 = a+bi + c+di = a+c+bi+di = (a+c) + (b+d) i
$$
 Es equivalente a la suma de vectores, por lo tanto tiene sus mismas
propiedades.

## Multiplicación

$$z = z_1 \cdot z_2 = (a+bi)\cdot(b+di) = (a\cdot c - b\cdot d) + i(a\cdot d + b \cdot c)$$
No es necesario recordar esta formula de memoria pues la suma es
distributiva respecto de la multiplicación y se puede llegar al
resultado operando con esta propiedad y recordando que $i^{2} = -1$.

## Conjugado

El conjugado de un numero complejo $z=a+bi$ se define:
$$
\bar{z} = a - bi
$$
Es decir, tiene la misma parte real y opuesta parte
imaginaria. El conjugado es distributiva respecto de la suma,
multiplicación y división. Además hay una propiedad muy interesante que
nos ayudará a resolver divisiones.
$$
z \cdot \bar{z} = |z|^{2}
$$
 Esta
propiedad es util para deshacerse de un denominador complejo
multiplicando arriba y abajo por su conjugado similar a como se suele
hacer con la radicación.

## Potencias naturales en forma Binomica

$$
z^{0} = 1
$$
$$
z^{1} = z
$$
$$
z^{n+1} = z^{n}\cdot z
$$
De acuerdo a la definición podemos calcular las potencias de la unidad imaginaria:

$$
\begin{aligned}
  i^{0} &= 1 \\
  i^{1} &= i \\
  i^{2} &= -1 \\
  i^{3} &= -i \\
  i^{n} &= i^{r}\end{aligned}
$$
Siendo $r$ el resto de dividir a $n$ por $4$.
Para poder calcular potencias en forma binomica $(a+bi)$ debemos
utilizar el binomio de Newton:
$$
(a+bi)^{n} = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^{k}
$$
Esta sumatoria no es muy complicada de entender, tendremos $n$ terminos donde el
coeficiente principal de cada uno está dado por el numero combinatorio
entre $n$ y $k$. A medida que \"avanzamos\" en la sumatoria $k$ va
aumentando de a $1$ haciendo que en cada termino la potencia de $b$ vaya
aumentando hasta $n$ y la de $a$ disminuyendo desde $n$. No resulta de
gran complejidad entender que está sucediendo y para llegar a las mismas
conclusiones podemos tomar una potencia muy alta de un numero complejo y
descomponerla en muchas multiplicaciones. Si intentamos generalizar ese
proceso llegaremos al binomio de Newton. Una forma muy elegante de
calcular complejos pero sin duda con demasiado trabajo. Mas adelante
veremos como simplificar esta tarea.

Raiz cuadrada en forma Binomica.

Diremos que $u$ es la raiz cuadradada de $z \Leftrightarrow z = u^{2}$
Para esta operación realizaremos algunos calculos ya que no se puede ver
a tan simple vista por donde comenzar.

Sea $z = a+bi$ y $u = x + yi$: $$\begin{aligned}
  u^{2}&= z\\
  (x+yi)^{2}&= a+bi\\
 x^{2}+2ixy-y^{2} &=a+bi\\\end{aligned}$$ Por igualdad de complejos
podemos deducir: $$\begin{aligned}
  a &= x^{2} - y^{2}\\
  b &=2xy \end{aligned}$$ Por otro lado tambien podemos argumentar lo
siguiente: $$\begin{aligned}
  u^{2}&=z\\
  |u^{2}| &= |z|\\
  |u|^{2} &= |z|\\
  x^{2}+y^{2} &= |z| \end{aligned}$$ Si ahora sumamos miembro a miembro
$(10)$ y $(15)$ obtenemos: $$\begin{aligned}
  |z| + a &= 2x^{2}\\
  x &= \sqrt{\frac{|z|+a}{2}}  \end{aligned}$$ Y si restamos miembro a
miembro $(10)$ y $(15)$. $$\begin{aligned}
|z| - a &= 2y^{2}\\
y &= \sqrt{\frac{|z|-a}{2}}  \end{aligned}$$ Es decir:
$$
u = \pm\sqrt{\frac{|z|+a}{2}}  \pm i\sqrt{\frac{|z|-a}{2}}
$$
Lo cual nos dá como resultado $4$ posibles raices, pero sabemos que por el
teorema fundamental del algebra, todo polinomio de grado $2$ tiene
exactamente $2$ raices en el conjunto de los complejos.

Podemos reestringir $2$ raices y dejarlas fuera gracias a la ecuación
$(11)$. Recordemos que estamos calculando $\sqrt{z}$. Los distintos
valores de $u$ vienen dados por los signos de $x$ e $y$. Por la ecuación
$(11)$ podemos ver que los mismos están ligados al signo de $b$. Es
decir, si $x$ e $y$ tienen el mismo signo, entonces $b$ será positivo,
si tienen distinto signo entonces $b$ será negativo. De esta forma
podemos resolver la distorsión. Si $b$ es positivo tendremos dos
soluciónes para $\sqrt{z}$, una donde $x$ e $y$ son positivos y otra
donde $x$ e $y$ son negativos. Si $b$ es negativo aún tendremos dos
soluciones pero en una de estas $x$ será positivo e $y$ negativo y en la
otra $x$ será negativo e $y$ positivo.

Observación: La formula resolvente es aplicable a complejos, siempre y
cuando se realicen las operaciones como están definidas en el campo
complejo.

## Forma polar de un complejo

Al igual que los vectores de $\mathbb{R}^{2}$, los numeros complejos
pueden representarse en forma polar, de nuevo, gracias al isomorfismo
que existe entre los conjuntos.

La forma polar de un numero complejo está representada por $\rho$ y
$\varphi$ tal que $\rho = |z|$ y $\varphi = \arg(z)$. Observar que
$\varphi$ o $\arg(z)$ es el ángulo que el vector asociado al numero
complejo $z$ forma con el semieje real positivo.

![image](../../../Imagenes/Superior/Complejos/Complejos02.PNG)

Relación entre forma binomica y polar.

Por pitagoras es muy sencillo encontrar la siguiente relación:
$$
\begin{aligned}
  a &= \rho \cos(\varphi)\\
  b &= \rho \sin(\varphi)\end{aligned}
$$
Esto es util si se quiere pasar de polar a binomica ya que tenemos despjeados los valores de $a$ y $b$
en función de $\rho$ y $\varphi$. Veremos ahora como pasar de binomica a
polar. Con un poco de pensamiento llegamos a:
$$
 \begin{aligned}
  \rho &=\sqrt{a^{2}+b^{2}}\\
  \varphi &= \arctan(\frac{b}{a})\end{aligned}
$$
Estas formulas se deducen sencillamente con algunas propiedades de trigonometria y sin
duda son ciertas y muy utiles pero, para algunos casos especiales, hay
que pensar un poco mas.

Por ejemplo, ¿Qué pasa si $a=0$ ? Entonces el numero es imaginario puro,
ya que $a$ es la parte real. Los numeros imaginarios puros se encuentran
sobre el eje imaginario (o eje de ordenadas) es decir, su argumento será
de $\frac{\pi}{2}$ o bien $3\frac{\pi}{2}$ dependiendo de su signo.

Pero aún hay un problema, la función $\tan(x) = y$ no es biyectiva en
todo el dominio y por lo tanto se utiliza con el dominio reestringido a
$(-\frac{\pi}{2};\frac{\pi}{2})$ para que exista su inversa
$\arctan(x)=y$. Y todo esto, ¿Qué significa? Pues que la función de
$\varphi$ en la calculadora sirve para calcular valores entre
$(-\frac{\pi}{2};\frac{\pi}{2})$, es decír, complejos en el primer y
cuarto cuadrante. Con un poco de pensamiento podemos solucionar esto
solo sumando $\pi$ al valor cuando sabemos que nuestro numero está en el
segundo o tercer cuadrante.

Veremos un ejemplo para clarificar todo este palabrerio. Escribamos en
polar el siguiente numero: $-1 + i \sqrt{3}$\
Primero que nada notemos que como $a$ es negativo y $b$ positivo,
sabemos que el numero se encuentra en el segundo cuadrante.

Ahora calculemos el modulo que es bastante sencillo:
$$
\rho =  \sqrt{(-1)^{2} + (\sqrt{3})^{2}} = 2
$$
Ahora usamos la formula del argumento y vemos que obtenemos:
$$
\varphi = \arctan(-\sqrt{3}) = -\frac{\pi}{3}
$$
Pensamos un poco y nos damos cuenta que un argumento de $-\frac{\pi}{3}$
deja el complejo en el cuarto cuadrante, pero el complejo original se
encontraba en el segundo.

![image](../../../Imagenes/Superior/Complejos/Complejos03.PNG)
Aquí se nota porque se debe sumar $\pi$ o medio giro para obtener el
argumento del complejo original. Y nuestro complejo queda:
$$
z = [2 ; 2\frac{\pi}{3}]
$$

## Forma trigonometrica de un complejo

$$
z = \rho (\cos\varphi + i \sin\varphi)
$$
En esta formula se esconden todas las relaciones entre binomica y polar que vimos anteriormente.
Pero además el famoso matemático Euler demostró:
$$
\rho e^{i\varphi} = \rho (\cos\varphi + i \sin\varphi)
$$
No entraremos en detalle sobre la demostración de esta formula, pero recomiendo
fuertemente buscar información al respecto porque la demostración es una
de las mas bellas de las matematias. Para la materia solo la tomaremos
como verdadera y diremos que la forma exponencial de un numero complejo
$z$ es $\rho e^{i\varphi}$ donde $\rho = |z|$ y $\varphi = \arg(z)$. De aquí además es de donde sale la bella identidad: $e^{i\pi} + 1 = 0$ ya que $-1$ tiene modulo $1$ y argumento $\pi$.

### Operaciones en forma polar

#### Igualdad (polar)

Sea $z_1=[\rho_1;\varphi_1]$ y $z_2=[\rho_2;\varphi_2]$
$$
z_1 = z_2 \Leftrightarrow \rho_1 = \rho_2 \hspace{5pt} \wedge \hspace{5pt} \varphi_1 = \varphi_2 + 2k\pi
$$
Para que dos complejos sean iguales deben tener el mismo modulo y sus
argumentos pueden diferir en una cantidad entera de giros $(2\pi)$.\

#### Multiplicación (polar)

Sea $z_1=[\rho_1;\varphi_1]$ y $z_2=[\rho_2;\varphi_2]$
$$
z_1 \cdot z_2 = [\rho_1 \cdot \rho_2 ;\varphi_1 + \varphi_2 ]
$$ Esta
formula de la multiplicación quizas no tenga sentido a primera vista,
por eso realizaremos la demostración:
$$
z_1 = \rho_1e^{i\varphi_1} \hspace{5pt} \wedge \hspace{5pt} z_2 = \rho_2e^{i\varphi_2}
$$
$$
\rho_1e^{i\varphi_1} \cdot \rho_2e^{i\varphi_2} = (\rho_1 \cdot \rho_2) \cdot (e^{i\varphi_1}\cdot e^{i\varphi_2}) = (\rho_1 \cdot \rho_2) \cdot e^{i(\varphi_1 + \varphi_2)} = [\rho_1 \cdot \rho_2 ;\varphi_1 + \varphi_2 ]
$$

#### División

$$
\frac{z_1}{z_2} = [\frac{\rho_1}{\rho_2 };\varphi_1 - \varphi_2 ]
$$
 La demostración es muy parecida a la anterior y ya se puede ver a simple
vista.

#### Potencias naturales en forma Polar

Con $n \in \mathbb{N}$ $$z^{n} = [\rho^{n}; n\cdot\varphi]$$ Esta formula se puede deducir sencillamente reflexionando sobre la
demostración de la multiplicacion presentada anteriormente.

#### Raiz n-ésima

Como vimos, en la forma binomica solo es posible calcular raices
cuadradas, o en su defecto, raices potencias de $2$ ya que estas pueden
descomponerse en raices cuadradas. Gracias a la forma polar podemos
resolver raices n-ésimas de un complejo.
Sea $z = [\rho;\varphi]$ y $w = [r;\theta]$ una raíz n-ésima de z tal
que $w^{n} = z$. Entonces se deduce:
$$w^{n} = z \Rightarrow [r^{n};n\theta] = [\rho;\varphi]$$ Y por igualdad de complejos: $$\begin{aligned}
  r^{n} &= \rho\\
  n\theta &= \varphi +2k\pi \\\end{aligned}$$
$$
\begin{aligned}
  r &= \sqrt[n]{\rho}\\
  \theta &= \frac{\varphi+2k\pi}{n}\end{aligned}
  $$
Finalmente, con $0 < k < n-1$: $$w_k = [\sqrt[n]{\rho};\frac{\varphi+2k\pi}{n}]$$
Importante: cuando $k=n$ obtenemos $w_0$, por eso $k$ va de $0$ a $n-1$,
luego empiezan a repetirse. Además, por convención, antes de calcular
raices n-ésimas se escribe al complejo en su primer giro positivo. De
esta forma, las raices quedan ordendas a partir del semieje positivo
real en sentido positivo (antihorario).

Representacion geometrica\

Como $|w_k|$ no depende de $k$ entonces:
$$
|w_0| = |w_1| = |w_2| = |w_{n-1}| = \sqrt[n]{\rho}
$$
Entonces los afijos de todas las raices están sobre la circunferencia de radio
$\sqrt[n]{\rho}$.\
Además, la distribución será equiespaciada, ya que el argumento (ángulo)
aumenta en $k\cdot \frac{2\pi}{n}$. Es decir un entero por una fracción
de giro que depende de $n$. Esto secciona el giro completo en $n$ partes
iguales. Para resumir podemos decir que los afijos constituyen los
vertices de un polígono regular de $n$ lados inscripto en la
circunferencia de radio $\sqrt[n]{\rho}$ centrada en el origen.

#### Ejemplo: la grafica de las $\sqrt[3]{-8i}$

![image](../../../Imagenes/Superior/Complejos/Complejos04.PNG)

### Raices primitivas de la unidad

Sea $w_k$ una raiz n-ésima de la unidad, es decir: ${w_k}^{n} = 1$ Se
dice que $w_k$ es una raíz primitiva de orden $n$ si:
$$
{w_k}^{h} \neq 1\hspace{5pt}\forall 0 \leq h \leq n
$$
Es decir, $w_k$ es raíz primitva de orden $n$ si no es raíz de orden inferior. Esto
sucede cuando $w_k$ es una raiz nueva que no apareció en ningun orden
anterior a $n$. Como las raices primitivas se calculan sobre la unidad,
todas las raices tendrán modulo igual a $1$ ya que
$\sqrt[n]{1} = 1 \hspace{5pt} \forall n \in \mathbb{N}$ y esto hace que
haya raices repetidas en los distintos órdenes.

Algunas propiedades:
$a)$ $w_0$ nunca es primitiva porque vale $1$ para todos los órdenes de
$n$
$b)$ $w_1$ siempre es primitiva ya que cada vez que aumentamos el orden
$n$, las divisiones del giro se hacen mas pequeñas y al tener raices
equiespaciadas, los espacios entre raices se harán mas pequeños al
aumentar el orden de $n$. Y al ser $w_1$ la primer raíz de un orden en
particular, esta nunca existirá en algún otro orden inferior.
$c)$ $w_k$ es primitiva $\Leftrightarrow m.c.d(k;n) = 1$ ya que si no se
cumple esto significa que la raíz existe en un orden inferior.

Por ejemplo: En el orden $6$ las raices primitivas son $w_1$ y $w_5$, en
cambio $w_4$ ya es raiz en un orden anterior. Mas concretamente es $w_2$
del orden $3$.

Si este tema no se entiende bien recordar que $n$ es el orden de las
raices y nos dice cuantas raices hay en total en ese orden (contando
$w_0$) y $k$ es la numeración de cada raíz en particular dentro de un
orden $n$. Además recordar que todas las raices tienen el mismo modulo,
por ende lo unico que las diferencia es el giro, esto hace que una raiz
pueda tener como argumento un multiplo de otra y por esto repetirse en
ordenes inferiores.

### Logaritmo natural

Diremos que un numero complejo $u = x+yi$ es logaritmo natural de $z$
si:
$$
z = e^{u}
$$
Deducción de la formula de calculo de $\ln(z)$:
$$
\begin{aligned}
  z &= e^{u}\\
  \rho e^{i\varphi} &= e^{x+iy}\\
  \rho e^{i\varphi} &= e^{x}\cdot e^{iy}\\
  \rho = e^{x} \hspace{5pt} & \wedge\hspace{5pt} y = \varphi +2k\pi\\
  u_k &= ln(\rho) + i (\varphi + 2k\pi)\end{aligned}
$$
Cuando $k=0$ y $\varphi \in [0;2\pi)$ se define el valor principal de $\ln(z)$:
$V.P(\ln z)  = \ln (\rho) + i\varphi$

Importante notar que el logaritmo toma un numero en forma polar
$[\rho;\varphi]$ y lo devuelve en forma binomica. Además el logaritmo
tiene infinitas soluciones, y como la parte real de las mismas no
depende de $k$ entonces todas se encuentran en la misma recta vertical
$x=\ln\rho$. Para realizar calculos y cuando el logaritmo se encuentre
afectado por otras operaciones se tomará el valor principal como el
unico valor.

Potencia compleja de un complejo.

Sea $z = z_1^{z_2}$:
$$
\begin{aligned}
  \ln(z) &= \ln(z_1^{z_2}) \\
  \ln(z) &= z_2 \cdot \ln(z_1)\\
  z &= e^{z_2\cdot\ln(z_1)}\\\end{aligned}
  $$

Aplicación de complejos: vibraciones armonicas simples\

Los numeros complejos resultan muy útiles para la representación
matematica de fenómenos periódicos. Los fenómenos periódicos mas
sencillos presentes en la naturaleza, se expresan matematicamente
mediante funciones senoidales. $$f(t) = A\sin(\omega t + \varphi)$$ O
bien, con su respectivo desplazamiento:
$$
f(t) = A\cos(\omega t + \varphi)
$$
Donde:
$t$: Variable tiempo en segundos.
$A$: Amplitud de onda o valor de pico.
$\omega$: Pulsación o frecuencia angular.
$f$: Frecuencia de vibración.
$T$: Período.
$\varphi$: Ángulo de fase inicial.
Además:
$f=\frac{1}{T}$

$\omega = 2\pi f$

Veremos como usar vectores complejos giratorios para representar estas
funciones por mas que sean de variable real.\

Ya sabemos que $z=re^{i\varphi}$ es la representación exponencial de un
numero complejo de módulo $r$ y argumento $\varphi$. Si ahora
consideramos $\varphi=\omega t$ obtenemos la expresión
$z=re^{i\omega t}$, un numero complejo que va variando su argumento
(ángulo) dependiendo del tiempo. Esta es la expresión matematica de un
vector giratorio de longitud constante $r$, que gira con una velocidad
angular constante $\omega$ alrededor del origen.

![image](../../../Imagenes/Superior/Complejos/Complejos05.PNG)

La componente real de $z$ es la proyección del vector sobre el eje real,
es decir: $r\cos(\omega t)$. Y la componente imaginaria de $z$ es su
proyección sobre el eje imaginario: $r\sin(\omega t)$, esto se deduce
facilmente recordando que $\omega t = \varphi$ y recordando la forma
trigonometrica de un complejo propuesta mas arriba. En ambos casos, la
proyeccion de un vector giratorio sobre un eje fijo es una magnitud que
varia sinusoidalmente.

El fenómeno expresado por la función senoidal se denomina Vibración
armonica simple.

Fasores

Sea $A(t) = A_m \cos(\omega t +\varphi)$. Se puede interpretar como:
$A(t) = Re[A_m \cos(\omega t +\varphi) + i A_m \sin(\omega t +\varphi)]$.
Se puede deducir: $$A(t) = Re[A_m e^{i(\omega t + \varphi)}]$$ Donde:
$$A_m e^{i(\omega t + \varphi)} = A_m e^{i\varphi}e^{i\omega t}$$

A $A_m e^{i\varphi}$ se le llama el Fasor asociado a $A(t)$ y es la
expresión de un numero complejo. Como $A(t)$ es una línea giratoria en
el plano complejo, en un instante dado $(t=0)$ está representada por el
fasor. Es decir, una cantidad fasorial es una instánea de la exponencial
compleja tomada para $t=0$.

Siempre que haya que trabajar con funciones sinusoidales será, en
general, mas sencillo trabajar con sus respectivos asores.

Superposición de ondas de la misma frecuencia.

Sean $g_1(t) = A_1 \cos(\omega t)$ y
$g_2(t) = A_2 \cos(\omega t + \varphi)$

![image](../../../Imagenes/Superior/Complejos/Complejos06.PNG)

Queremos obtener $g_1(t) + g_2(t)$ como una unica función sinusoidal.
Para esto usaremos fasores.
$$A_1 e^{i\omega t} + A_2 e^{i(\omega t +\varphi)} = (A_1 + A_2 e^{i\varphi})e^{i\omega t}$$
Que se puede escribir $(A_1 + A_2 e^{i\varphi}) = Me^{i\theta}$.

![image](../../../Imagenes/Superior/Complejos/Complejos07.PNG)

El diagrama vectorial se suele trazar para un instante determinado, pero
como la diferencia de fase es constante y la frecuencia angular es
igual, el paralelogramo gira como una figura rígida con una velocidad
angular $\omega$.

Entonces:
$$g_1(t) + g_2(t) = Re[e^{i\theta}e^{i\omega t}] \Rightarrow g_1(t)+g_2(t) = M \cos(\omega t +\theta)$$

![image](../../../Imagenes/Superior/Complejos/Complejos08.PNG)

Veremos un ejemplo para que se entienda mejor:\

Dados: $V_1(t) = 10\cos(3t-\frac{\pi}{3})$ y
$V_2(t) = 5\cos(3t+5\frac{\pi}{12})$.\
Hallar: $V_1(t) + V_2(t)$ utilizando fasores.

Buscamos los fasores: $$\begin{aligned}
  V_1 &= 10 e^{-i\frac{\pi}{3}}\\
  V_2 &= 5 e^{i5\frac{\pi}{12}}\end{aligned}$$

Los pasamos a forma binomica para sumarlos.
$$
\begin{aligned}
  V_1 &= 5-i8.66\\
  V_2 &= 1.29+i4.83\end{aligned}
  $$
  Ahora los sumamos:
$$
V_1 + V_2 = 6.29 - i 3.83
$$
 Lo pasamos a forma exponencial:
 $$
 V_1+V_2 = 7.36e^{-i0.55}
 $$
 Finalmente lo multiplicamos por $e^{i\omega t}$ que en este caso $\omega = 3$: $$7.36e^{i(3t-0.55)}$$ Y por ultimo tomamos la parte real: $$V_1(t)+V_2(t) = 7.36\cos(3t-0.55)$$
