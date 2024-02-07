## Hey, this is just a example, on my machine worked!

It's important to know how to deal with multiple kinds of users, and the one of the most important barriers is the language so it's very important that your project has some sort of internationalization.
There are many forms implement Internationalization on you project, but the quickest and easiest i found was with i18next + react-i18n.

## How to:

- Create your project (i use [vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)):

```
npm create vite@latest
```

- Add i18next + react-i18n to your project

```
 npm install react-i18next i18next --save
```

- Create a folder called `lib` and create a file called `i18n.ts`:

> should look like this

```
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {},
  lng: "en", // the default language you want on your project

});
```

- Create another folder on `src` called `locale`, there you can add your `.json` files, on this example i created two:
  - `en.json` for English and `pt.json` for Portuguese:
  - `en.json`

```
{
    "translation":{
        "header": "Our Header",
        "footer": "Our Footer {{year}}"
    }
}
```

- `pt.json`

```
{
    "translation":{
        "header": "Nosso Cabeçalho",
        "footer": "Nosso Rodape {{year}}"
    }
}
```

---

### Now go back on your `i18n.ts` file:

> should look like this

```
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//Add the translation files
import enTranslations from "../locale/en.json";
import ptTranslations from "../locale/pt.json";

i18n.use(initReactI18next).init({
  resources: {

    en: { ...enTranslations },

    pt: { ...ptTranslations },

  },
  lng: "en",

});
```

## Final Steps!

- Go on your `main.tsx` file and import the i18n.ts file:

```
import "./lib/i18n.ts";
```

### Now we have to make usage of this, let's go on App.tsx

- Let's add the `useTranslation` hook:

```
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
```

- Create a useState just switch between the languages
    `const [currentLang, setCurrentLang] = useState(language);`
- Create a simple function to switch the languages

```
  const switchLang = () => {

    const newLang = currentLang === "en" ? "pt" : "en";

    changeLanguage(newLang);

    setCurrentLang(newLang);
  };
```

- Change your App.tsx so we can test our theory!

> Should look like this

```
 return (

    <>

      <h1>{t("header")}</h1>

      <button type="button" onClick={switchLang}>
        Change Language manually
      </button>

      <footer>
        <h1>{t("footer", { year: new Date().getFullYear() })}</h1>
      </footer>

    </>

  );
```

- As you can see, to use the translation we have to pass the `t` from `useTranslation` with the tokens we created on our json languages.

## Result

On English!
![[Pasted image 20240207143416.png]]
On Portuguese!
![[Pasted image 20240207143428.png]]---

# I Hope this could helped you somehow!

How to find me?

- Github: https://github.com/guim0
- LinkedIn: https://www.linkedin.com/in/guim0-dev/
