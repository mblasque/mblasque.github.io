export const _labels = [
    { key: "about", en: "About", pt: "Sobre mim" },
    { key: "education", en: "Education", pt: "Formação Acadêmica" },
    { key: "experience", en: "Experiecne", pt: "Experiência" },
    { key: "aboutMe", en: "About me", pt: "Sobre mim" },
    { 
        key: "aboutText", 
        en: "Nine years of experience in analysis, architecture and development of systems. Solid knowledge in writing code in C# and Delphi languages as well as advanced queries for any SQL database. Seven years of experience with Scrum Framework, being two of them as Scrum Master. Proactive and self-starter professional, able to work with new technologies. Certified Professional Scrum Master (PSM I and II) and Scaled Professional Scrum (SPS) by Scrum.org.", 
        pt: "Bacharel em Engenharia da Computação, pós-graduado em Gerenciamento de Projetos e cursando MBA em Data Science and Analytics pela USP. Nove anos de experiência em análise e desenvolvimento de sistemas. Experiência de sete anos desenvolvendo software utilizando o framework Scrum. Vivência internacional de quatro meses na cidade de Gold Coast, na Austrália, para o aperfeiçoamento da língua inglesa. Professional Scrum Master (PSM I e II) e Scaled Professional Scrum (SPS) certificado pela Scrum.org."
    },
    { key: "name", en: "Maurício Blasque", pt: "Maurício Blasque" },
    { key: "softwareEngineer", en: "Software Enginner", pt: "Engenheiro de Software" },
    { key: "metaInterval", en: "Oct/2020 - Now", pt: "Out/2020 - Hoje" },
    { key: "invilliaInterval", en: "Apr/2020 - Oct/2020", pt: "Abr/2020 - Out/2020" },
    { key: "appInterval1", en: "Jan/2020 - Apr/2020", pt: "Jan/2020 - Abr/2020" },
    { key: "appInterval2", en: "Jun/2016 - Jan/2020", pt: "Jun/2016 - Jan/2020" },
    { key: "techLead", en: "Tech Lead", pt: "Líder Técnico" },
    { key: "fullStack", en: "Full Stack", pt: "Full Stack" },
];

export const labels = (key: string | undefined, language: string) => {
    let label =  _labels.filter((label) => { return label.key === key });

    if (label.length === 0) return "";

    return language === "pt" ? label[0].pt : label[0].en;
}

export default labels;