"use client"

import Link from "next/link"
import HTMLPAGE from "../../../components/tutorial_pages/page";
import CSSPAGE from "@/components/tutorial_pages/csspage";
import JAVASCRIPTPAGE from "@/components/tutorial_pages/javascriptpage";
import TAILWINDPAGE from "@/components/tutorial_pages/Tailwindpage";
import REACTPAGE from "@/components/tutorial_pages/Reactpage";
import NEXTJSPAGE from "@/components/tutorial_pages/Nextjspage";

export default function Page({ params }) {

    const languages = ["HTML", "CSS", "Javascript", "Tailwind", "Reactjs", "Nextjs"]
    const { slug } = params;
    let content;

    switch (slug) {
        case 'HTML':
            content = <HTMLPAGE />;
            break;
        case 'CSS':
            content = <CSSPAGE />;
            break;
        case 'Javascript':
            content = <JAVASCRIPTPAGE />;
            break;
        case 'Tailwind':
            content = <TAILWINDPAGE />;
            break;
        case 'Reactjs':
            content = <REACTPAGE />;
            break;
        case 'Nextjs':
            content = <NEXTJSPAGE />;
            break;
    }

    if (languages.includes(params.slug)) {
        return (
            <>
                <div className="px-8 py-4 text-right">
                    <span className="text-3xl font-bold cursor-default text-violet-600">{params.slug}</span>
                </div>

                <div className="content-wrapper">{content}</div>
            </>
        )


    }
    else {
        return <div className="text-2xl text-black text-center flex flex-col"> <span className="text-3xl text-violet-500 opacity-40">404 ERROR</span> <p className="text-xl text-violet-700 opacity-80">Sorry, Page not found!</p>
        </div>
    }


}