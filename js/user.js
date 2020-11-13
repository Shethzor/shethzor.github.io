var idList = {
	'Retro__Boi' : {'logo' : 'img/logo/profiles/retro__boi.png', 'link' : 'http://shethzor.tv?id=retro__boi'},
	'Shethzor' : {'logo' : 'img/logo/profiles/shethzor.gif', 'link' : 'http://shethzor.tv?id=shethzor'}
}

switch(user){
	/*case "retro__boi":
		var title = "Retro__Boi's links";
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
	break;*/
	default:
		var title = "Shethzor's links";
		var favicon = '';
		var backgroundImageLink = 'http://p.favim.com/orig/2018/08/18/illustration-pixels-future-Favim.com-6195133.gif';
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
			'su' : true,
			'mo' : true,
			'tu' : true,
			'we' : true,
			'th' : true,
			'fr' : true,
			'sa' : true,
		}
		streamTime = 15;
		var latestYouTubeVideoListCode = 'UU0uJMyQjKUgLKthvf0E6JpA';
		var dictLinks = {
			'stream_twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/Shethzor#Enjoy_your_time_on_my_Twitch_channel'},
			'youtube' : {'active' : true, 'link' : 'https://www.youtube.com/channel/UC0uJMyQjKUgLKthvf0E6JpA#Enjoy_your_time_on_my_YouTube_channel'},
			'discord' : {'active' : true, 'link' : 'https://www.Discord.gg/scdT6Sn#Don\'t_be_shy._We_are_waiting_for_you!'},
			'tellonym' : {'active' : true, 'link' : 'https://tellonym.me/Shethzor#Ask_me_anything'},
			'twitter' : {'active' : true, 'link' : 'https://www.Twitter.com/Shethzor#Do_you_hear_that?_Sounds_like_some_tweets!'},
			'instagram' : {'active' : true, 'link' : 'https://www.Instagram.com/Shethzor#Look_at_all_those_pictures_of_mine_:D'},
			'e-pal' : {'active' : true, 'link' : 'https://www.epal.gg/epal/118368#Yes,_I\'m_selling_my_body_lmao'},
			'facebook' : {'active' : true, 'link' : 'https://www.facebook.com/shethzor.alfonzo#Feels_kinda_2013'},
			'steam' : {'active' : true, 'link' : 'https://steamcommunity.com/id/shethzor#Spin_the_valve'},
			'pornhub' : {'active' : true, 'link' : 'https://www.pornhub.com/users/Shethzor#What_did_you_expect_to_see_on_this_profile?'},
			//'team_main_retro__boi' : {'active' : true, 'name' : 'Retro__Boi'},
			'youtube_music' : {'active' : true, 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine'},
			'github' : {'active' : true, 'link' : 'https://www.GitHub.com/Shethzor#There_is_some_code_in_here._Looks_kinda_boring'},
			'instant-gaming' : {'active' : true, 'link' : 'https://www.Instant-Gaming.com//?igr=shethzor#Yeah,_support_me_by_buying_the_games_cheaper!'},
			'twitch_subscribe' : {'active' : true, 'link' : 'https://www.twitch.tv/subs/Shethzor#Wow_never_thought_you_would_show_up_here!'}, 
			'tipeeestream_donate' : {'active' : true, 'link' : 'https://www.tipeeestream.com/shethzor/donation#Are_you_about_to_donate?_Thanks_a_lot_<3'},
			
			//OFF
			'telegram' : {'active' : false, 'link' : ''},
			'spotify' : {'active' : false, 'link' : ''},
			'soundcloud' : {'active' : false, 'link' : ''},
			'streamlabs_donate' : {'active' : false, 'link' : ''},
			'streamelements_donate' : {'active' : false, 'link' : ''}, 
			'patreon_donate' : {'active' : false, 'link' : ''}, 
		
		}
	break;
}
