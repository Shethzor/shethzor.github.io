var teamList = {
	'DreamVisuals' : {'logo' : '../img/logo/other/dreamvisuals.gif', 'website' : 'http://shethzor.tv?id=dreamvisuals'},
	'flariwyr' : {'logo' : '../img/logo/other/flariwyr.png', 'website' : 'http://shethzor.tv?id=flariwyr'},
	'haoru' : {'logo' : '', 'website' : 'http://shethzor.tv?id=haoru'},
	'hitmarcer' : {'logo' : '', 'website' : 'http://shethzor.tv?id=hitmarcer'},
	'Retro__Boi' : {'logo' : '../img/logo/other/retro__boi.png', 'website' : 'http://shethzor.tv?id=retro__boi'},
	'Shethzor' : {'logo' : '../img/logo/main/shethzor.gif', 'website' : 'http://shethzor.tv?id=shethzor'}
}

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

var search = window.location.search.substr(1).split('&');
var searchKey = {};
for (var i = 0; i < search.length; i++){
	searchKey[search[i].split('=')[0]] = search[i].split('=')[1]
}

var user;
if (searchKey['id']){
	user = searchKey['id'].toLowerCase();
}

var language = 'en';
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

switch(user){
	case 'dreamvisuals':
		var title = "DreamVisuals links";
		var favicon = '../img/icon/other/dreamvisuals.png';
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
		var banner = '../img/banner/team/main/dreamvisuals.gif'
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
		var latestYouTubeVideoLink = 'https://www.youtube.com/embed/videoseries?list=UUnxr9y4rqZzQ42JIoW4aycg';
		var dictLinks = {
			'twitch' : {'active' : true, 'name' : 'Retro__Boi', 'logo' : '../img/logo/platform/twitch.png', 'link' : 'https://www.twitch.tv/dreamvisuals', 'list' : 'LinksSocialMedia'},
			'youtube' : {'active' : true, 'name' : 'Retro__Boi', 'logo' : '../img/logo/platform/youtube.png', 'link' : 'https://www.youtube.com/channel/UCnxr9y4rqZzQ42JIoW4aycg', 'list' : 'LinksSocialMedia'},
			'instagram' : {'active' : true, 'name' : 'DreamVisuals', 'logo' : '../img/logo/platform/instagram.png', 'link' : 'https://www.instagram.com/dream_visualizer/', 'list' : 'LinksSocialMedia'},
			'soundcloud' : {'active' : true, 'name' : 'DreamVisuals', 'logo' : '../img/logo/platform/soundcloud.png', 'link' : 'https://soundcloud.com/dreamvisual', 'list' : 'LinksSocialMedia'},
			'steam' : {'active' : true, 'name' : 'DreamVisuals', 'logo' : '../img/logo/platform/steam.png', 'link' : 'http://steamcommunity.com/id/DVedits', 'list' : 'LinksSocialMedia'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor', 'logo' : teamList['Shethzor']['logo'], 'link' : teamList['Shethzor']['website'], 'list' : 'LinksTeamMain'},
			'streamlabs_donate' : {'active' : true, 'name' : 'DreamVisuals', 'logo' : '../img/logo/support/streamlabs.png', 'link' : 'https://streamlabs.com/dreamvisuals1/tip', 'list' : 'LinksSupportDonate'}, 
		}
	break;
	case 'flariwyr':
		var title = "Flariwyr's links";
		var favicon = '../img/icon/other/flariwyr.png';
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
		var latestYouTubeVideoLink = 'https://www.youtube.com/embed/videoseries?list=UU0uJMyQjKUgLKthvf0E6JpA';
		var dictLinks = {
			'twitch' : {'active' : true, 'name' : 'Flariwyr', 'logo' : '../img/logo/platform/twitch.png', 'link' : 'https://www.twitch.tv/flariwyr/', 'list' : 'LinksSocialMedia'},
			'discord' : {'active' : true, 'name' : 'Flariwyr', 'logo' : '../img/logo/platform/discord.png', 'link' : 'https://discord.gg/Fj8bGZF', 'list' : 'LinksSocialMedia'},
			'instagram' : {'active' : true, 'name' : 'Flariwyr', 'logo' : '../img/logo/platform/instagram.png', 'link' : 'https://www.instagram.com/flariwyr/', 'list' : 'LinksSocialMedia'},
			'steam' : {'active' : true, 'name' : 'Flariwyr', 'logo' : '../img/logo/platform/steam.png', 'link' : 'http://steamcommunity.com/id/Flariwyr', 'list' : 'LinksSocialMedia'},
			'pornhub' : {'active' : true, 'name' : 'Flariwyr', 'logo' : '../img/logo/platform/pornhub.png', 'link' : 'https://www.pornhub.com/users/flariwyr', 'list' : 'LinksSocialMedia'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor', 'logo' : teamList['Shethzor']['logo'], 'link' : teamList['Shethzor']['website'], 'list' : 'LinksTeamMain'},
			'team_partner_haoru' : {'active' : true, 'name' : 'Haoru', 'logo' : teamList['haoru']['logo'], 'link' : teamList['haoru']['website'], 'list' : 'LinksTeamPartner'},
			'streamlabs_donate' : {'active' : true, 'name' : 'Flariwyr', 'logo' : '../img/logo/support/streamlabs.png', 'link' : 'https://www.streamlabs.com/flariwyr/tip', 'list' : 'LinksSupportDonate'}, 
		}
	break;
	case 'haoru':
		var title = "Haoru's links";
		var favicon = '';
		var backgroundImageLink = 'https://i.pinimg.com/originals/0b/0d/32/0b0d3257fa1d5dc5a46f0a591e1fef05.gif';
		var backgroundBlur = 3;
		var backgroundColor = 'black';
		var textColor = '';
		var textShadow = '';
		var fontLink = 'https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@500&display=swap';
		var fontName = '"Baloo Chettan 2"';
		var fontSize = 25;
		var h3Size = 20;
		var pSize = 17;
		var copyrightSize = 15;
		var banner = ''
		var bannerWidth;
		var streamDays = {
			'su' : true,
			'mo' : false,
			'tu' : true,
			'we' : false,
			'th' : false,
			'fr' : true,
			'sa' : true,
		}
		streamTime = '';
		var latestYouTubeVideoLink = '';
		var dictLinks = {
			'twitch' : {'active' : true, 'name' : 'M4ggiH4nz0', 'logo' : '../img/logo/platform/twitch.png', 'link' : 'https://www.twitch.tv/M4ggiH4nz0', 'list' : 'LinksSocialMedia'},
			'instagram' : {'active' : true, 'name' : 'haoru0010', 'logo' : '../img/logo/platform/instagram.png', 'link' : 'https://www.instagram.com/Haoru0010/', 'list' : 'LinksSocialMedia'},
			'telegram' : {'active' : true, 'name' : '', 'logo' : '../img/logo/platform/telegram.png', 'link' : 'https://t.me/HaorusTwitchCommunity', 'list' : 'LinksSocialMedia'},
			'steam' : {'active' : true, 'name' : 'Shiroushima', 'logo' : '../img/logo/platform/steam.png', 'link' : 'https://steamcommunity.com/id/Shiroushima', 'list' : 'LinksSocialMedia'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor', 'logo' : teamList['Shethzor']['logo'], 'link' : teamList['Shethzor']['website'], 'list' : 'LinksTeamMain'},
			'team_partner_flariwyr' : {'active' : true, 'name' : 'Flariwyr', 'logo' : teamList['flariwyr']['logo'], 'link' : teamList['flariwyr']['website'], 'list' : 'LinksTeamPartner'},
		}
	break;
	case 'hitmarcer':
		var title = "HitMarcer links";
		var favicon = '../img/icon/other/hitmarcer.png';
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
		var latestYouTubeVideoLink = '';
		var dictLinks = {
			'twitch' : {'active' : true, 'name' : 'HitMarcer', 'logo' : '../img/logo/platform/twitch.png', 'link' : 'https://www.twitch.tv/HitMarcer', 'list' : 'LinksSocialMedia'},
			'twitter' : {'active' : true, 'name' : 'HitMarcer', 'logo' : '../img/logo/platform/twitter.png', 'link' : 'https://www.twitter.com/HitMarcer', 'list' : 'LinksSocialMedia'},
			'instagram' : {'active' : true, 'name' : 'HitMarcer', 'logo' : '../img/logo/platform/instagram.png', 'link' : 'https://www.instagram.com/hitmarcer/', 'list' : 'LinksSocialMedia'},
			'steam' : {'active' : true, 'name' : 'HitMarcer', 'logo' : '../img/logo/platform/steam.png', 'link' : 'https://steamcommunity.com/id/hitmarcer', 'list' : 'LinksSocialMedia'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor', 'logo' : teamList['Shethzor']['logo'], 'link' : teamList['Shethzor']['website'], 'list' : 'LinksTeamMain'},
			'streamelements_donate' : {'active' : true, 'name' : 'HitMarcer', 'logo' : '../img/logo/support/streamelements.png', 'link' : 'https://streamelements.com/hitmarcer/tip', 'list' : 'LinksSupportDonate'}, 
		}
	break;
	case "retro__boi":
		var title = "Retro__Boi's links";
		var favicon = '../img/icon/other/retro__boi.png';
		var backgroundImageLink = '../img/background/team/main/retro__boi.gif';
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
		var banner = ''
		var bannerWidth;
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
		var latestYouTubeVideoLink = 'https://www.youtube.com/embed/videoseries?list=UUwIqmX2N9gkCt4-zASxLA1A';
		var dictLinks = {
			'twitch' : {'active' : true, 'name' : 'Retro__Boi', 'logo' : '../img/logo/platform/twitch.png', 'link' : 'https://www.twitch.tv/retro__boi', 'list' : 'LinksSocialMedia'},
			'youtube' : {'active' : true, 'name' : 'Retro__Boi', 'logo' : '../img/logo/platform/youtube.png', 'link' : 'https://www.youtube.com/channel/UCwIqmX2N9gkCt4-zASxLA1A', 'list' : 'LinksSocialMedia'},
			'instagram' : {'active' : true, 'name' : 'Retro__Boi', 'logo' : '../img/logo/platform/instagram.png', 'link' : 'https://www.instagram.com/sonik.sped/', 'list' : 'LinksSocialMedia'},
			'twitter' : {'active' : true, 'name' : 'Retro__Boi', 'logo' : '../img/logo/platform/twitter.png', 'link' : 'https://www.twitter.com/eat_the_water', 'list' : 'LinksSocialMedia'},
			'team_partner_shethzor' : {'active' : true, 'name' : 'Shethzor', 'logo' : teamList['Shethzor']['logo'], 'link' : teamList['Shethzor']['website'], 'list' : 'LinksTeamPartner'}, 
			'spotify' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/spotify.png', 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine', 'list' : 'LinksOther'},
			'streamelements_donate' : {'active' : false, 'name' : 'Shethzor', 'logo' : '../img/logo/support/streamelements.png', 'link' : 'https://StreamElements.com/thestring/tip#Are_you_about_to_donate?_Thanks_a_lot_<3', 'list' : 'LinksSupportDonate'}, 
		}
	break;
	case 'shethzor':
	default:
		var title = "Shethzor's links";
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
		var banner = '../img/banner/main/shethzor.gif'
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
		var latestYouTubeVideoLink = 'https://www.youtube.com/embed/videoseries?list=UU0uJMyQjKUgLKthvf0E6JpA';
		var dictLinks = {
			'twitch' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/twitch.png', 'link' : 'https://www.twitch.tv/TheString#Enjoy_your_time_on_my_Twitch_channel', 'list' : 'LinksSocialMedia'},
			'youtube' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/youtube.png', 'link' : 'https://www.youtube.com/channel/UC0uJMyQjKUgLKthvf0E6JpA#Enjoy_your_time_on_my_YouTube_channel', 'list' : 'LinksSocialMedia'},
			'discord' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/discord.png', 'link' : 'https://www.Discord.gg/scdT6Sn#Don\'t_be_shy._We_are_waiting_for_you!', 'list' : 'LinksSocialMedia'},
			'tellonym' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/tellonym.png', 'link' : 'https://tellonym.me/Shethzor#Ask_me_anything', 'list' : 'LinksSocialMedia'},
			'twitter' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/twitter.png', 'link' : 'https://www.Twitter.com/Shethzor#Do_you_hear_that?_Sounds_like_some_tweets!', 'list' : 'LinksSocialMedia'},
			'instagram' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/instagram.png', 'link' : 'https://www.Instagram.com/Shethzor#Look_at_all_those_pictures_of_mine_:D', 'list' : 'LinksSocialMedia'},
			'e-pal' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/e-pal.png', 'link' : 'https://www.epal.gg/epal/118368#Yes,_I\'m_selling_my_body_lmao', 'list' : 'LinksSocialMedia'},
			'facebook' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/facebook.png', 'link' : 'https://www.facebook.com/shethzor.alfonzo#Feels_kinda_2013', 'list' : 'LinksSocialMedia'},
			'steam' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/steam.png', 'link' : 'https://steamcommunity.com/id/shethzor#Spin_the_valve', 'list' : 'LinksSocialMedia'},
			'pornhub' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/pornhub.png', 'link' : 'https://www.pornhub.com/users/shethzor#What_did_you_expect_to_see_on_this_profile?', 'list' : 'LinksSocialMedia'},
			'team_main_dream_visuals' : {'active' : true, 'name' : 'DreamVisuals', 'logo' : teamList['DreamVisuals']['logo'], 'link' : teamList['DreamVisuals']['website'], 'list' : 'LinksTeamMain'},
			'team_main_retro__boi' : {'active' : true, 'name' : 'Retro__Boi', 'logo' : teamList['Retro__Boi']['logo'], 'link' : teamList['Retro__Boi']['website'], 'list' : 'LinksTeamMain'},
			'youtube_music' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/youtubemusic.png', 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine', 'list' : 'LinksOther'},
			'github' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/platform/github.png', 'link' : 'https://www.GitHub.com/Shethzor#There_is_some_code_in_here._Looks_kinda_boring', 'list' : 'LinksOther'},
			'instant_gaming_affiliate' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/support/instantgaming.png', 'link' : 'https://www.Instant-Gaming.com//?igr=shethzor#Yeah,_support_me_by_buying_the_games_cheaper!', 'list' : 'LinksSupportAffiliate'},
			'streamelements_donate' : {'active' : true, 'name' : 'Shethzor', 'logo' : '../img/logo/support/streamelements.png', 'link' : 'https://StreamElements.com/thestring/tip#Are_you_about_to_donate?_Thanks_a_lot_<3', 'list' : 'LinksSupportDonate'}, 
			
			//OFF
			'telegram' : {'active' : false, 'name' : '', 'logo' : '../img/logo/platform/telegram.png', 'link' : '', 'list' : 'LinksSocialMedia'},
			'spotify' : {'active' : false, 'name' : '', 'logo' : '../img/logo/platform/spotify.png', 'link' : '', 'list' : 'LinksOther'},
			'tipeeestream_donate' : {'active' : false, 'name' : '', 'logo' : '../img/logo/support/tipeeestream.png', 'link' : '', 'list' : 'LinksSupportDonate'}, 
			'soundcloud' : {'active' : false, 'name' : '', 'logo' : '../img/logo/platform/soundcloud.png', 'link' : '', 'list' : 'LinksSocialMedia'},
			'patreon_donate' : {'active' : false, 'name' : 'Shethzor', 'logo' : '../img/logo/support/patreon.png', 'link' : '', 'list' : 'LinksSupportDonate'}, 
		}
	break;
}

for (var redirect in searchKey) {
	redirect = redirect.toLowerCase();
	if (dictLinks.hasOwnProperty(redirect) && dictLinks[redirect]['link'] != '') {
		window.location.replace(dictLinks[redirect]['link'])
	}
}

var combinationArray = new Array();

document.addEventListener('keydown', loadEgg);

// Hide Empty Areas
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
				displayName = '<p class="text-center">' + dictLinks[page]['name'] + '</p>';
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
					document.getElementById('latest-youtube-video').src = latestYouTubeVideoLink;
				}
			}else{
				if (isEmptyOrNull(dictLinks[page]['logo'])){
					dictLinks[page]['logo'] = "../img/logo/default/shethzor-logo.png";
				}
				document.getElementById(dictLinks[page]['list']).innerHTML += wrapperStart + '<div id="' + page + '-button" class="button-icon-main"><a href="' + dictLinks[page]['link'] + '" ' + target + '><img src="' + dictLinks[page]['logo'] + '" alt="' + page + '"></img></a>' + wrapperEnd + displayName + '</div>';
			}
	    }
	}
}

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
				document.getElementById('Background').style.backgroundImage = 'url("../img/background/main/hearts.gif")';
				document.body.style.fontFamily = '"Love Ya Like A Sister"';
				break;
			case '666': 
				document.getElementById('Background').style.backgroundImage = 'url("../img/background/main/devil.gif")';
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
				soundEgg('https://www.youtube.com/embed/3gtQ6eMWPnM');
			break;
			case 'caramella girls':
				soundEgg('https://www.youtube.com/embed/6-8E4Nirh9s');
			break;
			case 'heyyeyaaeyaaaeyaeyaa':
				soundEgg('https://www.youtube.com/embed/ZZ5LpwO-An4');
			break;
			case 'lol limewire':
				soundEgg('https://www.youtube.com/embed/SAp0xO-LwFs');
			break;
			case 'megalovania':
				soundEgg('https://www.youtube.com/embed/wDgQdr8ZkTw');
			break;
			}
	}
}

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

loadStyles();

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

	//Copiright
	document.getElementById('Copyright').style.fontSize = copyrightSize + 'px';
	document.getElementById('Copyright').querySelectorAll('a')[0].style.color = textColor;

	//Tab
	if (isEmptyOrNull(favicon)){
		document.getElementById('favicon').href = '../img/icon/main/shethzor.png';
	}else{
		document.getElementById('favicon').href = favicon;
	}
	document.getElementById('title').innerHTML = title;


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
for (var day in streamDays){
	document.getElementById('streaming-' + day).innerHTML = dictLanguage[language]['day'][day];
	document.getElementById('streaming-' + day).classList = 'streaming-' + streamDays[day];
}

//Twitch Stream Time
if (!isEmptyOrNull(streamTime)){
	const event = new Date('August 19, 1975 ' + streamTime + ':00:00 GMT+00:00');
	var time = event.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
	if (time.length == 5){
		time += ' ' + dictLanguage[language]['time']['clock'];
	}
	document.getElementById('streaming-time').innerHTML = dictLanguage[language]['time']['at'] + ' ' + time;
}

//Usefull
function isEmptyOrNull(variable){
	if (variable == '' || variable == null){
		return true;
	}
	return false;
}
