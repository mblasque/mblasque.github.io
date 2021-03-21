export const _labels = [
    { "key": "about", "en": "About", "pt": "Sobre mim" },
    { "key": "education", "en": "Education", "pt": "Formação Acadêmica" },
    { "key": "experience", "en": "Experiecne", "pt": "Experiência" },
];

export const labels = (key: string) => {
    let label =  _labels.filter((label) => { return label.key === key });

    if (label.length === 0) return "";

    return "pt" === "pt" ? label[0].pt : label[0].en;
}

export default labels;