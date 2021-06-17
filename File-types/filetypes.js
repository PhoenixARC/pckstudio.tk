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
          Reverseengineeringtut: "Reverse Engineering",
          about: "About.",
          aboutdesc: "Throughout my years as a Modder for Minecraft on the legacy consoles, I've learned much about the game itself as well as the consoles it runs on, because of this, combined with the fact that many creators have stopped modding either on legacy consoles, or completely, I have made it my mission to make tools that are both open source, and easy to use, to allow anyone, no matter how new, to dive in head first and make incredible mods.",
          pckstudio3: "PCK Studio",
          arcstudio3: "ARC Studio",
          msscmpstudio3: "MSSCMP Studio",
          texturetool3: "Texture Builder Tool",
          Reverseengineeringtut2: "Introduction to reverse engineering.",
          scocialmedia: "Social Media",
		  filetypes: "File Types",
		  filetypes1: "File Types",
          filetypes2: "File Types",
          filetypes3: "File Types",
          arc: "(Archive, contains: UI Files, skinpack PNGs, Structures, and in-game text)",
          png: "(format used for all game textures)",
          txt: "(used for texture animations)",
          ttf: "(font files)",
          xml: "(used for defining minigame behaviour)",
          bin: "(used to define product codes, models, mob behaviour, or mob texture materials)",
          col: "(used to define colours of blocks and environments)",
          pck: "(Used for game texture packs and skin packs, contain file pertaining to these)",
          mcs: "(World files, used for entire worlds(tutorials/mashup maps) or schematics to import(battle maps take place in the same world))",
          grf: "(gameRulesFile used for determining things like boundaries to keep players in for maps like battle, cloud height, items the player starts with, and special items that give messages when picked up)",
          fui: "(FourjUserInterface files are used to declare game GUIs, such as the menu that's pulled up, the location of it, as well as the scale and visability of each item, also contains graphic images for GUIs)",
          nbt: "(These are .NBT files that aren't expressed with an extension, these are used for structures ingame such as mansion parts, ruins, end city parts, and even coral formations)",
          loc: "(used to declare game strings, such as skin names and item names in different languages)",
          msscmp: "(MilesSoundSystemCompressed files are used for in-game sounds, contain every sound in the game in 1fc format, otherwise known as .binka format)",
          binka: "(Game sounds made with BinkAudio)",
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
          Reverseengineeringtut: "リバースエンジニアリング",
          about: "約",
          aboutdesc: "レガシーコンソールでMinecraftのModderとして働いていた数年間、ゲーム自体とそれが実行されるコンソールについて多くのことを学びました。これは、多くのクリエイターがレガシーコンソールでの改造をやめたという事実と相まって、 または完全に、私はオープンソースで使いやすいツールを作成することを使命としており、どんなに新しくても、誰もが最初に頭に飛び込んで信じられないほどの改造を行うことができます。",
          pckstudio3: "PCKスタジオ",
          arcstudio3: "ARCスタジオ",
          msscmpstudio3: "MSSCMPスタジオ",
          texturetool3: "テクスチャビルダーツール",
          Reverseengineeringtut2: "リバースエンジニアリング入門。",
          scocialmedia: "ソーシャルメディア",
		  filetypes: "ファイルタイプ",
		  filetypes1: "ファイルタイプ",
          filetypes2: "ファイルタイプ",
          filetypes3: "ファイルタイプ",
          arc: "（アーカイブ、含まれています：UIファイル、スキンパックPNG、構造、およびゲーム内テキスト）",
          png: "（すべてのゲームテクスチャに使用される形式）",
          txt: "（テクスチャアニメーションに使用）",
          ttf: "（フォントファイル）",
          xml: "（ミニガム動作の定義に使用されます）",
          bin: "（製品コード、モデル、暴徒の振る舞い、または暴力の質感）を定義するために使用されます",
          col: "（ブロックと環境の色を定義するために使用されます）",
          pck: "（ゲームテクスチャパックやスキンパックに使用され、これらに関連するファイルが含まれています）",
          mcs: "（全世界（チュートリアル/マッシュアップ地図）または輸入能力のための世界のファイル（同じ世界では戦闘地図）））",
          grf: "（GamerulesFileは、戦いのようなマップのためにプレーヤーを維持すること、雲の高さ、プレイヤーが始まるアイテム、および拾われたときにメッセージを与える特別なアイテムを維持するようなものを決定するために使用されるものです。",
          fui: "（FourJuserInterfaceファイルは、プルアップされているメニューなど、ゲームGUIを宣言するために使用されます。その場所、各項目のスケールと表示、GUISのグラフィックイメージも含まれています）",
          nbt: "（これらは拡張子で表明されていない.NBTファイルです。これらは、マンション部品、遺跡、都市部品、さらにはサンゴー方式などの構造体ingomeに使用されます。",
          loc: "（肌の名前や明確な言語の名称などのゲーム文字列を宣言するために使用されます）",
          msscmp: "（MilessoundSystemCompressedファイルはゲーム内サウンドに使用され、1FC形式でゲーム内のすべてのサウンドを含みます。",
          binka: "（Binkaudioで作られたゲームサウンド）",
        },
      ];

      const mnu = document.getElementById("mnu");
      const home = document.getElementById("home");
      const pckstudio = document.getElementById("pckstudio");
      const arcstudio = document.getElementById("arcstudio");
      const fuistudio = document.getElementById("fuistudio");
      const msscmpstudio = document.getElementById("msscmpstudio");
      const texturetool = document.getElementById("texturetool");
const coleditor = document.getElementById("coleditor");
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
      const filetypes1 = document.getElementById("filetypes1");
      const filetypes2 = document.getElementById("filetypes2");
      const filetypes3 = document.getElementById("filetypes3");
      const arc = document.getElementById("arc");
      const png = document.getElementById("png");
      const txt = document.getElementById("txt");
      const ttf = document.getElementById("ttf");
      const xml = document.getElementById("xml");
      const bin = document.getElementById("bin");
      const col = document.getElementById("col");
      const pck = document.getElementById("pck");
      const mcs = document.getElementById("mcs");
      const grf = document.getElementById("grf");
      const fui = document.getElementById("fui");
      const nbt = document.getElementById("nbt");
      const loc = document.getElementById("loc");
      const msscmp = document.getElementById("msscmp");
      const binka = document.getElementById("binka");
      const textElements = [mnu, home, pckstudio, arcstudio, fuistudio, msscmpstudio, texturetool, coleditor, Reverseengineeringtut, about, aboutdesc, pckstudio3, arcstudio3, 
	  msscmpstudio3, texturetool3, Reverseengineeringtut2, scocialmedia, filetypes, filetypes1, filetypes2, filetypes3, arc, png, ttf, txt, xml, bin, col, pck, mcs, grf, fui, nbt, loc, msscmp, binka];


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