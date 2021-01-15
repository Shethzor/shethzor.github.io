var idList = {
	'Shethzor' : {'logo' : 'img/logo/profiles/shethzor.gif', 'link' : 'http://shethzor.tv?id=shethzor'},
	'Bubedischwubedi' : {'logo' : 'img/logo/profiles/shethzor.gif', 'link' : 'http://shethzor.tv?id=shethzor'}
}

switch(user){
	case 'bubedischwubedi':
		var title = "Bubedischwubedi's links";
		var defaultLanguage = 'de'
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
			'we' : false,
			'th' : true,
			'fr' : true,
			'sa' : false,
		}
		streamTime = 18;
		var latestYouTubeVideoListCode = 'UU0uJMyQjKUgLKthvf0E6JpA';
		var dictLinks = {
			'stream_twitch' : {'active' : true, 'link' : 'https://www.twitch.tv/Shethzor#Enjoy_your_time_on_my_Twitch_channel'},
			'youtube' : {'active' : true, 'link' : 'https://www.youtube.com/channel/UC0uJMyQjKUgLKthvf0E6JpA#Enjoy_your_time_on_my_YouTube_channel'},
			'discord' : {'active' : true, 'link' : 'https://www.Discord.gg/scdT6Sn#Don\'t_be_shy._We_are_waiting_for_you!'},
			'reddit' : {'active' : true, 'link' : 'https://www.reddit.com/r/Shethzor#Welcome_on_my_subreddit!'},
			'twitter' : {'active' : true, 'link' : 'https://www.Twitter.com/Shethzor#Do_you_hear_that?_Sounds_like_some_tweets!'},
			'instagram' : {'active' : true, 'link' : 'https://www.Instagram.com/Shethzor#Look_at_all_those_pictures_of_mine_:D'},
			'tiktok' : {'active' : true, 'link' : 'https://www.tiktok.com/@Shethzor#Do_you_really_wanna_see_something?_Oh_boi!'},
			'steam' : {'active' : true, 'link' : 'https://steamcommunity.com/id/shethzor#Spin_the_valve'},
			'youtube_music' : {'active' : true, 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine'},
			'github' : {'active' : true, 'link' : 'https://www.GitHub.com/Shethzor#There_is_some_code_in_here._Looks_kinda_boring'},
			'gamivo' : {'active' : true, 'link' : 'https://www.gamivo.com?glv=27y6f6ma#Yeah,_support_me_by_buying_the_games_cheaper!'},
			'twitch_subscribe' : {'active' : true, 'link' : 'https://www.twitch.tv/subs/Shethzor#Wow_never_thought_you_would_show_up_here!'}, 
			'tipeeestream_donate' : {'active' : true, 'link' : 'https://www.tipeeestream.com/shethzor/donation#Are_you_about_to_donate?_Thanks_a_lot_<3'},
			
			//OFF
			'e-pal' : {'active' : false, 'link' : '#Yes,_I\'m_selling_my_body_lmao'},
			'facebook' : {'active' : false, 'link' : '#Feels_kinda_2013'},
			'pornhub' : {'active' : false, 'link' : '#What_did_you_expect_to_see_on_this_profile?'},
			'telegram' : {'active' : false, 'link' : ''},
			'tellonym' : {'active' : false, 'link' : '#Ask_me_anything'},
			'spotify' : {'active' : false, 'link' : ''},
			'soundcloud' : {'active' : false, 'link' : ''},
			'streamlabs_donate' : {'active' : false, 'link' : ''},
			'streamelements_donate' : {'active' : false, 'link' : ''}, 
			'patreon_donate' : {'active' : false, 'link' : ''}, 		
		}
		break;
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
			'reddit' : {'active' : true, 'link' : 'https://www.reddit.com/r/Shethzor#Welcome_on_my_subreddit!'},
			'twitter' : {'active' : true, 'link' : 'https://www.Twitter.com/Shethzor#Do_you_hear_that?_Sounds_like_some_tweets!'},
			'instagram' : {'active' : true, 'link' : 'https://www.Instagram.com/Shethzor#Look_at_all_those_pictures_of_mine_:D'},
			'tiktok' : {'active' : true, 'link' : 'https://www.tiktok.com/@Shethzor#Do_you_really_wanna_see_something?_Oh_boi!'},
			'steam' : {'active' : true, 'link' : 'https://steamcommunity.com/id/shethzor#Spin_the_valve'},
			'youtube_music' : {'active' : true, 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine'},
			'github' : {'active' : true, 'link' : 'https://www.GitHub.com/Shethzor#There_is_some_code_in_here._Looks_kinda_boring'},
			'gamivo' : {'active' : true, 'link' : 'https://www.gamivo.com?glv=27y6f6ma#Yeah,_support_me_by_buying_the_games_cheaper!'},
			'twitch_subscribe' : {'active' : true, 'link' : 'https://www.twitch.tv/subs/Shethzor#Wow_never_thought_you_would_show_up_here!'}, 
			'tipeeestream_donate' : {'active' : true, 'link' : 'https://www.tipeeestream.com/shethzor/donation#Are_you_about_to_donate?_Thanks_a_lot_<3'},
			
			//OFF
			'e-pal' : {'active' : false, 'link' : '#Yes,_I\'m_selling_my_body_lmao'},
			'facebook' : {'active' : false, 'link' : '#Feels_kinda_2013'},
			'pornhub' : {'active' : false, 'link' : '#What_did_you_expect_to_see_on_this_profile?'},
			'telegram' : {'active' : false, 'link' : ''},
			'tellonym' : {'active' : false, 'link' : '#Ask_me_anything'},
			'spotify' : {'active' : false, 'link' : ''},
			'soundcloud' : {'active' : false, 'link' : ''},
			'streamlabs_donate' : {'active' : false, 'link' : ''},
			'streamelements_donate' : {'active' : false, 'link' : ''}, 
			'patreon_donate' : {'active' : false, 'link' : ''}, 		
		}
	break;
}
