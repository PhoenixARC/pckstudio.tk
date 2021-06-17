      const localization = [
        {
          mnu: "Menu",
          home: "Home",
          pckstudio: "PCK Studio",
          arcstudio: "ARC Studio",
          msscmpstudio: "MSSCMP Studio",
          texturetool: "Texture Builder Tool",
          fuistudio: "FUI Studio",
          fuistudio1: "FUI Studio",
          fuistudio2: "FUI Studio",
          Reverseengineeringtut: "Reverse Engineering",
          arcstudio2desc: "Step into a new world, a new world of your own design. with ARC Studio you can have complete control of not just your text, but your GUI, your structures, do you want to download loads of community-made FUIs, LOCs, and structures? well now you can with my FUI, LOC, and NBT Center! by downloading ARC studio you aren't just downloading some random tool, you're setting in motion the next chapter of your life! a chapter filled with discovery, research, and enjoyment with friends and foes alike! no longer will you be constrained to the confines set by 4J Studios, but you will be forging a path of your own creation, one in which you hold the power to do as you wish.",
          about: "About.",
          aboutdesc: "Throughout my years as a Modder for Minecraft on the legacy consoles, I've learned much about the game itself as well as the consoles it runs on, because of this, combined with the fact that many creators have stopped modding either on legacy consoles, or completely, I have made it my mission to make tools that are both open source, and easy to use, to allow anyone, no matter how new, to dive in head first and make incredible mods.",
          pckstudio3: "PCK Studio",
          arcstudio3: "ARC Studio",
          msscmpstudio3: "MSSCMP Studio",
          texturetool3: "Texture Builder Tool",
          fuistudio3: "FUI Studio",
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
          fuistudio: "FUIスタジオ",
          fuistudio1: "FUIスタジオ",
          fuistudio2: "FUIスタジオ",
          Reverseengineeringtut: "リバースエンジニアリング",
          arcstudio2desc: "新しい世界、あなた自身のデザインの新しい世界に足を踏み入れてください。 ARC Studioを使用すると、テキストだけでなくGUI、構造を完全に制御できます。コミュニティで作成されたFUI、LOC、および構造を大量にダウンロードしますか？ これで、私のFUI、LOC、およびNBTセンターを使用できるようになりました。 ARCスタジオをダウンロードすることで、ランダムなツールをダウンロードするだけでなく、人生の次の章を開始できます。 発見、研究、そして友人や敵との楽しみに満ちた章！ 4J Studiosによって設定された制限に制約されることはなくなりますが、自分で作成したパスを作成します。このパスでは、必要に応じて実行することができます。",
		  about: "約",
          aboutdesc: "レガシーコンソールでMinecraftのModderとして働いていた数年間、ゲーム自体とそれが実行されるコンソールについて多くのことを学びました。これは、多くのクリエイターがレガシーコンソールでの改造をやめたという事実と相まって、 または完全に、私はオープンソースで使いやすいツールを作成することを使命としており、どんなに新しくても、誰もが最初に頭に飛び込んで信じられないほどの改造を行うことができます。",
          pckstudio3: "PCKスタジオ",
          arcstudio3: "ARCスタジオ",
          msscmpstudio3: "MSSCMPスタジオ",
          texturetool3: "テクスチャビルダーツール",
          fuistudio3: "FUIスタジオ",
          Reverseengineeringtut2: "リバースエンジニアリング入門。",
          scocialmedia: "ソーシャルメディア",
		  filetypes: "ファイルタイプ",
          download: "ダウンロード",
          source: "ソース",
        },
      ];

      const mnu = document.getElementById("mnu");
      const home = document.getElementById("home");
      const pckstudio = document.getElementById("pckstudio");
      const arcstudio = document.getElementById("arcstudio");
      const fuistudio = document.getElementById("fuistudio");
      const msscmpstudio = document.getElementById("msscmpstudio");
      const texturetool = document.getElementById("texturetool");
      const fuistudio2 = document.getElementById("fuistudio2");
      const fuistudio1 = document.getElementById("fuistudio1");
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
      const textElements = [mnu, home, pckstudio, arcstudio, fuistudio, msscmpstudio, texturetool, fuistudio2, fuistudio1, Reverseengineeringtut, about, aboutdesc, pckstudio3, arcstudio3, 
	  msscmpstudio3, texturetool3, Reverseengineeringtut2, scocialmedia, filetypes, download, source];


      let local = document.getElementById("locale");

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

        textElements.forEach(function (el) {
          let prop = el.getAttribute("id");
          el.innerHTML = localization[currentLang][prop];
        });
      });