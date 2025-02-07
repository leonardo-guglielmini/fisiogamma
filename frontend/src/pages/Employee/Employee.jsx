import { useContext } from "react"
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import GlobalContext from "../../contexts/GlobalContext"

export default function Employee() {

    const { staff, containerSize } = useContext(GlobalContext);
    const { slug } = useParams();

    const employee = staff.find((el) => el.slug === slug);

    return (
        <div className={`${containerSize} py-10`}>
            {employee &&
                <div className="flex px-5 justify-center items-start border-r border-(--hover)">
                    <img src={`http://localhost:3000/${employee.image}`} alt={employee.slug} className="rounded-md shadow-md" />
                    <div className="pl-5">
                        <h1 className="text-3xl text-(--hover) font-bold mb-5 border-b border-(--hover) w-6/12">{employee.name} {employee.surname}</h1>
                        <ReactMarkdown>{employee.bio}</ReactMarkdown>
                    </div>
                </div>
            }
        </div>
    )
}