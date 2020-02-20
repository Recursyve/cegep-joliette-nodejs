describe("JSON resources files", () => {
    function load(lang: string) {
        delete require.cache[require.resolve(`./${lang}.json`)];
        return require(`./${lang}.json`);
    }

    const isObject = val => val && typeof val === "object" && !Array.isArray(val);

    function replaceValuesByKeys(obj: any) {
        if (!obj) return;
        for (let key of Object.keys(obj)) {
            if (obj.hasOwnProperty(key)) {
                let value = obj[key];
                if (isObject(value)) {
                    replaceValuesByKeys(value);
                } else {
                    obj[key] = key;
                }
            }
        }
    }

    it("FR resources are properly defined.", async () => {
        let fr = load("fr");
        expect(fr).toBeTruthy();
    });

    it("EN resources are properly defined.", async () => {
        let en = load("en");
        expect(en).toBeTruthy();
    });

    it("Both localization files have the same keys", async () => {
        let fr = load("fr");
        let en = load("en");

        replaceValuesByKeys(fr);
        replaceValuesByKeys(en);

        expect(fr).toEqual(en);
    });
});
