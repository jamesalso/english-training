export interface I_Language {
    code: string;
    flag: string;
}

export interface I_LanguageContextType {
    selectedLanguage: string;
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}
