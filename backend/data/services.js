const services = [
    {
        id: 1,
        title: "Reumatologia",
        description: "La visita reumatologica è una visita medica che viene eseguita dal medico specialista reumatologo. Essa ha come obiettivo l’individuazione della malattia reumatica e la scelta della cura più appropriata.",
        image: "/images/reumatologia.jpg",
        category: "visitaSpecialistica",
        slug: "reumatologia"
    },
    {
        id: 2,
        title: "Cardiologia",
        description: "La visita cardiologica è la visita specialistica finalizzata a produrre una diagnosi relativa a un eventuale problema di natura cardiologica, che riguarda cioè il cuore.",
        image: "/images/cardiologia.jpg",
        category: "visitaSpecialistica",
        slug: "cardiologia"
    },
    {
        id: 3,
        title: "Omotossicologia",
        description: "Durante la visita omotossicologica il medico prende in considerazione tutti i sintomi (fisici e psichici) che vengono riferiti dal paziente, che possono essere utili per una corretta diagnosi.",
        image: "/images/omotossicologia.jpg",
        category: "visitaSpecialistica",
        slug: "omotossicologia"
    },
    {
        id: 4,
        title: "Manipolazioni vertebrali",
        description: "Consiste in   un “micromovimento” secco ad alta velocità esercitato su un segmento della colonna vertebrale  che combina , di solito, uno stiramento e una rotazione. Viene effettuata dal  Medico  Specialista e serve a curare  molte patologie.",
        image: "/images/manipolazioni-vertebrali.jpg",
        category: "manuMedica",
        slug: "manipolazioni-vertebrali"
    },
    {
        id: 5,
        title: "Infiltrazioni articolari",
        description: "Sono iniezioni che vengono eseguite a seconda delle specifiche esigenze, il farmaco viene iniettato dall’ortopedico all’interno di un’articolazione ed il dolore è paragonabile a quello di una semplice iniezione nel gluteo.",
        image: "/images/infiltrazioni-articolari.jpg",
        category: "manuMedica",
        slug: "infiltrazioni-articolari"
    },
    {
        id: 6,
        title: "Tecarterapia",
        description: "E' una terapia innovativa che sfrutta il principio del condensatore al fine di stimolare i processi biologici fisiologici, riparativi e antinfiammatori del nostro organismo.La T.E.C.A.R si basa su un passaggio attraverso il corpo di una radiofrequenza, da un elettrodo a contatto con la cute ad una piastra metallica opposta ad esso.",
        image: "/images/tecarterapia.jpg",
        category: "medicinaFisica",
        slug: "tecarterapia"
    },
    {
        id: 7,
        title: "Onde d'urto",
        description: "Le onde d'urto consentono un aumento dell'attività e del recupero biologico mediante la somministrazione di piccoli impulsi, modulati in base all'analisi dei tessuti. Il metabolismo migliora, l’irrorazione  sanguigna aumenta, il tessuto danneggiato si rigenera e guarisce.",
        image: "/images/onde-d-urto.jpg",
        category: "medicinaFisica",
        slug: "onde-d-urto"
    },
    {
        id: 8,
        title: "Laserterapia",
        description: "La luce laser produce un effetto antalgico su dolori di tipo somatico nella sede di maggiore proiezione algica, portando una diminuzione della sintomatologia e la remissione del dolore. Un altro effetto è quello biostimolante, cioè l’accellerazione della cicatrizzazione di ulcere e piaghe di varia natura.",
        image: "/images/laserterapia.jpg",
        category: "medicinaFisica",
        slug: "laserterapia"
    },
    {
        id: 9,
        title: "Ipertermia",
        description: "Il calore è un principio terpeutico che trova indicazione in numerose patologie dell'apparato muscolo scheletrico; la somministrazione del calore mediante Ipertermia avviene in maniera piu rigorosa ed efficace di quanto consentito da tutte le metodiche tradizionali; il campo di applicazione spazia dalla traumatologia sportiva alle patologie degenerative articolari.",
        image: "/images/ipertermia.jpg",
        category: "medicinaFisica",
        slug: "ipertermia"
    },
    {
        id: 10,
        title: "Idroforesi",
        description: "Rappresenta una evoluzione della ionoforesi in quanto permette la somministrazione farmacologica in profondità in modo non invasivo. In pratica sostituisce la classica metodica di 'infiltrazione' di farmaci in un determinato distretto. Il vantaggio è avere maggiore disponibilità di principio attivo localmente senza gli effetti collaterali della somministrazione sistemica.",
        image: "/images/idroforesi.jpg",
        category: "medicinaFisica",
        slug: "idroforesi"
    },
    {
        id: 11,
        title: "Elettroterapia",
        description: "Le correnti utilizzate in elettroterapia hanno un’efficace azione antalgica. Sono indicate nei dolori post-traumatici muscolari o articolari, artralgie croniche, nevralgie, irritazioni radicolari (lombalgie, sciatalgie, cervicobrachialgie, nevralgia del trigemino), tenosinoviti, artriti e periartriti acute e sub-acute, epicondiliti ed epitrocleiti, torcicollo, dolori a carico di cicatrici da intervento chirurgico, monconi d’amputazione.",
        image: "/images/elettroterapia.jpg",
        category: "medicinaFisica",
        slug: "elettroterapia",
    },
    {
        id: 12,
        title: "Magnetoterapia",
        description: "La magnetoterapia è un particolare tipo di terapia fisica strumentale che utilizza apparecchiature generanti campi magnetici a bassa intensità e frequenza variabile. Gli effetti principali sono: antiedematoso, antalgico, antiflogistico, rigenerativo particolarmente indicata in casi di osteoporosi.",
        image: "/images/magnetoterapia.jpg",
        category: "medicinaFisica",
        slug: "magnetoterapia"
    },
    {
        id: 13,
        title: "Ultrasuonoterapia",
        description: "E' una terapia strumentale che utilizza un onda sonora a bassa frequenza, che si trasmette e propaga all’interno del distretto corporeo che viene trattato. L'apparecchiatura ad ultrasuoni dotata di un sistema di controllo dell’onda in uscita che permette di far arrivare al tessuto, bersaglio del trattamento, un segnale pulito, senza dispersione dell’onda acustica. Questo si traduce in un trattamento più efficace con una risoluzione più veloce della sintomatologia.",
        image: "/images/ultrasuonoterapia.jpg",
        category: "medicinaFisica",
        slug: "ultrasuonoterapia"
    },
    {
        id: 14,
        title: "Fisiokinesiterapia",
        description: "Studia il movimento nelle diverse forme ed è applicata a scopo preventivo, correttivo e rieducativo, quindi comprende tutte quelle forme di rieducazione della motricità dell’uomo è indicata nel recupero della mobilità articolare, la correzione degli atteggiamenti e delle deformità ortopediche.",
        image: "/images/fisiokinesiterapia.jpg",
        category: "riabilitazione",
        slug: "fisiokinesiterapia"
    },
    {
        id: 15,
        title: "Riabilitazione motoria",
        description: "Prevede l'applicazione di un numero di sedute variabile in relazione alla gravità del problema manifestato e alla capacità di guarigione intrinseca di ogni soggetto. Al termine di questa fase il soggetto può riprendere l'attività lavorativa quotidiana con estrema sicurezza.",
        image: "/images/riabilitazione-motoria.jpg",
        category: "riabilitazione",
        slug: "riabilitazione-motoria"
    },
    {
        id: 16,
        title: "Linfodrenaggio manuale",
        description: "Attraverso una specifica manualità eseguita attraverso pressioni lente, ritmate, di lieve intensità ed in direzione prossimo-distale viene stimolata la circolazione della linfa attraverso i canali linfatici al fine di convogliare i liquidi dalle zone di stasi alle stazioni linfatiche putative.",
        image: "/images/linfodrenaggio-manuale.jpg",
        category: "riabilitazione",
        slug: "linfodrenaggio-manuale"
    },
    {
        id: 17,
        title: "Trazioni vertebrali",
        description: "La terapia mediante trazione ha origini antichissime. Lo scopo del trattamento è un sollecito effetto antalgico con il fine di vincere la contrattura muscolare che si associa sempre al dolore.",
        image: "/images/trazioni-vertebrali.jpg",
        category: "riabilitazione",
        slug: "trazioni-vertebrali"
    },
    {
        id: 18,
        title: "Neurotaping",
        description: "Il taping o neurotaping è una tecnica di applicazione di un nastro adesivo che facilita la comunicazione tra il sistema muscolare, il sistema scheletrico, il sistema neurologico e il sistema linfatico. E’ una tecnica correttiva meccanica e sensoriale che favorisce una migliore circolazione sanguigna e linfatica nell’aria trattata.",
        image: "/images/neurotaping.jpg",
        category: "riabilitazione",
        slug: "neurotaping"
    },
]

module.exports = services;