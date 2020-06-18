var idList = {
	'DreamVisuals' : {'logo' : 'img/logo/profiles/dreamvisuals.gif', 'link' : 'http://shethzor.tv?id=dreamvisuals'},
	'flariwyr' : {'logo' : 'img/logo/profiles/flariwyr.png', 'link' : 'http://shethzor.tv?id=flariwyr'},
	'hitmarcer' : {'logo' : '', 'link' : 'http://shethzor.tv?id=hitmarcer'},
	'Retro__Boi' : {'logo' : 'img/logo/profiles/retro__boi.png', 'link' : 'http://shethzor.tv?id=retro__boi'},
	'Shethzor' : {'logo' : 'img/logo/profiles/shethzor.gif', 'link' : 'http://shethzor.tv?id=shethzor'}
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
			'stream_twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/dreamvisuals'},
			'youtube' : {'active' : true, 'link' : 'https://www.youtube.com/channel/UCnxr9y4rqZzQ42JIoW4aycg'},
			'instagram' : {'active' : true, 'link' : 'https://www.instagram.com/dream_visualizer/'},
			'soundcloud' : {'active' : true, 'link' : 'https://soundcloud.com/dreamvisual'},
			'steam' : {'active' : true, 'link' : 'http://steamcommunity.com/id/DVedits'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor'},
			'streamlabs_donate' : {'active' : true, 'link' : 'https://streamlabs.com/dreamvisuals1/tip'}, 
		}
	break;
	case 'flariwyr':
		var title = "Flariwyrs links";
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
			'stream_twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/flariwyr/'},
			'discord' : {'active' : true, 'link' : 'https://discord.gg/Fj8bGZF'},
			'instagram' : {'active' : true, 'link' : 'https://www.instagram.com/flariwyr/'},
			'steam' : {'active' : true, 'link' : 'http://steamcommunity.com/id/Flariwyr'},
			'pornhub' : {'active' : true,'matureContent' : true, 'link' : 'https://www.pornhub.com/users/flariwyr'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor'},
			'twitch_subscribe' : {'active' : true, 'link' : 'https://www.twitch.tv/subs/flariwyr'}, 
			'streamelements_donate' : {'active' : true, 'link' : 'https://streamelements.com/flariwyr/tip'}, 
		}
	break;
	case 'hitmarcer':
		var title = "HitMarcers links";
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
			'stream_twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/HitMarcer'},
			'twitter' : {'active' : true, 'link' : 'https://www.twitter.com/HitMarcer'},
			'instagram' : {'active' : true, 'link' : 'https://www.instagram.com/hitmarcer/'},
			'steam' : {'active' : true, 'link' : 'https://steamcommunity.com/id/hitmarcer'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor'},
			'streamelements_donate' : {'active' : true, 'link' : 'https://streamelements.com/hitmarcer/tip'}, 
		}
	break;
	case "retro__boi":
		var title = "Retro__Bois links";
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
			'stream_twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/retro__boi'},
			'youtube' : {'active' : true, 'link' : 'https://www.youtube.com/channel/UCwIqmX2N9gkCt4-zASxLA1A'},
			'instagram' : {'active' : true, 'link' : 'https://www.instagram.com/sonik.sped/'},
			'twitter' : {'active' : true, 'link' : 'https://www.twitter.com/eat_the_water'},
			'team_partner_shethzor' : {'active' : true, 'name' : 'Shethzor'}, 
			'spotify' : {'active' : true, 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine'},
			'streamlabs_donate' : {'active' : true, 'link' : 'https://streamlabs.com/retro__boi/tip'}, 
		}
	break;
	case 'shethzor':
	default:
		var title = "Shethzors links";
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
			'stream_twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/TheString#Enjoy_your_time_on_my_Twitch_channel'},
			'youtube' : {'active' : true, 'link' : 'https://www.youtube.com/channel/UC0uJMyQjKUgLKthvf0E6JpA#Enjoy_your_time_on_my_YouTube_channel'},
			'discord' : {'active' : true, 'link' : 'https://www.Discord.gg/scdT6Sn#Don\'t_be_shy._We_are_waiting_for_you!'},
			'tellonym' : {'active' : true, 'link' : 'https://tellonym.me/Shethzor#Ask_me_anything'},
			'twitter' : {'active' : true, 'link' : 'https://www.Twitter.com/Shethzor#Do_you_hear_that?_Sounds_like_some_tweets!'},
			'instagram' : {'active' : true, 'link' : 'https://www.Instagram.com/Shethzor#Look_at_all_those_pictures_of_mine_:D'},
			'e-pal' : {'active' : true, 'link' : 'https://www.epal.gg/epal/118368#Yes,_I\'m_selling_my_body_lmao'},
			'facebook' : {'active' : true, 'link' : 'https://www.facebook.com/shethzor.alfonzo#Feels_kinda_2013'},
			'steam' : {'active' : true, 'link' : 'https://steamcommunity.com/id/shethzor#Spin_the_valve'},
			'pornhub' : {'active' : true, 'link' : 'https://www.pornhub.com/users/Shethzor#What_did_you_expect_to_see_on_this_profile?'},
			'team_main_dream_visuals' : {'active' : true, 'name' : 'DreamVisuals'},
			'team_main_retro__boi' : {'active' : true, 'name' : 'Retro__Boi'},
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