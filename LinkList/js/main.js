var teamList = {
	"DreamVisuals" : {'logo' : '../img/logo/team/main/dreamvisuals.gif', 'website' : 'http://shethzor.tv?user=dreamvisuals'},
	"Retro__Boi" : {'logo' : '../img/logo/team/main/retro__boi.png', 'website' : 'http://shethzor.tv?user=retro__boi'},
	"Shethzor" : {'logo' : '../img/logo/main/shethzor.gif', 'website' : 'http://shethzor.tv'}
}

var search = window.location.search.substr(1).split('&');
var searchKey = {};
for (var i = 0; i < search.length; i++){
	searchKey[search[i].split('=')[0]] = search[i].split('=')[1]
}

var user;
if (searchKey['user']){
	user = searchKey['user'].toLowerCase();
}

switch(user){
	case 'dreamvisuals':
		var title = "DreamVisuals links";
		var favicon = '../img/icon/team/main/dreamvisuals.png';
		var backgroundImageLink = 'https://cutewallpaper.org/21/hd-gif-wallpapers/Gifart-Lo-Fi-Wallpapers-Top-Free-Gifart-Lo-Fi-Backgrounds-.gif';
		var backgroundBlur = 2;
		var backgroundColor = 'purple';
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
		var twitchChannelLink = 'https://www.twitch.tv/dreamvisuals';
		var youtubeChannelLink = 'https://www.youtube.com/channel/UCnxr9y4rqZzQ42JIoW4aycg';
		var latestYouTubeVideoLink = 'https://www.youtube.com/embed/videoseries?list=UUnxr9y4rqZzQ42JIoW4aycg';
		var dictLinks = {
			'instagram' : {'active' : true, 'name' : 'DreamVisuals', 'icon' : '../img/logo/platform/instagram.png', 'link' : 'https://www.instagram.com/dream_visualizer/', 'list' : 'LinksSocialMedia'},
			'soundcloud' : {'active' : true, 'name' : 'DreamVisuals', 'icon' : '../img/logo/platform/soundcloud.png', 'link' : 'https://soundcloud.com/dreamvisual', 'list' : 'LinksSocialMedia'},
			'steam' : {'active' : true, 'name' : 'DreamVisuals', 'icon' : '../img/logo/platform/steam.png', 'link' : 'http://steamcommunity.com/id/DVedits', 'list' : 'LinksSocialMedia'},
			'team_main_shethzor' : {'active' : true, 'name' : 'Shethzor', 'icon' : teamList['Shethzor']['logo'], 'link' : teamList['Shethzor']['website'], 'list' : 'LinksTeamMain'},
			'streamlabs_donate' : {'active' : true, 'name' : 'DreamVisuals', 'icon' : '../img/logo/support/streamlabs.png', 'link' : 'https://streamlabs.com/dreamvisuals1/tip', 'list' : 'LinksSupportDonate'}, 
		}
	break;
	case "retro__boi":
		var title = "Retro__Boi's links";
		var favicon = '../img/icon/team/main/retro__boi.png';
		var backgroundImageLink = '../img/background/team/main/retro__boi.gif';
		var backgroundBlur = 0;
		var backgroundColor = 'black';
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
		var twitchChannelLink = 'https://www.twitch.tv/retro__boi';
		var youtubeChannelLink = 'https://www.youtube.com/channel/UCwIqmX2N9gkCt4-zASxLA1A';
		var latestYouTubeVideoLink = 'https://www.youtube.com/embed/videoseries?list=UUwIqmX2N9gkCt4-zASxLA1A';
		var dictLinks = {
			'instagram' : {'active' : true, 'name' : 'Retro__Boi', 'icon' : '../img/logo/platform/instagram.png', 'link' : 'https://www.instagram.com/sonik.sped/', 'list' : 'LinksSocialMedia'},
			'twitter' : {'active' : true, 'name' : 'Retro__Boi', 'icon' : '../img/logo/platform/twitter.png', 'link' : 'https://www.twitter.com/eat_the_water', 'list' : 'LinksSocialMedia'},
			'team_partner_shethzor' : {'active' : true, 'name' : 'Shethzor', 'icon' : teamList['Shethzor']['logo'], 'link' : teamList['Shethzor']['website'], 'list' : 'LinksTeamPartner'}, 
			'spotify' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/spotify.png', 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine', 'list' : 'LinksOther'},
			'streamelements_donate' : {'active' : false, 'name' : 'Shethzor', 'icon' : '../img/logo/support/streamelements.png', 'link' : 'https://StreamElements.com/thestring/tip#Are_you_about_to_donate?_Thanks_a_lot_<3', 'list' : 'LinksSupportDonate'}, 
		}
	break;
	case 'shethzor':
	default:
		var title = "Shethzor's links";
		var favicon = '../img/icon/main/shethzor.png';
		var backgroundImageLink = 'https://media1.tenor.com/images/a682025c7ab8f3b60b1e230fe89f1879/tenor.gif';
		var backgroundBlur = 3;
		var backgroundColor = 'black';
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
		var twitchChannelLink = 'https://www.twitch.tv/TheString#Enjoy_your_time_on_my_Twitch_channel';
		var youtubeChannelLink = 'https://www.youtube.com/channel/UC0uJMyQjKUgLKthvf0E6JpA#Enjoy_your_time_on_my_YouTube_channel';
		var latestYouTubeVideoLink = 'https://www.youtube.com/embed/videoseries?list=UU0uJMyQjKUgLKthvf0E6JpA';
		var dictLinks = {
			'discord' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/discord.png', 'link' : 'https://www.Discord.gg/scdT6Sn#Don\'t_be_shy._We_are_waiting_for_you!', 'list' : 'LinksSocialMedia'},
			'tellonym' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/tellonym.png', 'link' : 'https://tellonym.me/Shethzor#Ask_me_anything', 'list' : 'LinksSocialMedia'},
			'twitter' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/twitter.png', 'link' : 'https://www.Twitter.com/Shethzor#Do_you_hear_that?_Sounds_like_some_tweets!', 'list' : 'LinksSocialMedia'},
			'instagram' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/instagram.png', 'link' : 'https://www.Instagram.com/Shethzor#Look_at_all_those_pictures_of_mine_:D', 'list' : 'LinksSocialMedia'},
			'e-pal' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/e-pal.png', 'link' : 'https://www.epal.gg/epal/118368#Yes,_I\'m_selling_my_body_lmao', 'list' : 'LinksSocialMedia'},
			'facebook' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/facebook.png', 'link' : 'https://www.facebook.com/shethzor.alfonzo#Feels_kinda_2013', 'list' : 'LinksSocialMedia'},
			'steam' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/steam.png', 'link' : 'https://steamcommunity.com/id/shethzor#Spin_the_valve', 'list' : 'LinksSocialMedia'},
			'team_main_dream_visuals' : {'active' : true, 'name' : 'DreamVisuals', 'icon' : teamList['DreamVisuals']['logo'], 'link' : teamList['DreamVisuals']['website'], 'list' : 'LinksTeamMain'},
			'team_main_retro__boi' : {'active' : true, 'name' : 'Retro__Boi', 'icon' : teamList['Retro__Boi']['logo'], 'link' : teamList['Retro__Boi']['website'], 'list' : 'LinksTeamMain'},
			'youtube_music' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/youtubemusic.png', 'link' : 'https://music.YouTube.com/playlist?list=PLQXedffXBLVweDH3c_iILpeoT1p-YrRIn#This_music_is_so_good._Well_it\'s_mine', 'list' : 'LinksOther'},
			'github' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/platform/github.png', 'link' : 'https://www.GitHub.com/Shethzor#There_is_some_code_in_here._Looks_kinda_boring', 'list' : 'LinksOther'},
			'instant_gaming_affiliate' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/support/instantgaming.png', 'link' : 'https://www.Instant-Gaming.com//?igr=shethzor#Yeah,_support_me_by_buying_the_games_cheaper!', 'list' : 'LinksSupportAffiliate'},
			'tipeeestream_donate' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/support/tipeeestream.png', 'link' : 'https://www.tipeeestream.com/shethzor/donation#Are_you_about_to_donate?_Thanks_a_lot_<3', 'list' : 'LinksSupportDonate'}, 
			'patreon_donate' : {'active' : true, 'name' : 'Shethzor', 'icon' : '../img/logo/support/patreon.png', 'link' : 'https://www.Patreon.com/shethzor#Are_you_about_to_support_me?_Thanks_a_lot_<3', 'list' : 'LinksSupportDonate'}, 
		
			//OFF
			'streamelements_donate' : {'active' : false, 'name' : 'Shethzor', 'icon' : '../img/logo/support/streamelements.png', 'link' : 'https://StreamElements.com/thestring/tip#Are_you_about_to_donate?_Thanks_a_lot_<3', 'list' : 'LinksSupportDonate'}, 
			'soundcloud' : {'active' : false, 'name' : 'DreamVisuals', 'icon' : '../img/logo/platform/soundcloud.png', 'link' : 'https://soundcloud.com/dreamvisual', 'list' : 'LinksSocialMedia'},
		}
	break;
}

var combinationArray = new Array();

document.addEventListener('keydown', loadTheme);

document.getElementById('twitch-channel-link').href = twitchChannelLink;
document.getElementById('youtube-channel-link').href = youtubeChannelLink;
document.getElementById('latest-youtube-video').src = latestYouTubeVideoLink;

var isTeam = ['LinksTeamMain', 'LinksTeamPartner']
for (var page in dictLinks){
	var display = document.getElementById('display-' + dictLinks[page]['list'])
	if (display) {
		if (display.classList.contains('d-none')){
			display.classList.remove('d-none');
			display.classList.add('d-block');
			switch(dictLinks[page]['list']){
				case "LinksTeamMain":
				case "LinksTeamPartner":
					if (dictLinks[page]['active']){
						display = document.getElementById('display-Team');
					}
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
      	document.getElementById(dictLinks[page]['list']).innerHTML += wrapperStart + '<div id="' + page + '-button" class="button-icon-main"><a href="' + dictLinks[page]['link'] + '" ' + target + '><img src="' + dictLinks[page]['icon'] + '" alt="' + page + '"></img></a>' + wrapperEnd + displayName + '</div>';
	}
}

function loadTheme(key){
	
	combinationArray.length = 10;
	for(var i = 0; i < combinationArray.length; i++){
		combinationArray[i] = combinationArray[(i+1)];
	}
	combinationArray[(combinationArray.length - 1)] = key.key;
	
	var check = true;
	for (var i = 0; i < 10; i++){
		switch(getArrayText(combinationArray, i)){
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
		}
	}
}

function getArrayText(combinationArray, length){
	var text = '';
	for (var i = combinationArray.length - length; i < combinationArray.length; i++){
		text += combinationArray[i];
	}
	return text;
}

if (backgroundImageLink){
	document.getElementById('Background').style.backgroundImage = 'url("' + backgroundImageLink + '")';
	document.getElementById('Background').style.filter = 'blur(' + backgroundBlur + 'px)';
}
document.getElementById('Background').style.backgroundColor = backgroundColor;
document.getElementById('own-font').href = fontLink;
document.getElementsByTagName('body')[0].style.fontFamily = fontName;

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
document.getElementById('Copyright').style.fontSize = copyrightSize + 'px';

document.getElementById('favicon').href = favicon;
document.getElementById('title').innerHTML = title;

if (banner){
	if (bannerWidth){
		document.getElementById('TitleImage').style.maxWidth = bannerWidth + 'vw';
	}
	document.getElementById('TitleImage').src = banner;
	bannerEl = document.getElementById('display-TitleImage');
	bannerEl.classList.remove('d-none');
	bannerEl.classList.add('d-block');
}

//Twitch Stream Days
for (var day in streamDays){
	document.getElementById('streaming-' + day).classList = 'streaming-' + streamDays[day];
}

//Twitch Stream Time
const event = new Date('August 19, 1975 ' + streamTime + ':00:00 GMT+00:00');
var time = event.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
if (time.length == 5){
	time += ' O\'CLOCK';
}
document.getElementById('streaming-time').innerHTML = 'AT ' + time;
