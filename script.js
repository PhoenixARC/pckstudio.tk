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
		  arc: "(Archive, contains",
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
		  fuistudio1: "FUI Studio",
		  fuistudio2: "FUI Studio",
		  arcstudio2desc: "Step into a new world, a new world of your own design. with ARC Studio you can have complete control of not just your text, but your GUI, your structures, do you want to download loads of community-made FUIs, LOCs, and structures? well now you can with my FUI, LOC, and NBT Center! by downloading ARC studio you aren't just downloading some random tool, you're setting in motion the next chapter of your life! a chapter filled with discovery, research, and enjoyment with friends and foes alike! no longer will you be constrained to the confines set by 4J Studios, but you will be forging a path of your own creation, one in which you hold the power to do as you wish.",
		  fuistudio3: "FUI Studio",
		  download: "DOWNLOAD",
		  source: "SOURCE",
		  msscmpstudio1: "MSSCMP Studio",
		  msscmpstudio2: "MSSCMP Studio",
		  msscmpstudio2desc: "Step into a new world, a new world of your own design. with MSSCMP Studio you can have complete control of your Game's entire sound profile, do you want to download loads of community-made sound packs? well now you can with my BINK Center! by downloading MSSCMP studio you aren't just downloading some random tool, you're setting in motion the next chapter of your life! a chapter filled with discovery, research, and enjoyment with friends and foes alike! no longer will you be constrained to the confines set by 4J Studios, but you will be forging a path of your own creation, one in which you hold the power to do as you wish.",
		  pckstudio1: "PCK Studio",
		  pckstudio2: "PCK Studio",
		  pckstudio2desc: "Step into a new world, a new world of your own design. with PCK Studio you can have complete control of not just your skin, but weather you have a cape, your player model, do you want to download loads of community-made skin packs? well now you can with my PCK Center! by downloading PCK studio you aren't just downloading some random tool, you're setting in motion the next chapter of your life! a chapter filled with discovery, research, and enjoyment with friends and foes alike! no longer will you be constrained to the confines set by 4J Studios, but you will be forging a path of your own creation, one in which you hold the power to do as you wish.",
		  re1: "Reverse Engineering",
		  re2: "Reverse Engineering",
		  li1: "Setting up IDA for PS3",
		  li2: "IDA Basics",
		  li3: "Resigning Eboots and SPRX Files",
		  li4: "Resigning SPRX and Eboots",
		  li5: "Fake CCAPI DLLs for HEN",
		  li6: "PS3 NetCheat(Includes HEN)",
		  texturetool1: "Texture Builder Tool",
		  texturetool2: "Texture Builder Tool",
		  texturetool2desc: "Welcome to a world in which making Texture packs doesn't need to be an incredibly tedious task, This tool's goal is to aid in the creation of these texture packs by handling the majority of the tedious tasks. I hope you have lots of fun with this tool, good luck!",
		  arcstudio1: "COL Editor",
		  arcstudio2: "COL Editor",
		  description: "Your one-stop Minecraft modding shop!",
		  softwareheader: "Modding software",
		  softwareheader2: "Here you can find a collection of tools you can use to mod Minecraft on console.",
		  msscmpstudio2desc2: "**WARNING**",
		  msscmpstudio2desc3: "The sound files used must be the same size, or else no sound will be played at all",
		  development: "Development",
		  developmentdesc: "Throughout my years as a Modder for Minecraft on the legacy consoles, I've learned much about the game itself as well as the consoles it runs on, because of this, combined with the fact that many creators have stopped modding either on legacy consoles, or completely, I have made it my mission to make tools that are both open source, and easy to use, to allow anyone, no matter how new, to dive in head first and make incredible mods.",
		  reviews: "Reviews",
		  reviewex: "Here are a few examples of reviews given by members of the modding community.",
		  devmessage: "Are you a developer? click here!",
		  joinButton: "Join Discord"
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
		  fuistudio1: "FUIスタジオ",
		  fuistudio2: "FUIスタジオ",
		  arcstudio2desc: "新しい世界、あなた自身のデザインの新しい世界に足を踏み入れてください。 ARC Studioを使用すると、テキストだけでなくGUI、構造を完全に制御できます。コミュニティで作成されたFUI、LOC、および構造を大量にダウンロードしますか？ これで、私のFUI、LOC、およびNBTセンターを使用できるようになりました。 ARCスタジオをダウンロードすることで、ランダムなツールをダウンロードするだけでなく、人生の次の章を開始できます。 発見、研究、そして友人や敵との楽しみに満ちた章！ 4J Studiosによって設定された制限に制約されることはなくなりますが、自分で作成したパスを作成します。このパスでは、必要に応じて実行することができます。",
		  fuistudio3: "FUIスタジオ",
		  download: "ダウンロード",
		  source: "ソース",
		  msscmpstudio1: "MSSCMPスタジオ",
		  msscmpstudio2: "MSSCMPスタジオ",
		  msscmpstudio2desc: "新しい世界、あなた自身のデザインの新しい世界に足を踏み入れてください。 MSSCMP Studioを使用すると、ゲームのサウンドプロファイル全体を完全に制御できます。コミュニティで作成されたサウンドパックを大量にダウンロードしますか？ さて、あなたは私のBINKセンターでできるようになりました！ MSSCMPスタジオをダウンロードすることで、ランダムなツールをダウンロードするだけでなく、人生の次の章を開始できます。 発見、研究、そして友人や敵との楽しみに満ちた章！ 4J Studiosによって設定された制限に制約されることはなくなりますが、自分で作成したパスを作成します。このパスでは、必要に応じて実行することができます。",
		  pckstudio1: "PCKスタジオ",
		  pckstudio2: "PCKスタジオ",
		  pckstudio2desc: "新しい世界、あなた自身のデザインの新しい世界に足を踏み入れてください。 PCK Studioを使用すると、肌だけでなく、ケープやプレーヤーモデルの天気を完全に制御できます。コミュニティで作成されたスキンパックを大量にダウンロードしますか？ さて、あなたは私のPCKセンターでできるようになりました！ PCKスタジオをダウンロードすることで、ランダムなツールをダウンロードするだけでなく、人生の次の章を開始できます。 発見、研究、そして友人や敵との楽しみに満ちた章！ 4J Studiosによって設定された制限に制約されることはなくなりますが、自分で作成したパスを作成します。このパスでは、必要に応じて実行することができます。",
		  re1: "リバースエンジニアリング",
		  re2: "リバースエンジニアリング",
		  li1: "PS3用のIDAの設定",
		  li2: "IDAの基本",
		  li3: "EbootsとSPRXファイルの辞任",
		  li4: "SPRXとEbootsの辞任",
		  li5: "HEN用の偽のCCAPIDLL",
		  li6: "PS3 NetCheat（HENを含む）",
		  texturetool1: "テクスチャビルダーツール",
		  texturetool2: "テクスチャビルダーツール",
		  texturetool2desc: "テクスチャパックの作成が非常に面倒な作業である必要がない世界へようこそ。このツールの目標は、面倒な作業の大部分を処理することにより、これらのテクスチャパックの作成を支援することです。 このツールをたくさん楽しんでいただければ幸いです。頑張ってください！",
		  arcstudio1: "COLエディター",
		  arcstudio2: "COLエディター",
		  description: "あなたのワンストップMinecraft改造店！",
		  softwareheader: "モッディングソフトウェア",
		  softwareheader2: "ここでは、コンソールでMinecraftを変更するために使用できるツールのコレクションを見つけることができます.",
		  msscmpstudio2desc2: "**警告**",
		  msscmpstudio2desc3: "使用するサウンドファイルは同じサイズである必要があります。そうでない場合、サウンドはまったく再生されません。",
		  development: "開発",
		  developmentdesc: "レガシーコンソールでMinecraftのModderとして働いていた数年間、ゲーム自体とそれが実行されるコンソールについて多くのことを学びました。これは、多くのクリエイターがレガシーコンソールでの改造をやめたという事実と相まって、 または完全に、私はオープンソースで使いやすいツールを作成することを使命としており、どんなに新しくても、誰もが最初に頭に飛び込んで信じられないほどの改造を行うことができます。",
		  reviews: "レビュー",
		  reviewex: "これは、改造コミュニティのメンバーによって与えられたレビューのいくつかの例です。",
		  devmessage: "あなたは開発者ですか？ ここをクリック！",
		  joinButton: "Discordに参加する"
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
	  const fuistudio1 = document.getElementById("fuistudio1");
	  const fuistudio2 = document.getElementById("fuistudio2");
	  const arcstudio2desc = document.getElementById("arcstudio2desc");
	  const fuistudio3 = document.getElementById("fuistudio3");
	  const download = document.getElementById("download");
	  const source = document.getElementById("source");
	  const msscmpstudio1 = document.getElementById("msscmpstudio1");
	  const msscmpstudio2 = document.getElementById("msscmpstudio2");
	  const msscmpstudio2desc = document.getElementById("msscmpstudio2desc");
	  const pckstudio1 = document.getElementById("pckstudio1");
	  const pckstudio2 = document.getElementById("pckstudio2");
	  const pckstudio2desc = document.getElementById("pckstudio2desc");
	  const re1 = document.getElementById("re1");
	  const re2 = document.getElementById("re2");
	  const li1 = document.getElementById("li1");
	  const li2 = document.getElementById("li2");
	  const li3 = document.getElementById("li3");
	  const li4 = document.getElementById("li4");
	  const li5 = document.getElementById("li5");
	  const li6 = document.getElementById("li6");
	  const texturetool1 = document.getElementById("texturetool1");
	  const texturetool2 = document.getElementById("texturetool2");
	  const texturetool2desc = document.getElementById("texturetool2desc");
	  const arcstudio1 = document.getElementById("arcstudio1");
	  const arcstudio2 = document.getElementById("arcstudio2");
	  const description = document.getElementById("description");
	  const softwareheader = document.getElementById("softwareheader");
	  const softwareheader2 = document.getElementById("softwareheader2");
	  const msscmpstudio2desc2 = document.getElementById("msscmpstudio2desc2");
	  const msscmpstudio2desc3 = document.getElementById("msscmpstudio2desc3");
	  const development = document.getElementById("development");
	  const developmentdesc = document.getElementById("developmentdesc");
	  const reviews = document.getElementById("reviews");
	  const reviewex = document.getElementById("reviewex");
	  const devmessage = document.getElementById("devmessage");
	  const joinButton = document.getElementById("joinButton");
      // Important  here I put all these elements into an array, so that later I could loop over it and apply the necessary language settings
      const textElements = [ mnu, home, pckstudio, arcstudio, fuistudio, msscmpstudio, texturetool, coleditor, Reverseengineeringtut, about, 
	  aboutdesc, pckstudio3, arcstudio3, msscmpstudio3, texturetool3, Reverseengineeringtut2, scocialmedia, filetypes, filetypes1, filetypes2, 
	  filetypes3, arc, png, txt, ttf, xml, bin, col, pck, mcs, grf, fui, nbt, loc, msscmp, binka, fuistudio1, fuistudio2, arcstudio2desc, fuistudio3, 
	  download, source, msscmpstudio1, msscmpstudio2, msscmpstudio2desc, pckstudio1, pckstudio2, pckstudio2desc, re1, re2, li1, li2, li3, li4, li5, li6, 
	  texturetool1, texturetool2, texturetool2desc, arcstudio1, arcstudio2, description, softwareheader, softwareheader2, msscmpstudio2desc2, msscmpstudio2desc3, 
	  development, developmentdesc, reviews, reviewex, devmessage, joinButton ];

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
			try{
			console.log(el.getAttribute("id"));
          let prop = el.getAttribute("id");
          el.innerHTML = localization[currentLang][prop];
			}catch{}
        });
		
      });