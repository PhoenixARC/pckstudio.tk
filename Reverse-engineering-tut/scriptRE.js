 // For simplicity here all the locales are kept in this array. In real-life project the data can be fetched from a JSON object or DB.
      const localization = [
        {
          mnu: "Menu",
          home: "Home",
          pckstudio: "PCK Studio",
          arcstudio: "ARC Studio",
          msscmpstudio: "MSSCMP Studio",
          texturetool: "Texture Builder Tool",
coleditor: "COL Editor",
          Reverseengineeringtut: "Reverse Engineering",
          re1: "Reverse Engineering",
          re2: "Reverse Engineering",
          li1: "Setting up IDA for PS3",
          li2: "IDA Basics",
          li3: "Resigning Eboots and SPRX Files",
          li4: "Resigning SPRX and Eboots",
          li5: "Fake CCAPI DLLs for HEN",
          li6: "PS3 NetCheat(Includes HEN)",
          about: "About.",
          aboutdesc: "Throughout my years as a Modder for Minecraft on the legacy consoles, I've learned much about the game itself as well as the consoles it runs on, because of this, combined with the fact that many creators have stopped modding either on legacy consoles, or completely, I have made it my mission to make tools that are both open source, and easy to use, to allow anyone, no matter how new, to dive in head first and make incredible mods.",
          pckstudio3: "PCK Studio",
          arcstudio3: "ARC Studio",
          msscmpstudio3: "MSSCMP Studio",
          texturetool3: "Texture Builder Tool",
          Reverseengineeringtut2: "Introduction to reverse engineering.",
          scocialmedia: "Social Media",
		  filetypes: "File Types",
          download: "DOWNLOAD",
          source: "SOURCE",
        },
        {
          mnu: "メニュー",
          home: "ホームホーム",
          pckstudio: "PCKスタジオ",
          arcstudio: "ARCスタジオ",
          msscmpstudio: "MSSCMPスタジオ",
          texturetool: "テクスチャビルダーツール",
coleditor: "COLエディター",
          Reverseengineeringtut: "リバースエンジニアリング",
          re1: "リバースエンジニアリング",
          re2: "リバースエンジニアリング",
          li1: "PS3用のIDAの設定",
          li2: "IDAの基本",
          li3: "EbootsとSPRXファイルの辞任",
          li4: "SPRXとEbootsの辞任",
          li5: "HEN用の偽のCCAPIDLL",
          li6: "PS3 NetCheat（HENを含む）",
          about: "約",
          aboutdesc: "レガシーコンソールでMinecraftのModderとして働いていた数年間、ゲーム自体とそれが実行されるコンソールについて多くのことを学びました。これは、多くのクリエイターがレガシーコンソールでの改造をやめたという事実と相まって、 または完全に、私はオープンソースで使いやすいツールを作成することを使命としており、どんなに新しくても、誰もが最初に頭に飛び込んで信じられないほどの改造を行うことができます。",
          pckstudio3: "PCKスタジオ",
          arcstudio3: "ARCスタジオ",
          msscmpstudio3: "MSSCMPスタジオ",
          texturetool3: "テクスチャビルダーツール",
          Reverseengineeringtut2: "リバースエンジニアリング入門。",
          scocialmedia: "ソーシャルメディア",
		  filetypes: "ファイルタイプ",
          download: "ダウンロード",
          source: "ソース",
        },
      ];

      // Select all the elements of the page for which we need localization. Here I do it manually, but you may think of a loop that could grab all the elements via their -data attributes and put them in separate variables
      const mnu = document.getElementById("mnu");
      const home = document.getElementById("home");
      const pckstudio = document.getElementById("pckstudio");
      const arcstudio = document.getElementById("arcstudio");
      const msscmpstudio = document.getElementById("msscmpstudio");
      const texturetool = document.getElementById("texturetool");
const coleditor = document.getElementById("coleditor");
      const Reverseengineeringtut = document.getElementById("Reverseengineeringtut");
      const re1 = document.getElementById("re1");
      const re2 = document.getElementById("re2");
      const li1 = document.getElementById("li1");
      const li2 = document.getElementById("li2");
      const li3 = document.getElementById("li3");
      const li4 = document.getElementById("li4");
      const li5 = document.getElementById("li5");
      const li6 = document.getElementById("li6");
      const about = document.getElementById("about");
      const aboutdesc = document.getElementById("aboutdesc");
      const pckstudio3 = document.getElementById("pckstudio3");
      const arcstudio3 = document.getElementById("arcstudio3");
      const msscmpstudio3 = document.getElementById("msscmpstudio3");
      const texturetool3 = document.getElementById("texturetool3");
      const Reverseengineeringtut2 = document.getElementById("Reverseengineeringtut2");
      const scocialmedia = document.getElementById("scocialmedia");

      const filetypes = document.getElementById("filetypes");
      const download = document.getElementById("download");
      const source = document.getElementById("source");
      // Important  here I put all these elements into an array, so that later I could loop over it and apply the necessary language settings
      const textElements = [mnu, home, pckstudio, arcstudio, msscmpstudio, texturetool, coleditor, re1, re2, li1, li2, li3, li4, li5, li6, Reverseengineeringtut, about, aboutdesc, pckstudio3, arcstudio3, 
	  msscmpstudio3, texturetool3, Reverseengineeringtut2, scocialmedia, filetypes, download, source];


		console.log(document.getElementById("pckstudio1"));
      // Selecting a 'switcher' element on a web page. In my case it is a <select> element with an id of 'locale'
      let local = document.getElementById("locale");

      // Now let's react to the changes in <select> element and see which <option> has been chosen
      let currentLang = null;
      local.addEventListener("change", function () {
        switch (this.value) {
          case "en":
            currentLang = 0;
            break;
          case "jp":
            currentLang = 1;
            break;
          default:
            currentLang = 0;
        }

        // OK, so now let's loop over textElements and give relevant content to each element on the page
        textElements.forEach(function (el) {
          let prop = el.getAttribute("id");
          el.innerHTML = localization[currentLang][prop];
        });
      });