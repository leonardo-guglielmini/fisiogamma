import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "./Header";
import Footer from "./Footer";

export default function Default() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div className="flex flex-col min-h-screen bg-(--bg)">
                <Header />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </motion.div>
    )
}