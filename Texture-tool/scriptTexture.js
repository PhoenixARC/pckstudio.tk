 // For simplicity here all the locales are kept in this array. In real-life project the data can be fetched from a JSON object or DB.
      const localization = [
        {
          mnu: "Menu",
          home: "Home",
          pckstudio: "PCK Studio",
          arcstudio: "ARC Studio",
          msscmpstudio: "MSSCMP Studio",
          texturetool: "Texture Builder Tool",
          texturetool1: "Texture Builder Tool",
          texturetool2: "Texture Builder Tool",
          Reverseengineeringtut: "Reverse Engineering",
          texturetool2desc: "Welcome to a world in which making Texture packs doesn't need to be an incredibly tedious task, This tool's goal is to aid in the creation of these texture packs by handling the majority of the tedious tasks. I hope you have lots of fun with this tool, good luck!",
          about: "About.",
          aboutdesc: "Throughout my years as a Modder for Minecraft on the legacy consoles, I've learned much about the game itself as well as the consoles it runs on, because of this, combined with the fact that many creators have stopped modding either on legacy consoles, or completely, I have made it my mission to make tools that are both open source, and easy to use, to allow anyone, no matter how new, to dive in head first and make incredible mods.",
          pckstudio3: "PCK Studio",
          arcstudio3: "ARC Studio",
          msscmpstudio3: "MSSCMP Studio",
          texturetool3: "Texture Builder Tool",
          Reverseengineeringtut2: "Introduction to reverse engineering.",
          scocialmedia: "Social Media",
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
          texturetool1: "テクスチャビルダーツール",
          texturetool2: "テクスチャビルダーツール",
          Reverseengineeringtut: "リバースエンジニアリング",
          texturetool2desc: "テクスチャパックの作成が非常に面倒な作業である必要がない世界へようこそ。このツールの目標は、面倒な作業の大部分を処理することにより、これらのテクスチャパックの作成を支援することです。 このツールをたくさん楽しんでいただければ幸いです。頑張ってください！",
		  about: "約",
          aboutdesc: "レガシーコンソールでMinecraftのModderとして働いていた数年間、ゲーム自体とそれが実行されるコンソールについて多くのことを学びました。これは、多くのクリエイターがレガシーコンソールでの改造をやめたという事実と相まって、 または完全に、私はオープンソースで使いやすいツールを作成することを使命としており、どんなに新しくても、誰もが最初に頭に飛び込んで信じられないほどの改造を行うことができます。",
          pckstudio3: "PCKスタジオ",
          arcstudio3: "ARCスタジオ",
          msscmpstudio3: "MSSCMPスタジオ",
          texturetool3: "テクスチャビルダーツール",
          Reverseengineeringtut2: "リバースエンジニアリング入門。",
          scocialmedia: "ソーシャルメディア",
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
      const texturetool2 = document.getElementById("texturetool2");
      const texturetool1 = document.getElementById("texturetool1");
      const Reverseengineeringtut = document.getElementById("Reverseengineeringtut");
      const about = document.getElementById("about");
      const aboutdesc = document.getElementById("aboutdesc");
      const pckstudio3 = document.getElementById("pckstudio3");
      const arcstudio3 = document.getElementById("arcstudio3");
      const msscmpstudio3 = document.getElementById("msscmpstudio3");
      const texturetool3 = document.getElementById("texturetool3");
      const Reverseengineeringtut2 = document.getElementById("Reverseengineeringtut2");
      const scocialmedia = document.getElementById("scocialmedia");
      const download = document.getElementById("download");
      const source = document.getElementById("source");
      // Important  here I put all these elements into an array, so that later I could loop over it and apply the necessary language settings
      const textElements = [mnu, home, pckstudio, arcstudio, msscmpstudio, texturetool, texturetool2, texturetool1, Reverseengineeringtut, texturetool2desc, about, aboutdesc, pckstudio3, arcstudio3, 
	  msscmpstudio3, texturetool3, Reverseengineeringtut2, scocialmedia, download, source];


		console.log(document.getElementById("texturetool1"));
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