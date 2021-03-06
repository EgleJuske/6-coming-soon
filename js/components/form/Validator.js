class Validator {
    static isValidName(name) {
        // ne tuscias tekstas
        const notEmptyString = Validator.notEmptyString(name);
        if (notEmptyString !== true) return notEmptyString;

        // tik abeceles raides
        const onlyAlphabet = Validator.onlyAlphabet(name);
        if (onlyAlphabet !== true) return onlyAlphabet;

        // tik pirma raide didzioji
        const onlyFirstLetterUppercase = Validator.onlyFirstLetterUppercase(name);
        if (onlyFirstLetterUppercase !== true) return onlyFirstLetterUppercase;

        return true;
    }

    static isValidEmail(email) {
        // ne tuscias tekstas
        const notEmptyString = Validator.notEmptyString(email);
        if (notEmptyString !== true) return notEmptyString;

        // ne trumpesnis nei 6 simboliai
        // tik 1 @ simbolis
        // pries @ turi buti nemaziau 1 simbolio
        // uz @ turi buti ne maziau 4 simboliu
        // be @ dar gali buti tik raides, skaiciai, taskas, minusas, underscore
        // domenu dalyje tik 1 taskas
        // lokasioj daly negali eiti keli [taskai, minusai, underscore] is eiles

        return true;
    }

    static isValidMessage(message) {
        // ne tuscias tekstas
        // nevirsyti 1000 simboliu
        // 
        return true;
    }

    static notEmptyString(text) {
        if (typeof text !== 'string') {
            return 'Turi buti tekstas';
        }
        if (text === '') {
            return 'Tekstas negali buti tuscias';
        }
        return true;
    }

    static onlyAlphabet(text) {
        const abc = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        return Validator.onlyAllowedSymbols(text, abc);
    }

    static onlyNumbers(text) {
        const abc = '1234567890';
        return Validator.onlyAllowedSymbols(text, abc);
    }

    static onlyAllowedSymbols(text, allowedSymbols) {
        for (let t of text) {
            let singleAllowedTextSymbol = false;
           for (let a of allowedSymbols) {
               if (a === t) {
                    singleAllowedTextSymbol = true;
                    break;
               }
           } 
           // jei bent viena text raide yra neleistina, tuomet radom kritine klaida
           if (!singleAllowedTextSymbol) {
                return `ERROR: rastas neleistinas "${t}" simbolis.`;
           }
        }
        return true;
    }

    static onlyFirstLetterUppercase(text) {
        let convertedText = text[0].toUpperCase() + text.slice(1).toLowerCase();

        if (text !== convertedText) {
            return 'ERROR: Pirmas simbolis turi būti didžioji raidė, kitos mažosios '
        }

        return true;
    }

}

export { Validator }