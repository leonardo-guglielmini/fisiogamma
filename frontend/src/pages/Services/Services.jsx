import { useState, useContext, } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import { motion, AnimatePresence } from "framer-motion";

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
    return (
        <div className={`${containerSize} flex flex-col gap-5 py-10`}>
            <div className="flex justify-end gap-5">
                <button onClick={() => showManuMedica()} className={`${(manuMedica && !all) ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white bg-(--accent) font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Manu Medica</button>
                <button onClick={() => showMedicinaFisica()} className={`${(medicinaFisica && !all) ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white bg-(--accent) font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Medicina Fisica</button>
                <button onClick={() => showRiabilitazione()} className={`${(riabilitazione && !all) ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white bg-(--accent) font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Riabilitazione</button>
                <button onClick={() => showVisiteSpecialistiche()} className={`${(visiteSpecialistiche && !all) ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Visite Specialistiche</button>
                <button onClick={() => showAll()} className={`${all ? "bg-(--hover)" : "bg-(--accent)"} py-3 px-5 text-white font-bold rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out`}>Mostra tutte</button>
            </div>
            <div className="border-r border-(--hover)">
                <AnimatePresence>
                    {(manuMedica || all) && (
                        <motion.div
                            className="p-3 w-10/12"
                            variants={fadeInOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className={`p-3 ${all && "border-b border-(--hover)"} w-10/12`}>
                                <h1 className="text-3xl text-(--hover) font-bold">Manu Medica</h1>
                                {services.filter((service) => service.category === "manuMedica").map((service) => (
                                    <div key={service.id} className="my-5 p-3 flex justify-between gap-10 items-start">
                                        <img src={`http://localhost:3000${service.image}`} alt="service_image" className="border-1 border-(--hover) rounded-md" />
                                        <div>
                                            <h2 className="text-2xl">{service.title}</h2>
                                            <p className="text-(--text) opacity-75">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>)}
                </AnimatePresence>

                <AnimatePresence>
                    {(medicinaFisica || all) && (
                        <motion.div
                            className="p-3 w-10/12"
                            variants={fadeInOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        ><div className={`p-3 ${all && "border-b border-(--hover)"} w-10/12`}>
                                <h1 className="text-3xl text-(--hover) font-bold">Medicina Fisica</h1>
                                {services.filter((service) => service.category === "medicinaFisica").map((service) => (
                                    <div key={service.id} className="my-5 p-3 flex justify-between gap-10 items-start h-full">
                                        <img src={`http://localhost:3000${service.image}`} alt="service_image" className="border-1 border-(--hover) rounded-md" />
                                        <div>
                                            <h2 className="text-2xl">{service.title}</h2>
                                            <p className="text-(--text) opacity-75">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>)}
                </AnimatePresence>
                <AnimatePresence>
                    {(riabilitazione || all) && (
                        <motion.div
                            className="p-3 w-10/12"
                            variants={fadeInOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className={`p-3 ${all && "border-b border-(--hover)"} w-10/12`}>
                                <h1 className="text-3xl text-(--hover) font-bold">Riabilitazione</h1>
                                {services.filter((service) => service.category === "riabilitazione").map((service) => (
                                    <div key={service.id} className="my-5 p-3 flex justify-between gap-10 items-start h-full">
                                        <img src={`http://localhost:3000${service.image}`} alt="service_image" className="border-1 border-(--hover) rounded-md" />
                                        <div>
                                            <h2 className="text-2xl">{service.title}</h2>
                                            <p className="text-(--text) opacity-75">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>)}
                </AnimatePresence>
                <AnimatePresence>
                    {(visiteSpecialistiche || all) && (
                        <motion.div
                            className="p-3 w-10/12"
                            variants={fadeInOut}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="p-3 w-10/12">
                                <h1 className="text-3xl text-(--hover) font-bold">Visite Specialistiche</h1>
                                {services.filter((service) => service.category === "visitaSpecialistica").map((service) => (
                                    <div key={service.id} className="my-5 p-3 flex justify-between gap-10 items-start">
                                        <img src={`http://localhost:3000${service.image}`} alt="service_image" className="border-1 border-(--hover) rounded-md" />
                                        <div>
                                            <h2 className="text-2xl">{service.title}</h2>
                                            <p className="text-(--text) opacity-75">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>)}
                </AnimatePresence>
                {!manuMedica && !medicinaFisica && !riabilitazione && !visiteSpecialistiche && <p className="text-xl text-(--accent)">Nessun servizio disponibile</p>}
            </div>
        </div>
    )
}