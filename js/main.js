var idList = {
	'DreamVisuals' : {'logo' : 'img/logo/profiles/dreamvisuals.gif', 'website' : 'http://shethzor.tv?id=dreamvisuals'},
	'flariwyr' : {'logo' : 'img/logo/profiles/flariwyr.png', 'website' : 'http://shethzor.tv?id=flariwyr'},
	'hitmarcer' : {'logo' : '', 'website' : 'http://shethzor.tv?id=hitmarcer'},
	'Retro__Boi' : {'logo' : 'img/logo/profiles/retro__boi.png', 'website' : 'http://shethzor.tv?id=retro__boi'},
	'Shethzor' : {'logo' : 'img/logo/profiles/shethzor.gif', 'website' : 'http://shethzor.tv?id=shethzor'}
}

//Get All Search Keys
var search = window.location.search.substr(1).split('&');
var searchKey = {};
for (var i = 0; i < search.length; i++){
	searchKey[search[i].split('=')[0]] = search[i].split('=')[1]
}

//User
var user;
if (searchKey['id']){
	user = searchKey['id'].toLowerCase();
}

switch(user){
	case 'dreamvisuals':
		var title = "DreamVisuals links";
		var description = "";
		var favicon = 'img/icon/dreamvisuals.png';
		var backgroundImageLink = 'https://cutewallpaper.org/21/hd-gif-wallpapers/Gifart-Lo-Fi-Wallpapers-Top-Free-Gifart-Lo-Fi-Backgrounds-.gif';
		var backgroundBlur = 2;
		var backgroundColor = 'purple';
		var textColor = '';
		var textShadow = '';
		var fontLink = 'https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap';
		var fontName = '"Source Code Pro"';
		var fontSize = 20;
		var h3Size = 10;
		var pSize = 15;
		var copyrightSize = 15;
		var banner = 'img/banner/dreamvisuals.gif'
		var bannerWidth = 13;
		var streamDays = {
			'su' : false,
			'mo' : false,
			'tu' : false,
			'we' : false,
			'th' : false,
			'fr' : false,
			'sa' : false,
		}
		streamTime = '19';
		var latestYouTubeVideoListCode = 'UUnxr9y4rqZzQ42JIoW4aycg';
		var dictLinks = {
			'twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/dreamvisuals'},
			'youtube' : {'active' : true, 'link' : 'https://www.youtube.com/channel/UCnxr9y4rqZzQ42JIoW4aycg'},
			'instagram' : {'active' : true, 'link' : 'https://www.instagram.com/dream_visualizer/'},
			'soundcloud' : {'active' : true, 'link' : 'https://soundcloud.com/dreamvisual'},
			'steam' : {'active' : true, 'link' : 'http://steamcommunity.com/id/DVedits'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor', 'logo' : idList['Shethzor']['logo'], 'link' : idList['Shethzor']['website'], 'list' : 'LinksTeamMain'},
			'streamlabs_donate' : {'active' : true, 'link' : 'https://streamlabs.com/dreamvisuals1/tip'}, 
		}
	break;
	case 'flariwyr':
		var title = "Flariwyr's links";
		var description = "";
		var favicon = 'img/icon/flariwyr.png';
		var backgroundImageLink = 'https://i.imgur.com/AV595g2.gif';
		var backgroundBlur = 2;
		var backgroundColor = 'black';
		var textColor = '';
		var textShadow = '';
		var fontLink = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
		var fontName = '"Press Start 2P"';
		var fontSize = 0;
		var h3Size = 1;
		var pSize = 13;
		var copyrightSize = 10;
		var banner = ''
		var bannerWidth;
		var streamDays = {
			'su' : true,
			'mo' : false,
			'tu' : true,
			'we' : false,
			'th' : true,
			'fr' : false,
			'sa' : false,
		}
		streamTime = '17';
		var latestYouTubeVideoListCode = '';
		var dictLinks = {
			'twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/flariwyr/'},
			'discord' : {'active' : true, 'link' : 'https://discord.gg/Fj8bGZF'},
			'instagram' : {'active' : true, 'link' : 'https://www.instagram.com/flariwyr/'},
			'steam' : {'active' : true, 'link' : 'http://steamcommunity.com/id/Flariwyr'},
			'pornhub' : {'active' : true,'matureContent' : true, 'link' : 'https://www.pornhub.com/users/flariwyr'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor', 'link' : idList['Shethzor']['website']},
			'twitch_subscribe' : {'active' : true, 'link' : 'https://www.twitch.tv/subs/flariwyr'}, 
			'streamelements_donate' : {'active' : true, 'link' : 'https://streamelements.com/flariwyr/tip'}, 
		}
	break;
	case 'hitmarcer':
		var title = "HitMarcer links";
		var description = "";
		var favicon = '';
		var backgroundImageLink = 'https://img5.goodfon.com/wallpaper/nbig/2/7d/battlefield-1-igra-fon.jpg';
		var backgroundBlur = 3;
		var backgroundColor = 'blue';
		var textColor = '';
		var textShadow = '';
		var fontLink = 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap';
		var fontName = '"Audiowide"';
		var fontSize = 20;
		var h3Size = 10;
		var pSize = 15;
		var copyrightSize = 15;
		var banner = '';
		var bannerWidth = 13;
		var streamDays = {
			'su' : false,
			'mo' : false,
			'tu' : false,
			'we' : false,
			'th' : false,
			'fr' : false,
			'sa' : false,
		}
		streamTime = '19';
		var latestYouTubeVideoListCode = '';
		var dictLinks = {
			'twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/HitMarcer'},
			'twitter' : {'active' : true, 'link' : 'https://www.twitter.com/HitMarcer'},
			'instagram' : {'active' : true, 'link' : 'https://www.instagram.com/hitmarcer/'},
			'steam' : {'active' : true, 'link' : 'https://steamcommunity.com/id/hitmarcer'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor', 'link' : idList['Shethzor']['website']},
			'streamelements_donate' : {'active' : true, 'link' : 'https://streamelements.com/hitmarcer/tip'}, 
		}
	break;
	case "retro__boi":
		var title = "Retro__Boi's links";
		var description = "";
		var favicon = 'img/icon/retro__boi.png';
		var backgroundImageLink = 'img/background/retro__boi.gif';
		var backgroundBlur = 0;
		var backgroundColor = 'black';
		var textColor = '';
		var textShadow = '';
		var fontLink = 'https://fonts.googleapis.com/css?family=Mali&display=swap';
		var fontName = '"Mali"';
		var fontSize = 20;
		var h3Size = (fontSize / 3);
		var pSize = (fontSize / 1.5);
		var copyrightSize = (fontSize / 1.5);
		var banner = 'img/banner/retro__boi.png'
		var bannerWidth = 12;
		var streamDays = {
			'su' : false,
			'mo' : false,
			'tu' : false,
			'we' : false,
			'th' : false,
			'fr' : true,
			'sa' : true,
		}
		streamTime = '17';
		var latestYouTubeVideoListCode = 'UUwIqmX2N9gkCt4-zASxLA1A';
		var dictLinks = {
			'twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/retro__boi'},
			'youtube' : {'active' : true, 'link' : 'https://www.youtube.com/channel/UCwIqmX2N9gkCt4-zASxLA1A'},
			'instagram' : {'active' : true, 'link' : 'https://www.instagram.com/sonik.sped/'},
			'twitter' : {'active' : true, 'link' : 'https://www.twitter.com/eat_the_water'},
			'team_partner_shethzor' : {'active' : true, 'name' : 'Shethzor', 'link' : idList['Shethzor']['website']}, 
			'spotify' : {'active' : true, 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine'},
			'streamlabs_donate' : {'active' : true, 'link' : 'https://streamlabs.com/retro__boi/tip'}, 
		}
	break;
	case 'shethzor':
	default:
		var title = "Shethzor's links";
		var description = "Get all my links here!";
		var favicon = '';
		var backgroundImageLink = 'https://media1.tenor.com/images/a682025c7ab8f3b60b1e230fe89f1879/tenor.gif';
		var backgroundBlur = 3;
		var backgroundColor = 'black';
		var textColor = '';
		var textShadow = '';
		var fontLink = 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap';
		var fontName = '"Orbitron"';
		var fontSize = 15;
		var h3Size = 15;
		var pSize = 15;
		var copyrightSize = 15;
		var banner = 'img/banner/shethzor.gif'
		var bannerWidth;
		var streamDays = {
			'su' : false,
			'mo' : true,
			'tu' : false,
			'we' : true,
			'th' : false,
			'fr' : true,
			'sa' : true,
		}
		streamTime = '17';
		var latestYouTubeVideoListCode = 'UU0uJMyQjKUgLKthvf0E6JpA';
		var dictLinks = {
			'twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/TheString#Enjoy_your_time_on_my_Twitch_channel'},
			'youtube' : {'active' : true, 'link' : 'https://www.youtube.com/channel/UC0uJMyQjKUgLKthvf0E6JpA#Enjoy_your_time_on_my_YouTube_channel'},
			'discord' : {'active' : true, 'link' : 'https://www.Discord.gg/scdT6Sn#Don\'t_be_shy._We_are_waiting_for_you!'},
			'tellonym' : {'active' : true, 'link' : 'https://tellonym.me/Shethzor#Ask_me_anything'},
			'twitter' : {'active' : true, 'link' : 'https://www.Twitter.com/Shethzor#Do_you_hear_that?_Sounds_like_some_tweets!'},
			'instagram' : {'active' : true, 'link' : 'https://www.Instagram.com/Shethzor#Look_at_all_those_pictures_of_mine_:D'},
			'e-pal' : {'active' : true, 'link' : 'https://www.epal.gg/epal/118368#Yes,_I\'m_selling_my_body_lmao'},
			'facebook' : {'active' : true, 'link' : 'https://www.facebook.com/shethzor.alfonzo#Feels_kinda_2013'},
			'steam' : {'active' : true, 'link' : 'https://steamcommunity.com/id/shethzor#Spin_the_valve'},
			'pornhub' : {'active' : true, 'link' : 'https://www.pornhub.com/users/Shethzor#What_did_you_expect_to_see_on_this_profile?'},
			'team_main_dream_visuals' : {'active' : true, 'name' : 'DreamVisuals', 'link' : idList['DreamVisuals']['website']},
			'team_main_retro__boi' : {'active' : true, 'name' : 'Retro__Boi', 'link' : idList['Retro__Boi']['website']},
			'youtube_music' : {'active' : true, 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine'},
			'github' : {'active' : true, 'link' : 'https://www.GitHub.com/Shethzor#There_is_some_code_in_here._Looks_kinda_boring'},
			'instant-gaming' : {'active' : true, 'link' : 'https://www.Instant-Gaming.com//?igr=shethzor#Yeah,_support_me_by_buying_the_games_cheaper!'},
			'twitch_subscribe' : {'active' : true, 'link' : 'https://www.twitch.tv/subs/TheString#Wow_never_thought_you_would_show_up_here!'}, 
			'streamelements_donate' : {'active' : true, 'link' : 'https://StreamElements.com/TheString/tip#Are_you_about_to_donate?_Thanks_a_lot_<3'}, 
			
			//OFF
			'telegram' : {'active' : false, 'link' : ''},
			'spotify' : {'active' : false, 'link' : ''},
			'tipeeestream_donate' : {'active' : false, 'link' : ''}, 
			'soundcloud' : {'active' : false, 'link' : ''},
			'streamlabs_donate' : {'active' : false, 'link' : ''}, 
			'patreon_donate' : {'active' : false, 'link' : ''}, 
		
		}
	break;
}

if (isEmptyOrNull(favicon)){
	favicon = 'img/icon/shethzor.png';
}

var head = document.querySelectorAll('head')[0];
/*
if (!isEmptyOrNull(title)){
	//Titles
	head.innerHTML += '<meta name="title" content="' + title + '">';
	head.innerHTML += '<meta property="og:title" content="' + title + '">';
	head.innerHTML += '<meta property="twitter:title" content="' + title + '">';

	//Descriptions
	head.innerHTML += '<meta name="description" content="' + description + '">';
	head.innerHTML += '<meta property="og:description" content="' + description + '">';
	head.innerHTML += '<meta property="twitter:description" content="' + description + '">';

	//Images
	head.innerHTML += '<meta name="image" content="' + favicon + '">';
	head.innerHTML += '<meta property="og:image" content="' + favicon + '">';
	head.innerHTML += '<meta property="twitter:image" content="' + favicon + '">';
}else{
	//Titles
	head.innerHTML += '<meta name="title" content="Link List">';
	head.innerHTML += '<meta property="og:title" content="Link List">';
	head.innerHTML += '<meta property="twitter:title" content="Link List">';
	
	//Descriptions
	head.innerHTML += '<meta name="description" content="Need links? Get them here!">';
	head.innerHTML += '<meta property="og:description" content="Need links? Get them here!">';
	head.innerHTML += '<meta property="twitter:description" content="Need links? Get them here!">';

	//Images
	head.innerHTML += '<meta name="image" content="img/icon/shethzor.png">';
	head.innerHTML += '<meta property="og:image" content="img/icon/shethzor.png">';
	head.innerHTML += '<meta property="twitter:image" content="img/icon/shethzor.png">';
}
*/
var isRedirect = false;
for (var redirect in searchKey) {
	redirect = redirect.toLowerCase();
	if (dictLinks.hasOwnProperty(redirect) && dictLinks[redirect]['link'] != '' && dictLinks[redirect]['active']) {
		window.location.replace(dictLinks[redirect]['link'])
		isRedirect = true;
	}else if (redirect == 'youtube-latest'){
		window.location.replace('https://www.youtube.com/embed/videoseries?list=' + latestYouTubeVideoListCode);
		isRedirect = true;
	}
}

//Language
var dictLanguage = {
	'de' : {
		'label' : {
			'LinksSocialMedia' : 'Soziale Medien',
			'StreamingOn' : 'STREAMT AN',
			'Team' : 'Mein Team',
			'LinksTeamMain' : 'Main',
			'LinksTeamPartner' : 'Partner',
			'LinksOther' : 'Anderes',
			'Support' : 'Support',
			'LinksSupportAffiliate' : 'Affiliate',
			'LinksSupportDonate' : 'Spenden',
			'Copyright' : 'Mit viel 💜 von Shethzor gemacht © Alle Rechte vorbehalten',
		},
		'day' : {
			'su' : 'So',
			'mo' : 'Mo',
			'tu' : 'Di',
			'we' : 'Mi',
			'th' : 'Do',
			'fr' : 'Fr',
			'sa' : 'Sa',
		},
		'time' : {
			'at' : 'UM',
			'clock' : 'Uhr',
		},
	},
	'en' : {
		'label' : {
			'LinksSocialMedia' : 'Social Media',
			'StreamingOn' : 'STREAMING ON',
			'Team' : 'My Team',
			'LinksTeamMain' : 'Main',
			'LinksTeamPartner' : 'Partner',
			'LinksOther' : 'Other',
			'Support' : 'Support',
			'LinksSupportAffiliate' : 'Affiliate',
			'LinksSupportDonate' : 'Donate',
			'Copyright' : 'Made with 💜 by Shethzor © All Rights Reserved',
		},
		'day' : {
			'su' : 'Su',
			'mo' : 'Mo',
			'tu' : 'Tu',
			'we' : 'We',
			'th' : 'Th',
			'fr' : 'Fr',
			'sa' : 'Sa',
		},
		'time' : {
			'at' : 'AT',
			'clock' : 'O\'Clock',
		},
	},
	'es' : {
		'label' : {
			'LinksSocialMedia' : 'Redes Sociales',
			'StreamingOn' : 'STREAMING EN',
			'Team' : 'Mi equipo',
			'LinksTeamMain' : 'Principal',
			'LinksTeamPartner' : 'Compañero',
			'LinksOther' : 'Otro',
			'Support' : 'Apoyo',
			'LinksSupportAffiliate' : 'Afiliado',
			'LinksSupportDonate' : 'Donar',
			'Copyright' : 'Hecho con 💜 por Shethzor © Todos los derechos reservados',
		},
		'day' : {
			'su' : 'Do',
			'mo' : 'Lu',
			'tu' : 'Ma',
			'we' : 'Mi',
			'th' : 'Ju',
			'fr' : 'Vi',
			'sa' : 'Sa',
		},
		'time' : {
			'at' : 'A las',
			'clock' : '',
		},
	},
	'jp' : {
		'label' : {
			'LinksSocialMedia' : 'ソーシャルメディア',
			'StreamingOn' : '私のチーム',
			'Team' : 'マイチーム',
			'LinksTeamMain' : 'メイン',
			'LinksTeamPartner' : 'パートナー',
			'LinksOther' : 'その他',
			'Support' : 'サポート',
			'LinksSupportAffiliate' : 'アフィリエイト',
			'LinksSupportDonate' : '寄付',
			'Copyright' : 'Shethzor によって💜で作られました©すべての権利予約',
		},
		'day' : {
			'su' : 'Ni',
			'mo' : 'Ge',
			'tu' : 'Ka',
			'we' : 'Su',
			'th' : 'Mo',
			'fr' : 'Ki',
			'sa' : 'Do',
		},
		'time' : {
			'at' : '',
			'clock' : 'Ji ni',
		},
	},
}

for (var page in dictLinks) {
	var logo = '';
	switch(page){
		case 'discord':
			logo = 'img/logo/platform/discord.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'e-pal':
			logo = 'img/logo/platform/e-pal.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'facebook':
			logo = 'img/logo/platform/facebook.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'github':
			logo = 'img/logo/platform/github.png';
			dictLinks[page]['list'] = 'LinksOther';
			break;
		case 'instagram':
			logo = 'img/logo/platform/instagram.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'instant-gaming':
			logo = 'img/logo/support/instant-gaming.png';
			dictLinks[page]['list'] = 'LinksSupportAffiliate';
			break;
		case 'patreon_donate':
			logo = 'img/logo/support/patreon.png';
			dictLinks[page]['list'] = 'LinksSupportDonate';
			break;
		case 'pornhub':
			logo = 'img/logo/platform/pornhub.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			dictLinks[page]['matureContent'] = true;
			break;
		case 'soundcloud':
			logo = 'img/logo/platform/soundcloud.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'spotify':
			logo = 'img/logo/platform/spotify.png';
			dictLinks[page]['list'] = 'LinksOther';
			break;
		case 'steam':
			logo = 'img/logo/platform/steam.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'streamelements_donate':
			logo = 'img/logo/support/streamelements.png';
			dictLinks[page]['list'] = 'LinksSupportDonate';
			break;
		case 'streamlabs_donate':
			logo = 'img/logo/support/streamlabs.png';
			dictLinks[page]['list'] = 'LinksSupportDonate';
			break;
		case 'telegram':
			logo = 'img/logo/platform/telegram.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'tellonym':
			logo = 'img/logo/platform/tellonym.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'tipeeestream_donate':
			logo = 'img/logo/support/tipeeestream.png';
			dictLinks[page]['list'] = 'LinksSupportDonate';
			break;
		case 'twitch':
			logo = 'img/logo/platform/twitch.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'twitch_subscribe':
			logo = 'img/logo/support/twitch_subscribe.png';
			dictLinks[page]['list'] = 'LinksSupportDonate';
			break;
		case 'twitter':
			logo = 'img/logo/platform/twitter.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'youtube':
			logo = 'img/logo/platform/youtube.png';
			dictLinks[page]['list'] = 'LinksSocialMedia';
			break;
		case 'youtube_music':
			logo = 'img/logo/platform/youtube_music.png';
			dictLinks[page]['list'] = 'LinksOther';
			break;
		default:
			if (page.startsWith('team_main')){
				logo = idList[dictLinks[page]['name']]['logo'];
				dictLinks[page]['list'] = 'LinksTeamMain';
			}
			if (page.startsWith('team_partner')){
				logo = idList[dictLinks[page]['name']]['logo'];
				dictLinks[page]['list'] = 'LinksTeamPartner';
			}
	}
	if (!dictLinks[page]['logo']){
		dictLinks[page]['logo'] = logo;
	}
}
var language = 'en';
document.onreadystatechange = () => {
	if (document.readyState === 'complete'){
		displayPage();
		setLanguage();
		loadButtonAreas();
		setStreamDays();
		setStreamTime();
		loadStyles();
		document.getElementById('MatureContentButton').addEventListener('click', MatureContentToggle)
	}
};

function displayPage(){
	if (!isRedirect){
		document.getElementById('Display').classList.remove('d-none');
		document.getElementById('Display').classList.add('d-block');
	}
}

//Set Language
function setLanguage(){
	for (var lang in searchKey) {
		if (searchKey['l']){
			if (dictLanguage.hasOwnProperty(searchKey[lang]) && dictLanguage[searchKey[lang]] != null) {
				language = searchKey[lang];
				for (var label in dictLanguage[language]['label']){
					document.getElementById("display-language-" + label).innerHTML = dictLanguage[language]['label'][label];
				}
			}
		}
	}
}

// Show 18+ Button
var showMatureContentButton = false;
var showMatureContentToggle = false;
function MatureContentToggle() {
	if (!showMatureContentToggle){
		document.getElementById('MatureContentButton').innerHTML = '18+ ON';
		document.getElementById('MatureContentButton').style.backgroundColor = '#00ff00';
		document.getElementById('MatureContentButton').style.color = '#000000';

		for (var page in dictLinks){
			if (dictLinks[page]['matureContent']){
				document.getElementById(page + "-button").classList.remove('d-none');
				document.getElementById(page + "-button").classList.add('d-block');
			}
		}

		showMatureContentToggle = true;
	}else{
		document.getElementById('MatureContentButton').innerHTML = '18+ OFF';
		document.getElementById('MatureContentButton').style.backgroundColor = '#ff0000';
		document.getElementById('MatureContentButton').style.color = '#ffffff';
		
		for (var page in dictLinks){
			if (dictLinks[page]['matureContent']){
				document.getElementById(page + "-button").classList.remove('d-block');
				document.getElementById(page + "-button").classList.add('d-none');
			}
		}

		showMatureContentToggle = false;
	}
}

//Load Button Areas
function loadButtonAreas() {
	var panel = ['twitch', 'youtube'];
	var isTeam = ['LinksTeamMain', 'LinksTeamPartner']
	for (var page in dictLinks){
		var display = document.getElementById('display-' + dictLinks[page]['list'])
		if (display) {
			if (dictLinks[page]['active'] && dictLinks[page]['link'] != ''){
				if (display.classList.contains('d-none')){
					display.classList.remove('d-none');
					display.classList.add('d-block');
					switch(dictLinks[page]['list']){
						case "LinksTeamMain":
						case "LinksTeamPartner":
								display = document.getElementById('display-Team');
						break;
						case "LinksSupportAffiliate":
						case "LinksSupportDonate":
							if (dictLinks[page]['active']){
								display = document.getElementById('display-Support');
							}
						break;
					}
					display.classList.remove('d-none');
					display.classList.add('d-block');
				}
			}
		}

	    if (dictLinks[page]['active']){
			for(var value in isTeam){
				var target = '';
				var displayName = '';
				var wrapperStart = '';
				var wrapperEnd = '';
				if(!(isTeam[value] == dictLinks[page]['list'])){
					target = 'target="_blank"';
				} else {
					displayName = '<p class="text-center displayName">' + dictLinks[page]['name'] + '</p>';
					wrapperStart = '<div>';
					wrapperEnd = '</div>';
					break;
				}
			}

			if (dictLinks[page]['link']){
				var isPanel = false;
				for (var panelName in panel) {
					if (panel[panelName] == page) {
						isPanel = true;
						break;
					}
					isPanel = false;
				}
				if (isPanel) {
					document.getElementById('panel').classList.remove('d-none');
					document.getElementById('panel').classList.add('d-block');

					document.getElementById('panel-' + page).classList.remove('d-none');
					document.getElementById('panel-' + page).classList.add('d-block');
					document.getElementById(page + '-channel-link').href = dictLinks[page]['link'];
					if (page = "youtube"){
						document.getElementById('latest-youtube-video').src = 'https://www.youtube.com/embed/videoseries?list=' + latestYouTubeVideoListCode;
					}
				}else{
					if (isEmptyOrNull(dictLinks[page]['logo'])){
						dictLinks[page]['logo'] = "img/logo/default/shethzor-logo.png";
					}
					var displayButton;
					if (dictLinks[page]['matureContent']){
						if (!showMatureContentButton){
							document.getElementById('MatureContentButton').classList.remove('d-none');
							document.getElementById('MatureContentButton').classList.add('d-block');
							showMatureContentButton = true;
						}
						var displayButton = "d-none";
					}else{
						var displayButton = "d-block";
					}
					document.getElementById(dictLinks[page]['list']).innerHTML += wrapperStart + '<div id="' + page + '-button" class="button-icon-main ' + displayButton + '"><a href="' + dictLinks[page]['link'] + '" ' + target + '><img src="' + dictLinks[page]['logo'] + '" alt="' + page + '"></img></a>' + wrapperEnd + displayName + '</div>';
				}
		    }
		}
	}
}

//Easter Eggs
var combinationArray = new Array();
document.addEventListener('keydown', loadEgg);

function loadEgg(key){
	combinationArray.length = 20;
	for(var i = 0; i < combinationArray.length; i++){
		combinationArray[i] = combinationArray[(i+1)];
	}
	combinationArray[(combinationArray.length - 1)] = key.key;
	
	for (var i = 0; i < 20; i++){
		switch(getArrayText(combinationArray, i)){
			//Visual
			case '<3': 
				document.getElementById('Background').style.backgroundImage = 'url("img/background/hearts.gif")';
				document.body.style.fontFamily = '"Love Ya Like A Sister"';
				break;
			case '666': 
				document.getElementById('Background').style.backgroundImage = 'url("img/background/devil.gif")';
				document.body.style.fontFamily = 'Rock Salt';
				break;
			case 'invisible': 
				document.body.style.opacity = '0';
				break;
			case 'neon':
				backgroundImageLink = ' ';
				backgroundColor = 'black';
				textColor = '#00ffff';
				textShadow = '#00ffffff 0 0 8px';
				loadStyles()
			break;

			//Sounds
			case 'aw man':
			case 'creeper':
				soundEgg('https://www.youtube.com/embed/3gtQ6eMWPnM');
			break;
			case 'caramelldansen':
			case 'caramella girls':
				soundEgg('https://www.youtube.com/embed/6-8E4Nirh9s');
			break;
			case 'he-man':
			case 'heyyeyaaeyaaaeyaeyaa':
				soundEgg('https://www.youtube.com/embed/ZZ5LpwO-An4');
			break;
			case 'lol limewire':
				soundEgg('https://www.youtube.com/embed/SAp0xO-LwFs');
			break;
			case 'megalovania':
			case 'sans':
				soundEgg('https://www.youtube.com/embed/wDgQdr8ZkTw');
			break;
			}
	}
}

//Easter Egg Sound
function soundEgg(link){
	document.getElementById('easteregg').innerHTML = '<iframe class="d-none" width="560" height="315" src="' + link + '?controls=0&loop=1&autoplay=1&disablekb=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function getArrayText(combinationArray, length){
	var text = '';
	for (var i = combinationArray.length - length; i < combinationArray.length; i++){
		text += combinationArray[i];
	}
	return text;
}

//Load Style
function loadStyles() {
	if (backgroundImageLink){
		document.getElementById('Background').style.backgroundImage = 'url("' + backgroundImageLink + '")';
		document.getElementById('Background').style.filter = 'blur(' + backgroundBlur + 'px)';
	}
	document.getElementById('Background').style.backgroundColor = backgroundColor;
	document.querySelectorAll('body')[0].style.color = textColor;
	document.querySelectorAll('body')[0].style.textShadow = textShadow;
	document.getElementById('own-font').href = fontLink;
	document.getElementsByTagName('body')[0].style.fontFamily = fontName;

	//Text
	for (var h2 in document.getElementsByTagName('h2')){
		if (!isNaN(h2)){
			document.getElementsByTagName('h2')[h2].style.fontSize = 'calc(1.5vh + 1.5vw + ' + fontSize + 'px)';
		}
	}
	for (var h3 in document.getElementsByTagName('h3')){
		if (!isNaN(h3)){
			document.getElementsByTagName('h3')[h3].style.fontSize = 'calc(1vh + 1vw + ' + h3Size + 'px)';
		}
	}
	for (var p in document.getElementsByTagName('p')){
		if (!isNaN(p)){
			document.getElementsByTagName('p')[p].style.fontSize = pSize + 'px';
		}
	}

	//Tab
	document.querySelectorAll('title')[0].innerHTML = title;
	document.getElementById('favicon').href = favicon;

	//Copiright
	document.getElementById('Copyright').style.fontSize = copyrightSize + 'px';
	document.getElementById('Copyright').querySelectorAll('a')[0].style.color = textColor;

	//Header
	if (banner){
		if (bannerWidth){
			document.getElementById('TitleImage').style.maxWidth = bannerWidth + 'vw';
		}
		document.getElementById('TitleImage').src = banner;
		bannerEl = document.getElementById('display-TitleImage');
		bannerEl.classList.remove('d-none');
		bannerEl.classList.add('d-block');
	}
}

//Twitch Stream Days
function setStreamDays(){
	for (var day in streamDays){
		document.getElementById('streaming-' + day).innerHTML = dictLanguage[language]['day'][day];
		document.getElementById('streaming-' + day).classList = 'streaming-' + streamDays[day];
	}
}

//Twitch Stream Time
function setStreamTime(){
	if (!isEmptyOrNull(streamTime)){
		const event = new Date('August 19, 1975 ' + streamTime + ':00:00 GMT+00:00');
		var time = event.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
		if (time.length == 5){
			time += ' ' + dictLanguage[language]['time']['clock'];
		}
		document.getElementById('streaming-time').innerHTML = dictLanguage[language]['time']['at'] + ' ' + time;
	}
}

//Usefull
function isEmptyOrNull(variable){
	if (variable == '' || variable == null){
		return true;
	}
	return false;
}
