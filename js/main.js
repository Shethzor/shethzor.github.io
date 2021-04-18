var isRedirect = false;
for (var redirect in searchKey) {
	redirect = redirect.toLowerCase();

	if (!dictLinks.hasOwnProperty(redirect)){
		if (dictLinks.hasOwnProperty('stream_' + redirect)){
			redirect = 'stream_' + redirect;
		}
	}

	if (dictLinks.hasOwnProperty(redirect) && dictLinks[redirect]['link'] != '' && dictLinks[redirect]['active']) {
		window.location.replace(dictLinks[redirect]['link'])
		isRedirect = true;
	}else if (redirect == 'youtube-latest'){
		window.location.replace('https://www.youtube.com/embed/videoseries?list=' + latestYouTubeVideoListCode);
		isRedirect = true;
	}
}

for (var pageName in dictLinks) {
	var logo = '';
	var link = '';
	var cleanPageName = pageName;

	if (pageName.startsWith('stream_')){
		cleanPageName = pageName.replace('stream_', '');
	}

	switch(cleanPageName){
		case 'discord':
			logo = 'img/logo/platform/discord.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'e-pal':
			logo = 'img/logo/platform/e-pal.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'facebook':
			logo = 'img/logo/platform/facebook.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'gamivo':
			logo = 'img/logo/support/gamivo.png';
			dictLinks[pageName]['list'] = 'LinksSupportAffiliate';
			break;
		case 'github':
			logo = 'img/logo/platform/github.png';
			dictLinks[pageName]['list'] = 'LinksOther';
			break;
		case 'instagram':
			logo = 'img/logo/platform/instagram.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'instant-gaming':
			logo = 'img/logo/support/instant-gaming.png';
			dictLinks[pageName]['list'] = 'LinksSupportAffiliate';
			break;
		case 'onlyfans':
			logo = 'img/logo/support/onlyfans.png';
			dictLinks[pageName]['list'] = 'LinksSupportDonate';
		case 'patreon_donate':
			logo = 'img/logo/support/patreon.png';
			dictLinks[pageName]['list'] = 'LinksSupportDonate';
			break;
		case 'pornhub':
			logo = 'img/logo/platform/pornhub.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			dictLinks[pageName]['matureContent'] = true;
			break;
		case 'reddit':
			logo = 'img/logo/platform/reddit.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'snapchat':
			logo = 'img/logo/platform/snapchat.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'soundcloud':
			logo = 'img/logo/platform/soundcloud.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'spotify':
			logo = 'img/logo/platform/spotify.png';
			dictLinks[pageName]['list'] = 'LinksOther';
			break;
		case 'steam':
			logo = 'img/logo/platform/steam.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'streamelements_donate':
			logo = 'img/logo/support/streamelements.png';
			dictLinks[pageName]['list'] = 'LinksSupportDonate';
			break;
		case 'streamlabs_donate':
			logo = 'img/logo/support/streamlabs.png';
			dictLinks[pageName]['list'] = 'LinksSupportDonate';
			break;
		case 'telegram':
			logo = 'img/logo/platform/telegram.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'tellonym':
			logo = 'img/logo/platform/tellonym.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'tiktok':
			logo = 'img/logo/platform/tiktok.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'tipeeestream_donate':
			logo = 'img/logo/support/tipeeestream.png';
			dictLinks[pageName]['list'] = 'LinksSupportDonate';
			break;
		case 'twitch':
			logo = 'img/logo/platform/twitch.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'twitch_subscribe':
			logo = 'img/logo/support/twitch_subscribe.png';
			dictLinks[pageName]['list'] = 'LinksSupportAffiliate';
			break;
		case 'twitter':
			logo = 'img/logo/platform/twitter.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'youtube':
			logo = 'img/logo/platform/youtube.png';
			dictLinks[pageName]['list'] = 'LinksSocialMedia';
			break;
		case 'youtube_music':
			logo = 'img/logo/platform/youtube_music.png';
			dictLinks[pageName]['list'] = 'LinksOther';
			break;
		default:
			if (pageName.startsWith('team_main_')){
				if (idList[dictLinks[pageName]['name']]) {
					logo = idList[dictLinks[pageName]['name']]['logo'];
					link = idList[dictLinks[pageName]['name']]['link'];
					dictLinks[pageName]['list'] = 'LinksTeamMain';	
				}
			}
			if (pageName.startsWith('team_partner_')){
				if (idList[dictLinks[pageName]['name']]) {
					logo = idList[dictLinks[pageName]['name']]['logo'];
					link = idList[dictLinks[pageName]['name']]['link'];
					dictLinks[pageName]['list'] = 'LinksTeamPartner';
				}
			}
	}
	if (!dictLinks[pageName]['logo']){
		dictLinks[pageName]['logo'] = logo;
	}
	if (!dictLinks[pageName]['link']){
		dictLinks[pageName]['link'] = link;
	}
}
