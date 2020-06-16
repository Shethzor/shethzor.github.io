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

//Tab
head.innerHTML += '<title id="title">wrw3r3rw</title>';
head.innerHTML += '<link id="favicon" rel="icon" type="image/png" href="wrr3rwr"></link>';

//Titles
head.innerHTML += '<meta name="title" content="3rwrwr3">';
head.innerHTML += '<meta property="og:title" content="wr3rwr3r">';
head.innerHTML += '<meta property="twitter:title" content="3rw3rwr3">';

//Descriptions
head.innerHTML += '<meta name="description" content="w3rwrwr3r">';
head.innerHTML += '<meta property="og:description" content="wr3wr3rw3r">';
head.innerHTML += '<meta property="twitter:description" content="3wrw3rw3rwr">';

//Images
head.innerHTML += '<meta name="image" content="w3rw3r3rwr3">';
head.innerHTML += '<meta property="og:image" content="w3rw3rw3r3r">';
head.innerHTML += '<meta property="twitter:image" content="wr3wrwrw3r">';

/*
//Tab
head.innerHTML += '<title id="title">' + title + '</title>';
head.innerHTML += '<link id="favicon" rel="icon" type="image/png" href="' + favicon + '"></link>';

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