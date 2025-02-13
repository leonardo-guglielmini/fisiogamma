import { useState, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion";

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import GlobalContext from "../contexts/GlobalContext"

export default function Services() {

    const [manuMedica, setManuMedica] = useState(false);
    const [medicinaFisica, setMedicinaFisica] = useState(false);
    const [riabilitazione, setRiabilitazione] = useState(false);
    const [visiteSpecialistiche, setVisiteSpecialistiche] = useState(false);
    const [all, setAll] = useState(true);

    const showManuMedica = () => {
        setManuMedica(true);
        setMedicinaFisica(false);
        setRiabilitazione(false);
        setVisiteSpecialistiche(false);
        setAll(false);
    }

    const showMedicinaFisica = () => {
        setManuMedica(false);
        setMedicinaFisica(true);
        setRiabilitazione(false);
        setVisiteSpecialistiche(false);
        setAll(false);
    }

    const showRiabilitazione = () => {
        setManuMedica(false);
        setMedicinaFisica(false);
        setRiabilitazione(true);
        setVisiteSpecialistiche(false);
        setAll(false);
    }

    const showVisiteSpecialistiche = () => {
        setManuMedica(false);
        setMedicinaFisica(false);
        setRiabilitazione(false);
        setVisiteSpecialistiche(true);
        setAll(false);
    }

    const showAll = () => {
        setManuMedica(true);
        setMedicinaFisica(true);
        setRiabilitazione(true);
        setVisiteSpecialistiche(true);
        setAll(true);
    }

    const fadeInOut = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    }

    const { services, containerSize } = useContext(GlobalContext);
    const [showDescription, setShowDescription] = useState(null);

    function toggleShowDescription(id) {
        setShowDescription(showDescription === id ? null : id);
    }

    return (
        <div className={`${containerSize} flex flex-col gap-5 py-10`}>
            <div className="justify-end gap-5 hidden xl:flex">
                <button onClick={() => showManuMedica()} className={`${(manuMedica && !all) ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white bg-(--accent) font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Manu Medica</button>
                <button onClick={() => showMedicinaFisica()} className={`${(medicinaFisica && !all) ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white bg-(--accent) font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Medicina Fisica</button>
                <button onClick={() => showRiabilitazione()} className={`${(riabilitazione && !all) ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white bg-(--accent) font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Riabilitazione</button>
                <button onClick={() => showVisiteSpecialistiche()} className={`${(visiteSpecialistiche && !all) ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Visite Specialistiche</button>
                <button onClick={() => showAll()} className={`${all ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Mostra tutte</button>
            </div>
            <div className="xl:border-r border-(--hover)">
                <AnimatePresence>
                    {(manuMedica || all) && (
                        <motion.div
                            className="p-3"
                            variants={fadeInOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className={`p-3 ${all && "border-b border-(--hover)"}`}>
                                <h1 className="text-3xl text-(--hover) font-bold">Manu Medica</h1>
                                {services.filter((service) => service.category === "manuMedica").map((service) => (
                                    <div key={service.id} className="my-5 p-3 flex flex-col xl:flex-row justify-between lg:gap-10 items-center xl:items-start">
                                        <img src={`http://localhost:3000${service.image}`} alt="service_image" className="border-1 border-(--hover) rounded-md" />
                                        <div >
                                            <div className="text-2xl flex items-center justify-self-center xl:justify-self-start" onClick={() => toggleShowDescription(service.id)}>
                                                <h2 className="pr-1">{service.title}</h2>
                                                <span className="text-sm xl:hidden">{showDescription === service.id ? <FaArrowUp /> : <FaArrowDown />} </span>
                                            </div>

                                            <p className="hidden xl:block">{service.description}</p>
                                            <AnimatePresence>
                                                {showDescription === service.id &&
                                                    <motion.div
                                                        className="mt-2 text-(--text) opacity-75"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <p className="text-(--text) opacity-75 xl:hidden">{service.description}</p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>)}
                </AnimatePresence>

                <AnimatePresence>
                    {(medicinaFisica || all) && (
                        <motion.div
                            className="p-3"
                            variants={fadeInOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        ><div className={`p-3 ${all && "border-b border-(--hover)"}`}>
                                <h1 className="text-3xl text-(--hover) font-bold">Medicina Fisica</h1>
                                {services.filter((service) => service.category === "medicinaFisica").map((service) => (
                                    <div key={service.id} className="my-5 p-3 flex flex-col xl:flex-row justify-between lg:gap-10 items-center xl:items-start">
                                        <img src={`http://localhost:3000${service.image}`} alt="service_image" className="border-1 border-(--hover) rounded-md" />
                                        <div >
                                            <div className="text-2xl flex items-center justify-self-center xl:justify-self-start" onClick={() => toggleShowDescription(service.id)}>
                                                <h2 className="pr-1">{service.title}</h2>
                                                <span className="text-sm xl:hidden">{showDescription === service.id ? <FaArrowUp /> : <FaArrowDown />} </span>
                                            </div>

                                            <p className="hidden xl:block">{service.description}</p>
                                            <AnimatePresence>
                                                {showDescription === service.id &&
                                                    <motion.div
                                                        className="mt-2 text-(--text) opacity-75"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <p className="text-(--text) opacity-75 xl:hidden">{service.description}</p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>)}
                </AnimatePresence>
                <AnimatePresence>
                    {(riabilitazione || all) && (
                        <motion.div
                            className="p-3"
                            variants={fadeInOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className={`p-3 ${all && "border-b border-(--hover)"}`}>
                                <h1 className="text-3xl text-(--hover) font-bold">Riabilitazione</h1>
                                {services.filter((service) => service.category === "riabilitazione").map((service) => (
                                    <div key={service.id} className="my-5 p-3 flex flex-col xl:flex-row justify-between lg:gap-10 items-center xl:items-start">
                                        <img src={`http://localhost:3000${service.image}`} alt="service_image" className="border-1 border-(--hover) rounded-md" />
                                        <div >
                                            <div className="text-2xl flex items-center justify-self-center xl:justify-self-start" onClick={() => toggleShowDescription(service.id)}>
                                                <h2 className="pr-1">{service.title}</h2>
                                                <span className="text-sm xl:hidden">{showDescription === service.id ? <FaArrowUp /> : <FaArrowDown />} </span>
                                            </div>

                                            <p className="hidden xl:block">{service.description}</p>
                                            <AnimatePresence>
                                                {showDescription === service.id &&
                                                    <motion.div
                                                        className="mt-2 text-(--text) opacity-75"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <p className="text-(--text) opacity-75 xl:hidden">{service.description}</p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>)}
                </AnimatePresence>
                <AnimatePresence>
                    {(visiteSpecialistiche || all) && (
                        <motion.div
                            className="p-3"
                            variants={fadeInOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="p-3">
                                <h1 className="text-3xl text-(--hover) font-bold">Visite Specialistiche</h1>
                                {services.filter((service) => service.category === "visitaSpecialistica").map((service) => (
                                    <div key={service.id} className="my-5 p-3 flex flex-col xl:flex-row justify-between lg:gap-10 items-center xl:items-start">
                                        <img src={`http://localhost:3000${service.image}`} alt="service_image" className="border-1 border-(--hover) rounded-md" />
                                        <div >
                                            <div className="text-2xl flex items-center justify-self-center xl:justify-self-start" onClick={() => toggleShowDescription(service.id)}>
                                                <h2 className="pr-1">{service.title}</h2>
                                                <span className="text-sm xl:hidden">{showDescription === service.id ? <FaArrowUp /> : <FaArrowDown />} </span>
                                            </div>

                                            <p className="hidden xl:block">{service.description}</p>
                                            <AnimatePresence>
                                                {showDescription === service.id &&
                                                    <motion.div
                                                        className="mt-2 text-(--text) opacity-75"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <p className="text-(--text) opacity-75 xl:hidden">{service.description}</p>
                                                    </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>)}
                </AnimatePresence>
                {!manuMedica && !medicinaFisica && !riabilitazione && !visiteSpecialistiche && !all && <p className="text-xl text-(--accent)">Nessun servizio disponibile</p>}
            </div>
        </div>
    )
}