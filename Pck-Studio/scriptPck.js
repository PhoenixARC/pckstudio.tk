 // For simplicity here all the locales are kept in this array. In real-life project the data can be fetched from a JSON object or DB.
      const localization = [
        {
          mnu: "Menu",
          home: "Home",
          pckstudio: "PCK Studio",
          arcstudio: "ARC Studio",
          fuistudio: "FUI Studio",
          msscmpstudio: "MSSCMP Studio",
          texturetool: "Texture Builder Tool",
coleditor: "COL Editor",
          pckstudio1: "PCK Studio",
          pckstudio2: "PCK Studio",
          Reverseengineeringtut: "Reverse Engineering",
          pckstudio2desc: "Step into a new world, a new world of your own design. with PCK Studio you can have complete control of not just your skin, but weather you have a cape, your player model, do you want to download loads of community-made skin packs? well now you can with my PCK Center! by downloading PCK studio you aren't just downloading some random tool, you're setting in motion the next chapter of your life! a chapter filled with discovery, research, and enjoyment with friends and foes alike! no longer will you be constrained to the confines set by 4J Studios, but you will be forging a path of your own creation, one in which you hold the power to do as you wish.",
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
          fuistudio: "FUIスタジオ",
          msscmpstudio: "MSSCMPスタジオ",
          texturetool: "テクスチャビルダーツール",
coleditor: "COLエディター",
          pckstudio1: "PCKスタジオ",
          pckstudio2: "PCKスタジオ",
          Reverseengineeringtut: "リバースエンジニアリング",
          pckstudio2desc: "新しい世界、あなた自身のデザインの新しい世界に足を踏み入れてください。 PCK Studioを使用すると、肌だけでなく、ケープやプレーヤーモデルの天気を完全に制御できます。コミュニティで作成されたスキンパックを大量にダウンロードしますか？ さて、あなたは私のPCKセンターでできるようになりました！ PCKスタジオをダウンロードすることで、ランダムなツールをダウンロードするだけでなく、人生の次の章を開始できます。 発見、研究、そして友人や敵との楽しみに満ちた章！ 4J Studiosによって設定された制限に制約されることはなくなりますが、自分で作成したパスを作成します。このパスでは、必要に応じて実行することができます。",
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
      const fuistudio = document.getElementById("fuistudio");
      const msscmpstudio = document.getElementById("msscmpstudio");
      const texturetool = document.getElementById("texturetool");
const coleditor = document.getElementById("coleditor");
      const pckstudio2 = document.getElementById("pckstudio2");
      const pckstudio1 = document.getElementById("pckstudio1");
      const Reverseengineeringtut = document.getElementById("Reverseengineeringtut");
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
      const textElements = [mnu, home, pckstudio, arcstudio, fuistudio, msscmpstudio, texturetool, coleditor, pckstudio2, pckstudio1, Reverseengineeringtut, pckstudio2desc, about, aboutdesc, pckstudio3, arcstudio3, 
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