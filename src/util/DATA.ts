export interface entry {
  title: string;
  year: number;
  categories: string[];
  class: "Important" | "Relevant" | "Impressive";
  image: string;
  link: string;
  description: string;
  authors: string;
  team: "Google" | "Runway" | "Microsoft" | "Meta";
}

export const CONTENT: entry[] = [
  {
    title: "Muse: Text-To-Image Generation via Masked Generative Transformers",
    year: 2023,
    categories: ["Computer Vision"],
    class: "Important",
    image: "img1.png",
    link: "https://arxiv.org/abs/2301.00704",
    description:
      "Muse es un generador de imagenes a partir de texto que resulta ser mas eficiente que los modelos de difusion o modelos autoregresivos.",
    authors:
      "Huiwen Chang, Han Zhang, Jarred Barber, AJ Maschinot, Jose Lezama, Lu Jiang, Ming-Hsuan Yang, Kevin Murphy, William T. Freeman, Michael Rubinstein, Yuanzhen Li, Dilip Krishnan",
    team: "Google",
  },
  {
    title: "Structure and Content-Guided Video Synthesis with Diffusion Models",
    year: 2023,
    categories: ["Computer Vision"],
    class: "Important",
    image: "img2.png",
    link: "https://arxiv.org/abs/2302.03011",
    description:
      "Un nuevo modelo de edición de videos usa descripciones visuales o textuales para realizar cambios precisos en contenido y estructura. Al entrenarse con estimaciones de profundidad, logra un control detallado sobre la calidad y la coherencia temporal. Los usuarios prefieren sus resultados por la amplia gama de opciones y la precisión en la edición de videos.",
    authors:
      "Patrick Esser, Johnathan Chiu, Parmida Atighehchian, Jonathan Granskog, Anastasis Germanidis",
    team: "Runway",
  },
  {
    title: "Scaling Vision Transformers to 22 Billion Parameters",
    year: 2023,
    categories: ["Computer Vision"],
    class: "Important",
    image: "img3.png",
    link: "https://arxiv.org/abs/2302.05442",
    description:
      "Los Transformers han sido potentes en lenguaje con modelos enormes de más de 100 mil millones de parámetros. Intentaron hacer lo mismo para imágenes y videos con Vision Transformers (ViT), pero los más grandes solo tienen 4 mil millones de parámetros. Ahora presentan un método para entrenar un ViT-22B con 22 mil millones de parámetros, y al probarlo, resulta mejor mientras es más grande.",
    authors:
      "Mostafa Dehghani, Josip Djolonga, Basil Mustafa, Piotr Padlewski, Jonathan Heek, Justin Gilmer, Andreas Steiner, Mathilde Caron, Robert Geirhos, Ibrahim Alabdulmohsin, Rodolphe Jenatton, Lucas Beyer, Michael Tschannen, Anurag Arnab, Xiao Wang, Carlos Riquelme, Matthias Minderer, Joan Puigcerver, Utku Evci, Manoj Kumar, Sjoerd van Steenkiste, Gamaleldin F. Elsayed, Aravindh Mahendran, Fisher Yu, Avital Oliver, Fantine Huot, Jasmijn Bastings, Mark Patrick Collier, Alexey Gritsenko, Vighnesh Birodkar, Cristina Vasconcelos, Yi Tay, Thomas Mensink, Alexander Kolesnikov, Filip Pavetić, Dustin Tran, Thomas Kipf, Mario Lučić, Xiaohua Zhai, Daniel Keysers, Jeremiah Harmsen, Neil Houlsby",
    team: "Google",
  },
  {
    title:
      "Visual ChatGPT: Talking, Drawing and Editing with Visual Foundation Models",
    year: 2023,
    categories: ["NLP", "Computer Vision"],
    class: "Important",
    image: "img4.png",
    link: "https://arxiv.org/abs/2303.04671",
    description:
      "Implementacion de Computer Vision models que ya no solo permiten procesar texto a ChatGPT, sino tambien imagenes.",
    authors:
      "Chenfei Wu, Shengming Yin, Weizhen Qi, Xiaodong Wang, Zecheng Tang, Nan Duan",
    team: "Microsoft",
  },
  {
    title: "Segment Anything",
    year: 2023,
    categories: ["Computer Vision"],
    class: "Important",
    image: "img5.png",
    link: "https://arxiv.org/abs/2304.02643",
    description:
      "Segment Anything Model(SAM) es un modelo para segmentar imágenes. Este modelo utiliza un conjunto de datos masivo con mil millones de máscaras en 11 millones de imágenes. Este modelo destaca al adaptarse a nuevas tareas sin entrenamiento específico, superando modelos anteriores. Comparten el Modelo Segment Anything (SAM) y los datos SA-1B para impulsar la investigación en visión por computadora.",
    authors:
      "Alexander Kirillov, Eric Mintun, Nikhila Ravi, Hanzi Mao, Chloe Rolland, Laura Gustafson, Tete Xiao, Spencer Whitehead, Alexander C. Berg, Wan-Yen Lo, Piotr Dollár, Ross Girshick",
    team: "Meta",
  },
  {
    title: "Visual Instruction Tuning",
    year: 2023,
    categories: ["NLP"],
    class: "Important",
    image: "img6.png",
    link: "https://arxiv.org/abs/2304.08485",
    description:
      "LLaVA es modelo que permite dar asistencia por texto, teniendo la capacidad de procesar imagenes de forma logica.",
    authors: "Haotian Liu, Chunyuan Li, Qingyang Wu, Yong Jae Lee",
    team: "Microsoft",
  },
];
